import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chess from "./components/ChessBoard";
import Landing from "./components/Landing";
import ChessRegistrationForm from "./components/Form";
import Page from "./components/Page";
import PrivateGames from "./components/PrivateGames";
import ChessFriends from "./components/ChessFriends";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/play" element={<Chess />} />
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Page />} />
          <Route path="/private" element={<PrivateGames />} />
          <Route path="/private/play/:gameid" element={<ChessFriends />} />
          <Route path="/form" element={<ChessRegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
