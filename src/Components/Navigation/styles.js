import styled from "styled-components";

const barPlacement = bar => {
  switch (bar) {
    case "two":
      return "rotate(45deg)";
    case "three":
      return "translateY(-15px) rotate(-45deg)";
    default:
      return "translateY(15px) rotate(-45deg)";
  }
};

export const Bar = styled.div`
  height: 10px;
  width: 100%;
  background-color: ${props => props.theme.accentColor};
  border-radius: 2px;
  transform: ${props =>
    props.active ? barPlacement(props.bar) : "rotate(0deg)"};
  opacity: ${props => (props.bar === "one" && props.active ? 0 : 1)};
  transition: all 0.6s ease-in-out;
`;

export const NavContainer = styled.div`
  width: 50px;
  height: 43px;
  background-color: transparent;
  position: fixed;
  z-index: 999;
  right: 15px;
  top: 15px;
  cursor: pointer;
  opacity: 0.7;
  z-index: 1000;
  transition: all 0.5s ease-in-out;

  :hover {
    opacity: 1;
    transform: scale(1.05);
  }

  ${Bar}:not(:first-child) {
    margin-top: 5px;
  }
`;

// export const ActiveBar = styled.div`
//   height: 10px;
//   margin-top: 6px;
//   width: 100%;
//   background-color: ${props => props.theme.accentColor};
//   border-radius: 2px;
//   transform: ${props => barPlacement(props.bar)};
//   opacity: 1;
//   transition: all 0.4s ease-in-out;
// `;
