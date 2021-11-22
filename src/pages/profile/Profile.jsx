import React from "react";
import "./Profile.styles.scss";

function Profile(props) {
  const {
    firstname,
    lastname,
    image,
    testimonial,
    contact,
    qualification,
    rates,
    video,
  } = props.userdata;
  console.log(props);
  return (
    <div className="profile">
      <div className="profile__head"></div>
      <div className="profile__body">
        <div className="profile__body__left">
          <img src={image} alt="coach" />
          <div>5 stars</div>
          <div className="profile__body__left__testi">
            {testimonial.map((each, index) => (
              <p key={index}>{each}</p>
            ))}
          </div>
          <div className="profile__body__left__contact">
            <h3>Contact:{contact.mobile}</h3>
            <h3>Contact:{contact.email}</h3>
          </div>
          <h2>Qualification: </h2>
          <h3>{qualification}</h3>
          <h2>Rates: {rates}</h2>
        </div>
        <div className="profile__body__right">
          <div className="profile__body__right__name">
            <span>{firstname} </span>
            <span>{lastname}</span>
          </div>
          <div className="profile__body__right__video">
            <iframe
              src={video}
              width="600"
              height="400"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
