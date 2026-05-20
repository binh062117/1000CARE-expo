import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button, TextInput } from '~/common/index'
import Colors from '~/common/Colors/Colors'

import {
  confirmLinkPayment,
  resetConfirmPaymentStatus,
  getWallet,
} from '~/store/actions'
import { getConfirmLinkStatus, getLinkPaymentReqId, getConfirmLinkErr } from '~/store/selector'
import Header from '~/common/Header/index'
import Status from '~/common/Status/Status'
import strings from '~/i18n'
import DialogInfo from '~/common/DialogInfo/index'

const BankLinkConfirm = (props) => {
  const dispatch = useDispatch()
  const { onGoBack } = props.route.params

  const [otp, setOtp] = useState('')
  const [message, setMessage] = useState('')
  const [isErrorMessage, setIsErrorMessage] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  const confirmStatus = useSelector(state => getConfirmLinkStatus(state))
  const requestId = useSelector(state => getLinkPaymentReqId(state))
  const confirmLinkErr = useSelector(state => getConfirmLinkErr(state))

  const onConfirmPress = () => {
    dispatch(confirmLinkPayment(otp, requestId))
  }

  useEffect(() => {
    if (confirmStatus === Status.SUCCESS) {
      setMessage('Liên kết tài khoản MB thành công')
      setIsErrorMessage(true)
    } else if (confirmStatus === Status.LOADING) {
      setIsErrorMessage(false)
      setShowDialog(true)
    } else if (confirmStatus === Status.ERROR) {
      setMessage(confirmLinkErr)
      setIsErrorMessage(true)
    } else {
      setShowDialog(false)
    }
  }, [confirmStatus])

  const reset = () => {
    dispatch(resetConfirmPaymentStatus())
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <Header
          title={strings.bankLinkConfirm.title}
          leftAction={() => props.navigation.goBack()}
        />
        <TextInput
          containerStyle={styles.inputContainerStyle}
          placeholderTextColor={Colors.textColor3}
          value={otp}
          onChangeText={(value) => {
            setOtp(value)
          }}
          placeholder={strings.bankLinkConfirm.otp}
        />

        <Button
          styleView={styles.loginBtnContainer}
          styleButton={styles.loginBtn}
          onPressEvent={onConfirmPress}
          text={strings.bankLinkConfirm.confirm}
        />

        <DialogInfo
          isOpen={showDialog}
          isError={isErrorMessage}
          isOrder={false}
          isLoading={true}
          message={message}
          closeModal={() => {
            setShowDialog(false)
            if (confirmStatus === Status.SUCCESS) {
              dispatch(resetConfirmPaymentStatus())
              dispatch(getWallet())
              if (onGoBack) {
                onGoBack()
              }
              props.navigation.pop()
            } else if (confirmStatus === Status.ERROR) {
              reset()
            }
          }}
        />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  inputContainerStyle: {
    marginTop: 10,
    borderWidth: 0,
    borderColor: Colors.backgroundColor,
    borderBottomWidth: 2,
    marginBottom: 16,
  },
  loginBtnContainer: {
    flexDirection: 'row',
    margin: 0,
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
})

export default BankLinkConfirm