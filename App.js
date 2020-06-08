import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import App from './src/App';

export default () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PaperProvider>
  );
};
