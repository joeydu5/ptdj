import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase-config.js";
import "./Login.styles.scss";

function Register(props) {
  const { isRegisterOn, setIsRegisterOn } = props;
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  console.log(registerEmail);
  //   const [loginEmail, setLoginEmail] = useState("");
  //   const [loginPassword, setLoginPassword] = useState("");

  const signup = async (event) => {
    event.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  //   const login = async () => {};
  //   const logout = async () => {};

  return (
    <div>
      <div className={`register ${isRegisterOn ? "hide" : ""}`}>
        <div className="register__head"></div>
        <div className="register__body">
          <form onSubmit={signup}>
            <div className="register__delete">
              <span
                onClick={() => {
                  setIsRegisterOn(true);
                }}
              >
                delete
              </span>
            </div>
            <div className="register_div">
              <label htmlFor="sport_cate">
                What Sport do you need help with?
              </label>
              <select name="sport_cate" id="sport_cate">
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
              <input type="text" name="firstname" id="firstname" />
            </div>

            <div className="register_div">
              <label htmlFor="lastname">Last Name:</label>
              <input type="text" name="lastname" id="lastname" />
            </div>

            <div className="register_div">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="123@gmail.com"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
            </div>

            <div className="register_div">
              <label htmlFor="mobile">Contact Number:</label>
              <input type="number" name="mobile" id="mobile" />
            </div>

            <div className="register_div">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
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
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
