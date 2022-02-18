import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Voting from "./pages/voting";
import Leaderboard from "./pages/leaderboard";
import Versus from "./pages/versus";
import NFT1 from "./pages/versus/images/placeholderApe1.png";
import NFT2 from "./pages/versus/images/placeholderApe2.png";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Voting />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route
          path="/versus"
          element={<Versus imageOneLink={NFT1} imageTwoLink={NFT2} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
