import React from "react";
import "./home.styles.scss";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/footer";
import { Carousel } from '@trendyol-js/react-carousel';
import coach from './../../images/coach.png';
import person from './../../images/person.png';


const Home = ()=> {
     return (
     <div>
         <section className="hero">
            <Nav/>
             <input type="text" className="hero__input" placeholder="Search"/>
             <h1 className="hero__title">FIND YOUR PERFECT COACH</h1>
             <h2 className="hero__text">We have sports coaches in all popular sports</h2>
         </section>

         <section className="slider">
             <h2>What’s  your discipline?</h2>
             <Carousel show={5} slide={1} swiping={true}>
                 <div className="slider__card slider__card--surfing">
                     <h3 className="slider__title">Surfing</h3>
                 </div>

                 <div className="slider__card slider__card--tennis">
                     <h3 className="slider__title">Tennis</h3>
                 </div>

                 <div className="slider__card slider__card--swimming">
                     <h3 className="slider__title">Swimming</h3>
                 </div>

                 <div className="slider__card slider__card--golf">
                     <h3 className="slider__title">Golf</h3>
                 </div>

                 <div className="slider__card slider__card--soccer">
                     <h3 className="slider__title">Soccer</h3>
                 </div>

                 <div className="slider__card slider__card--table-tennis">
                     <h3 className="slider__title">Table-tennis</h3>
                 </div>
             </Carousel>
         </section>

         <section className="coaches">
             <h2 className="coaches__title"> ALL STAR COACHES</h2>
             <p className="coaches__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi lacus, dignissim et augue sagittis, bibendum pretium felis. Integer auctor commodo ex quis pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum suscipit ipsum id sem commodo malesuada. Sed pretium tristique erat, id maximus tortor gravida sit amet. Aenean efficitur neque at urna cursus scelerisque. </p>
         
         <div className="coaches__container">
             <div className="coaches__card">
                 <img src={coach} alt="Coach" />
                 <h3>Jessica</h3>
                 <p>Lessons can vary in length from 20-45 minutes depending on ability and fitness of horse and rider at the end of the day it should be fun, not knackering while learning lots of new things.</p>
             <button className="button">Read More</button>
             </div>

             <div className="coaches__card">
                 <img src={coach} alt="Coach" />
                 <h3>Jessica</h3>
                 <p>Lessons can vary in length from 20-45 minutes depending on ability and fitness of horse and rider at the end of the day it should be fun, not knackering while learning lots of new things.</p>
             <button className="button">Read More</button>
             </div>

             <div className="coaches__card">
                 <img src={coach} alt="Coach" />
                 <h3>Jessica</h3>
                 <p>Lessons can vary in length from 20-45 minutes depending on ability and fitness of horse and rider at the end of the day it should be fun, not knackering while learning lots of new things.</p>
             <button className="button">Read More</button>
             </div>
         </div>
        
         
        
         
         </section>

         <section className="testiomonials">
             <h2 className="testiomonials__title">Testimonials</h2>
             <Carousel show={2} slide={1} swiping={true}>
                 <div className="testiomonials__card">
                     <img src={person} alt="person" />
                     <p className="testiomonials__text">“I had the best experience training with Ben my Tennis coach, thanks Ben!”</p>
                 </div>
                 <div className="testiomonials__card">
                     <img src={person} alt="person" />
                     <p className="testiomonials__text">“I had the best experience training with Ben my Tennis coach, thanks Ben!”</p>
                 </div>
                 <div className="testiomonials__card">
                     <img src={person} alt="person" />
                     <p className="testiomonials__text">“I had the best experience training with Ben my Tennis coach, thanks Ben!”</p>
                 </div>
                 <div className="testiomonials__card">
                     <img src={person} alt="person" />
                     <p className="testiomonials__text">“I had the best experience training with Ben my Tennis coach, thanks Ben!”</p>
                 </div>
                 <div className="testiomonials__card">
                     <img src={person} alt="person" />
                     <p className="testiomonials__text">“I had the best experience training with Ben my Tennis coach, thanks Ben!”</p>
                 </div>

                 
             </Carousel>
         </section>

         <Footer />
    </div>
    )
}

export default Home;