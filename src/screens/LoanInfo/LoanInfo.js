import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { CommonActions } from '@react-navigation/native'

import Header from '~/common/Header/index'
import { close } from '~/assets/constants'
import { Button } from '~/common/index'
import Colors from '~/common/Colors/Colors'
import BorrowInfo from './BorrowInfo/index'
import { NAVIGATION_CONFIRM, NAVIGATION_TO_MAIN_SCREEN } from '~/navigation/routes'
import BorrowStatus from './BorrowStatus/index'
import { useDispatch, useSelector } from 'react-redux'
import { getChargeFee, getLinkResourceError, getLinkResourceStatus, getLoanInfo, getLoanInfoError, getLoanInfoStatus } from '~/store/selector'
import { requestChargeFee, requestGetLoanInfo, requestLinkResource, resetLinkResource, resetLoan } from '~/store/actions'
import ErrorView from '~/common/ErrorView/index'
import Status from '~/common/Status/Status'

const LoanInfo = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const [openErrorMessage, setOpenErrorMessage] = useState(false)
  const [openMessage, setOpenMessage] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const loanConfirmDetail = useSelector(state => getLoanInfo(state))
  const loanInfoStatus = useSelector(state => getLoanInfoStatus(state))
  const loanInfoError = useSelector(state => getLoanInfoError(state))
  const linkResourceError = useSelector(state => getLinkResourceError(state))
  const linkResourceStatus = useSelector(state => getLinkResourceStatus(state))
  const chargeFee = useSelector(state => getChargeFee(state))

  const type = route?.params?.type
  const title = route?.params?.title

  useEffect(() => {
    dispatch(requestGetLoanInfo())
    return () => {
      dispatch(resetLoan())
    }
  }, [])

  const goHomeScreen = () => {
    if (type === 'CREATE_LOAN_SUCCESS') {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: NAVIGATION_TO_MAIN_SCREEN },
          ],
        }),
      )
    } else {
      navigation.pop()
    }
  }

  useEffect(() => {
    if (linkResourceError !== '') {
      setError(linkResourceError)
      setOpenErrorMessage(true)
    }
  }, [linkResourceError])

  useEffect(() => {
    if (loanInfoStatus === Status.ERROR) {
      setError(loanInfoError)
      setOpenErrorMessage(true)
    } else {
      dispatch(requestChargeFee(loanConfirmDetail?.Info?.limitAmount, 1))
    }
  }, [loanInfoStatus])

  useEffect(() => {
    if (linkResourceStatus === Status.SUCCESS) {
      dispatch(resetLinkResource())
      navigation.navigate(NAVIGATION_CONFIRM, {
        type: 'LINK_RESOURCE',
        onGoBack: (linked) => {
          if (linked) {
            setMessage('Liên kết tài khoản thấu chi thành công')
            setOpenMessage(true)
          }
          dispatch(requestGetLoanInfo())
        },
      })
    }
  }, [linkResourceStatus])

  return(
    <SafeAreaView style={styles.container}>
      <Header
        showLeft={type !== 'CREATE_LOAN_SUCCESS'}
        title={title ? title : 'Giao dịch thành công'}
        leftAction={() => goHomeScreen()}
        iconLeft={close}
      />
      <View style={styles.divider} />
      <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={styles.inforContainer}>
          <BorrowStatus
            loanConfirmDetail={loanConfirmDetail}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.inforContainer}>
          <BorrowInfo
            loanConfirmDetail={loanConfirmDetail}
            chargeFee={chargeFee}
          />
        </View>
      </ScrollView>
      
      {
        loanConfirmDetail?.Status === 'loan.none-link' && (
          <View style={styles.containerButton}>
            <Button
              text={'Liên kết tài khoản thấu chi'}
              styleButton={styles.styleButton}
              styleView={styles.styleView}
              onPressEvent={() => {
                dispatch(requestLinkResource())
              }}
            />
          </View>
        )
      }
      <ErrorView
        error={error}
        isOpen={openErrorMessage}
        onClose={() => {
          setOpenErrorMessage(false)
          dispatch(resetLoan())
          dispatch(resetLinkResource())
        }}
      />
      <ErrorView
        error={message}
        isOpen={openMessage}
        onClose={() => {
          setOpenMessage(false)
        }}
      />
    </SafeAreaView>
  )
}
export default LoanInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inforContainer: {
    backgroundColor: 'white',
    padding: 18,
  },
  containerButton: {
    justifyContent: 'flex-end',
    backgroundColor: Colors.white,
  },
  styleButton: {
    borderRadius: 50,
    backgroundColor: Colors.red,
  },
  styleView: {
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  divider: {
    height: 6,
    backgroundColor: Colors.backgroundColor,
  },
})