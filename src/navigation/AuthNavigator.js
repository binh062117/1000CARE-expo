import React from 'react';
import { createStackNavigator } from '@react-navigation/native-stack';

import {
  SplashScreen,
  LoginPhone,
  PhoneVerify,
  RegisterScreen,
} from '../screens';
import {
  NAVIGATION_TO_LOGIN_SCREEN,
  NAVIGATION_TO_SPLASH_SCREEN,
  NAVIGATION_TO_REGISTER_SCREEN,
  NAVIGATION_CONFIRM,
  NAVIGATION_PHONE_VERIFY,
} from './routes';
import { Confirm } from '~/screens/index';

const Stack = createStackNavigator();

/**
 * Explanation: Add only Modals/Dialogs here, which need to be render over the screen,
 * and need to have transparent or semi-transparent background with no toolbar
 *
 * If you need to add normal screens, add it in StackNavigator.js
 */
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={NAVIGATION_TO_SPLASH_SCREEN}
      mode="modal"
      headerMode="none"
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: false,
      }}>
      {/* TODO: protected routes by login status */}
      <Stack.Screen
        name={NAVIGATION_TO_SPLASH_SCREEN}
        component={SplashScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_TO_LOGIN_SCREEN}
        component={LoginPhone}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_TO_REGISTER_SCREEN}
        component={RegisterScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_PHONE_VERIFY}
        component={PhoneVerify}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_CONFIRM}
        component={Confirm}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
