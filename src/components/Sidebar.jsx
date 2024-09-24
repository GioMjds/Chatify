import "../assets/css/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="top">
          <div>
            <Avatar />
          </div>
          <div className="app-icon">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="center"></div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}
