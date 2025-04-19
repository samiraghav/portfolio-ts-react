import React from 'react';
import { Container } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            I’m a passionate Full Stack Developer with <strong>2.3 years of experience</strong> building scalable, high-performance web applications. At <strong>Sportskeeda</strong>, I contributed to platforms serving over <strong>100M+ monthly active users</strong>, delivering impactful features across both frontend and backend systems.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            My core stack includes <strong>JavaScript (Vanilla + ReactJS)</strong>, <strong>PHP</strong>, <strong>Golang</strong>, and <strong>Smarty</strong>, with solid experience working on <strong>MySQL</strong>, <strong>MongoDB</strong>, and <strong>Elasticsearch</strong>. I’ve built everything from engagement-driven frontend components to scalable backend modules and admin tooling for content-heavy platforms like <strong>Soapcentral (6–7M MAUs)</strong>.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <p>
            I also worked at <strong>Shreeshantha IT Solutions</strong>, where I developed and maintained websites using <strong>Bootstrap</strong> and <strong>WordPress</strong> for client-facing products. The focus was on clean UI, responsive layouts, and seamless content updates.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={350}>
          <p>
            Outside of work, I’ve built several personal projects using <strong>ReactJS</strong>, exploring tools like compilers, anime explorers, and content discovery platforms. I enjoy solving real-world problems, working with fast-paced teams, and constantly learning new technologies to stay ahead in the game.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={130}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={140}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={160}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={170}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={180}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={190}>
              <img src={boostrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={200}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Container>
  );
}
