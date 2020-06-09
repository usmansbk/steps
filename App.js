import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as UnProvider} from 'unstated';
import App from './src/App';
import theme from './src/config/theme';

console.disableYellowBox = true;

export default () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <UnProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <App />
          </NavigationContainer>
        </PaperProvider>
      </UnProvider>
    </>
  );
};
