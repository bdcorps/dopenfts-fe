import React, { FunctionComponent } from "react";
import "./../../index.css";
import logo_primary from "./images/logo-primary.jpg";
import logo_secondary from "./images/logo-secondary.jpg";

interface headerProps {}

const Header: FunctionComponent<headerProps> = () => {
  return (
    <div className="d-flex bg-primary just-cont-sb py-6">
      <div className="logo-container">
        <img src={logo_primary} className="logo-image-primary ps-6"></img>
      </div>
      <div className="logo-container">
        <img src={logo_secondary} className="logo-image-secondary pe-6"></img>
      </div>
    </div>
  );
};

export default Header;
