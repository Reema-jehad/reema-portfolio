import React from "react";
import "./about.css"
import aboutImg from "../../assets/reema.jpeg";


const about = () => {
  return (
    <div>
      <div className="about" id="about">
      <div className="container">
          <div class="content">
            <div class="img">
              <img src={aboutImg} alt="" />
            </div>
            <div class="right">
              <h3>About Me</h3>
              <p>
                I'm a recent Software Engineering graduate with a Front-End
                development focus. Proficient in HTML, CSS, and JavaScript, I've
                honed skills in software methodologies, algorithms, and
                problem-solving. Experienced in React, I craft dynamic user
                interfaces for optimal experiences on diverse devices and
                browsers through engaging projects during my academic tenure.
              </p>
              <input type="button" value="MY CV" />
            </div>
          </div>
        </div>
        <div class="down">
          <a href="#project">
            <i class="fa-solid fa-angles-down"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default about;
