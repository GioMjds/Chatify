import { onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { v4 as getID } from "uuid";
import "../assets/css/content.css";
import { Context } from "../context/Context";
import { createMessageAsync, getMsgQueryByConversationId, getSnapshotData } from "../services/chatServices";
import Avatar from "./Avatar";
import ImageSlider from "./ImageSlider";
import InfoContainer from "./InfoContainer";
import Message from "./Message";

const Content = ({ setChat }) => {
  const { currentChat, auth } = useContext(Context);
  const friend = currentChat?.friend;
  const [onMenu, setOnMenu] = useState(false);
  const [onViewer, setOnViewer] = useState(false);
  const [messages, setMessages] = useState([]);
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");
  const [msgImages, setMsgImages] = useState([]);

  useEffect(() => {
    const loadMessages = async () => {
      if (currentChat == null) return;
      try {
        const query = getMsgQueryByConversationId(currentChat.id);
        onSnapshot(query, snapshots => {
          let tmpMessages = [];
          snapshots.forEach(snapshot => {
            tmpMessages.push(getSnapshotData(snapshot))
          });
          setMessages(tmpMessages.sort((a, b) => a.createdAt - b.createdAt));
        })
      } catch (error) {
        console.log(error)
      }
    }
    loadMessages();
  }, [currentChat]);

  const openImageViewer = (images) => {
    setMsgImages(images);
    setOnViewer(true);
  };

  const closeImageViewer = () => {
    setMsgImages([]);
    setOnViewer(false);
  }

  const handleImages = (e) => {
    const files = e.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const id = getID();
        const img = {
          id,
          origin: files[i].name,
          filename: id + "-" + files[i].name,
          file: files[i],
        };
        setImages((prev) => [...prev, img]);
      }
    }
  };

  const handleRemoveImage = (id) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
  };

  const handleCreateMessage = async () => {
    if (currentChat == null) return;
    if (!message && images?.length == 0) return;

    try {
      const msg = {
        conversationId: currentChat.id,
        sender: auth.id,
        receiver: currentChat.friend.id,
        message,
        images: [],
      }
      const res = await createMessageAsync(msg, images);
      if (res) {
        // This will clear the inputs if success
        setMessage("");
        setImages([]);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const keyDown = (event) => {
      if (event.key === "Escape" && onViewer) {
        closeImageViewer();
      }
    };
    document.addEventListener('keydown', keyDown);
    return () => {
      document.removeEventListener('keydown', keyDown);
    };
  }, [onViewer, closeImageViewer]);

  return (
    <div className={currentChat ? "content active" : "content"}>
      {currentChat ? (<div className="wrapper">
        <div className="top">
          <Avatar src={friend?.profile ? friend.profile : ""} username={friend?.username} height={45} width={45} />
          <div className="app-icon menu-icon" onClick={() => setOnMenu(prev => !prev)}>
            <i className="fa-solid fa-ellipsis"></i>
            {onMenu && (<div className="menu-wrapper">
              <span className="menu-item" onClick={() => setChat(false)}>Close Chat</span>
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
                  owner={msg?.sender == auth?.id}
                  openImageViewer={openImageViewer}
                />
              ))}
            </div>
          )}
        </div>
        <div className="bottom">
          {images.length > 0 && (
            <div className="images-preview">
            {images.map((image) => (
              <div className="image-item" key={image?.id}>
                <img src={URL.createObjectURL(image?.file)} alt=""/>
                <i onClick={() => handleRemoveImage(image.id)} className="fa-solid fa-rectangle-xmark"></i>
              </div>
            ))}
          </div>
        )}
          <div className="app-icon">
            <label htmlFor="upload-images">
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                id="upload-images"
                multiple
                style={{ display: 'none' }}
                onChange={handleImages}
              />
            <i className="fa-solid fa-image"></i>
            </label>
          </div>
          <textarea
            value={message}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleCreateMessage();
              }
            }}
            onChange={e => setMessage(e.target.value)}
            placeholder="Write a message"
          />
          <div className="app-icon" onClick={handleCreateMessage} >
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </div>
      ) : (
      <InfoContainer/>
      )}
    </div>
  )
}

export default Content