import React from "react";
import {
  mongoLogo,
  nodeLogo,
  reactLogo,
  reduxLogo,
  aboutMeSVG,
  skillsSVG
} from "../../../Assets/Images/index";
import { AboutContainer } from "./styles";

const About = props => (
  <AboutContainer className="about" id="about" accentColor={props.accentColor}>
    About
    <div style={{ width: "400px", height: "400px" }}>
      <img src={aboutMeSVG} alt="About Me SVG" style={{ width: "100%" }}></img>
    </div>
    <div style={{ width: "400px", height: "400px" }}>
      <div className="smoke smokeOne"></div>
      <div className="smoke smokeTwo"></div>
      <div className="smoke smokeThree"></div>
      <div className="smoke smokeFour"></div>
      <img src={skillsSVG} alt="About Me SVG"></img>
    </div>
    <div className="logo-container">
      <img src={mongoLogo} alt="" style={{ width: "175px", height: "150px" }} />
      <img src={nodeLogo} alt="" style={{ width: "150px", height: "150px" }} />
      <img src={reactLogo} alt="" style={{ width: "210px", height: "150px" }} />
      <img src={reduxLogo} alt="" style={{ width: "150px", height: "140px" }} />
    </div>
  </AboutContainer>
);

export default About;
