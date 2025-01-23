import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chess from "./components/ChessBoard";
import Signup from "./Signup";
import Login from "./Login";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chess />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
