import React, { useState } from "react";
import { auth } from "../../auth/firebase-config";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { Link } from "react-router-dom";

import "./LoginOut.styles.scss";

function LoginOut(props) {
  const { setIsRegisterOn, setIsLoginOut, setIsLoginClose } = props;

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = () => {
    signOut(auth);
    setIsLoginOut(false);
  };

  return (
    <div className="loginout_page">
      {user ? (
        <div style={{ color: "#ffffff" }}>
          <p onClick={logout}>Log Out</p>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <p
              onClick={() => {
                setIsLoginOut(false);
              }}
            >
              Login
            </p>
          </Link>
          <Link to="signup">
            <p
              onClick={() => {
                setIsLoginOut(false);
              }}
            >
              Sign Up
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default LoginOut;
