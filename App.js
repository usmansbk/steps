import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './src/App';

export default () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};
