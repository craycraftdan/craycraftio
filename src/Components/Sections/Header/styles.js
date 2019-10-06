import styled from "styled-components";
import { rubberBand } from "../../../Styles/transitions";
import { bounce, typeIn, fadeIn } from "../../../Styles/animations";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 6.5rem;
  font-weight: 500;
  letter-spacing: 2rem;
  opacity: 0.7;
  transition: all 1.5s ${rubberBand};
`;

export const Subtitle = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
  opacity: 0.7;
  padding-left: 1rem;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typeIn} 2s steps(18);
  transition: all 1.5s ${rubberBand};
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeIn} 1.5s 0.2s ease 1;
  animation-fill-mode: forwards;

  :hover * {
    color: ${props => props.theme.accentColor} !important;
    opacity: 1;
  }
  :hover ${Title} {
    letter-spacing: 2.8rem;
    opacity: 1;
  }
  :hover ${Subtitle} {
    letter-spacing: 0.8rem;
    opacity: 1;
  }
`;

export const ChevBox = styled.div`
  position: absolute;
  bottom: 25px;
  width: 6.5rem;
  height: 4.2rem;
  cursor: pointer;
  opacity: ${props => props.opacity};
  animation: ${bounce} 3s infinite;

  :hover * {
    background-color: ${props => props.theme.accentColor} !important;
    opacity: 1;
  }
`;

export const ChevSide = styled.div`
  width: 42px;
  height: 10px;
  background-color: #eeeff7;
  transform: ${props =>
    props.leftSide
      ? "rotate(45deg) translateX(9px) translateY(12px)"
      : "rotate(-45deg) translateX(12px) translateY(18px)"};
  transition: all 0.4s ease-in-out;
`;

/* add fade in */
