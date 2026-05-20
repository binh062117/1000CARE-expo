import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GenericTemplate } from '~/common';
import { resetLogin } from '~/store/auth/authActions';
import { getErrMsg } from '~/store/auth/authSelector';
import ErrorView from '~/common/ErrorView';

import styles from './styles';
import strings from '~/i18n';
import { logo_text } from '~/assets/constants';
import { Button, Image, TextInput } from '~/common/index';
import { NAVIGATION_CONFIRM, NAVIGATION_PHONE_VERIFY } from '~/navigation/routes';
import Header from '~/common/Header/index';
import { back } from '~/assets/constants';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  // Manage State Hooks
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const errorMsg = useSelector(state => getErrMsg(state));

  const onRegisterPress = () => {
    // dispatch(loginWithAccount(username, password, true))
    navigation.navigate(NAVIGATION_PHONE_VERIFY, {
      onSuccess: () => {
        navigation.navigate(NAVIGATION_CONFIRM);
      },
    });
  };

  return (
    <GenericTemplate style={styles.mainContainer}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}>
        <View style={styles.mainContainer}>
          <Header
            title={strings.registerScreen.title}
            iconLeft={back}
            leftAction={() => navigation.pop()}
          />
          <Image source={logo_text} resizeMode="contain" style={styles.logo} />
          <View style={styles.inner_container}>
            <Text style={styles.title}>
              {strings.registerScreen.title}
            </Text>
            <View style={styles.fullNameContainer}>
              <TextInput
                containerStyle={[styles.inputContainer, styles.mr16]}
                inputContainerStyle={styles.inputContainerStyle}
                labelStyle={styles.labelStyle}
                value={username}
                onChangeText={value => {
                  setUserName(value);
                }}
                label={strings.registerScreen.firstName}
              />

              <TextInput
                containerStyle={[styles.inputContainer, styles.ml16]}
                inputContainerStyle={styles.inputContainerStyle}
                labelStyle={styles.labelStyle}
                value={username}
                onChangeText={value => {
                  setUserName(value);
                }}
                label={strings.registerScreen.lastName}
              />
            </View>

            <TextInput
              inputContainerStyle={styles.inputContainerStyle}
              labelStyle={styles.labelStyle}
              value={username}
              onChangeText={value => {
                setUserName(value);
              }}
              label={strings.registerScreen.username}
            />

            <TextInput
              inputContainerStyle={styles.inputContainerStyle}
              secureTextEntry={true}
              labelStyle={styles.labelStyle}
              value={password}
              onChangeText={value => setPassword(value)}
              label={strings.registerScreen.password}
            />
            <TextInput
              inputContainerStyle={styles.inputContainerStyle}
              secureTextEntry={true}
              labelStyle={styles.labelStyle}
              value={password}
              onChangeText={value => setPassword(value)}
              label={strings.registerScreen.re_password}
            />
            <Button
              styleView={styles.loginBtnContainer}
              styleButton={styles.loginBtn}
              onPressEvent={onRegisterPress}
              text={strings.registerScreen.register}
            />
          </View>
        </View>
        <View style={styles.footer_views}>
          <Text>{strings.registerScreen.have_account}</Text>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Text style={styles.text_register_now}>
              {strings.registerScreen.login_now}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <ErrorView
        error={errorMsg}
        isOpen={errorMsg && errorMsg !== ''}
        onClose={() => dispatch(resetLogin())}
      />
    </GenericTemplate>
  );
};

RegisterScreen.navigationOptions = {
  header: null,
};

export default RegisterScreen;
