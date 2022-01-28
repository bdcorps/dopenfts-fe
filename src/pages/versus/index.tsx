import { FunctionComponent } from "react";
import "./../../index.css";
import Header from "./../header/index";

interface versusProps {}

const Versus: FunctionComponent<versusProps> = () => {
  return (
    <div className="bg-primary">
      <Header></Header>
      <div className="grid-asym-3 font-bold just-cont-end">
        <div className="grid-col-span-2 text-end fs-2 align-item-bot line-height-a">
          VOTE
        </div>
        <div className="fs-5 d-flex align-item-bot">{">>>Connect Wallet"}</div>
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

export default Versus;
