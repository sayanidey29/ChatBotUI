import React, { useState, useRef, useEffect } from "react";
import "../styles/chatbox.css";
import axios from "axios";
import sendButton from "../assets/sendbtn.svg";
import ChatMsg from "../components/ChatMsg";
import LoadingMsg from "../components/LoadingMsg";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";
import { useLocation } from "react-router-dom";

const ChatBox = ({ props }) => {
  // const location = useLocation();
  // console.log("location", location?.state);
  // const { clearAll, setClearAll } = location?.state;

  const {
    userInput,
    setUserInput,
    conversation,
    setConversation,
    loading,
    setLoading,
    // msgScrollRef,
    showHistoryConatiner,
    setShowHistoryConatainer,
    // clearAll,
  } = props;
  console.log("aps", userInput, conversation);

  // const [userInput, setUserInput] = useState("");
  // // const [isSend, setIsSend] = useState(false);
  // const [conversation, setConversation] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [showHistoryConatiner, setShowHistoryConatainer] = useState(true);

  const msgScrollRef = useRef(null);

  const handleHide = () => {
    setShowHistoryConatainer((prev) => !prev);
  };
  // if (clearAll.current) {
  //   setUserInput("");
  //   setConversation([]);
  //   setLoading(false);
  //   msgScrollRef.current = null;
  //   clearAll.current = false;
  // }

  useEffect(() => {
    console.log("Sayu", msgScrollRef.current);
    scrollToButton();
  }, [conversation, loading]);

  const scrollToButton = () => {
    msgScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleEnterPress = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      handleSend();
    }
  };
  const handleSend = async () => {
    const log = {
      user: "human",
      message: userInput,
    };

    console.log(log);
    setConversation((prev) => {
      console.log(prev);
      return [...prev, log];
    });
    console.log("after", conversation);
    setUserInput("");
    getanswer();
    // setIsSend(true);
    // if (isSend) {
    //   setUserInput("");
    // }
  };
  const getanswer = async () => {
    console.log(conversation);
    setLoading(true);
    await axios
      .post("http://localhost:3030/getanswer", {
        body: { conversation },
      })
      .then((res) => {
        console.log(res, conversation);
        const log = {
          user: "bot",
          message: res.data,
        };
        setConversation((prev) => [...prev, log]);
        console.log(conversation);
        setLoading(false);
      });
  };

  const handleInputChange = (e) => {
    if (!userInput) {
      setUserInput(e.target.value.toUpperCase());
    } else {
      setUserInput(e.target.value);
    }
  };
  return (
    <div className="contentBox">
      <div className="chatbox">
        {conversation.length > 0 ? (
          <div className="chatbox-content">
            <div>
              {conversation.map((msg) => (
                <ChatMsg msg={msg} />
              ))}
              {loading ? <LoadingMsg /> : null}
              <div ref={msgScrollRef} className="scroll-down"></div>
            </div>
          </div>
        ) : (
          <div className="chatbox-content-hide"></div>
        )}
        <div className="chatbox-input">
          <div className="chatbox-input-box-div">
            <input
              type="text"
              placeholder="Ask a question to answer agent assist..."
              className="chatbox-input-box"
              onChange={handleInputChange}
              onKeyPress={handleEnterPress}
              value={userInput}
            ></input>
            <img src={sendButton} alt="send-button" onClick={handleSend}></img>
          </div>
        </div>
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

export default ChatBox;
