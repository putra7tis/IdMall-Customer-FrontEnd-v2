import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeGuest from '../screens/HomeGuest';
import Login from '../screens/Login';
import Register from '../screens/Register';

export type RootStackParamList = {
  HomeGuest: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeGuest">
        <Stack.Screen name="HomeGuest" component={HomeGuest} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
