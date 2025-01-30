import { useEffect, useState } from "react";
import { Chess, Square } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useParams } from "react-router-dom";
import Waiting from "./Waiting";

export default function ChessFriends() {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState<string>(game.fen());
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [color, setcolor] = useState("white");
  const [isWaiting, setIsWaiting] = useState(true); // Added state to track waiting status
  const [data, setdata] = useState();
  const user = JSON.parse(localStorage.getItem("user") || "");
  const params = useParams();
  const gameid = params.gameid;

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "create_game",
          uid: user.user.uid,
          gameid: gameid,
          photoURL: user.user.photoURL,
          displayName: user.user.displayName,
        })
      );
    };

    ws.onmessage = (event) => {
      const real = JSON.parse(event.data);
      if (real.type === "init_game") {
        setcolor(real.payload.color);
        setdata(real.payload);
        console.log(data);
        setTimeout(() => setIsWaiting(false), 1500); // Wait 0.5 sec before setting waiting to false
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
    console.log(game);
    try {
      const result = gameCopy.move(move);
      if (result) {
        console.log(result.after);
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
    <div className="flex flex-col justify-center items-center h-screen bg-[#393532]">
      <div className=" flex justify-center items-center w-[70vw] h-[70vh] ">
        {isWaiting ? (
          <div>
            <Waiting
              photoURL={data?.photoURL}
              displayName={data?.displayName}
            />
          </div>
        ) : (
          <Chessboard
            position={fen}
            onPieceDrop={onDrop}
            boardOrientation={color}
          />
        )}
      </div>
    </div>
  );
}
