import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import App from './src/App';
import theme from './src/config/theme';
import {MobxProvider} from './src/config/context';

export default () => {
  return (
    <MobxProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PaperProvider>
    </MobxProvider>
  );
};
