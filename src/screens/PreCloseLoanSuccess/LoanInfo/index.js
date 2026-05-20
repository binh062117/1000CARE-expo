import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'
import InfoDetailOrder from '~/common/InfoDetailOrder/index'

const LoanInfo = ({ loanId, accountId }) => {
  return (
    <>
      <InfoDetailOrder
        label={'Tài khoản khấu chi'}
        value={loanId}
        styleLabel={styles.styleLabel}
        styleValue={styles.styleValue}
        styleWrap={styles.styleWrap}
      />
      <InfoDetailOrder
        label={'Tài khoản thu nợ'}
        value={accountId}
        styleLabel={styles.styleLabel}
        styleValue={styles.styleValueSpec}
        styleWrap={styles.styleWrap}
      />
    </>
  )
}

const styles = StyleSheet.create({
  textTitle: {
    color: Colors.systemColor2,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  textMessage: { 
    marginTop: 2,
    color: Colors.textColor2,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
  },
  priceText: { 
    color: Colors.priceColor,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  styleValue: {
    color: Colors.textColor2,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
  },
  styleValueSpec: {
    color: Colors.textColor2,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  styleMoneyValue: {
    color: Colors.priceColor,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '500',
  },
  styleLabel: {
    color: Colors.textColor3,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '500',
  },
  styleWrap: {
    paddingHorizontal: 0,
  },
})

export default LoanInfo