import styled from "styled-components";
import { rubberBand } from "../../../Styles/transitions";

export const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid white;
`;

export const SocialBox = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid white;
`;

export const Icon = styled.i`
  color: white;
  cursor: pointer;
  transition: all 0.6s ${rubberBand};
  :hover {
    transform: scale(1.3);
  }
`;

export const Foot = styled.div`
  border: 1px solid white;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;
