import {DefaultTheme} from 'react-native-paper';

export const colors = {
  accent: '#e67e22',
  lightGray: '#f2f2f2',
  darkGray: '#d3d3d3',
  danger: '#e74c3c',
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    primary: colors.accent,
    accent: colors.accent,
  },
};

export default theme;
