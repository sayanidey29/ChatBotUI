import React, { useState } from "react";
import "../styles/chathistorydivcard.css";
import unFavImg from "../assets/unfavourite.svg";
import globeImg from "../assets/Globe_icon.svg";
import deleteImg from "../assets/trash.svg";
import favImg from "../assets/favourite.svg";
import ChatBOX from "../pages/ChatBox";

const ChatHistoryDivCard = ({
  chatlist,
  //   setChatlistConversationHistory,
  hidePopUp,
  setHidePopUp,
  conversation,
  handlehistorycardclick,
}) => {
  //   const handleShowChatLog = () => {
  //     if (conversation?.length > 0) {
  //       setHidePopUp(true);
  //     } else {
  //       console.log("handleShowChatLog", chatlist.conversationHistory);
  //     //   setChatlistConversationHistory(chatlist.conversationHistory);
  //     }
  //   };

  return (
    <div
      className="chathistorydivcard"
      onClick={() => {
        handlehistorycardclick(
          chatlist.archiveId,
          chatlist.conversationHistory
        );
      }}
    >
      <div className="chathistoryIcons">
        <div className="chathistoryIcons-img">
          <img src={unFavImg} alt="unFavImg"></img>
          <img src={globeImg} alt="globeImg"></img>
          <img src={deleteImg} alt="deleteImg"></img>
        </div>
      </div>
      <div className="chathistoryChats">
        <div className="chathistoryChats-chat">
          <div className="chathistoryChats-title">
            <div className="chathistoryChats-bigTitle">
              <div>{chatlist.conversationHistory[0].message}</div>
            </div>
            <div className="chathistoryChats-smallTitle">
              <div>{chatlist.conversationHistory[0].message}</div>
            </div>
          </div>
          <div className="chathistoryChats-date">
            <div>{chatlist.chatLogDateTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHistoryDivCard;
