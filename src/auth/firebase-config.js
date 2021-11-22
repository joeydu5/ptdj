import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

//init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "users");

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    console.log(snapshot.docs);
    let users = [];
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    console.log(users);
  })
  .catch((err) => {
    console.log(err.message);
  });
