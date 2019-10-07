import React from 'react';
import { NavContainer, Bar, Nav } from './styles';
import ColorSwitcher from '../ColorSwitcher';

const Navigation = props => (
  <NavContainer active={props.active} opacity={props.opacity}>
    <ColorSwitcher onChange={props.switchAccentColor} active={props.active} />
    <Nav onClick={() => props.toggleMenu(props.active ? false : true)}>
      <Bar bar={'one'} active={props.active} />
      <Bar bar={'two'} active={props.active} />
      <Bar bar={'three'} active={props.active} />
    </Nav>
  </NavContainer>
);

export default Navigation;
