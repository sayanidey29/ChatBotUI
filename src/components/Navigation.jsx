import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-Link">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="nav-Link">
        <NavLink to="/chatbox">Chat</NavLink>
      </div>
      <div className="nav-Link">
        <NavLink to="/conversation">Conversation</NavLink>
      </div>
      <div className="nav-Link">
        <NavLink to="/favouriteConversation">Favourite Conversation</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
