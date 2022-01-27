import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Voting from "./pages/voting";
import Leaderboard from "./pages/leaderboard";
import Header from "./pages/header";

export const App = () => {
  return (
    //Leaving the routes to the specific components for now - will change
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Voting />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
