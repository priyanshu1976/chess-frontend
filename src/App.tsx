import { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function PlayRandomMoveEngine() {
  const [game, setGame] = useState(new Chess());
  const [fen, setfen] = useState(game.fen());

  function makeAMove(move: { from: string; to: string; promotion: string }) {
    const gameCopy = game; // Ensure immutability
    try {
      const result = gameCopy.move(move);
      setfen(result.after);
      console.log(result);
      if (result) setGame(gameCopy);
      return result; // null if the move was illegal
    } catch (error) {
      console.error("Error in makeAMove:", error);
    }
    return null;
  }

  function onDrop(sourceSquare: string, targetSquare: string) {
    console.log(sourceSquare, targetSquare);
    const domove = {
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    };

    const move = makeAMove(domove);
    if (!move) return false; // Illegal move
    return true;
  }

  console.log(game.fen());
  console.log(typeof game.fen());

  return <Chessboard position={fen} onPieceDrop={onDrop} />;
}
