import { useContext, useState } from "react";
import "../assets/css/profile.css";
import { Context } from "../context/Context";
import Avatar from "./Avatar";

export default function Profile({ open, setOpen }) {
    const { auth, user, dispatch } = useContext(Context);
    const [onEdit, setOnEdit] = useState(false);

    console.log(user, auth);
    return (
    <div className={open ? "profile active" : "profile"}>
        <div className="profile-wrapper">
            <div className="profile-topbar">
                <span className="heading">Profile</span>
                <div className="app-icon" onClick={() => setOpen(false)}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>

        {onEdit ? (
            <div className="profile-infos">
                <div className="avatar-wrapper">
                    <Avatar height={150} width={150} />
                    <i className="fa-solid fa-camera"></i>
                </div>
                <form onSubmit={() =>{}} className="profile-form">
                    <input type="text" placeholder="Username" />
                    <textarea type="text" placeholder="Write something about yourself" />
                    <div className="profile-actions">
                        <button onClick={() => setOnEdit(false)} className="cancel-btn">
                            Cancel
                        </button>
                        <button type="submit" className="save-btn">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        ) : (
            <div className="profile-infos">
                <div className="avatar-wrapper">
                    <Avatar
                        src={user?.profile? user.profile.url : ""}
                        height={150}
                        width={150}
                    />
                </div>
                <span className="username">{user?.username}</span>
                <span className="email">{user?.email}</span>
                <p className="status">{user?.desc}</p>
                <button className="edit-btn" onClick={() => setOnEdit(true)} >
                    <i className="fa-solid fa-pen-to-square"></i>Profile
                </button>
            </div>
        )}
        </div>
    </div>
    );
}
