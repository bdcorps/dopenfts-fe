import { FunctionComponent } from "react";
import styled from "styled-components";

interface VotingProps {}

const Voting: FunctionComponent<VotingProps> = () => {
  const artworks = [
    { name: "nft1", image: "https://google.com", likes: 2 },
    { name: "nft2", image: "https://google.com", likes: 21 },
  ];

  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;

  return (
    <div>
      <p>NFT 1 vs NFT 2</p>
      <Button>Like</Button>
    </div>
  );
};

export default Voting;
