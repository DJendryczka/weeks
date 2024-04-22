
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMxOs3FEN_5yvaCaCx3w5VE7_F-TQMFgc",
  authDomain: "weeks-f7f15.firebaseapp.com",
  projectId: "weeks-f7f15",
  storageBucket: "weeks-f7f15.appspot.com",
  messagingSenderId: "944846414896",
  appId: "1:944846414896:web:2a182d7cb3f9188dd679f5",
  measurementId: "G-87GCBH2ZHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);