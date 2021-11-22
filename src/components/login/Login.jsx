import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase-config";
import { useNavigate } from "react-router-dom";
import "./Login.styles.scss";

function Login(props) {
  let navigate = useNavigate();
  const { isLoginClose, setIsLoginClose } = props;
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const login = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className={`login ${isLoginClose ? "hide" : ""}`}>
        <div className="delete1">
          <span
            onClick={() => {
              setIsLoginClose(true);
            }}
          >
            delete
          </span>
        </div>
        <h2>Welcome back, please Login:</h2>
        <form onSubmit={login}>
          <div>
            <input
              type="email"
              placeholder="Your email:"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your password:"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </div>

          <div className="register_div" style={{ textAlign: "center" }}>
            <button
              type="submit"
              onClick={() => {
                navigate("/");
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
