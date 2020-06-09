import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome, Home, Details, NewSteps} from './components';
import Loading from './components/common/Loading';

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
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="New" component={NewSteps} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
