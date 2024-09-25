import { useState } from "react";
import "../assets/css/content.css";
import { SeedMessages } from "../data/Messages";
import Avatar from "./Avatar";
import Message from "./Message";
import ImageSlider from "./ImageSlider";

export default function Content() {
  const [onMenu, setOnMenu] = useState(false);
  const [onViewer, setOnViewer] = useState(false);
  const [messages, setMessages] = useState(SeedMessages);
  const [msgImages, setMsgImages] = useState([]);

  const openImageViewer = (images) => {
    setMsgImages(images);
    setOnViewer(true);
  }

  const closeImageViewer = () => {
    setMsgImages([]);
    setOnViewer(false);
  }

  return (
    <div className="content">
      <div className="wrapper">
        <div className="top">
          <Avatar username={"Mimic1"} height={45} width={45} />
          <div className="app-icon menu-icon" onClick={() => setOnMenu(prev => !prev)}>
            <i className="fa-solid fa-ellipsis"></i>
            {onMenu && (<div className="menu-wrapper">
              <span className="menu-item">Close Chat</span>
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
    </div>
  )
}
