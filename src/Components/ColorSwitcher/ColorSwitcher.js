import React from 'react';
import { theme } from '../../Styles/theme';
import { ColorSwitcherContainer, OptionBox, Option } from './styles';

const { accentColors } = theme;
const colors = Object.values(accentColors);

const ColorSwitcher = props => (
  <ColorSwitcherContainer active={props.active}>
    {colors.map((color, i) => (
      <OptionBox key={color}>
        <Option
          delay={(i + 0.1) / 2}
          length={colors.length - 1}
          color={color}
          onClick={() => props.onChange(color)}
        />
      </OptionBox>
    ))}
  </ColorSwitcherContainer>
);

export default ColorSwitcher;
