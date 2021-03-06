import React, { useState } from "react";
import { auth } from "../../auth/firebase-config";
import { onAuthStateChanged } from "@firebase/auth";
import LoginOut from "../login/LoginOut";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../../auth/firebase-config";
import logo from "../../images/new-logo1.png";
// import Register from "../login/Register";
// import Login from "../login/Login";
import "./nav.styles.scss";

const Nav = () => {
  const [user, setUser] = useState({});
  const [isLoginOut, setIsLoginOut] = useState(false);
  const [isRegisterOn, setIsRegisterOn] = useState(true);
  const [isLoginClose, setIsLoginClose] = useState(true);
  const [userfirstname, setUserfirstname] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const user2 = auth.currentUser;
  console.log(user2);
  if (user2) {
    const docRef = doc(db, "users", user2.uid);
    onSnapshot(docRef, (doc) => {
      console.log(doc.data(), doc.id);
      setUserfirstname(doc.data().firstname);
    });
  }

  // const id = user.uid;
  // const docRef = doc(db, "users", user2.uid);
  // getDoc(docRef)
  //   .then((doc) => {
  //     console.log(doc.data(), doc.id);
  //     setUserfirstname(doc.data().firstname);
  //   })
  //   .catch((err) => console(err));
  // onSnapshot(docRef, (doc) => {
  //   console.log(doc.data(), doc.id);
  // });

  return (
    <div className="nav">
      {isLoginOut && (
        <LoginOut
          isRegisterOn={isRegisterOn}
          setIsRegisterOn={setIsRegisterOn}
          setIsLoginOut={setIsLoginOut}
          setIsLoginClose={setIsLoginClose}
        />
      )}
      <div className="nav__list">
        <div className="nav__list__logodiv">
          <a href="/">
            <img src={logo} alt="logo pic" />
          </a>
          <a href="/about" className="nav__about_text">
            About Us
          </a>
          <a href="/contact" className="nav__about_text">
            Contact Us
          </a>

          <a href="/">
            {/* <svg
              width="168"
              height="25"
              viewBox="0 0 168 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.975 25V0.849998H6.19L13.54 16.495L20.855 0.849998H26.105V25H21.835V8.095L15.43 21.71H11.615L5.245 8.095V25H0.975ZM31.4143 19.47V12.155C31.4143 8.46833 33.2577 6.625 36.9443 6.625H41.4943C45.1577 6.625 46.9893 8.46833 46.9893 12.155V17.405H35.5093V19.82C35.5093 20.8933 36.046 21.43 37.1193 21.43H46.2893V23.635L44.4343 25H36.9443C33.2577 25 31.4143 23.1567 31.4143 19.47ZM35.5093 14.115H42.9293V11.805C42.9293 10.7083 42.381 10.16 41.2843 10.16H37.1193C36.046 10.16 35.5093 10.7083 35.5093 11.805V14.115ZM51.9629 25V6.625H62.0429C65.7062 6.625 67.5379 8.46833 67.5379 12.155V25H63.4779V11.805C63.4779 10.7083 62.9296 10.16 61.8329 10.16H56.0579V25H51.9629ZM72.5016 19.47V0.849998H76.5966V6.625H82.8266V10.16H76.5966V19.82C76.5966 20.8933 77.1333 21.43 78.2066 21.43H83.1766V23.635L81.3566 25H78.0316C74.3449 25 72.5016 23.1567 72.5016 19.47ZM86.7854 19.47V12.155C86.7854 8.46833 88.6288 6.625 92.3154 6.625H97.2154C100.879 6.625 102.71 8.46833 102.71 12.155V19.47C102.71 23.1567 100.879 25 97.2154 25H92.3154C88.6288 25 86.7854 23.1567 86.7854 19.47ZM90.8804 19.82C90.8804 20.8933 91.4171 21.43 92.4904 21.43H97.0054C98.1021 21.43 98.6504 20.8933 98.6504 19.82V11.805C98.6504 10.7083 98.1021 10.16 97.0054 10.16H92.4904C91.4171 10.16 90.8804 10.7083 90.8804 11.805V19.82ZM107.536 25V8.9C108.376 7.38333 109.986 6.625 112.366 6.625H116.041L117.861 7.99V10.16H113.066C112.389 10.16 111.911 10.335 111.631 10.685V25H107.536ZM121.732 25V0.849998H126.947L134.297 16.495L141.612 0.849998H146.862V25H142.592V8.095L136.187 21.71H132.372L126.002 8.095V25H121.732ZM152.171 19.47V12.155C152.171 8.46833 154.015 6.625 157.701 6.625H162.251C165.915 6.625 167.746 8.46833 167.746 12.155V17.405H156.266V19.82C156.266 20.8933 156.803 21.43 157.876 21.43H167.046V23.635L165.191 25H157.701C154.015 25 152.171 23.1567 152.171 19.47ZM156.266 14.115H163.686V11.805C163.686 10.7083 163.138 10.16 162.041 10.16H157.876C156.803 10.16 156.266 10.7083 156.266 11.805V14.115Z"
                fill="white"
              />
            </svg> */}
          </a>
          {/* <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a> */}
        </div>

        {/* <div>
          <h2>{user ? "Welcome: " + userfirstname : ""}</h2>
        </div> */}

        {/* <div>
          <h2>{user && userfirstname}</h2>
        </div> */}

        {/* <li><a href="/">Home</a></li> */}

        {/* <li>
          <a href="/contact">Contact us</a>
        </li> */}

        <div
          onClick={() => {
            setIsLoginOut(!isLoginOut);
          }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ marginRight: "20px" }}>
            {user && "Hi , " + userfirstname}
          </h2>
          <svg
            width="55"
            height="56"
            viewBox="0 0 55 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.6489 46.0363C51.4718 42.6426 53.4352 38.6195 54.373 34.3072C55.3107 29.995 55.1952 25.5205 54.0362 21.2623C52.8772 17.0041 50.7088 13.0874 47.7145 9.84364C44.7201 6.59987 40.988 4.1244 36.8336 2.62666C32.6793 1.12891 28.225 0.652945 23.8477 1.23903C19.4703 1.82511 15.2986 3.45599 11.6855 5.99371C8.07233 8.53144 5.12406 11.9013 3.09005 15.8184C1.05604 19.7354 -0.00385785 24.0842 1.05511e-05 28.4971C0.00149499 34.9122 2.26398 41.1218 6.39047 46.0363L6.35115 46.0697C6.48875 46.2347 6.64601 46.3761 6.78754 46.5391C6.96445 46.7414 7.15512 46.9319 7.33793 47.1283C7.88832 47.7254 8.45444 48.2989 9.04808 48.8371C9.22892 49.0021 9.41566 49.1553 9.59847 49.3124C10.2275 49.8545 10.8742 50.3691 11.5445 50.8483C11.631 50.9072 11.7096 50.9838 11.7961 51.0447V51.0211C16.4 54.2583 21.8921 55.9956 27.5216 55.9956C33.1512 55.9956 38.6433 54.2583 43.2471 51.0211V51.0447C43.3336 50.9838 43.4103 50.9072 43.4988 50.8483C44.1671 50.3671 44.8158 49.8545 45.4448 49.3124C45.6276 49.1553 45.8143 49.0001 45.9952 48.8371C46.5888 48.297 47.1549 47.7254 47.7053 47.1283C47.8881 46.9319 48.0768 46.7414 48.2557 46.5391C48.3953 46.3761 48.5545 46.2347 48.6921 46.0677L48.6489 46.0363ZM27.5197 12.7845C29.2692 12.7845 30.9794 13.3029 32.434 14.274C33.8887 15.2452 35.0224 16.6256 35.6919 18.2406C36.3614 19.8556 36.5366 21.6326 36.1953 23.3471C35.854 25.0616 35.0115 26.6364 33.7745 27.8725C32.5374 29.1086 30.9612 29.9503 29.2454 30.2914C27.5295 30.6324 25.7509 30.4574 24.1346 29.7884C22.5183 29.1195 21.1368 27.9866 20.1648 26.5332C19.1928 25.0797 18.6741 23.3709 18.6741 21.6228C18.6741 19.2788 19.606 17.0307 21.2649 15.3732C22.9238 13.7157 25.1737 12.7845 27.5197 12.7845ZM11.8079 46.0363C11.842 43.4574 12.8909 40.9956 14.7277 39.1835C16.5644 37.3714 19.0414 36.3547 21.6226 36.3534H33.4167C35.998 36.3547 38.4749 37.3714 40.3117 39.1835C42.1484 40.9956 43.1973 43.4574 43.2314 46.0363C38.9204 49.918 33.3229 52.0662 27.5197 52.0662C21.7164 52.0662 16.119 49.918 11.8079 46.0363Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Nav;
