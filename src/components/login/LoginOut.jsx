import React, { useState } from "react";
import { auth } from "../../auth/firebase-config";
import { onAuthStateChanged, signOut } from "@firebase/auth";

import "./LoginOut.styles.scss";

function LoginOut(props) {
  const { setIsRegisterOn, setIsLoginOut, setIsLoginClose } = props;

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="loginout_page">
      {user ? (
        <div style={{ color: "#ffffff" }}>
          <p onClick={logout}>Log Out</p>
        </div>
      ) : (
        <div>
          <p
            onClick={() => {
              setIsLoginClose(false);
              setIsLoginOut(false);
              setIsRegisterOn(true);
            }}
          >
            Login
          </p>
          <p
            onClick={() => {
              setIsRegisterOn(false);
              setIsLoginOut(false);
              setIsLoginClose(true);
            }}
          >
            Sign Up
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginOut;
