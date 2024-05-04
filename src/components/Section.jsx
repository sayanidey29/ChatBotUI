import React from "react";
import "../styles/section.css";
import Navigation from "./Navigation";
import Content from "./Content";

const Section = () => {
  return (
    <div className="section">
      <div className="nav">
        <Navigation />
      </div>
      <div className="contentfield">
        <Content />
      </div>
    </div>
  );
};

export default Section;
