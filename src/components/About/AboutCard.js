import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Daffa Akmal Nafi </span>
            from <span className="purple"> East Java, Indonesia.</span>
            <br />
            I am currently a student as a software developer at Vocational High School of Telkom Malang.
            <br />
            I have completed various Mini-Projects in Flutter, Kotlin, and Java programming. 
            I have also completed various Skill Certifications as a Junior Designer and Associate Data Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> UI/UX Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dream, Create, Future."{" "}
          </p>
          <footer className="blockquote-footer">Dffinnsz!</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
