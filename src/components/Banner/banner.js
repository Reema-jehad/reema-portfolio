import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import headerImg from "../../assets/header.png";
import "./banner.css";

export const Banner = () => {
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState("");
  // const [delta, setDelta] = useState(100); // Faster typing speed
  // const [loopNum, setLoopNum] = useState(0);
  // const toRotate = "ront-End Developer";
  // const period = 1000; // Pause period when the string is fully typed

  // useEffect(() => {
  //   const ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text]);

  // const tick = () => {
  //   const fullText = toRotate;
  //   const updatedText = isDeleting
  //     ? fullText.substring(0, text.length - 1)
  //     : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta(50); 
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === "") {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setDelta(100); // Reset typing speed
  //   }
  // };
  return (
    <section className="banner" id="home">
      <Container className="container">
        <Row className="align-items-center">
          <Col className="first" xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm REEMA JEHAD `}
              <br />
              <span className="wrap">F{text}</span>
            </h1>
            <a href="mailto:reemajehad0@gmail.com?" class="email">
            <button onClick={() => console.log()}>
              Let's connect <FaArrowRight size={25} />
            </button>
            </a>
          </Col>
          <Col className="second" xs={12} md={6} xl={5}>
            <img src={headerImg} alt="" />
          </Col>
        </Row>
      </Container>
      <svg
        className="svg2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        // style="translate: none; rotate: none; scale: none; transform: translate(0px); opacity: 1;"
      >
        <path
          fill="#93aec1"
          fill-opacity="1"
          d="M0,256L80,250.7C160,245,320,235,480,192C640,149,800,75,960,53.3C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Banner;
