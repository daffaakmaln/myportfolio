import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import cashier1 from "../../Assets/Projects/cashier1.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ngalamin.yuk"
              description="Jan 2023 - A prototype of the Malang Region tourism website that can be integrated with local government. Aims to get all the data collection of the number of tourism in Malang Raya. Equipped with information, ticketing, accommodation, and UMKM features."
              figmaLink="https://www.figma.com/design/D2r4gpx4esBPb2fx0Img4U/FinalProduct?node-id=0-1&t=nO24kqD3qVqYoOM2-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="KnowIT.com"
              description="May 2024 - A prototype website to search for scholarships and foreign internships in the field of technology for high or vocational school graduates. There are various features such as AI Chat that is directly integrated with registered universities, scholarship calendar, requirements, as well as training needed to enter leading scholarships."
              figmaLink="https://www.figma.com/design/zHqFIXaIbZIB8GkehqJtrn/Knowit.com?node-id=0-1&t=MuBRlngSsrV9H38a-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="eTERNA"
              description="June 2024 - A business model application in the field of eco-friendly fashion that focuses on reducing clothing waste and fast-fashion. Various key features such as e-commerce, local thrifting, clothing donations, and cool eco-friendly merchandise can be obtained using a coin earnings system (obtained through users who are active in the application)."
              demoLink="https://www.canva.com/design/DAGGlltwRMM/bW5HysHLDutXLCPn0kKFvg/view?utm_content=DAGGlltwRMM&utm_campaign=designshare&utm_medium=link&utm_source=editor"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Perlu Tukang Apps"
              description="May 2024 - Perlu Tukang is an application specialized in technicians to make it easier for users to find reliable technicians. This application also provides features such as direct consultation with technician experts. Some progress features such as construction, installation, and work can be directly monitored by the user. Important features such as location, payment, and chat to make it easier for users."
              ghLink="https://github.com/daffaakmaln/UKL_Aplikasi_Tukang"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="WashWush"
              description="May 2024 - Final Project in the form of Laundry App (WashWush) A third party laundry application that can facilitate laundry services and laundry customers. This application is based on real-time and accepts requests from customers Laundry will vary depending on customer requests (Personal Orders), so that it better reaches the wishes of customers. Important features such as location, payment, and chat to make it easier for users."
              ghLink="https://github.com/daffaakmaln/final_projext_TA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cashier1}
              isBlog={false}
              title="Cashier App (Cafe)"
              description=" Okt 2024 - A Flutter POS (Point of Sale) project for Wikusama Cafe. This cashier system supports three types of users: cashiers, managers, and admins. The system is designed to streamline cafe operations, making order management and transaction tracking easier. Customers can make additional orders by returning to the cashier, where their data can be updated. Payment is made before customers leave the cafe.                         "
              ghLink="https://github.com/daffaakmaln/UKK_Wikusama_cafe"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
