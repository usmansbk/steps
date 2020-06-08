import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './Welcome';
import Home from './Home';
import Details from './Details';
import NewSteps from './NewSteps';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        headerShown: false,
      }}>
      <Stack.Screen name="New" component={NewSteps} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
