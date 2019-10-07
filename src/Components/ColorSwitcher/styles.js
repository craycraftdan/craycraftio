import styled from 'styled-components';
import { rubberBand } from '../../Styles/transitions';
import { pop } from '../../Styles/animations';

export const Option = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  opacity: 0.5;
  background-color: ${props => props.color};
  cursor: pointer;
  animation: ${pop} ${props => props.length}s ${rubberBand}
    ${props => props.delay}s infinite;
  transition: all 0.5s ${rubberBand};
`;

export const ColorSwitcherContainer = styled.div`
  width: ${props => (!props.active ? '190px' : '0px')};
  height: ${props => (!props.active ? '60px' : '0px')};
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
