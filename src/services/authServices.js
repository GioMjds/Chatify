import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";
import { createUserAsync } from "./chatServices";

// Login
export const loginAsync = async (creds) => {
    return await signInWithEmailAndPassword(auth, creds.email, creds.password);
};

// Register
export const registerAsync = async (creds) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, creds.email, creds.password);
        if (res.user) {
            await updateProfile(res.user, { displayName: creds.username });
            await createUserAsync({...creds, uid: res.user.uid});
        }
    } catch (error) {
        console.log(error);
    }
};

// Log out
export const logoutAsync = async () => {
    return await signOut(auth);
};