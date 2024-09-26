import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY="AIzaSyAkHZ2zZRd9QeeZqwIn3tlkyHjJGtCGEBQ",
    authDomain: import.meta.env.VITE_AUTH_DOMAIN="chatify-messenger-2754a.firebaseapp.com",
    projectId: import.meta.env.VITE_PROJECT_ID="chatify-messenger-2754a",
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET="chatify-messenger-2754a.appspot.com",
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID="224737518343",
    appId: import.meta.env.VITE_APP_ID="1:224737518343:web:24ace503cf67d65e8d5ba2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);