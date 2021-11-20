import React from "react";
import "./MetorList.styles.scss";

function MentorList(props) {
  const { image, firstname, star, city, intro, rates } = props.each;
  return (
    <div className="mentorlist">
      <div className="mentorlist__left">
        <img src={image} alt={firstname} />
      </div>
      <div className="mentorlist__right">
        <div className="mentorlist__right__head">
          <h2>{firstname}</h2>
          <h2>star:{star}</h2>
          <h2>{city}</h2>
        </div>
        <p>{intro.substring(0, 200)}....</p>
        <div className="mentorlist__right__bottom">
          <h3>Rate: {rates}</h3>
          <p className="mentorlist__right__bottom__link1">SEND EMAIL</p>
          <p className="mentorlist__right__bottom__link2">VIEW PROFILE</p>
        </div>
      </div>
    </div>
  );
}

export default MentorList;
