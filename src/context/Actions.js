import { onAuthStateChanged } from "firebase/auth";
import { getUserAsync } from "../services/chatServices";
import { logoutAsync } from "../services/authServices";
import { auth } from "../config/firebase";

export const signIn = ({ auth, user }) => {
    return { type: "LOGIN", payload: {auth, user} };
};

export const signOut = () => {
    return { type: "LOGOUT" };
};

export const updateProfile = (user) => {
    return { type: "UPDATE_USER", payload: user };
};

export const checkAuthUser = (dispatch) => {
    return onAuthStateChanged(auth, async(authUser) => {
        if (authUser) {
            const res = await getUserAsync(authUser.uid);
            if (res) {
                dispatch(signIn({ auth: authUser, user: res }));
            }
        } else {
            // When user is signed / logged out...
            await logoutAsync();
        }
    });
};