import { FunctionComponent } from "react";
import "./../../index.css";
import Header from "./../header";
import SubHeader from "./../subheader";

interface versusProps {
  imageOneLink: string;
  imageTwoLink: string;
}

const Versus: FunctionComponent<versusProps> = (props) => {
  return (
    <div className="bg-primary">
      <Header />
      <SubHeader link="" />
      <div className="d-flex bg-grid partial-seperator-left my-5"></div>
      <div className="d-flex just-cont-center py-2">
        <div className="grid-sym-5">
          <div className="versus-image-container-1">
            <img src={props.imageOneLink} className="versus-image"></img>
          </div>
          <div className="versus-text fs-1 font-color-secondary">VS!</div>
          <div className="versus-image-container-2">
            <img src={props.imageTwoLink} className="versus-image"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Versus;
