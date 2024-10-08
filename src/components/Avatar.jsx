import NoAvatar from "../assets/images/noavatar.png";

const Avatar = ({ src, username, height, width }) => {
  return (
    <div className='d-flex-row'>
      <img src={src ? src : NoAvatar} alt="" style={{
        height: `$${height}px`,
        width: `${width}px`,
        objectFit: `cover`,
        borderRadius: `0.5rem`,
      }} />
      {username && (
        <span style={{fontSize: "1rem"}} className="usern">
        {username ? username : "Unknown"}
      </span>
    )}
    </div>
  )
}

export default Avatar