import React from 'react'
import Avatar from './Avatar'

const ChatItem = ({ chat, active, selectConversation }) => {
  return (
    <div className={active ? "chat-item active" : "chat-item"} onClick={() => selectConversation(chat)}>
      <Avatar
        src={chat?.friend?.profile ? chat.friend.profile : ""}
        height={55}
        width={55}
      />
      <div className='chat-item-infos'>
        <div className="avatar-infos">
          <span className="username">{chat?.friend?.username}</span>
          <span className="timeline">2 days ago</span>
        </div>
        <p className="last-message">Say hi! to Mimic</p>
      </div>
    </div>
  )
}

export default ChatItem