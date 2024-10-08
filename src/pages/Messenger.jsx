import { useState } from "react";
import "../assets/css/messenger.css";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Messenger = () => {
  const [chat, setChat] = useState(false);
  return (
    <div className="messenger">
      <Sidebar setChat={setChat} />
      <Content chat={chat} setChat={setChat} />
    </div>
  )
}

export default Messenger