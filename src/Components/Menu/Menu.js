import React from 'react';
import { scroller } from 'react-scroll';
import { MenuContainer, MenuItem } from './styles';

const Menu = props => {
  const sections = ['about', 'projects', 'contact'];

  const scrollTo = section => {
    props.toggleMenu();
    scroller.scrollTo(section, {
      duration: 900,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <MenuContainer active={props.active}>
      {sections.map(section => (
        <MenuItem
          key={section}
          active={props.active}
          offSide={section === 'projects' ? '-100vw' : '100vw'}
          onClick={() => scrollTo(section)}
        >
          {section.toUpperCase()}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;
