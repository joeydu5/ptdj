import React from "react";

import MentorList from "../../components/category/MentorList";
import "./tennis.styles.scss";
import tennis_page_head_pic from "../../images/category/Tennis-Court-with-artificial-grass.png";
import data from "../../data/tennis.json";

function Tennis() {
  return (
    <div className="tennis">
      <div className="tennis__head">
        <h1>TENNIS</h1>
        <img src={tennis_page_head_pic} alt="tennis_page_head_pic" />
      </div>

      <div className="tennis__body">
        <div className="tennis__body__title">
          <h2>Tennis Coaches</h2>
          <h3>Back to Categories</h3>
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

export default Tennis;
