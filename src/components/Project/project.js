import React from "react";
import "./project.css";
import Leon from "../../assets/Leon.png";
import Kaspar from "../../assets/kasper.png";
import Reema from "../../assets/Reema.png";
import Dashboard from "../../assets/Dashboard.png";
import SpecialDesign from "../../assets/SpecialDesign.png";
import restaurant from "../../assets/resturant.png";
import gpt3 from "../../assets/gpt3.png";
import Bondi from "../../assets/Bondi.png";
import space from "../../assets/space.png";

const project = () => {
  let switcher = document.querySelectorAll(".project ul li");
  console.log(switcher);
  let boxes = document.querySelectorAll(".project .boxes .box");

  switcher.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageBoxes);
  });

  function removeActive() {
    switcher.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  }

  function manageBoxes() {
    boxes.forEach((box) => {
      box.style.display = "none";
    });
    console.log(document.querySelectorAll(this.dataset.lang))
    document.querySelectorAll(this.dataset.lang).forEach((el) => {
      el.style.display = "block";
    });
  }

  return (
    <div className="project" id="Project">
      <div className="container">
        <h3>My Project</h3>
        <ul>
          <li className="active" data-lang=".all">
            All
          </li>
          <li data-lang=".html">HTML</li>
          <li data-lang=".css">CSS</li>
          <li data-lang=".js">JavaScript</li>
          <li data-lang=".bootstrap">Bootstrap</li>
          <li data-lang=".react">React</li>
        </ul>
        <div className="boxes">
          <div className="box all html css react">
            <div className="img-container">
              <a
                href="https://reema-jehad.github.io/restaurant-website/"
                target="”_blank”"
              >
                <img src={restaurant} alt="" />
              </a>
            </div>
            <ul className="languages">
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
            </ul>
          </div>
          <div className="box all html css react">
            <div className="img-container">
              <a
                href="https://reema-jehad.github.io/gpt3-web/"
                target="”_blank”"
              >
                <img src={gpt3} alt="" />
              </a>
            </div>
            <ul className="languages">
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
            </ul>
          </div>
          <div className="box all html css">
            <div className="img-container">
              <a
                href="https://reema-jehad.github.io/Template-Three-Reema/"
                target="”_blank”"
              >
                <img src={Reema} alt="" />
              </a>
            </div>
            <ul className="languages">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="box all html css">
            <div className="img-container">
              <a
                href=" https://reema-jehad.github.io/Template-Two-Kaspar/"
                target="”_blank”"
              >
                <img src={Kaspar} alt="" />
              </a>
            </div>
            <ul className="languages">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="box all html css">
            <div className="img-container">
              <a
                href="https://reema-jehad.github.io/Temaplate-One-Leon/"
                target="”_blank”"
              >
                <img src={Leon} alt="" />
              </a>
            </div>
            <ul className="languages">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="box all html css">
            <div className="img-container">
              <a
                href="https://resonant-cendol-fa4c76.netlify.app"
                target="”_blank”"
              >
                <img src={Dashboard} alt="" />
              </a>
            </div>
            <ul className="languages">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="box all html css js">
            <div className="img-container">
              <a
                href="https://reema-jehad.github.io/Special-Design/"
                target="”_blank”"
              >
                <img src={SpecialDesign} alt="" />
              </a>
            </div>
            <ul className="languages">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="box all html css js">
            <div className="img-container">
              <a
                href="https://reema-jehad.github.io/Space-Website/"
                target="”_blank”"
              >
                <img src={space} alt="" />
              </a>
            </div>
            <ul className="languages">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="box all html css bootstrap">
            <div className="img-container">
              <a href="https://reema-jehad.github.io/Bondi/" target="”_blank”">
                <img src={Bondi} alt="" />
              </a>
            </div>
            <ul className="languages">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="down">
        <a href="#contact">
          <i className="fa-solid fa-angles-down"></i>
        </a>
      </div>
    </div>
  );
};

export default project;
