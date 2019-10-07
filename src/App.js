import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './Styles/App.css';
import Navigation from './Components/Navigation';
import Menu from './Components/Menu';
import { theme } from './Styles/theme';
import config from './Assets/particles.json';
import merge from 'lodash/merge';

import {
  Header,
  About,
  Projects,
  Contact,
  Footer,
} from './Components/Sections/';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.background};
`;

const App = () => {
  const [menuActive, toggleMenu] = useState(false);
  const [accentColor, setAccentColor] = useState(theme.accentColors.primary);
  const [particlesConfig, setParticlesConfig] = useState(config);
  const [opacity, setOpacity] = useState(1);
  const [progress, setProgress] = useState(0);

  const switchAccentColor = color => {
    const newConfig = merge({}, particlesConfig, {
      particles: {
        color: {
          value: color,
        },
      },
    });
    setParticlesConfig(newConfig);
    setAccentColor(color);
  };

  useEffect(() => {
    const onScroll = () => {
      const progress =
        window.pageYOffset < window.innerHeight
          ? window.pageYOffset / window.innerHeight
          : 1;

      const newOpacity = (1 - progress) * opacity;

      setProgress(progress);
      setOpacity(newOpacity, progress);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line
  }, []);

  return (
    <AppContainer>
      <ThemeProvider theme={{ ...theme, accentColor }}>
        <Navigation
          opacity={progress}
          active={menuActive}
          toggleMenu={toggleMenu}
          switchAccentColor={switchAccentColor}
        />
        <Menu active={menuActive} toggleMenu={toggleMenu} />
        <Header
          progress={progress}
          particlesConfig={particlesConfig}
          setParticlesConfig={setParticlesConfig}
          accentColor={accentColor}
          opacity={opacity}
          setAccentColor={setAccentColor}
        />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </AppContainer>
  );
};

export default App;
