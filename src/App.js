import React, {useEffect} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {ThemeProvider, lightTheme as theme} from './theme';
import {NetworkProvider} from './network/NetworkProvider';
import RootNavigator from './navigation';
import {store} from './store';
import {Platform} from 'react-native';

import {setCustomText} from 'react-native-global-props';
import {TextInput} from 'react-native';
import {Host} from 'react-native-portalize';

// const customTextInputProps = {
//   underlineColorAndroid: 'rgba(0,0,0,0)',
//   style: {
//     // fontFamily: 'Nunito-Regular',
//     fontSize: 14,
//   },
// }

const customTextProps = {
  allowFontScaling: false,
};

const App = () => {
  useEffect(() => {
    console.disableYellowBox = true;
    setCustomText(customTextProps);
    //   setCustomTextInput(customTextInputProps)
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
  }, []);

  return (
    <>
      <StoreProvider store={store}>
        <NetworkProvider>
          {/* <PersistGate
            loading={null}
            persistor={persist}
          > */}
          <ThemeProvider theme={theme}>
            <Host>
              <RootNavigator />
            </Host>
          </ThemeProvider>
          {/* </PersistGate> */}
        </NetworkProvider>
      </StoreProvider>
    </>
  );
};

export default App;
