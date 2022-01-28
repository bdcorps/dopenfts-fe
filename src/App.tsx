import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Voting from "./pages/voting";
import Leaderboard from "./pages/leaderboard";
import Versus from "./pages/versus";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Voting />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/versus" element={<Versus link="/versus" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
