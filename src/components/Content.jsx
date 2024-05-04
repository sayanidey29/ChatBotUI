import React, { useState } from "react";
import "../styles/content.css";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";
import ChatBox from "../pages/ChatBox";
import Conversation from "../pages/Conversation";
import FavouriteConversation from "../pages/FavouriteConvdersation";
import GlobalArchives from "../pages/GlobalArchives";
import Feedback from "../pages/Feedback";
import Article from "../pages/Article";
import DashBoard from "../pages/DashBoard";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  const [showHistoryConatiner, setShowHistoryConatainer] = useState(true);
  const handleHide = () => {
    setShowHistoryConatainer((prev) => !prev);
  };
  return (
    <div className="content">
      <div className="chatbox-container">
        Hi
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

      {showHistoryConatiner ? (
        <div className="history-container">
          {/*<button onClick={handleHide}>Hide</button>*/}
          <img src={leftArrow} alt="leftarrow" onClick={handleHide} />
        </div>
      ) : (
        <div className="show-history-container">
          {/*<button onClick={handleHide}>Show</button>*/}
          <img src={rightArrow} alt="rightarrow" onClick={handleHide} />
        </div>
      )}
    </div>
  );
};

export default Content;
