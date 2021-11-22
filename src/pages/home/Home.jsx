import React from "react";
import "./home.styles.scss";
import { Carousel } from "@trendyol-js/react-carousel";
import person from "./../../images/person.png";
import { Link } from "react-router-dom";
import data from "../../data/tennis.json";
import HomeMentorList from "../../components/homeMentorList/homeMentorList";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <input type="text" className="hero__input" placeholder="Search" />
        <h1 className="hero__title">FIND YOUR PERFECT COACH</h1>
        <h2 className="hero__text">
          We have sports coaches in all popular sports
        </h2>
      </section>

      <section className="slider">
        <h2>What’s your discipline?</h2>
        <Carousel show={5} slide={1} swiping={true}>
          <div className="slider__card slider__card--surfing">
            <h3 className="slider__title">Surfing</h3>
          </div>

          <Link to="/tennis">
            <div className="slider__card slider__card--tennis">
              <h3 className="slider__title">Tennis</h3>
            </div>
          </Link>

          <Link to="/swimming">
          <div className="slider__card slider__card--swimming">
            <h3 className="slider__title">Swimming</h3>
          </div>
          </Link>

          <Link to="/golf">
            <div className="slider__card slider__card--golf">
              <h3 className="slider__title">Golf</h3>
            </div>
          </Link>

          <Link to="/soccer">
          <div className="slider__card slider__card--soccer">
            <h3 className="slider__title">Soccer</h3>
          </div>
          </Link>

          <Link to="/riding">
          <div className="slider__card slider__card--riding">
            <h3 className="slider__title">Horse-riding</h3>
          </div>
          </Link>
        </Carousel>
      </section>

      <section className="coaches">
        <h2 className="coaches__title"> ALL STAR COACHES</h2>
        <p className="coaches__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi
          lacus, dignissim et augue sagittis, bibendum pretium felis. Integer
          auctor commodo ex quis pretium. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum
          suscipit ipsum id sem commodo malesuada. Sed pretium tristique erat,
          id maximus tortor gravida sit amet. Aenean efficitur neque at urna
          cursus scelerisque.{" "}
        </p>

        <div className="coaches__container">

            {data.map((each, index) => {
              return (
                <div key={index}>
                  <HomeMentorList each={each} />
                </div>
              );
            })}

        </div>
      </section>

      <section className="how">
        <h3 className="how__title">HOW DOES IT WORK?</h3>
        <svg width="84" height="38" viewBox="0 0 84 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0.75L42 23.4471L72 0.75L84 5.28943L42 37.0654L0 5.28943L12 0.75Z" fill="#F8F8F8"/>
          </svg>
<h4 className="how__subtitle">MentorMe works with the best coaches and instructors available</h4>
<div className="how__container">
  <div className="how__item">
    <svg width="101" height="121" viewBox="0 0 101 121" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_534_2067)">
<path d="M98.4811 15.8455L52.3177 0.713862C51.7607 0.530923 51.0135 0.439453 50.2663 0.439453C49.5191 0.439453 48.7719 0.530923 48.2149 0.713862L2.05141 15.8455C0.923813 16.2114 0 17.4659 0 18.6158V81.6514C0 82.8013 0.774373 84.3171 1.71177 85.0358L48.5409 120.134C49.0164 120.487 49.6278 120.67 50.2527 120.67C50.8776 120.67 51.5025 120.487 51.9645 120.134L98.7936 85.0358C99.731 84.3301 100.505 82.8144 100.505 81.6514V18.6158C100.533 17.4659 99.6087 16.2245 98.4811 15.8455ZM90.751 79.1425L50.2663 109.484L9.78154 79.1425V23.2677L50.2663 9.99149L90.751 23.2677V79.1425Z" fill="#009F3D"/>
<path d="M9.78149 23.2679V79.1427L50.2662 109.484L90.7509 79.1427V23.2679L50.2662 9.9917L9.78149 23.2679ZM66.6775 36.5048H74.1767C75.0597 36.5048 75.576 37.4718 75.0597 38.1643L46.177 76.4117C45.9739 76.679 45.7082 76.8964 45.4013 77.0463C45.0944 77.1963 44.7551 77.2744 44.4109 77.2744C44.0667 77.2744 43.7274 77.1963 43.4205 77.0463C43.1136 76.8964 42.8478 76.679 42.6448 76.4117L25.4727 53.6749C24.9565 52.9824 25.4727 52.0154 26.3558 52.0154H33.855C34.5614 52.0154 35.2135 52.3421 35.6211 52.8779L44.4109 64.5206L64.9114 37.3672C65.3189 36.8315 65.9846 36.5048 66.6775 36.5048Z" fill="#009F3D" fill-opacity="0.28"/>
<path d="M35.6212 52.8774C35.2136 52.3417 34.5615 52.015 33.8551 52.015H26.3559C25.4728 52.015 24.9566 52.982 25.4728 53.6745L42.6449 76.4113C42.8479 76.6786 43.1137 76.896 43.4206 77.0459C43.7275 77.1958 44.0668 77.274 44.411 77.274C44.7552 77.274 45.0945 77.1958 45.4014 77.0459C45.7083 76.896 45.9741 76.6786 46.1771 76.4113L75.0598 38.1639C75.5761 37.4714 75.0598 36.5044 74.1768 36.5044H66.6776C65.9847 36.5044 65.3191 36.8311 64.9115 37.3668L44.411 64.5202L35.6212 52.8774Z" fill="#009F3D"/>
</g>
<defs>
<filter id="filter0_i_534_2067" x="0" y="0.439453" width="100.506" height="124.23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_534_2067"/>
</filter>
</defs>
    </svg>
    <h3>Safe & reputable coaches</h3>
  </div>
  <div className="how__item">
    <svg width="127" height="126" viewBox="0 0 127 126" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M64.2606 4C31.8198 4 5.52124 30.2985 5.52124 62.7394C5.52124 95.1803 31.8198 121.479 64.2606 121.479C96.7015 121.479 123 95.1803 123 62.7394C123 30.2985 96.7015 4 64.2606 4ZM1.52124 62.7394C1.52124 28.0894 29.6106 0 64.2606 0C98.9107 0 127 28.0894 127 62.7394C127 97.3894 98.9107 125.479 64.2606 125.479C29.6106 125.479 1.52124 97.3894 1.52124 62.7394ZM64.2606 106.514C88.4367 106.514 108.035 86.9154 108.035 62.7394C108.035 38.5633 88.4367 18.9647 64.2606 18.9647C40.0845 18.9647 20.486 38.5633 20.486 62.7394C20.486 86.9154 40.0845 106.514 64.2606 106.514ZM64.2606 108.514C89.5412 108.514 110.035 88.02 110.035 62.7394C110.035 37.4587 89.5412 16.9647 64.2606 16.9647C38.98 16.9647 18.486 37.4587 18.486 62.7394C18.486 88.02 38.98 108.514 64.2606 108.514Z" fill="#009F3D"/>
<g filter="url(#filter0_dd_543_1100)">
<path d="M36.9717 21.366L40.1339 32.4884H50.3669L42.0882 39.3625L45.2504 50.4849L36.9717 43.6109L28.693 50.4849L31.8552 39.3625L23.5766 32.4884H33.8095L36.9717 21.366Z" fill="#F4C300"/>
</g>
<g filter="url(#filter1_dd_543_1100)">
<path d="M64.2606 14.3237L67.818 26.8365H79.3301L70.0166 34.5698L73.5741 47.0826L64.2606 39.3493L54.9471 47.0826L58.5045 34.5698L49.191 26.8365H60.7032L64.2606 14.3237Z" fill="#F4C300"/>
</g>
<g filter="url(#filter2_dd_543_1100)">
<path d="M91.5491 21.366L94.7113 32.1049H104.944L96.6656 38.7419L99.8278 49.4808L91.5491 42.8438L83.2704 49.4808L86.4326 38.7419L78.1539 32.1049H88.3869L91.5491 21.366Z" fill="#F4C300"/>
</g>
<path d="M10.6658 64.4026V58.3186C10.6658 56.2066 11.7218 55.1506 13.8338 55.1506H18.9098L20.3138 56.2306V57.9766H13.9958C13.8638 57.9766 13.7978 58.0426 13.7978 58.1746V64.5466C13.7978 64.6786 13.8638 64.7446 13.9958 64.7446H17.5418V62.6566H15.5078V59.8306H20.6738V67.5706H13.8338C11.7218 67.5706 10.6658 66.5146 10.6658 64.4026ZM23.0073 64.4026V55.1506H26.1393V64.5466C26.1393 64.6786 26.2053 64.7446 26.3373 64.7446H29.6853C29.8173 64.7446 29.8833 64.6786 29.8833 64.5466V55.1506H33.0153V64.4026C33.0153 66.5146 31.9593 67.5706 29.8473 67.5706H26.1753C24.0633 67.5706 23.0073 66.5146 23.0073 64.4026ZM34.6208 66.9946L38.1308 55.1506H42.8108L46.3208 66.9946L45.9428 67.5706H43.3148L42.7028 65.3566H38.2388L37.6268 67.5706H34.9988L34.6208 66.9946ZM39.0668 62.5306H41.8748L40.5788 57.9766H40.3628L39.0668 62.5306ZM48.0235 67.5706V55.1506H54.1435C56.2555 55.1506 57.3115 56.2066 57.3115 58.3186V60.4066C57.3115 61.8706 56.8075 62.8306 55.7995 63.2866L57.6715 66.9406L57.3115 67.5706H54.6115L52.5595 63.5566H51.1555V67.5706H48.0235ZM51.1555 60.7306H53.9815C54.1135 60.7306 54.1795 60.6646 54.1795 60.5326V58.1746C54.1795 58.0426 54.1135 57.9766 53.9815 57.9766H51.1555V60.7306ZM58.6677 66.9946L62.1777 55.1506H66.8577L70.3677 66.9946L69.9897 67.5706H67.3617L66.7497 65.3566H62.2857L61.6737 67.5706H59.0457L58.6677 66.9946ZM63.1137 62.5306H65.9217L64.6257 57.9766H64.4097L63.1137 62.5306ZM72.0704 67.5706V55.1506H75.4544L79.5764 62.3506V55.1506H82.7084V67.5706H79.3424L75.2024 60.3706V67.5706H72.0704ZM84.5456 57.9766V55.1506H94.8776V57.9766H91.2776V67.5706H88.1456V57.9766H84.5456ZM96.7149 67.5706V55.1506H105.409V57.9766H99.8469V59.8306H104.869V62.6566H99.8469V64.7446H105.409V67.5706H96.7149ZM107.719 67.5706V55.1506H116.413V57.9766H110.851V59.8306H115.873V62.6566H110.851V64.7446H116.413V67.5706H107.719Z" fill="white"/>
<defs>
<filter id="filter0_dd_543_1100" x="19.5767" y="21.366" width="34.7903" height="37.1189" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_543_1100"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_543_1100" result="effect2_dropShadow_543_1100"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_543_1100" result="shape"/>
</filter>
<filter id="filter1_dd_543_1100" x="45.1909" y="14.3237" width="38.1392" height="40.7588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_543_1100"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_543_1100" result="effect2_dropShadow_543_1100"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_543_1100" result="shape"/>
</filter>
<filter id="filter2_dd_543_1100" x="74.1541" y="21.366" width="34.7903" height="36.115" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_543_1100"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_543_1100" result="effect2_dropShadow_543_1100"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_543_1100" result="shape"/>
</filter>
</defs>
</svg>

    <h3>We guarantee the best coaches</h3>
  </div>
  <div className="how__item">
    <svg width="95" height="116" viewBox="0 0 95 116" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_534_2064)">
<path d="M77.1875 40.6V29C77.1875 12.76 64.125 0 47.5 0C30.875 0 17.8125 12.76 17.8125 29V40.6C7.71875 40.6 0 48.14 0 58V98.6C0 108.46 7.71875 116 17.8125 116H77.1875C87.2812 116 95 108.46 95 98.6V58C95 48.14 87.2812 40.6 77.1875 40.6ZM29.6875 29C29.6875 19.14 37.4062 11.6 47.5 11.6C57.5937 11.6 65.3125 19.14 65.3125 29V40.6H29.6875V29ZM54.0313 78.3L53.4375 78.88V87C53.4375 90.48 51.0625 92.8 47.5 92.8C43.9375 92.8 41.5625 90.48 41.5625 87V78.88C38 75.4 37.4062 70.18 40.9687 66.7C44.5312 63.22 49.875 62.64 53.4375 66.12C57 69.02 57.5938 74.82 54.0313 78.3Z" fill="#009F3D"/>
</g>
<defs>
<filter id="filter0_i_534_2064" x="0" y="0" width="95" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_534_2064"/>
</filter>
</defs>
</svg>
    <h3>Easy & secure payment</h3>
  </div>
</div>


      </section>

      <section className="steps">
        <div className="steps__item">
          <p className="steps__number">1</p>
          <p className="steps__description"> Select your sport or discipline</p>
        </div>

        <div className="steps__item">
          <p className="steps__number">2</p>
          <p className="steps__description">Select your coach</p>
        </div>

        <div className="steps__item">
          <p className="steps__number">3</p>
          <p className="steps__description">Chat via email or phone to discuss  your requirements</p>
        </div>

        <div className="steps__item">
          <p className="steps__number">4</p>
          <p className="steps__description">Book and train</p>
        </div>
      </section>

      <section className="testiomonials">
        <h2 className="testiomonials__title">Testimonials</h2>
        <Carousel show={2} slide={1} swiping={true}>
          <div className="testiomonials__card">
            <img src={person} alt="person" />
            <p className="testiomonials__text">
              “I had the best experience training with Ben my Tennis coach,
              thanks Ben!”
            </p>
          </div>
          <div className="testiomonials__card">
            <img src={person} alt="person" />
            <p className="testiomonials__text">
              “I had the best experience training with Ben my Tennis coach,
              thanks Ben!”
            </p>
          </div>
          <div className="testiomonials__card">
            <img src={person} alt="person" />
            <p className="testiomonials__text">
              “I had the best experience training with Ben my Tennis coach,
              thanks Ben!”
            </p>
          </div>
          <div className="testiomonials__card">
            <img src={person} alt="person" />
            <p className="testiomonials__text">
              “I had the best experience training with Ben my Tennis coach,
              thanks Ben!”
            </p>
          </div>
          <div className="testiomonials__card">
            <img src={person} alt="person" />
            <p className="testiomonials__text">
              “I had the best experience training with Ben my Tennis coach,
              thanks Ben!”
            </p>
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default Home;
