import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import Header from '~/common/Header/index'
import { back } from '~/assets/constants'
import { Button } from '~/common/index'
import Colors from '~/common/Colors/Colors'
import ConfirmLoanPayment from './ConfirmLoanPayment/index'
import RegisterLoanPayment from './RegisterLoanPayment/index'
import { useDispatch, useSelector } from 'react-redux'
import { getChargeFee, getInfoAccount, getLoanInfo, getPreCloseError, getPreCloseStatus } from '~/store/selector'
import Status from '~/common/Status/Status'
import { NAVIGATION_CONFIRM } from '~/navigation/routes'
import { requestChargeFee, requestGetCustomerInfo, requestGetLoanInfo, requestPreClose, resetPreClose } from '~/store/actions'
import ErrorView from '~/common/ErrorView/index'

const LoanRepayment = props => {
  const title = props.route?.params?.title
  const onGoBack = props.route?.params?.onGoBack
  const dispatch = useDispatch()
  const [currentStep, setCurrentStep] = useState(1)
  const [showError, setShowError] = useState(false)
  const preCloseStatus = useSelector(state => getPreCloseStatus(state))
  const preCloseError = useSelector(state => getPreCloseError(state))
  const loanConfirmDetail = useSelector(state => getLoanInfo(state))
  const infoAccount = useSelector(state => getInfoAccount(state))
  const chargeFee = useSelector(state => getChargeFee(state))

  useEffect(() => {
    dispatch(requestGetLoanInfo())
    dispatch(requestGetCustomerInfo())
    return () => {
      dispatch(resetPreClose())
    }
  }, []) 

  useEffect(() => {
    if (preCloseStatus === Status.SUCCESS) {
      dispatch(resetPreClose())
      props.navigation.navigate(NAVIGATION_CONFIRM, {
        type: 'PRE_CLOSE',
        paidAmount: -1 * (Number(loanConfirmDetail?.Info?.loanAmount) + Number(loanConfirmDetail?.Info?.totalOverdueAmount || 0) + Number(loanConfirmDetail?.Info?.interestAmount)),
        loanId: loanConfirmDetail?.Info?.loanId,
        accountId: infoAccount?.accountNumber,
        onGoBack,
      })
    } else if (preCloseStatus === Status.ERROR) {
      setShowError(true)
    }
  }, [preCloseStatus])

  useEffect(() => {
    if (loanConfirmDetail) {
      dispatch(requestChargeFee(loanConfirmDetail?.Info?.limitAmount, 3))
    }
  }, [loanConfirmDetail])

  const getComponentByStep = () => {
    if (currentStep === 1) {
      return (
        <RegisterLoanPayment
          infoAccount={infoAccount}
          loanConfirmDetail={loanConfirmDetail}
          chargeFee={chargeFee}
        />
      )
    } else {
      return (
        <ConfirmLoanPayment
          infoAccount={infoAccount}
          loanConfirmDetail={loanConfirmDetail}
          chargeFee={chargeFee}
        />
      )
    }
  }

  const onNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else {
      dispatch(requestPreClose())
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      <Header
        title={title}
        leftAction={() => props.navigation.pop()}
        iconLeft={back}
      />
      <View style={styles.divider} />
      <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={styles.inforContainer}>
          {getComponentByStep()}
        </View>
      </ScrollView>
      
      <View style={styles.containerButton}>
        <Button
          text={'Tiếp tục'}
          styleButton={styles.styleButton}
          styleView={styles.styleView}
          onPressEvent={() => onNext()}
        />
      </View>
      <ErrorView 
        error={preCloseError}
        isOpen={showError}
        onClose={() => setShowError(false)}
      />
    </SafeAreaView>
  )
}
export default LoanRepayment

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
  },
  styleView: {
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  divider: {
    height: 6,
  },
})