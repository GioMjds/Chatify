import React from 'react'
import Avatar from './Avatar'

export default function ChatItem() {
  return (
    <div className='chat-item'>
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
