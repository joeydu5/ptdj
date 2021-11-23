import React from "react";
import "./about.styles.scss";
import aboutImage from "../../images/about.png";
import map from "../../images/map.png";
import Button from "../../components/button/button";
import about1 from "../../images/about1.png"
import about2 from "../../images/about2.png"
import about3 from "../../images/about3.png"

const About= ()=> {
    return (
        <div>
            <section className="about">
            <div className="about__head">
                <h1 className="about__title">ABOUT US</h1>
                <img src={aboutImage} alt="about us" />
            </div>

            <div className="about__body body">
                <div className="body__prime">
                    <h2 className="body__title">Our Mission</h2>
                    <p className="body__text">It is our mission to connect you with the best of the best, all star coaches, 
                    so that you can bring your a-game to your next match.</p>
                </div>

                <div className="block">
                    <img className="block__img" src={about1} alt="about us" />
                    <div className="block__container">
                        <h4 className="block__title">We can help</h4>
                        <p>Founded in 2021, after the world opened its gates again to sport being allowed, 
                        mentorme was born to help anyone wanting to get back into shape or to get back in the game. </p>
                    </div>
                </div>

                <div className="block">
                    <div className="block__container">
                        <h4 className="block__title">We can help</h4>
                        <p>Whether you’re a novice, an aspiring athlete or  ready to get back in the game - we can help. After all, no-one makes it alone! </p>
                        <p>We have numerous coaches that you can trust to get you to where you want to be.</p>
                        <Button props={"VIEW COACHES"} />
                    </div>
                    <img className="block__img" src={about2} alt="about us" />
                </div>

                <div className="block">
                    <img className="block__img" src={about3} alt="about us" />
                    <div className="block__container">
                        <h4 className="block__title">Our Guarantee</h4>
                        <p>We guarantee that all of our partnered coaches are qualified and are insured, so that all you have to worry about is smashing the game out of the park.</p>
                        <p>If you need some extra help with your chosen sports discipline, we are here to find the perfect match.</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
        
    )
}
export default About