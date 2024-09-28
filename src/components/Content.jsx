import { useCallback, useContext, useEffect, useState } from "react";
import "../assets/css/content.css";
import { Context } from "../context/Context";
import { SeedMessages } from "../data/Messages";
import Avatar from "./Avatar";
import ImageSlider from "./ImageSlider";
import InfoContainer from "./InfoContainer";
import Message from "./Message";

const Content = ({ setChat }) => {
  const { currentChat } = useContext(Context);
  const friend = currentChat?.friend;
  const [onMenu, setOnMenu] = useState(false);
  const [onViewer, setOnViewer] = useState(false);
  const [messages, setMessages] = useState(SeedMessages);
  const [msgImages, setMsgImages] = useState([]);

  const openImageViewer = (images) => {
    setMsgImages(images);
    setOnViewer(true);
  }

  const closeImageViewer = useCallback(() => {
    setMsgImages([]);
    setOnViewer(false);
  })

  useEffect(() => {
    const keyDown = (event) => {
      if (event.key === "Escape" && onViewer) {
        closeImageViewer();
      }
    };
    document.addEventListener('keydown', keyDown);
    return () => {
      document.removeEventListener('keydown', keyDown);
    };
  }, [onViewer, closeImageViewer]);

  return (
    <div className={currentChat ? "content active" : "content"}>
      {currentChat ? (<div className="wrapper">
        <div className="top">
          <Avatar src={friend?.profile ? friend.profile : ""} username={friend?.username} height={45} width={45} />
          <div className="app-icon menu-icon" onClick={() => setOnMenu(prev => !prev)}>
            <i className="fa-solid fa-ellipsis"></i>
            {onMenu && (<div className="menu-wrapper">
              <span className="menu-item" onClick={() => setChat(false)}>Close Chat</span>
              <span className="menu-item">Delete Messages</span>
              <span className="menu-item">Delete Chat</span>
            </div>)}
          </div>
        </div>
        <div className="center">
          {msgImages.length > 0 && onViewer ? (
            <div className="image-viewer-wrapper">
              <ImageSlider images={msgImages} onClose={closeImageViewer} />
            </div>
          ) : (
            <div className="messages-wrapper">
              {messages.map((msg) => (
                <Message
                  key={msg?.id}
                  msg={msg}
                  owner={msg?.owner}
                  openImageViewer={openImageViewer}
                />
              ))}
            </div>)}
        </div>
        <div className="bottom">
          <div className="app-icon">
            <i className="fa-solid fa-image"></i>
          </div>
          <textarea placeholder="Write a message" />
          <div className="app-icon">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </div>
      ) : (
      <InfoContainer/>
      )}
    </div>
  )
}

export default Content