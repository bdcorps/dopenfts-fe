import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Voting from "./pages/voting";
import Leaderboard from "./pages/leaderboard";

//Test Comment

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Voting />} />
        <Route path="leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
