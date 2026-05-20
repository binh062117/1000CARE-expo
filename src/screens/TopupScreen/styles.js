import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  moneyInputContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 20,
    marginBottom: 1,
    flexDirection: 'row',
  },
  viewMoney: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 6,
    flex: 1,
  },
  textMoney: {
    fontSize: 12,
    color: '#8C8C8C',
  },
  distributors: {
    marginTop: 1,
    height: 66,
    backgroundColor: 'white',
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
  inputContainerStyle: {
    marginTop: 10,
    borderWidth: 0,
    borderColor: Colors.backgroundColor,
    borderBottomWidth: 2,
    minWidth: 150,
    textAlign: 'right',
    color: Colors.priceColor,
    fontSize: 24,
  },
  bottomContainer: {
    paddingVertical: 18,
    paddingTop: 20,
    paddingBottom: 18,
    backgroundColor: Colors.white,
    alignSelf: 'flex-end',
  },

  nextStepBtnContainer: {
    flexDirection: 'row',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    paddingHorizontal: 18,
    marginTop: 10,
  },

  nextStepBtn: {
    height: 50,
    width: '100%',
    padding: 0,
    paddingHorizontal: 0,
    borderRadius: 50,
    backgroundColor: Colors.systemColor2,
  },

  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginBottom: 16,
    alignItems: 'center',
  },

  amountContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalText: {
    color: Colors.textColor2,
    fontFamily: Fonts.medium,
    fontSize: 14,
  },

  amount: {
    color: Colors.textColor2,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
  amountUnit: {
    color: Colors.textColor3,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
  },
  pointTitle: {
    color: Colors.textColor4,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
  },
  point: {
    color: Colors.textColor4,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '700',
  },
  bankInfoContainer: {
    backgroundColor: Colors.white,
    padding: 18,
  },
  bankTitle: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
    fontFamily: Fonts.bold,
    color: Colors.textColor3,
  },
  bankBalance: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: 'bold',
    fontFamily: Fonts.bold,
    color: Colors.priceColor,
  },
  title: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
    color: Colors.textColor2,
    padding: 18,
  },
  dialogContainer: {
    backgroundColor: 'white',
    padding: 12,
    paddingTop: 24,
    borderRadius: 8,
  },
  closeBtnContainer: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  closeBtn: {
    height: 12,
    width: 12,
  },
  inputAmountContainer: {
    borderWidth: 0,
    borderColor: Colors.borderColor,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  inputAmountBtn: {
    height: 35,
    width: 70,
    padding: 0,
    paddingHorizontal: 0,
    backgroundColor: Colors.systemColor2,
  },
  buttonInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  messageCampaign: {
    color: Colors.textColor1,
    fontFamily: Fonts.semiBold,
    lineHeight: 22,
    fontSize: 13,
    textAlignVertical: 'center',
  },
  moreDetail: {
    color: Colors.systemColor2,
    fontFamily: Fonts.bold,
    padding: 0,
    position: 'absolute',
    bottom: -5,
  },
})