import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions, StyleSheet, Text, View, FlatList, SafeAreaView, BackHandler } from 'react-native';
import Header from '~/common/Header/index';
import { back } from '~/assets/constants';
import strings from '~/i18n';
import ItemBank from './ItemBank';
import Colors from '~/common/Colors/Colors';
import {
  getPaymentAccount,
  getLinkPaymentStatus,
  getLinkPaymentErr,
  getUser,
} from '~/store/selector';
import {
  getProfile,
  getWallet, linkPayment,
  resetLinkPaymentStatus,
} from '~/store/actions';
import { CommonActions } from '@react-navigation/native';

import { Button } from '~/common/index';
import { NAVIGATION_BANK_LINKS_CONFIRM, NAVIGATION_TO_MAIN_SCREEN, NAVIGATION_UPDATE_PROFILE } from '~/navigation/routes';
import Status from '~/common/Status/Status';
import { showToast } from '~/utils/toast';
import { useFocusEffect } from '@react-navigation/native';
import DialogInfo from '~/common/DialogInfo/index';

const fullWidth = Dimensions.get('window').width;

const BankLinks = props => {
  const goBack = props.route.params?.goBack;
  const goHome = props.route.params?.goHome;
  const dispatch = useDispatch();
  const paymentAccount = useSelector(state => getPaymentAccount(state));
  const linkStatus = useSelector(state => getLinkPaymentStatus(state));
  const linkErr = useSelector(state => getLinkPaymentErr(state));
  const user = useSelector(state => getUser(state));
  const [showDialog, setShowDialog] = useState(false);
  const [isErrorDialog, setIsErrorDialog] = useState(false);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getWallet(1, 500));
  }, []);

  useEffect(() => {
    if (linkStatus === Status.SUCCESS) {
      setShowDialog(false);
      setIsErrorDialog(false);
      props.navigation.navigate(NAVIGATION_BANK_LINKS_CONFIRM, {
        onGoBack: () => {
          dispatch(getWallet(1, 500));
        },
      });
      dispatch(resetLinkPaymentStatus());
    } else if (linkStatus === Status.LOADING) {
      setIsErrorDialog(false);
      setShowDialog(true);
    } else if (linkStatus === Status.ERROR) {
      setIsErrorDialog(true);
    } else {
      setShowDialog(false);
    }
  }, [linkStatus]);

  const onAddBankPress = () => {
    dispatch(linkPayment());
  };

  const onErrorClose = () => {
    setShowDialog(false);
    setIsErrorDialog(false);
    if (linkErr === 'ewallet.register.error-exists-payment-account') {
      dispatch(resetLinkPaymentStatus());
      onBack();
      return;
    }
    dispatch(resetLinkPaymentStatus());
  };

  const goHomeScreen = () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: NAVIGATION_TO_MAIN_SCREEN },
        ],
      }),
    );
  };

  const onBack = () => {
    if (goHome) {
      goHomeScreen();
    } else {
      if (goBack) {
        goBack();
      }
      props.navigation.goBack();
    }
  };

  useFocusEffect(useCallback(() => {
    const backAction = () => {
      onBack();
      return true;
    };

    let backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      backAction();
          });
    return () => backHandler.remove();
  }, []));

  const getError = () => {
    if (linkErr === 'ewallet.register.error-exists-payment-account') {
      return 'Bạn đã liên kết tài khoản MB trước đó';
    } else {
      return linkErr;
    }
  };

  const getButtonAction = () => {
    if (user && user.national_id) {
      return (
        <Button
          styleView={styles.loginBtnContainer}
          styleButton={styles.loginBtn}
          onPressEvent={onAddBankPress}
          text={'Thêm liên kết'}
        />
      );
    }
    showToast('Bạn cần xác minh danh tính trước khi liên kết tài khoản');
    return (
      <Button
        styleView={styles.loginBtnContainer}
        styleButton={styles.loginBtn}
        onPressEvent={() => {
          props.navigation.navigate(NAVIGATION_UPDATE_PROFILE, {
            onBack: () => {
              dispatch(getProfile());
              dispatch(getWallet(1, 500));
            },
          });
        }}
        text={'Xác minh danh tính'}
      />
    );
  };

  const renderItem = useCallback((item, index) => <ItemBank data={item.item} />);
  const keyExtractor = useCallback((item, index) => index.toString());
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          title={strings.BankLinks.title}
          leftAction={() => {
            onBack();
          }}
          iconLeft={back}
        />
        {paymentAccount && paymentAccount.length > 0 ?
          <View style={styles.containerBank}>
            <Text style={styles.textListBank}>Danh sách ngân hàng</Text>
          </View> : null}
        {paymentAccount && paymentAccount.length > 0 ?
          <FlatList
            style={{ flexGrow: 0 }}
            data={paymentAccount}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          /> : null}

        {paymentAccount && paymentAccount.length > 0 ? null :
          getButtonAction()
        }

        <DialogInfo
          isOpen={showDialog}
          isError={isErrorDialog}
          isOrder={false}
          isLoading={true}
          message={getError()}
          closeModal={() => {
            setShowDialog(false);
            onErrorClose();
          }}
        />

      </View>
    </SafeAreaView>
  );
};
export default BankLinks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSearch: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 15,
  },
  containerTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: 42,
    borderRadius: 42,
    borderColor: '#DFDFDF',
  },
  containerBank: {
    backgroundColor: 'white',
    marginTop: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DFDFDF',
    paddingBottom: 10,
  },
  selectBank: {
    fontSize: 18,
    marginBottom: 5,
    color: '#595959',
  },
  styleIcon: {
    marginLeft: 10,
    marginRight: 5,
  },
  textInput: {
    backgroundColor: 'white',
    width: fullWidth - 80,
  },
  textListBank: {
    fontSize: 18,
    marginTop: 15,
    marginLeft: 15,
    color: '#595959',
  },
  loginBtnContainer: {
    flexDirection: 'row',
    margin: 0,
    marginTop: 24,
    padding: 0,
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  loginBtn: {
    height: 50,
    width: '100%',
    padding: 0,
    paddingHorizontal: 0,
    borderRadius: 50,
    backgroundColor: Colors.systemColor2,
  },
});
