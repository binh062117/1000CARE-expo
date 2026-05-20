import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Alert, BackHandler, Platform } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { LIMITS } from '../../constants';
import strings from '~/i18n'
import { NetworkContext } from '../../network/NetworkProvider';
import { NAVIGATION_TO_MAIN_SCREEN } from '../../navigation/routes';
import { Image } from '~/common/index';
import { logoNeoMed } from '../../assets/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthStore, getIsLoadNccFavorite } from '~/store/selector';
import {
  refreshToken as requestRefreshToken,
  requestGetPharmacyInfo,
  getVersion,
} from '~/store/actions';
import Status from '~/common/Status/Status';
import { asyncStorage } from '~/store/index';
import { loadNccFavorite } from '~/store/auth/authActions';
import DeviceInfo from 'react-native-device-info';

const SplashScreen = ({ navigation }) => {
  const { isConnected } = useContext(NetworkContext);
  const dispatch = useDispatch();
  const { refreshTokenStatus } = useSelector(state => getAuthStore(state));
  const isLoadNccFavorite = useSelector(state => getIsLoadNccFavorite(state));
  const [isReady, setIsReady] = useState(false);
  const [isRequest, setIsRequest] = useState(false);

  const version = DeviceInfo.getVersion();
  const os = Platform.OS === 'android' ? 'android' : 'ios';

  useEffect(() => {
    internetCheck();
  }, [isConnected]);

  useEffect(() => {
    dispatch(getVersion(os, version));
  }, []);

  useEffect(() => {
    dispatch(requestGetPharmacyInfo());
    dispatch(loadNccFavorite(true));
  }, [isLoadNccFavorite]);

  useEffect(() => {
    if (isReady) {
      asyncStorage
        .getRefreshToken()
        .then(value => {
          const refreshToken = value;
          if (refreshToken) {
            if (!isRequest) {
              setIsRequest(true);
              dispatch(requestRefreshToken());
            }
          } else {
            setTimeout(() => goHomeScreen(), LIMITS.splashScreenWaitTime);
          }
        })
        .catch(e => {
          console.log(e);
          setTimeout(() => goHomeScreen(), LIMITS.splashScreenWaitTime);
        });
    }
  }, [isReady]);

  useEffect(() => {
    if (isRequest) {
      if (
        refreshTokenStatus === Status.ERROR ||
        refreshTokenStatus === Status.SUCCESS
      ) {
        setIsRequest(false);
        goHomeScreen();
      }
    }
  }, [refreshTokenStatus]);

  const goHomeScreen = () => {
    console.log('goHomeScreen');
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: NAVIGATION_TO_MAIN_SCREEN }],
      }),
    );
  };

  const internetCheck = () => {
    if (!isConnected) {
      Alert.alert(
        strings.errors.noInternetTitle,
        strings.splashScreen.noInternetMessage,
        [
          {
            text: strings.common.cancel,
            onPress: () => {},
            style: 'cancel',
          },
          { text: strings.common.ok, onPress: () => internetCheck() },
        ],
        { cancelable: false },
      );
    } else {
      setIsReady(true);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logoNeoMed} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 163,
    height: 163,
  },
});

export default SplashScreen;
