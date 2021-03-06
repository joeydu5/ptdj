import React from "react";
import "./footer.styles.scss";
import { Link } from "react-router-dom";
import SignFooter from "./../../images/sign_footer.svg";
import insta from "./../../images/instagram.svg";
import twitter from "./../../images/twitter.svg";
import facebook from "./../../images/facebook.svg";
import logo from "../../images/new icon.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__flexboxcol">
          <img src={logo} alt="sign" className="footer__container__logo" />
          <h2>Mentor Me</h2>
        </div>

        <div className="footer__social">
          <h3>SOCIAL MEDIAS:</h3>
          <img width="48" height="48" src={facebook} alt="Facebook" />
          <img width="48" height="48" src={insta} alt="Instagram" />
          <img width="48" height="48" src={twitter} alt="Twitter" />
        </div>

        <div className="footer__our">
          <h3>OUR LINKS</h3>
          <p>Home</p>
          <p>Find A Coach</p>
          <p>Become A Coach</p>
          <Link to="/about"><p>About Us</p></Link>
          <p>How It Works</p>
          <Link to="/contact">
            <p>Contact Us</p>
          </Link>
        </div>

        <div className="footer__about">
          <h3>ABOUT</h3>
          <p>Legals</p>
          <p>Privacy</p>
        </div>
      </div>
      <p className="footer__copyright">© PTDJ2021</p>
    </section>
  );
};

export default Footer;
