import React from 'react'
import Avatar from './Avatar'

const ChatItem = ({setChat}) => {
  return (
    <div className='chat-item' onClick={() => setChat(true)}>
      <Avatar src="" height={55} width={55} />
      <div className='chat-item-infos'>
        <div className="avatar-infos">
          <span className="username">Mimic</span>
          <span className="timeline">2 days ago</span>
        </div>
        <p className="last-message">Say hi! to Mimic</p>
      </div>
    </div>
  )
}

export default ChatItem