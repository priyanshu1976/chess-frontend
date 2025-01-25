import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chess from "./components/ChessBoard";
import Landing from "./components/Landing";
import ChessRegistrationForm from "./components/Form";
import Page from "./components/Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/play" element={<Chess />} />
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Page />} />
          <Route path="/form" element={<ChessRegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
