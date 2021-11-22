import React from "react";
import "./homeMentorList.styles.scss";
import Button from "../button/button";

function HomeMentorList(props) {
  const { image, firstname, intro } = props.each;
  return (
     <div className="coaches__card">
            <img src={image} alt={firstname} />
            <h3>{firstname}</h3>
            <p>{intro}</p>
            <Button props="READ MORE"/>
      </div>
  );
}

export default HomeMentorList;
