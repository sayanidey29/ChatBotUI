import React from "react";
import bot from "../assets/bot.svg";
import user from "../assets/user2.svg";
import "../styles/chatmsg.css";

const ChatMsg = ({ msg }) => {
  console.log(msg);
  return (
    <div className="chatmsg">
      {msg.user === "human" ? (
        <div className="chatmsg-img-human">
          <img src={user} alt="userimg" />
        </div>
      ) : (
        <div className="chatmsg-img-bot">
          <img src={bot} alt="botimg"></img>
        </div>
      )}

      {msg.user === "human" ? (
        <div className="chatmsg-text-human">{msg.message}</div>
      ) : (
        <div className="chatmsg-text-bot">{msg.message}</div>
      )}
    </div>
  );
};

export default ChatMsg;
