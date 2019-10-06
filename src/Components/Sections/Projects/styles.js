import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 2px solid white;
`;

export const ProjectBox = styled.div`
  flex-basis: 375px;
  height: 325px;
  box-shadow: 3px 2px 17px 0px rgba(50, 50, 50, 0.3);
  background-color: #31353d;
  overflow: hidden;
`;
