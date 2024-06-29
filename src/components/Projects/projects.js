import React from "react";
import "./projects.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Leon from "../../assets/Leon.png";
import Kaspar from "../../assets/kasper.png";
import Reema from "../../assets/Reema.png";
import Dashboard from "../../assets/Dashboard.png";
import SpecialDesign from "../../assets/SpecialDesign.png";
import restaurant from "../../assets/resturant.png";
import gpt3 from "../../assets/gpt3.png";
import Bondi from "../../assets/Bondi.png";
import space from "../../assets/space.png";
import { ProjectCard } from "./ProjectCard";

export const projects = () => {
  const projects = [
    {
      title: "Leon",
      languages: "HTML/CSS",
      imageUrl: Leon,
    },
    {
      title: "Kaspar",
      languages: "HTML/CSS",
      imageUrl: Kaspar,
    },
    {
      title: "Reema",
      languages: "HTML/CSS",
      imageUrl: Reema,
    },
    {
      title: "Dashboard",
      languages: "HTML/CSS",
      imageUrl: Dashboard,
    },
    {
      title: "Special-Design",
      languages: "HTML/CSS, JavaScript",
      imageUrl: SpecialDesign,
    },
    {
      title: "Space",
      languages: "HTML/CSS, JavaScript",
      imageUrl: space,
    },
    {
      title: "Bondi",
      languages: "HTML/CSS, Bootstrap",
      imageUrl: Bondi,
    },
    {
      title: "gpt3",
      languages: "HTML/CSS, React",
      imageUrl: gpt3,
    },
    {
      title: "restaurant-website",
      languages: "HTML/CSS, React",
      imageUrl: restaurant,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            {/* <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum unde
              fugiat quibusdam culpa molestiae dignissimos aperiam voluptate
              atque eos temporibus. At expedita minima possimus rem autem atque
              non excepturi fugiat.
            </p> */}
            <Tab.Container id="projects-tabs">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">HTML/CSS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">JavaScript</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Bootstrap</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Sass</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">lorem</Tab.Pane>
                <Tab.Pane eventKey="third">lorem</Tab.Pane>
                <Tab.Pane eventKey="fourth">lorem</Tab.Pane>
                <Tab.Pane eventKey="fifth">lorem</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default projects;
