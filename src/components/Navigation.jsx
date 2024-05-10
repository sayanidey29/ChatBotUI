import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = ({
  // setOnlyRoute,
  // onlyRoute,
  hidePopUp,
  setHidePopUp,
  // clearAll,
  handleNavClick,
}) => {
  // const handleclearAll = () => {
  //   if (hidePopUp === false) {
  //     console.log("hidePopUp");
  //     setHidePopUp(true);
  //   }
  //   if (onlyRoute) {
  //     console.log("onlyRoute");
  //     clearAll.current = true;
  //   }
  // };

  return (
    <div className="navigation">
      {/*<div className="nav-Link"><NavLink to="/">Home</NavLink></div>*/}
      <div
        className="nav-Link"
        onClick={() => {
          handleNavClick("/");
        }}
      >
        {/*<NavLink
          to="/chatbox"
          //state={{ clearAll: clearAll }}
          onClick={handleclearAll}
        >
          Chat
        </NavLink>*/}
        Chat
      </div>
      <div
        className="nav-Link"
        onClick={() => {
          handleNavClick("/conversation");
        }}
      >
        {/* <NavLink to="/conversation">Conversation</NavLink>*/}
        Conversation
      </div>
      <div
        className="nav-Link"
        onClick={() => {
          handleNavClick("/favouriteConversation");
        }}
      >
        {/*<NavLink to="/favouriteConversation">Favourite Conversation</NavLink>*/}
        Favourite Conversation
      </div>
    </div>
  );
};

export default Navigation;
