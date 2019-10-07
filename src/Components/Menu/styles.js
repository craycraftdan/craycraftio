import styled from 'styled-components';
import { fadeIn } from '../../Styles/animations';

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  visibility: ${props => (props.active ? null : 'hidden')};
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
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
  background-color: ${props => props.theme.backgroundTwo};
  color: ${props => props.theme.white};
  height: 33.5%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 6px;
  transform: ${props =>
    props.active ? 'translateX(0px)' : `translateX(${props.offSide})`};
  transition: all 0.4s ease-in-out;

  :hover {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.accentColor};
    letter-spacing: 10px;
  }
`;
