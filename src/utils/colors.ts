import {Appearance, ColorSchemeName} from 'react-native';

import { ColorType } from "./types";

const lightThemeColors: ColorType = {
    bg300: '#C9F7F2',
    bg500: '#F9F7F2',
    bg700: '#F9F7F2',
    text300: '#111',
    text500: '#333',
    text700: '#666',
    primary500: '#242E35',
    secondary500: '#426F6B',
    tertiary500: '#A5BAB5',
    accent500: '#426F6B',
};

const darkThemeColors: ColorType = {
    bg300: '#141a1f',
    bg500: '#242E35',
    bg700: '#2d3c47',
    text300: '#aaa',
    text500: '#ccc',
    text700: '#fff',
    primary500: '#242E35',
    secondary500: '#426F6B',
    tertiary500: '#A5BAB5',
    accent500: '#426F6B',
};

let Colors = lightThemeColors;

Appearance.addChangeListener(preference => {
  initColors(preference.colorScheme);
});

const initColors = (colorScheme: ColorSchemeName) => {
  if (colorScheme === 'dark') {
    Colors = darkThemeColors;
  } else {
    Colors = lightThemeColors;
  }
};

initColors(Appearance.getColorScheme());

export default Colors;
