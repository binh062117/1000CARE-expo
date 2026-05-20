import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'
import { DIMENS } from '~/constants/index'

const styles = StyleSheet.create({
  container: { 
    flex:1,
    display: 'flex',
    justifyContent:'space-between',
    backgroundColor: Colors.white,
  },

  productItemContainer: {
    paddingHorizontal: 18,
    paddingVertical: 9,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  styleTextInputNote: {
    color: Colors.blackColor,
    fontSize: 14,
    borderWidth: 1,
    // marginHorizontal: 10,
    borderColor: '#C2C2C2',
    borderRadius: 5,
    paddingHorizontal: 10,
    height:40,
  },

  price: {
    color: Colors.priceColor,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: 'bold',
  },

  priceItem: {
    color: Colors.systemColor2,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: 'bold',
  },

  discount: {
    marginLeft: 2,
    fontSize: 12,
    color: '#CCCCCC',
    lineHeight: 20,    
    textDecorationLine: 'line-through',
  },

  salePrice: {
    color: Colors.red,
    fontSize: 14,
    fontWeight: 'bold',
  },
  
  productName: {
    color: Colors.textColor2,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    flex: 2,
  },
  
  icon: {
    marginRight: 12, 
  },
  headerText: {
    color: Colors.textColor2,
    fontSize: 14,
  },
  itemIcon: {
    width: 24,
    height: 24,
  },
  headerIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 42,
    display: 'flex',
    justifyContent: 'center',
    marginRight: 12,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 149, 217, 0.1)',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: Colors.backgroundColor,
  },

  bottomContainer: {
    paddingHorizontal: 18,
    paddingVertical: 6,
    display: 'flex',
    flexDirection: 'column',
    borderTopWidth: 1,
    borderColor: Colors.backgroundColor,
  },

  bottomInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  label: {
    color: Colors.textColor3,
    fontSize: 12,
    lineHeight: 20,
    fontFamily: Fonts.medium,
  },

  distributorName: {
    color: Colors.textColor2,
    fontSize: 12,
    lineHeight: 20,
    marginLeft: 6,
  },

  listProduct: {
    paddingVertical: 9,
  },

  checkoutBtnContainer: {
    height: 40,
    width: DIMENS.common.WINDOW_WIDTH * 0.75,
    alignSelf: 'center',
  },
  checkoutBtn: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.systemColor2,
    backgroundColor: Colors.white,
  },
  checkoutBtnText: {
    color: Colors.systemColor2,
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 22,
  },

  deactive: {
    borderColor: Colors.textColor2,
    color: Colors.textColor2,
  },

  choosePaymentMethob: {
    color: Colors.systemColor2,
    textDecorationLine: 'underline',
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '500',
  },

  noData: {
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  text: {
    color: Colors.textColor3,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Quicksand-Medium',
  },

  promotionTitle: {
    paddingTop: 14,
    paddingBottom: 7,
    paddingLeft: 14,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '700',
    backgroundColor: '#F2FEFF',
    color: Colors.textColor2,
  },

  paymentTitle: {
    paddingTop: 14,
    paddingBottom: 7,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '700',
    color: Colors.textColor2,
  },

  paymentMethobTitle: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 22,
    fontWeight: '700',
    color: Colors.textColor2,
  },
})

export default styles