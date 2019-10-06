import styled from "styled-components";
import { rubberBand } from "../../Styles/transitions";
import { pop } from "../../Styles/animations";

export const Option = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background-color: ${props => props.color};
  cursor: pointer;
  z-index: 100;
  opacity: 0.5;
  animation: ${pop} ${props => props.length}s ${rubberBand}
    ${props => props.delay}s infinite;
  transition: all 0.5s ${rubberBand};
`;

export const ColorSwitcherContainer = styled.div`
  position: fixed;
  z-index: 998;
  top: 0px;
  left: 0px;
  padding: 15px 25px 25px 15px;
  width: 195px;
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ${rubberBand};

  :hover ${Option} {
    animation-play-state: paused;
    opacity: 0.7;
  }
`;

export const OptionBox = styled.div`
  width: 20%;
  height: 25px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ${rubberBand};

  :hover ${Option} {
    animation-play-state: paused;
    width: 20px;
    height: 20px;
    opacity: 1;
  }
`;
