import React, { useState, useEffect } from 'react';
import random from 'lodash/random';
import merge from 'lodash/merge';
import tinycolor from 'tinycolor2';
import { scroller } from 'react-scroll';
import Particles from 'react-particles-js';
import {
  HeaderContainer,
  TitleBox,
  Title,
  Subtitle,
  ChevBox,
  ChevSide,
} from './styles';

const Header = props => {
  const { opacity } = props;

  const subtitles = [
    'JavaScript Aficionado',
    'Video Game Sommelier',
    'Pretentious Title Curator',
    'Professional Computer Nerd',
  ];

  const particleStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    margin: '0',
    padding: '0',
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const [titleIndex, setTitleIndex] = useState(0);
  const [firstRun, setFirstRun] = useState(true);

  const scrollTo = () => {
    scroller.scrollTo('about', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const randomItemFromArray = (prevValue, values) => {
    const validValues = values.filter(value => value !== prevValue);
    const index = random(0, validValues.length - 1);
    return validValues[index];
  };

  const randomizeParticles = () => {
    const { type: prevType } = props.particlesConfig.particles.shape;
    const shapes = ['circle', 'edge', 'triangle', 'polygon', 'star'];
    const type = randomItemFromArray(prevType, shapes);
    const nb_sides = random(3, 10);
    const hue = random(0, 360);
    const color = tinycolor(`hsl(${hue}, 50%, 60%)`).toHexString();
    const size = random(4, 10);

    const newConfig = merge({}, props.particlesConfig, {
      particles: {
        color: {
          value: color,
        },
        shape: {
          type,
        },
        polygon: {
          nb_sides,
        },
        size: {
          value: size,
        },
      },
    });

    props.setAccentColor(color);
    props.setParticlesConfig(newConfig);
  };

  useEffect(() => {
    const delay = firstRun ? 3000 : 2500;
    const rotateTitle = setInterval(() => {
      const nextIndex = titleIndex + 1;
      setTitleIndex(nextIndex >= subtitles.length ? 0 : nextIndex);
      setFirstRun(false);
    }, delay);
    return () => clearInterval(rotateTitle);
  }, [titleIndex, subtitles, firstRun, setFirstRun]);

  return (
    <HeaderContainer id="header">
      <div style={{ opacity }}>
        <Particles
          style={{
            ...particleStyles,
            display: `${props.progress >= 1 ? 'none' : 'block'}`,
          }}
          params={props.particlesConfig}
        />
      </div>
      <TitleBox onClick={() => randomizeParticles()}>
        <Title>CRAYCRAFT</Title>
        <Subtitle>{subtitles[titleIndex]}</Subtitle>
      </TitleBox>
      <ChevBox opacity={opacity - 0.3} onClick={scrollTo}>
        <ChevSide leftSide />
        <ChevSide rightSide />
      </ChevBox>
    </HeaderContainer>
  );
};

export default Header;
