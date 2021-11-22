import React from "react";
import "./homeMentorList.styles.scss";
import Button from "../button/button";
import { Link } from "react-router-dom";

function HomeMentorList(props) {
  const { image, firstname, intro } = props.each;
  return (
     <div className="coaches__card">
            <img src={image} alt={firstname} />
            <h3>{firstname}</h3>
            <p>{intro}</p>
            <Link to="/tennis">
               <Button props="READ MORE"/>
            </Link>
      </div>
  );
}

export default HomeMentorList;
