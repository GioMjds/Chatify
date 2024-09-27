import React from 'react'
import Avatar from './Avatar'

const ContactItem = ({contact}) => {
  return (
    <div className='contact-item'>
      <Avatar
        src={contact?.profile ? contact.profile.url : ""}
        height={55}
        width={55}
        username={contact?.username}
      />
    </div>
  )
}

export default ContactItem