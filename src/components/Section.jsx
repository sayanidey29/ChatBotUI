import React, { useState, useRef } from "react";
import "../styles/section.css";
import Navigation from "./Navigation";
import Content from "./Content";
import warning from "../assets/warning.svg";

const Section = () => {
  // const [onlyRoute, setOnlyRoute] = useState(false);
  // const [isSend, setIsSend] = useState(false);
  // const msgScrollRef = useRef(null);
  // const clearAll = useRef(false);

  const [hidePopUp, setHidePopUp] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showHistoryConatiner, setShowHistoryConatainer] = useState(true);

  const handleNavClick = (path) => {
    if (conversation.length > 0) {
      setHidePopUp(true);
    }
    console.log(path);
  };
  const handleclearAll = () => {
    setUserInput("");
    setConversation([]);
    setLoading(false);
    setHidePopUp(false);
  };

  const handleCancel = () => {
    handleclearAll();
    // setOnlyRoute(true);
    // setHidePopUp(false);
    console.log("cancel");
  };
  const handleSave = () => {
    // setOnlyRoute(false);
    // setHidePopUp(false);
    console.log("save");
  };
  return (
    <div className="section">
      <div className="nav">
        <Navigation
          {...{
            // setOnlyRoute,
            // onlyRoute,
            hidePopUp,
            setHidePopUp,
            // clearAll,
            handleNavClick,
          }}
        />
      </div>
      <div className="contentfield">
        <Content
          {...{
            userInput,
            setUserInput,
            conversation,
            setConversation,
            loading,
            setLoading,
            // msgScrollRef,
            showHistoryConatiner,
            setShowHistoryConatainer,
            // setOnlyRoute,
            // onlyRoute,
            hidePopUp,
            setHidePopUp,
            // clearAll,
          }}
        />
      </div>
      {hidePopUp ? (
        <div className="archivePopUp">
          <div className="archivePopUpdiv">
            <div className="closebuttondiv">
              <div
                className="closebutton"
                onClick={() => {
                  setHidePopUp(false);
                }}
              >
                X
              </div>
            </div>
            <div className="archivePopUpContent">
              <div className="archivePopUpContainer">
                <div className="archivePopUp-text">
                  <div className="archivePopUp-text-1">
                    <img src={warning} alt="warning-img" />
                    <span>Archive Conversation</span>
                  </div>
                  <div className="archivePopUp-text-2">
                    Are you sure you want to archive this conversation?
                  </div>
                  <div className="archivePopUp-text-3">
                    Note: Archive Conversation can be restored from the
                    conversations.
                  </div>
                </div>
                <div className="archivePopUp-button">
                  <button
                    className="archivePopUp-button-cancel"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button className="archivePopUp-button-request">
                    Request as Global Archive
                  </button>
                  <button
                    className="archivePopUp-button-archive"
                    onClick={handleSave}
                  >
                    Yes, Archive
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Section;
