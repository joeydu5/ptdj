import React from "react";
import { useState, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase-config.js";
import { useNavigate } from "react-router";
import { db } from "../../auth/firebase-config.js";
import Button from "../../components/button/button.jsx";
import "./LoginSignUp.styles.scss";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";

function SignUp(props) {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const sportRef = useRef();
  const mobileRef = useRef();

  //   const { isRegisterOn, setIsRegisterOn } = props;
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [firstname, setFirstname] = useState("");

  const signup = async (event) => {
    event.preventDefault();
    // const db = getFirestore();
    // const colRef = collection(db, "users");

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return setDoc(doc(db, "users", user.uid), {
          firstname: firstnameRef.current.value,
          lastname: lastnameRef.current.value,
          email: emailRef.current.value,
          mobile: mobileRef.current.value,
          sport: sportRef.current.value,
        });

        // ...
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });

    // try {
    //   const user = await createUserWithEmailAndPassword(
    //     auth,
    //     registerEmail,
    //     registerPassword
    //   );
    //   // db.collection("users").doc(user.uid).set({
    //   //  bio:singupForm['signup-bro'].value
    //   // });

    //   try {
    //     // const docRef = doc(db, "users", user.uid);
    //     // const payload = { firstname: firstname };
    //     // await setDoc(docRef, payload);
    //     const collectionRef = collection(db, "users");
    //     const payload = {
    //       firstname: firstnameRef.current.value,
    //       lastname: lastnameRef.current.value,
    //       email: emailRef.current.value,
    //       mobile: mobileRef.current.value,
    //       sport: sportRef.current.value,
    //     };
    //     await addDoc(collectionRef, payload);
    //   } catch (error) {
    //     console.log(error.message);
    //   }

    //   navigate("/");
    //   console.log(user);
    // } catch (error) {
    //   console.log(error.message);
    // }
  };
  //   const login = async () => {};
  //   const logout = async () => {};

  return (
    <div>
      <div className={"register"}>
        <div className="register__head"></div>
        <div className="register__body">
          <form onSubmit={signup}>
            <div className="register_div">
              <label htmlFor="sport_cate">
                What Sport do you need help with?
              </label>
              <select name="sport_cate" id="sport_cate" ref={sportRef}>
                <option value="badminton">Pick a Sport</option>
                <option value="badminton">Badminton</option>
                <option value="basketball">Basketball</option>
                <option value="boxing">Boxing</option>
                <option value="football">Football</option>
                <option value="golf">Golf</option>
                <option value="horseriding">Horse riding</option>
                <option value="tennis">Tennis</option>
                <option value="swimming">Swimming</option>
                <option value="soccer">Soccer</option>
                <option value="surfing">Surfing</option>
                <option value="yoga">Yoga</option>
              </select>
            </div>

            <div className="register_div">
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                ref={firstnameRef}
              />
            </div>

            <div className="register_div">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                ref={lastnameRef}
              />
            </div>

            <div className="register_div">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                placeholder="123@gmail.com"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
            </div>

            <div className="register_div">
              <label htmlFor="mobile">Contact Number:</label>
              <input type="number" name="mobile" id="mobile" ref={mobileRef} />
            </div>

            <div className="register_div">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                ref={passwordRef}
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
            </div>

            <div className="register_div">
              <label htmlFor="cpassword">Confirm Password:</label>
              <input type="password" name="cpassword" id="cpassword" />
            </div>
            <div className="register_div" style={{ textAlign: "center" }}>
              <Button type="submit" props="Sign Up" />
              {/* <button type="submit">Register</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
