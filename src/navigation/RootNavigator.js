import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeContext} from '../theme';
import StackNavigator from './StackNavigator';

/**
 * Explanation: Add only Modals/Dialogs here, which need to be render over the screen,
 * and need to have transparent or semi-transparent background with no toolbar
 *
 * If you need to add normal screens, add it in StackNavigator.js
 */
const RootNavigator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={theme.appbar.barStyle}
        backgroundColor={theme.appbar.statusBarColor}
      />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
