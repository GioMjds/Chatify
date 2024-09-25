import { useState } from "react";
import "../assets/css/profile.css";
import Avatar from "./Avatar";

export default function Profile({ open, setOpen }) {
    const [onEdit, setOnEdit] = useState(false);
    return (
    <div className={open ? "profile active" : "profile"}>
        <div className="profile-wrapper">
            <div className="profile-topbar">
                <span className="heading">Profile</span>
                <div className="app-icon" onClick={() => setOpen(false)}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>

            {onEdit ? (<div className="profile-infos">
                <div className="avatar-wrapper">
                    <Avatar height={150} width={150} />
                    <i className="fa-solid fa-camera"></i>
                </div>
                <form action={() =>{}} className="profile-form">
                    <input type="text" placeholder="Username" />
                    <textarea name="" placeholder="Write something about yourself" />
                    <div className="profile-ac">
                        <button onClick={() => setOnEdit(true)} className="cancel-btn">Cancel</button>
                        <button type="submit" className="save-btn">Save</button>
                    </div>
                </form>
            </div>
        ) : (
            <div className="profile-infos">
                <div className="avatar-wrapper">
                    <Avatar height={150} width={150} />
                </div>
                <span className="username">Gio Majadas</span>
                <span className="email">giomjds@gmail.com</span>
                <p className="status">sample description</p>
                <button className="edit-btn" onClick={() => setOnEdit(true)} >
                    <i className="fa-solid fa-pen-to-square"></i>Profile
                </button>
            </div>
        )}
        </div>
    </div>
    );
}
