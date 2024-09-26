import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/developer.png"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Anish Das</strong>. I'm currently in my final year of pursuing <strong>Bachelor of Technology</strong> in <strong>Information Technology</strong> at <strong>Techno Main Salt Lake</strong>.I completed my schooling at <strong>R.P. Vivekananda Vidyapith</strong>. Passionate about technology and innovation, I'm keen on exploring the latest advancements in IT, particularly in software development and system design.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My academic journey has equipped me with a solid foundation in programming, data structures, algorithms, and system design. I’ve worked on various personal and collaborative projects, which have helped enhance my problem-solving skills and adaptability. I remain determined to expand my expertise and continue learning as I prepare to enter the tech industry.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            In my free time, I enjoy watching movies, listening to music, coding, and playing video games. I’m eager to contribute to the tech industry with my skills and enthusiasm, always ready for new challenges and innovative projects. 
            <div className="tagline2">
            I have become confident using the following technologies:
            </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
