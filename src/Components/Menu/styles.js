import styled from "styled-components";
import { fadeIn } from "../../Styles/animations";

export const MenuContainer = styled.div`
  background-color: ${props => props.theme.backgroundTwo};
  width: ${props => (props.active ? "100vw" : "0px")};
  height: ${props => (props.active ? "100vh" : "0px")};
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  font-size: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  opacity: 0;
  animation: ${fadeIn} 1.5s 0.2s ease 1;
  animation-fill-mode: forwards;
`;

export const MenuItem = styled.div`
  color: #eeeff7;
  height: 33%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  letter-spacing: 6px;

  :hover {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.accentColor};
    letter-spacing: 10px;
  }
`;
