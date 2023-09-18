import React from "react";
import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div className="experience-list">

          <div className="experience-item">
          
            <header>
              <h3>Software Developer Intern</h3>
              <p>Jan 2023 - Apr 2023</p>
            </header>
            <div className="timestamp">
              <p>Shreeshantha It Solutions Private Limited</p>
              <div>Remote</div>
            </div>
            <ul>
              <li>Used proficiency in Bootstrap, HTML, CSS, JavaScript, Angular to develop and maintain the websites.</li>
              <li>Developed 
              <a
                  href="https://raaksapphire.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Raak Sapphire
                </a>
                , 
                  Techer Solutions and worked on simultaneous updates of 
                <a
                  href="https://makermasti.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Makermasti
                </a> and 
                <a
                  href="https://onlinemenu.co.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Onlinemenuco
                </a>.</li>
            </ul>
          </div>

          <div className="experience-item">
            <header>
              <h3>Software Engineer Intern</h3>
              <p>May 2023 - Aug 2023</p>
            </header>
            <div className="timestamp">
              <p>Sportskeeda</p> 
              <div>Remote</div>
            </div>
            <ul>
              <li>Developed a feature to add URL tag items and add Team or Section(super admins) using PHP and JavaScript.</li>
              <li>Incorporated a feature to add FAQs in players and teams subpages Added subpages for events categories using
PHP and JavaScript.</li>
            </ul>
          </div>

        <div className="experience-item">
            <header>
              <h3>Software Development Engineer 1</h3>
              <p>August 2023 - Present</p>
            </header>
            <div className="timestamp">
              <p>Sportskeeda</p> 
              <div>Remote</div>
            </div>
            <ul>
              <li>Worked on revamping the contact us page of SportsKeeda website using PHP, JavaScript and Golang.</li>
              <li>Working on the continuous updates in the  
                <a
                  href="https://www.sportskeeda.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sportskeeda
                </a> website.</li>
            </ul>
          </div>

      </div>
    </Container>
  );
}
