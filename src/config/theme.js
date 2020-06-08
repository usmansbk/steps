import {DefaultTheme} from 'react-native-paper';

export const colors = {
  accent: '#e67e22',
  lightGray: '#f2f2f2',
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    accent: colors.accent,
  },
};

export default theme;
