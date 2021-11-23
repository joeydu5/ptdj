import React from "react";
// import Button from "../../components/button/button";
import MentorList from "../../components/category/MentorList";
import "./category.styles.scss";
import category_pic from "../../images/category/Tennis-Court-with-artificial-grass.png";
import data from "../../data/tennis.json";
import { Link } from "react-router-dom";

function Tennis(props) {
  const { setUserdata } = props;
  return (
    <div className="category">
      <div className="category__head">
        <h1>TENNIS</h1>
        <img src={category_pic} alt="category_head_pic" />
      </div>

      <div className="category__body">
        <div className="category__body__title">
          <h2>Tennis Coaches</h2>
          <Link to="/">
            <h3>Back to Category</h3>
          </Link>
        </div>
        {data.map((each, index) => {
          return (
            <div key={index}>
              <MentorList each={each} setUserdata={setUserdata} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tennis;
