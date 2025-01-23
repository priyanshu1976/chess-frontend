import { useEffect, useState } from "react";
import { Chess, Square } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function Mychess() {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [color, setcolor] = useState("white");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "init_game",
        })
      );
    };

    ws.onmessage = (event) => {
      const real = JSON.parse(event.data);
      if (real.type === "init_game") {
        setcolor(real.payload.color);
        return;
      }
      makeAMove(real.payload.move);
    };

    return () => {
      ws.close();
    };
  }, []);

  function makeAMove(move: { from: string; to: string; promotion: string }) {
    const gameCopy = game; // Ensure immutability
    try {
      const result = gameCopy.move(move);
      if (result) {
        setFen(result.after);
      }
      socket?.send(
        JSON.stringify({
          type: "move",
          move,
        })
      );
      if (result) setGame(gameCopy);
      return result; // null if the move was illegal
    } catch (error) {
      console.error("Error in makeAMove:", error);
    }
    return null;
  }

  function onDrop(sourceSquare: Square, targetSquare: Square) {
    console.log(sourceSquare, targetSquare);
    console.log(game.get(sourceSquare)?.color);
    console.log(color);
    console.log(game.get(sourceSquare)?.color === color);
    if (game.get(sourceSquare)?.color !== color[0]) return;
    const domove = {
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    };

    const move = makeAMove(domove);
    if (!move) return false;

    // Illegal move
    return true;
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <Chessboard
        position={fen}
        onPieceDrop={onDrop}
        boardOrientation={color}
      />
    </div>
  );
}
