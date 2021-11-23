import React from "react";
import Button from "../../components/button/button";
import MentorList from "../../components/category/MentorList";
import "./category.styles.scss";
import category_pic from "../../images/category/swimming-head.png";
import data from "../../data/swimming.json";
import { Link } from "react-router-dom";

function Swimming(props) {
  const { setUserdata } = props;
  return (
    <div className="category">
      <div className="category__head">
        <h1>Swimming</h1>
        <img src={category_pic} alt="category_head_pic" />
      </div>

      <div className="category__body">
        <div className="category__body__title">
          <h2>Swimming Coaches</h2>
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

export default Swimming;
