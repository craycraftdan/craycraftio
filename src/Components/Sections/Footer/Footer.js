import React from "react";
import { FooterContainer, SocialBox, Icon, Foot } from "./styles";

const Footer = () => (
  <FooterContainer id="footer">
    <SocialBox>
      <a
        href="https://github.com/craycraftdan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="footer-icon fab fa-github fa-4x"></Icon>
      </a>
      <a
        href="https://twitter.com/TheSirFry"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="footer-icon fab fa-twitter fa-4x"></Icon>
      </a>
      <a
        href="https://codepen.io/craycraftdan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="footer-icon fab fa-codepen fa-4x"></Icon>
      </a>
    </SocialBox>
    <Foot>Crafted by Craycraft © 2019</Foot>
  </FooterContainer>
);

export default Footer;
