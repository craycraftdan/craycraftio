import styled from 'styled-components';
import tinycolor from 'tinycolor2';

const barPlacement = bar => {
  switch (bar) {
    case 'two':
      return 'rotate(45deg)';
    case 'three':
      return 'translateY(-11px) rotate(-45deg)';
    default:
      return 'translateY(15px) rotate(-45deg)';
  }
};

const rgbaGenerator = (hexColor, opacity) => {
  const { r, g, b } = tinycolor(hexColor).toRgb();
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: 0px 20px 0px 15px;
  background-color: ${props =>
    props.active
      ? 'transparent'
      : rgbaGenerator(props.theme.background, props.opacity)};
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Bar = styled.div`
  height: 6px;
  width: 40px;
  background-color: ${props => props.theme.accentColor};
  border-radius: 2px;
  transform: ${props =>
    props.active ? barPlacement(props.bar) : 'rotate(0deg)'};
  opacity: ${props => (props.bar === 'one' && props.active ? 0 : 1)};
  transition: all 0.6s ease-in-out;
`;

export const Nav = styled.div`
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.5s ease-in-out;
  padding: 5px;

  :hover {
    opacity: 1;
    transform: scale(1.05);
  }

  ${Bar}:not(:first-child) {
    margin-top: 5px;
  }
`;
