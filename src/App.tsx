import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chess from "./components/ChessBoard";
import Landing from "./components/Landing";
import ChessRegistrationForm from "./components/Form";
import Page from "./components/Page";

function App() {
  const [user, setuser] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/play" element={<Chess />} />
          <Route path="/" element={<Landing setuser={setuser} />} />
          <Route path="/profile" element={<Page user={user} />} />
          <Route path="/form" element={<ChessRegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
