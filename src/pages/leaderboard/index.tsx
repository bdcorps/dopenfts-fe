import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
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

  return (
    <Table variant="simple">
      <TableCaption>Leaderboard</TableCaption>
      <Thead>
        <Tr>
          <Th>NFT</Th>
          <Th isNumeric>Likes</Th>
        </Tr>
      </Thead>
      <Tbody>
        {artworks.map((artwork) => (
          <Tr>
            <Td>{artwork.name}</Td>
            <Td isNumeric>{artwork.likes}</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>NFT</Th>
          <Th isNumeric>Likes</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default Leaderboard;
