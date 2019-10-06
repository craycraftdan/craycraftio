import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./Styles/App.css";
import Navigation from "./Components/Navigation";
import Menu from "./Components/Menu";
import { theme } from "./Styles/theme";

import {
  Header,
  About,
  Projects,
  Contact,
  Footer
} from "./Components/Sections/";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.background};
`;

const App = () => {
  const [menuActive, toggleMenu] = useState(false);
  const [accentColor, setAccentColor] = useState(theme.accentColors.primary);

  return (
    <AppContainer>
      <ThemeProvider theme={{ ...theme, accentColor }}>
        <Navigation active={menuActive} toggleMenu={toggleMenu} />
        <Menu active={menuActive} toggleMenu={toggleMenu} />
        <Header accentColor={accentColor} setAccentColor={setAccentColor} />
        <About accentColor={accentColor} />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </AppContainer>
  );
};

export default App;
