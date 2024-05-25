import React, { useState, useRef, useEffect } from "react";
import "../styles/section.css";
import Navigation from "./Navigation";
import Content from "./Content";
import warning from "../assets/warning.svg";
import { useNavigate } from "react-router-dom";
import { v4 as uuid4 } from "uuid";

const Section = () => {
  // const [onlyRoute, setOnlyRoute] = useState(false);
  // const [isSend, setIsSend] = useState(false);
  // const msgScrollRef = useRef(null);
  // const clearAll = useRef(false);
  // console.log("new Date()", new Date());

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [hidePopUp, setHidePopUp] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showHistoryConatiner, setShowHistoryConatainer] = useState(true);
  const [navPath, setNavPath] = useState("");
  const [chatLog, setChatLog] = useState([]);
  // const [chatlistConversationHistory, setChatlistConversationHistory] =
  //   useState([]);
  const [ishistorychatselected, sethistorychatselected] = useState(false);
  const [archiveID, setArchiveId] = useState("");
  const [archiveLog, setArchiveLog] = useState([]);
  const [archiveConversationLength, setArchiveConversationLength] = useState(0);
  const [isSave, setIsSave] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isChatChanged, setIsChatChanged] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    // setCurrentDateTime(new Date());
    return () => clearInterval(interval); // Cleanup function to clear interval}
  }, []);
  const handlehistorycardclick = (id, historychat) => {
    console.log("ArchiveId", id, historychat);

    setArchiveLog(historychat);
    sethistorychatselected(true);
    setArchiveConversationLength(historychat.length);
    setIsCancel(false);
    setIsSave(false);

    if (conversation.length > 0) {
      // if (ishistorychatselected) {
      //   if (archiveConversationLength > 0) {
      //     if (conversation.length !== archiveConversationLength) {
      //       setIsChatChanged(true);
      //     }
      //   }
      // }
      // if (isChatChanged && ishistorychatselected) {
      //   setHidePopUp(true);
      //   isChatChanged(false);
      // } else if (ishistorychatselected !== true) {
      //   setHidePopUp(true);
      // } else {
      //   handleclearAll();
      // }
      if (isChatChanged) {
        setHidePopUp(true);
      } else if (ishistorychatselected) {
        setConversation(historychat);
        setArchiveId(id);
      }
    } else {
      console.log("aps", historychat);
      setConversation(historychat);
      setArchiveId(id);

      // setArchiveId(id);
      // setArchiveLog(historychat);
      // sethistorychatselected(true);
      // setArchiveConversationLength(historychat.length);
    }
  };

  const handleDateFormateChange = (dateTime) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      // second: "2-digit",
      hour12: true, // 12-hour format
    };
    const date = dateTime.toLocaleString("en-US", options);
    console.log("op", date);
    return date;
  };
  // const handleDateTime = () => {
  //   setCurrentDateTime(new Date());
  //   handleDateFormateChange(currentDateTime);
  // };

  // handleDateFormateChange(currentDateTime);

  const handleNavClick = (path) => {
    setNavPath(path);
    if (conversation.length > 0) {
      if (isChatChanged) {
        console.log("i am here", ishistorychatselected);
        setHidePopUp(true);
        if (ishistorychatselected === true && (isCancel || isSave)) {
          sethistorychatselected(false);
          setIsCancel(false);
          setIsSave(false);
          console.log("i am here2");
        }
      } else {
        navigate(path);
        handleclearAll();
        setIsCancel(false);
        setIsSave(false);
      }
    } else {
      navigate(path);
    }
  };
  const handleclearAll = () => {
    setUserInput("");
    setConversation([]);
    setLoading(false);
    setHidePopUp(false);
  };
  const handleSave = () => {
    console.log("archiveID", archiveID);
    const dataGet = localStorage.getItem("chatLog");
    let data = JSON.parse(dataGet) ? JSON.parse(dataGet) : [];
    if (ishistorychatselected) {
      const chatLog = {
        archiveId: archiveID,
        userId: "1",
        userName: "Sayani Dey",
        isFavourite: 0,
        globalStatus: 0,
        title: conversation[0]?.message,
        conversationHistory: conversation,
        chatLogDateTime: handleDateFormateChange(currentDateTime),
      };
      const newData = data.map((datachat) => {
        if (datachat.archiveId == archiveID) {
          console.log(
            "datachat.archiveId and archiveID",
            datachat.archiveId,
            archiveID
          );
          return chatLog;
        } else {
          return datachat;
        }
      });
      // data.push(chatLog); //enter in last
      // data.unshift(chatLog); //enter in first
      localStorage.setItem("chatLog", JSON.stringify(newData));
      console.log("save", conversation, data, chatLog);
    } else {
      const chatLog = {
        archiveId: uuid4(),
        userId: "1",
        userName: "Sayani Dey",
        isFavourite: 0,
        globalStatus: 0,
        title: conversation[0]?.message,
        conversationHistory: conversation,
        chatLogDateTime: handleDateFormateChange(currentDateTime),
      };

      // data.push(chatLog); //enter in last
      data.unshift(chatLog); //enter in first

      localStorage.setItem("chatLog", JSON.stringify(data));
      console.log("save", conversation, data, chatLog);
    }
    setIsChatChanged(false);
  };

  const handleCancel = () => {
    handleclearAll();
    // setOnlyRoute(true);
    // setHidePopUp(false);
    console.log("cancel");
    if (ishistorychatselected) {
      setConversation(archiveLog);
      setIsCancel(true);
    }
    if (navPath.length > 0) {
      handleclearAll();
      navigate(navPath);
    }
    setIsChatChanged(false);
  };
  const handleSaveArchive = () => {
    // setOnlyRoute(false);
    // setHidePopUp(false);

    console.log("save", conversation);
    handleSave();
    handleclearAll();
    if (ishistorychatselected) {
      setConversation(archiveLog);
      setIsSave(true);
    }
    if (navPath.length > 0) {
      handleclearAll();
      navigate(navPath);
    }
  };
  useEffect(() => {
    const dataGet = localStorage.getItem("chatLog");
    let datachatlog = JSON.parse(dataGet) ? JSON.parse(dataGet) : [];
    console.log("daat", showHistoryConatiner, datachatlog);

    if (datachatlog.length > 0) {
      setChatLog(datachatlog);
    }
  }, [hidePopUp, showHistoryConatiner]);

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
            chatLog,
            setChatLog,
            // chatlistConversationHistory,
            // setChatlistConversationHistory,
            handlehistorycardclick,
            setIsChatChanged,
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
                  if (ishistorychatselected === true) {
                    // setConversation(archiveLog);
                    sethistorychatselected(true);
                  }
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
                    onClick={handleSaveArchive}
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
