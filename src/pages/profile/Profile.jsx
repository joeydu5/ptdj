import React from "react";
import "./Profile.styles.scss";
import tennis_img from "../../images/category/Tennis-Court-with-artificial-grass.png";
import stars from "../../images/stars.svg";

function Profile(props) {
  const {
    firstname,
    lastname,
    image,
    testimonial,
    contact,
    qualification,
    rates,
    intro,
    video,
  } = props.userdata;
  console.log(props);
  return (
    <div className="profile">
      <div className="profile__head">
        <img src={tennis_img} alt="tennis" />
      </div>
      <div className="profile__body">
        <div className="left">
          <img className="left__profile" src={image} alt="coach" />
          <img className="left__star" src={stars} alt="star" />
          <div className="left__testimonials">
            {testimonial.map((each, index) => (
              <p key={index}>{each}</p>
            ))}
          </div>
          <div className="left__contact">
            <h3 className="profile__title">Contact:</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "150px",
              }}
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.72366 13.7598C11.0573 15.1716 12.671 16.2616 14.4514 16.9532L16.8601 14.9532C16.9315 14.9018 17.0161 14.8744 17.1028 14.8744C17.1895 14.8744 17.2742 14.9018 17.3456 14.9532L21.8178 17.9598C21.9876 18.0663 22.1313 18.2126 22.2376 18.387C22.344 18.5615 22.4099 18.7593 22.4304 18.9649C22.4508 19.1705 22.4252 19.3783 22.3555 19.5718C22.2857 19.7653 22.1739 19.9392 22.0287 20.0798L19.9331 22.2398C19.633 22.5492 19.2642 22.7763 18.8595 22.9008C18.4548 23.0253 18.0269 23.0433 17.6139 22.9532C13.4945 22.0654 9.69755 19.9862 6.65699 16.9532C3.68391 13.89 1.62656 9.99239 0.734495 5.73316C0.646371 5.30892 0.664763 4.86812 0.787891 4.45348C0.911018 4.03883 1.1347 3.66441 1.43727 3.36649L3.6095 1.17983C3.74392 1.03568 3.90785 0.925143 4.08901 0.856478C4.27018 0.787813 4.46388 0.762805 4.65562 0.783325C4.84736 0.803846 5.03216 0.869364 5.1962 0.974973C5.36023 1.08058 5.49925 1.22355 5.60283 1.39316L8.58005 5.99983C8.6314 6.07216 8.65912 6.1598 8.65912 6.24983C8.65912 6.33985 8.6314 6.42749 8.58005 6.49983L6.61866 8.95983C7.29945 10.7805 8.3601 12.4201 9.72366 13.7598V13.7598Z"
                  fill="#15394E"
                />
              </svg>
              : {contact.mobile}
            </div>

            <p>
              <svg
                width="34"
                height="34"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1665 4H3.83317C2.779 4 1.92609 4.9 1.92609 6L1.9165 18C1.9165 19.1 2.779 20 3.83317 20H19.1665C20.2207 20 21.0832 19.1 21.0832 18V6C21.0832 4.9 20.2207 4 19.1665 4ZM18.7832 8.25L12.0078 12.67C11.7011 12.87 11.2986 12.87 10.9919 12.67L4.2165 8.25C4.12041 8.19371 4.03626 8.11766 3.96915 8.02645C3.90203 7.93525 3.85336 7.83078 3.82606 7.71937C3.79876 7.60796 3.7934 7.49194 3.81032 7.37831C3.82724 7.26468 3.86608 7.15581 3.92448 7.0583C3.98289 6.96079 4.05965 6.87666 4.15012 6.811C4.24059 6.74533 4.34288 6.69951 4.45081 6.6763C4.55874 6.65309 4.67007 6.65297 4.77804 6.67595C4.88602 6.69893 4.98841 6.74453 5.079 6.81L11.4998 11L17.9207 6.81C18.0113 6.74453 18.1137 6.69893 18.2216 6.67595C18.3296 6.65297 18.4409 6.65309 18.5489 6.6763C18.6568 6.69951 18.7591 6.74533 18.8496 6.811C18.94 6.87666 19.0168 6.96079 19.0752 7.0583C19.1336 7.15581 19.1724 7.26468 19.1894 7.37831C19.2063 7.49194 19.2009 7.60796 19.1736 7.71937C19.1463 7.83078 19.0976 7.93525 19.0305 8.02645C18.9634 8.11766 18.8793 8.19371 18.7832 8.25Z"
                  fill="#15394E"
                />
              </svg>
              : {contact.email}
            </p>
          </div>

          <div className="left__qualification">
            <h2 className="profile__title">Qualification:</h2>
            <p>{qualification}</p>
            <p>Rates: {rates}</p>
          </div>
        </div>
        {/* <div className="profile__body__right__video"> */}
        <div className="right">
          <h3>
            {firstname} {lastname}
          </h3>
          <div className="right__video">
            <iframe
              src={video}
              width="700"
              height="400"
              frameborder="0"
            ></iframe>
          </div>
          <h2 className="profile__title">Meet Your Instructor:</h2>
          <p style={{ fontSize: "23px", lineHeight: "33px" }}>{intro}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
