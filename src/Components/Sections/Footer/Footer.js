import React from 'react';
import { FooterContainer, SocialBox, Icon, Foot } from './styles';

const Footer = props => (
  <FooterContainer id="footer">
    <SocialBox accentColor={props.accentColor}>
      <a
        href="https://github.com/craycraftdan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="fab fa-github fa-4x"></Icon>
      </a>
      <a
        href="https://twitter.com/TheSirFry"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="fab fa-twitter fa-4x"></Icon>
      </a>
      <a
        href="https://codepen.io/craycraftdan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="fab fa-codepen fa-4x"></Icon>
      </a>
    </SocialBox>
    <Foot accentColor={props.accentColor}>Crafted by Craycraft © 2019</Foot>
  </FooterContainer>
);

export default Footer;
