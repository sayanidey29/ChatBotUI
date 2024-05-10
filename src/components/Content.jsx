import React, { useState } from "react";
import "../styles/content.css";
import ChatBox from "../pages/ChatBox";
import Conversation from "../pages/Conversation";
import FavouriteConversation from "../pages/FavouriteConvdersation";
import GlobalArchives from "../pages/GlobalArchives";
import Feedback from "../pages/Feedback";
import Article from "../pages/Article";
import DashBoard from "../pages/DashBoard";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <div className="content">
      <div className="chatbox-container">
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/chatbox" element={<ChatBox />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route
            path="/favouriteConversation"
            element={<FavouriteConversation />}
          />
          <Route path="/globalArchives" element={<GlobalArchives />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </div>
    </div>
  );
};

export default Content;
