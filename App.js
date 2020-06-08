import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import App from './src/App';
import theme from './src/config/theme';
import MobxContext from './src/context';

export default () => {
  return (
    <MobxContext.Provider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PaperProvider>
    </MobxContext.Provider>
  );
};
