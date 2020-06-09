import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome, Home, Details, NewSteps} from './components';
import {Subscribe} from 'unstated';
import UIContainer from './containers/UI';

const Stack = createStackNavigator();

export default () => {
  return (
    <Subscribe to={[UIContainer]}>
      {(ui) => (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              elevation: 0,
            },
            headerShown: false,
          }}>
          {ui.state.firstLaunch && (
            <Stack.Screen name="Welcome" component={Welcome} />
          )}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="New" component={NewSteps} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      )}
    </Subscribe>
  );
};
