import { getDownloadURL } from "firebase/storage";
import { auth, firestore as db } from "../config/firebase";
import { collection, getDocs, getDoc, addDoc, arrayUnion, updateDoc, deleteDoc, doc, setDoc, serverTimestamp, ref } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

// Create User
export const createUserAsync = async(creds) => {
    try {
        const user = {
            username: creds.username,
            email: creds.email,
            desc: "Hello from Chatify",
            profile: "",
            createdAt: serverTimestamp(),
        }
        return await setDoc(doc(db, "users", creds.uid), user);
    } catch (error) {
        console.log(error);
    }
}

// Update User

export const updateUserAsync = async(updatedUser, profileImage) => {
    try {
        const creds = auth.currentUser;
        const userDoc = doc(db, "users", creds.uid);
        // Update the profile image if not null
        if (profileImage) {
            const location = `/images/users/${creds.uid}/profile/`;
            const urls = await uploadFiles([profileImage], location);
            if (urls.length > 0) {
                updatedUser.profile = urls[0];
                await updateProfile(creds, {
                    photoURL: urls[0].url,
                    displayName: updatedUser.username
                })
            }
        }
        await updateDoc(userDoc, updateUser);
        const snapshot = await getDoc(userDoc);
        return getSnapshotData(snapshot);
    } catch (error) {
        console.log(error);
    }
}

// Delete User
export const deleteUserAsync = async(id) => {
    try {
        const userDoc = doc(db, "users", id);
        const res = await deleteDoc(userDoc);
        return res;
    } catch (error) {
        console.log(error);
    }
}

// Get All Users

// Get User

// Helper functions

const uploadFiles = async(files, location) => {
    let filesUrls = [];
    for (const item of files) {
        const storageRef = ref(storage, `${location}${item.filename}`);
        const uploadTask = await uploadBytes(storageRef, item.file);
        const downloadURL = await getDownloadURL(uploadTask.ref);

        filesUrls.push({
            origin: item.origin,
            filename: item.filename,
            url: downloadURL
        });
    }
    return filesUrls;
}

export const getSnapshotData = (snapshot) => {
    if (!snapshot.exists) return undefined;
    const data = snapshot.data();
    return {...data, id: snapshot.id};
} 