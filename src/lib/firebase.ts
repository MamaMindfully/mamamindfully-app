import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAIe0VxL4aTrLFkFT0p_JjWEwczxTnmYFM",
  authDomain: "mama-mindfully.firebaseapp.com",
  projectId: "mama-mindfully",
  storageBucket: "mama-mindfully.firebasestorage.app",
  messagingSenderId: "684441914151",
  appId: "1:684441914151:web:451bccc6a0938ac7713702",
  measurementId: "G-EGQJDLJ1M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Initialize services
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
