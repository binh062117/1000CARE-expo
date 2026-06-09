import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Linking, Image, Animated, Easing } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  loginByPhone,
  requestGetListPhoneByPassFirebase,
  resetLogin,
  resetLoginPhone,
} from '~/store/auth/authActions';
import {
  getErrMsg,
  getListByPassFirebase,
  getLoginPhoneStatus,
} from '~/store/auth/authSelector';
import ErrorView from '~/common/ErrorView';
import DialogInfo from '~/common/DialogInfo/index';
import PremiumBackground from '~/design-system/PremiumBackground';
import PremiumInput from '~/design-system/PremiumInput';
import PremiumButton from '~/design-system/PremiumButton';
import strings from '~/i18n';
import { logoNeoMed, back } from '~/assets/constants';
import { NAVIGATION_CONFIRM } from '~/navigation/routes';
import Status from '~/common/Status/Status';
import { brandColors, brandGradients } from '~/design-system/tokens';

const LoginPhone = ({ navigation }) => {
  const dispatch = useDispatch();

  const loginStatus = useSelector(state => getLoginPhoneStatus(state));
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [phone, setPhone] = useState('');
  const errorMsg = useSelector(state => getErrMsg(state));
  const [loginType, setLoginType] = useState('');

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    dispatch(requestGetListPhoneByPassFirebase());
    
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.back(1.5)),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const onLoginPress = () => {
    if (loading) return;
    if (!phone) {
      alert('Vui lòng nhập số điện thoại');
      return;
    }
    setLoading(true);
    setLoginType('LOGIN_BY_BE');
    dispatch(loginByPhone(phone, true));
  };

  useEffect(() => {
    if (loginStatus === Status.SUCCESS) {
      setLoading(false);
      dispatch(resetLoginPhone());
      navigation.navigate(NAVIGATION_CONFIRM, {
        type: loginType,
      });
    }
  }, [loginStatus]);

  return (
    <PremiumBackground colors={brandGradients.light}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ paddingHorizontal: 28, paddingTop: 20, flex: 1 }}>
          <TouchableOpacity 
            onPress={() => navigation.pop()} 
            style={{ 
              width: 44, 
              height: 44, 
              borderRadius: 22, 
              backgroundColor: brandColors.surface,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 30 
            }}
          >
            <Image source={back} style={{ width: 20, height: 20, tintColor: '#354052' }} />
          </TouchableOpacity>
          
          <Animated.View style={{ 
            alignItems: 'center', 
            marginBottom: 50,
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }}>
            <View style={{ 
              width: 120, 
              height: 120, 
              backgroundColor: brandColors.surface,
              borderRadius: 30,
              padding: 10,
              shadowColor: brandColors.tealPrimary,
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.1,
              shadowRadius: 20,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image source={logoNeoMed} resizeMode="contain" style={{ width: 90, height: 90 }} />
            </View>
            <Text style={{ fontSize: 32, fontWeight: '900', color: brandColors.tealPrimary, marginTop: 15, letterSpacing: 0 }}>1000CARE</Text>
            <Text style={{ fontSize: 14, color: brandColors.muted, fontWeight: '500', marginTop: 5 }}>Chăm sóc sức khỏe tận tâm</Text>
          </Animated.View>

          <Animated.View style={{ 
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }}>
            <Text style={{ fontSize: 26, fontWeight: '800', color: brandColors.textDark, marginBottom: 8 }}>{strings.loginScreen.title}</Text>
            <Text style={{ fontSize: 15, color: brandColors.muted, marginBottom: 30, lineHeight: 22 }}>
              Vui lòng nhập số điện thoại để bắt đầu hành trình chăm sóc sức khỏe của bạn.
            </Text>

            <PremiumInput
              label="Số điện thoại"
              value={phone}
              keyboardType="numeric"
              onChangeText={setPhone}
              placeholder="09xx xxx xxx"
            />

            <PremiumButton
              text={loading ? 'Đang xác thực...' : strings.common.login}
              onPress={() => onLoginPress()}
              style={{ marginTop: 25, height: 56 }}
            />
            
            <View style={{ marginTop: 25, alignItems: 'center' }}>
              <Text style={{ color: brandColors.muted, fontSize: 14 }}>
                Bạn chưa có tài khoản? {' '}
                <Text 
                  style={{ color: brandColors.tealPrimary, fontWeight: '800' }}
                  onPress={() => navigation.navigate('RegisterScreen')}
                >
                  Đăng ký ngay
                </Text>
              </Text>
            </View>
          </Animated.View>
        </View>

        <View style={{ padding: 24, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ height: 1, flex: 1, backgroundColor: brandColors.border }} />
            <Text style={{ marginHorizontal: 15, color: brandColors.mutedLight, fontSize: 12, fontWeight: '700' }}>HỖ TRỢ 24/7</Text>
            <View style={{ height: 1, flex: 1, backgroundColor: brandColors.border }} />
          </View>
          
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity 
              onPress={() => Linking.openURL('tel:0966492818')}
              style={{ paddingHorizontal: 10 }}
            >
              <Text style={{ color: brandColors.tealPrimary, fontWeight: '700', fontSize: 15 }}>096 649 2818</Text>
            </TouchableOpacity>
            <Text style={{ color: brandColors.border }}>|</Text>
            <TouchableOpacity 
              onPress={() => Linking.openURL('tel:0358525558')}
              style={{ paddingHorizontal: 10 }}
            >
              <Text style={{ color: brandColors.tealPrimary, fontWeight: '700', fontSize: 15 }}>035 852 5558</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <ErrorView
        error={errorMsg}
        isOpen={errorMsg ? true : false}
        onClose={() => {
          setLoading(false);
          dispatch(resetLogin());
        }}
      />
    </PremiumBackground>
  );
};

export default LoginPhone;
