import React, { useEffect } from "react";
import { useState } from "react";
import "./header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  });
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container className="navbar-container">
        <Navbar.Brand href="#home">
          <h1>REEMA</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#Project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project")}
            >
              Project
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <div>
                <a href="#">
                  <FaGithub />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
              </div>
            </div>
            <a href="mailto:reemajehad0@gmail.com?" class="email">
            <button className="vvd" onClick={() => console.log("connect")}>
              Let's Connect
            </button>
            </a>
            {/* </div> */}
          </span>
        </Navbar.Collapse>

        <div className="navbar-smallscreen">
          <GiHamburgerMenu
            color="var(--color-pink)"
            fontSize={35}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
          {toggleMenu && (
            <div className="navbar-overlay flex__center slide-bottom">
              <GrClose
                color="var(--color-pink)"
                fontSize={27}
                className="overlay-close"
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
              <ul className="smallscreen-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
