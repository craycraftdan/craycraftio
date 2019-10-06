import React from "react";
import { NavContainer, Bar } from "./styles";

const Navigation = props => (
  <NavContainer onClick={() => props.toggleMenu(props.active ? false : true)}>
    <Bar bar={"one"} active={props.active} />
    <Bar bar={"two"} active={props.active} />
    <Bar bar={"three"} active={props.active} />
  </NavContainer>
);

export default Navigation;
