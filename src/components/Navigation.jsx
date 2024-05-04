import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="nav-Link">
        Home
      </Link>
      <Link to="/chatbox" className="nav-Link">
        Chat
      </Link>
      <Link to="/conversation" className="nav-Link">
        Conversation
      </Link>
      <Link to="/favouriteConversation" className="nav-Link">
        Favourite Conversation
      </Link>
    </div>
  );
};

export default Navigation;
