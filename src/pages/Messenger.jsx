import "../assets/css/messenger.css";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

export default function Messenger() {
  return (
    <div className="messenger">
      <Sidebar />
      <Content />
    </div>
  )
}
