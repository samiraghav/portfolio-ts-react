import React from "react";
import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <header>
            <h3>Software Engineer</h3>
            <p>Aug 2023 – Present</p>
          </header>
          <div className="timestamp">
            <p>Sportskeeda</p>
            <div>Remote</div>
          </div>
          <ul>
            <li>
              ✅ Leading development of user engagement features and scalable frontend modules for cricket content platforms.
            </li>
            <li>
              ✅ Built reusable content systems, tag/team modules, and automated tools for editorial workflows.
            </li>
            <li>
              ✅ Worked on{" "}
              <a
                href="https://www.soapcentral.com/"
                target="_blank"
                rel="noreferrer"
              >
                Soapcentral
              </a>{" "}
              (6–7M MAUs), improving content delivery pipelines and backend APIs.
            </li>
            <li>
              ✅ Collaborated cross-functionally to optimize performance and ship user-focused product enhancements.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <header>
            <h3>Software Engineer Intern</h3>
            <p>May 2023 – Aug 2023</p>
          </header>
          <div className="timestamp">
            <p>Sportskeeda</p>
            <div>Remote</div>
          </div>
          <ul>
            <li>
              ✅ Developed and enhanced internal tools using PHP, JavaScript, and Smarty templates.
            </li>
            <li>
              ✅ Contributed to modular content systems and editorial workflow improvements.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <header>
            <h3>Software Developer Intern</h3>
            <p>Jan 2023 – Apr 2023</p>
          </header>
          <div className="timestamp">
            <p>Shreeshantha IT Solutions Pvt Ltd</p>
            <div>Remote</div>
          </div>
          <ul>
            <li>
              ✅ Built responsive web apps for clients using Bootstrap and Angular.
            </li>
            <li>
              ✅ Developed{" "}
              <a
                href="https://raaksapphire.com/"
                target="_blank"
                rel="noreferrer"
              >
                Raak Sapphire
              </a>
              , Techer Solutions, and delivered updates for{" "}
              <a
                href="https://makermasti.com/"
                target="_blank"
                rel="noreferrer"
              >
                Makermasti
              </a>{" "}
              and{" "}
              <a
                href="https://onlinemenu.co.in/"
                target="_blank"
                rel="noreferrer"
              >
                Onlinemenuco
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
