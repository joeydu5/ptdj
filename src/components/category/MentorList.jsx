import React from "react";
import { Link } from "react-router-dom";
import "./MetorList.styles.scss";

function MentorList(props) {
  const { setUserdata } = props;

  const { image, firstname, lastname, star, city, intro, rates } = props.each;
  return (
    <div className="mentorlist">
      <div className="mentorlist__left">
        <img src={image} alt={firstname} />
      </div>
      <div className="mentorlist__right">
        <div className="mentorlist__right__head">
          <h2>{firstname} {lastname}</h2>
          <h2>star:{star}</h2>
          <h2>{city}</h2>
        </div>
        <p>{intro.substring(0, 200)}....</p>
        <div className="mentorlist__right__bottom">
          <h3>Rate: {rates}</h3>
          <p className="mentorlist__right__bottom__link1">SEND EMAIL</p>
          <Link to="/profile">
            <p
              className="mentorlist__right__bottom__link2"
              onClick={() => setUserdata(props.each)}
            >
              VIEW PROFILE
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MentorList;
