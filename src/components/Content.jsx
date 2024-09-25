import { useState } from "react";
import "../assets/css/content.css";
import Avatar from "./Avatar";
import Message from "./Message";

export default function Content() {
const [onMenu, setOnMenu] = useState(false);

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
          <div className="image-viewer-wrapper">Images</div>
          <div className="messages-wrapper">
            {[...Array(50)].map((msg, index) => (
                <Message key={index} />
            ))}
          </div>
        </div>
        <div className="bottom">
          <div className="app-icon">
            <i className="fa-solid fa-image"></i>
          </div>
          <textarea placeholder="Write a message"/>
          <div className="app-icon">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
