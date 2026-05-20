import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

import Header from '~/common/Header/index'
import { Button } from '~/common/index'
import Colors from '~/common/Colors/Colors'
import LoanInfo from './LoanInfo/index'
import LoanStatus from './LoanStatus/index'

const PreCloseLoanSuccess = ({ navigation, route }) => {
  const paidAmount = route?.params?.paidAmount
  const loanId = route?.params?.loanId
  const accountId = route?.params?.accountId

  const goHomeScreen = () => {
    navigation.pop()
  }

  return(
    <SafeAreaView style={styles.container}>
      <Header
        showLeft={false}
        title={'Trả nợ thành công '}
      />
      <View style={styles.divider} />
      <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={styles.inforContainer}>
          <LoanStatus
            paidAmount={paidAmount}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.inforContainer}>
          <LoanInfo
            loanId={loanId}
            accountId={accountId}
          />
        </View>
      </ScrollView>
      
      {
        <View style={styles.containerButton}>
          <Button
            text={'Đóng'}
            styleButton={styles.styleButton}
            styleView={styles.styleView}
            onPressEvent={() => {
              goHomeScreen()
            }}
          />
        </View>
      }
    </SafeAreaView>
  )
}
export default PreCloseLoanSuccess

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