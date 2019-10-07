import styled from 'styled-components';
import { rubberBand } from '../../../Styles/transitions';

export const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${props => props.theme.background};
`;

export const Icon = styled.i`
  width: 60px;
  height: 60px;
  color: ${props => props.theme.textLight};
  cursor: pointer;
  transition: all 0.6s ${rubberBand};
`;

export const SocialBox = styled.div`
  width: 100%;
  height: 60px;
  color: ${props => props.theme.white};
  height: fit-content;
  max-width: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;

  ${Icon} {
    :hover {
      transform: scale(1.3);
      color: ${props => props.theme.accentColor} !important;
    }
  }
`;

export const Foot = styled.div`
  width: 100%;
  height: fit-content;
  color: ${props => props.theme.white};
  text-align: center;
  transition: all 0.6s ${rubberBand};

  :hover {
    color: ${props => props.theme.accentColor} !important;
    cursor: default;
  }
`;
