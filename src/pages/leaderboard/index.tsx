import { FunctionComponent } from "react";

interface LeaderboardProps {}

const Leaderboard: FunctionComponent<LeaderboardProps> = () => {
  const artworks = [
    { name: "nft1", image: "https://google.com", likes: 2 },
    { name: "nft5", image: "https://google.com", likes: 71 },
    { name: "nft2", image: "https://google.com", likes: 21 },
    { name: "nft4", image: "https://google.com", likes: 61 },
    { name: "nft5", image: "https://google.com", likes: 71 },
    { name: "nft3", image: "https://google.com", likes: 41 },
  ];

  return <div>table here</div>;
};

export default Leaderboard;
