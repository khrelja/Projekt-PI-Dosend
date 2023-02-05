import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBcFn-y7DtUJnWsNbLJKHzbvT0BXOK1_Y",
  authDomain: "dosend-99f38.firebaseapp.com",
  projectId: "dosend-99f38",
  storageBucket: "dosend-99f38.appspot.com",
  messagingSenderId: "964200483353",
  appId: "1:964200483353:web:e56cf851084421124bf888",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {
  firebase,
};
