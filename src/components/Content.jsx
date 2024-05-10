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

const Content = ({ ...props }) => {
  console.log("props={props}", props);
  return (
    <div className="content">
      <div className="chatbox-container">
        <Routes>
          {/*<Route path="/" element={<DashBoard props={props} />} />*/}
          <Route path="/" element={<ChatBox props={props} />} />
          <Route
            path="/conversation"
            element={<Conversation props={props} />}
          />
          <Route
            path="/favouriteConversation"
            element={<FavouriteConversation props={props} />}
          />
          <Route
            path="/globalArchives"
            element={<GlobalArchives props={props} />}
          />
          <Route path="/feedback" element={<Feedback props={props} />} />
          <Route path="/article" element={<Article props={props} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Content;
