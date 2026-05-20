import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Header from '~/common/Header/index'
import { back } from '~/assets/constants'
import strings from '~/i18n'
import { Button, TextInput } from '~/common/index'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles'
import ErrorView from '~/common/ErrorView/index'
import Colors from '~/common/Colors/Colors'
import { signUp, resetSignUp, resetConfirmSignUp } from '~/store/actions'
import { getSignUpStatus, getConfirmSignUpStatus, getSignUpError } from '~/store/selector'
import Status from '~/common/Status/Status'
import { NAVIGATION_CONFIRM } from '~/navigation/routes'

const PhoneVerify = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const [openErrorMessage, setOpenErrorMessage] = useState(false)
  const signUpError = useSelector(state => getSignUpError(state))

  const { title, message } = route.params
  const [phone, setPhone] = useState('')
  const signupStatus = useSelector(state => getSignUpStatus(state))
  const confirmSignupStatus = useSelector(state => getConfirmSignUpStatus(state))
  const signup = () => {
    dispatch(signUp(phone))
  }

  useEffect(() => {
    if (signupStatus === Status.SUCCESS) {
      navigation.navigate(NAVIGATION_CONFIRM, {
        type: 'SIGNUP',
      })
      dispatch(resetSignUp())
    } else if (signupStatus === Status.ERROR) {
      setOpenErrorMessage(true)
    }
  }, [signupStatus])

  useEffect(() => {
    if (confirmSignupStatus === Status.SUCCESS) {
      navigation.pop()
      dispatch(resetSignUp())
      dispatch(resetConfirmSignUp())
    }
  }, [confirmSignupStatus])

  return (

    <SafeAreaView
      style={styles.container}
    >

      <View style={styles.container}>
        <Header
          title={title ? title : strings.phoneVerify.title}
          leftAction={() => navigation.pop()}
          iconLeft={back}
        />
        <View style={styles.containerConfirm}>
          <Text style={styles.message}>{message ? message : strings.phoneVerify.message}</Text>
          <View
            style={styles.phoneContainer}
          >
            <View
              style={[styles.formItem]}
            >
              <TextInput
                inputContainerStyle={styles.inputContainerStyle}
                labelStyle={styles.labelStyle}
                keyboardType='numeric'
                placeholderTextColor={Colors.textColor3}
                placeholder={strings.phoneVerify.placeHolderNumberPhone}
                value={phone}
                onChangeText={text => setPhone(text)}
              />
            </View>
          </View>
          <Button
            text={strings.phoneVerify.confirm}
            styleButton={{ borderRadius: 35 }}
            styleText={{ fontWeight: '100' }}
            styleView={styles.buttonConfirm}
            onPressEvent={signup}
          />
        </View>
        <ErrorView
          error={signUpError}
          isOpen={openErrorMessage}
          onClose={() => {
            setOpenErrorMessage(false)
            dispatch(resetSignUp())
          }}
        />
      </View>

    </SafeAreaView>

  )
}
export default PhoneVerify
