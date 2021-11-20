import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUdZV1jpnYrNmz9zQQz963AfpThUxJ62M",
  authDomain: "ptdj-tafe.firebaseapp.com",
  projectId: "ptdj-tafe",
  storageBucket: "ptdj-tafe.appspot.com",
  messagingSenderId: "714248572529",
  appId: "1:714248572529:web:d39091dd6073e2a74b55d0",
  measurementId: "G-D5V5CX1NK8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
