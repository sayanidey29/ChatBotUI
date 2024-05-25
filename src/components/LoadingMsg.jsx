import React from "react";
import bot from "../assets/bot.svg";
import user from "../assets/user2.svg";
import "../styles/chatmsg.css";

const LoadingMsg = () => {
  return (
    <div className="chatmsg">
      <div className="chatmsg-img-bot">
        <img src={bot} alt="botimg"></img>
      </div>

      <div className="chatmsg-text-bot">Loading...</div>
    </div>
  );
};

export default LoadingMsg;
