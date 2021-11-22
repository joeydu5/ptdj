import React from "react";
import Button from "../../components/button/button";
import MentorList from "../../components/category/MentorList";
import "./category.styles.scss";
import head_pic from "../../images/category/golf-head.png";
import data from "../../data/golf.json";
import { Link } from "react-router-dom";

function Golf() {
  return (
    <div className="category">
      <div className="category__head">
        <h1>Golf</h1>
        <img src={head_pic} alt="category_pic" />
      </div>

      <div className="category__body">
        <div className="category__body__title">
          <h2>Golf Coaches</h2>
          <Link to="/">
              <Button props={"Back to categories"} />
          </Link>
        </div>
        {data.map((each, index) => {
          return (
            <div key={index}>
              <MentorList each={each} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Golf;
