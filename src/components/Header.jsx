import React from "react";
import "../styles/header.css";
import appLogo from "../assets/sce.svg";
import headingLogo from "../assets/SCE-Agent-Logo.svg";
import lineLogo from "../assets/Line.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={appLogo} alt="appLogo"></img>
      </div>
      <div className="header-left">
        <img src={lineLogo} alt="headingLogo"></img>
        <img src={headingLogo} alt="headingLogo" height="30px"></img>
      </div>
      <div className="header-right">
        <div className="avatar">
          <div className="avatar-logo">SD</div>
          <div className="avatar-name-role">
            <span className="avatar-name">Sayani Dey</span>
            <span className="avatar-role">Lead</span>
          </div>
        </div>
        <div className="header-right-logout">
          <img src={lineLogo} alt="headingLogo"></img>
          <span>LOGOUT</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
