import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillCaretRight } from "react-icons/ai";
import { AnimationOnScroll } from "react-animation-on-scroll";
import displayPic from '../../images/displayPic.webp'; // Import the image

function AboutCard() {
  return (
    <Card className="quote-card-view">
      {/* Add the image here */}
      <Card.Img variant="top" src={displayPic} style={{ borderRadius: "50%", width: "200px", height: "200px", margin: "auto", display: "block" }} />
      <Card.Body>
        <p className={"aboutCard"}>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration="2" animateOnce={true}>
            Hi Everyone, I am <span className="purple">Siddharth Srivastava </span>
            from <span className="purple"> Prayagraj, India. </span>
            <span>I am currently pursuing</span><span className="purple"> Bachelor of Technology</span> in<span className="purple"> Computer Science</span>, at United Institute of Technology located in Naini, Prayagraj.
            <br></br>
            <br />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration="2" animateOnce={true}>
            Apart from coding, some other activities that I love to do!
          </AnimationOnScroll>
        </p>
        <ul>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration="1" delay="900" animateOnce={true}>
            <li className="about-activity">
              <AiFillCaretRight className={"aboutHobbies"} /> Gymnasium
            </li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration="1" delay="1300" animateOnce={true}>
            <li className="about-activity">
              <AiFillCaretRight className={"aboutHobbies"} /> Watching Web Series
            </li>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration="1" delay="1700" animateOnce={true}>
            <li className="about-activity">
              <AiFillCaretRight className={"aboutHobbies"} /> Travelling
            </li>
          </AnimationOnScroll>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
