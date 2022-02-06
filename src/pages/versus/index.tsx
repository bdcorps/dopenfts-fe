import { FunctionComponent, useState, useEffect } from "react";
import "./../../index.css";
import Header from "./../header";
import SubHeader from "./../subheader";
import "animate.css";

interface versusProps {
  imageOneLink: string;
  imageTwoLink: string;
}

const Versus: FunctionComponent<versusProps> = (props) => {
  const [loadAniLeft, setloadAniLeft] = useState(true);
  const [shakeLeft, setShakeLeft] = useState(false);
  const [loadAniRight, setloadAniRight] = useState(true);
  const [shakeRight, setShakeRight] = useState(false);

  const animationEnded = () => {
    setloadAniLeft(false);
    setShakeLeft(false);
    setloadAniRight(false);
    setShakeRight(false);
  };

  const mouseClickedLeft = () => {
    setShakeLeft(true);
  };

  const mouseClickedRight = () => {
    setShakeRight(true);
  };

  return (
    <div className="bg-primary">
      <Header />
      <SubHeader link="" />
      <div className="d-flex bg-grid partial-seperator-left my-5"></div>
      <div className="d-flex just-cont-center py-2">
        <div className="grid-sym-5">
          <div className="versus-image-container-1">
            <img
              src={props.imageOneLink}
              className={`versus-image animate__animated ${
                loadAniLeft ? "animate__slideInLeft " : ""
              } ${shakeLeft ? "animate__wobble" : ""}`}
              onAnimationEnd={animationEnded}
              onClick={mouseClickedLeft}
            ></img>
          </div>
          <div className="versus-text fs-1 font-color-secondary">VS!</div>
          <div className="versus-image-container-2">
            <img
              src={props.imageTwoLink}
              className={`versus-image animate__animated ${
                loadAniRight ? "animate__slideInRight " : ""
              } ${shakeRight ? "animate__wobble" : ""}`}
              onAnimationEnd={animationEnded}
              onClick={mouseClickedRight}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Versus;
