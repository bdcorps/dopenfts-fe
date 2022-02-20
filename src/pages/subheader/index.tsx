import { FunctionComponent, useState } from "react";
import "./../../index.css";
import Header from "../header/index";
import { nft } from "../../types";

declare global {
  interface Window {
    ethereum: any;
  }
}

interface subHeaderProps {
  link: string;
}

const SubHeader: FunctionComponent<subHeaderProps> = (props) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [nfts, setNFTs] = useState<nft[]>([]);

  const fetchNFTs = () => {
    fetch(
      "https://testnets-api.opensea.io/api/v1/assets?owner=0xE2a6C9dAAFD438A04550E29087Bd839292ff82E5&order_direction=desc&offset=0&limit=20",
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((response) => {
        const { assets } = response;

        const nfts = assets.map((asset: any) => {
          const nft: nft = {
            id: asset.asset_contract.address,
            name: asset.asset_contract.description,
            image: asset.image_url,
          };

          console.log(nft);
          return nft;
        });

        setNFTs(nfts);
      })
      .catch((err) => console.error(err));
  };

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Download the Metamask extension from the Chrome App Store");
        return;
      }

      /*
       * Fancy method to request access to account.
       */
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      /*
       * Boom! This should print out public address once we authorize Metamask.
       */
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);

      fetchNFTs();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(nfts);
  return (
    <div className="bg-primary">
      <div>
        {nfts.map((nft, i) => (
          <img width={40} key={`nft_${i}`} src={nft.image} />
        ))}
      </div>

      <div className="grid-asym-3 font-bold just-cont-end font-color-secondary py-3">
        <div className="grid-col-span-2 text-end fs-2 align-item-bot line-height-a">
          VOTE
        </div>
        <div className="fs-5 d-flex align-item-bot">
          <button onClick={connectWalletAction}>{">>>Connect Wallet"}</button>
        </div>
        <div className="text-end fs-3 d-flex align-item-top line-height-a">
          ON
        </div>
        <div className="grid-row-span-2 vert-text width-a fs-1 line-height-a">
          NFTS
        </div>
        <div className="bg-grid"></div>
        <div className="fs-2 col-start-3 align-item-top line-height-a">
          GET RATED
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
