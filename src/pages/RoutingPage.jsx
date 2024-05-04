import React from "react";
// import ChatBox from "./ChatBox";
// import Conversation from "./Conversation";
// import FavouriteConversation from "./FavouriteConvdersation";
// import GlobalArchives from "./GlobalArchives";
// import Feedback from "./Feedback";
// import Article from "./Article";
// import DashBoard from "./DashBoard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
// import { Route, Routes } from "react-router-dom";
import "../styles/routingpage.css";

const RoutingPage = () => {
  return (
    <div className="routingpage">
      <Header />
      {/* <Routes>
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
  </Routes>*/}
      <Section />
      <Footer />
    </div>
  );
};

export default RoutingPage;
