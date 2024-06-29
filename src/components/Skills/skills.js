import React from "react";
import "./skills.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";

const skills = () => {
//   let number = document.getElementById("number");
//   let counter = 0;
//   setInterval(() => {
//     if ((counter = 65)) {
//       clearInterval();
//     } else {
//       counter += 1;
//       number.innerHTML = counter + "%";
//     }
//   }, 30);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                These are my Technical skills in the front-end field, including expertise
                in building responsive web applications, implementing state
                management solutions.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <div className="brogress-bar">
                    <div className="outer">
                      <div className="iner">
                      <div id="number1">95%</div>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="160px"
                      height="160px"
                    >
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#f8af40" />
                          <stop offset="100%" stop-color="#f8af40" />
                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                  </div>
                  <h5>HTML/CSS</h5>
                </div>
                <div className="item">
                  <div className="brogress-bar">
                    <div className="outer">
                      <div className="iner">
                        <div id="number2">80%</div>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="160px"
                      height="160px"
                    >
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#e91e63" />
                          <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                  </div>{" "}
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <div className="brogress-bar">
                    <div className="outer">
                      <div className="iner">
                        <div id="number3">60%</div>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="160px"
                      height="160px"
                    >
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#e91e63" />
                          <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                  </div>{" "}
                  <h5>React</h5>
                </div>
                <div className="item">
                  <div className="brogress-bar">
                    <div className="outer">
                      <div className="iner">
                        <div id="number4">80%</div>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="160px"
                      height="160px"
                    >
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#e91e63" />
                          <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                      </defs>
                      <circle value="80" cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                  </div>{" "}
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <div className="brogress-bar">
                    <div className="outer">
                      <div className="iner">
                        <div id="number5">60%</div>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="160px"
                      height="160px"
                    >
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#e91e63" />
                          <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                  </div>{" "}
                  <h5>Sass</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default skills;
