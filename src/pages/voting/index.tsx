import { FunctionComponent } from "react";

interface VotingProps {}

const Voting: FunctionComponent<VotingProps> = () => {
  const artworks = [
    { name: "nft1", image: "https://google.com", likes: 2 },
    { name: "nft2", image: "https://google.com", likes: 21 },
  ];

  return (
    <div>
      <p>NFT 1 vs NFT 2</p>
      <button>Like</button>
    </div>
  );
};

export default Voting;
