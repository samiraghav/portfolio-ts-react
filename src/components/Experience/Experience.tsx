import React from "react";
import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div className="experience-list">

        <ScrollAnimation animateIn="flipInX">
          <div className="experience-item">
          <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://www.sportskeeda.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <header>
              <h3>Software Developer Intern</h3>
              <p>Jan 2023 - Apr 2023</p>
            </header>
            <div className="timestamp">
              <p>Shreeshantha It Solutions Private Limited</p> {/* Move "Remote" inside a separate div */}
              <div>Remote</div>
            </div>
            <ul>
              <li>Used proficiency in Bootstrap, HTML, CSS, JavaScript, Angular to develop and maintain the websites.</li>
              <li>Developed 
              <a
                  href="https://www.sportskeeda.com/"
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
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="experience-item">
          <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://www.sportskeeda.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <header>
              <h3>Software Engineer Intern</h3>
              <p>May 2023 - Present</p>
            </header>
            <div className="timestamp">
              <p>Sportskeeda</p> {/* Move "Remote" inside a separate div */}
              <div>Remote</div>
            </div>
            <ul>
              <li>Used proficiency in HTML, CSS, JavaScript, PHP, and Golang to maintain the website.</li>
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
        </ScrollAnimation>

      </div>
    </Container>
  );
}
