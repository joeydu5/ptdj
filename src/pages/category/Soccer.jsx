import React from "react";
import Button from "../../components/button/button";
import MentorList from "../../components/category/MentorList";
import "./category.styles.scss";
import category_pic from "../../images/category/soccer-head.png";
import data from "../../data/soccer.json";
import { Link } from "react-router-dom";

function Soccer(props) {
  const { setUserdata } = props;
  return (
    <div className="category">
      <div className="category__head">
        <h1>SOCCER</h1>
        <img src={category_pic} alt="category_head_pic" />
      </div>

      <div className="category__body">
        <div className="category__body__title">
          <h2>Soccer Coaches</h2>
          <Link to="/">
              <Button props={"Back to categories"} />
          </Link>
        </div>
        {data.map((each, index) => {
          return (
            <div key={index}>
              <MentorList each={each} setUserdata={setUserdata}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Soccer;
