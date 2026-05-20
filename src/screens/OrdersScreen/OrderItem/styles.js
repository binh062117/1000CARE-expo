import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'

export default StyleSheet.create({
  orderContainer: {
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  logo: {
    width: 73,
    height: 61,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  orderInfoContainer: {
    flex: 2,
    display: 'flex',
    paddingVertical: 12,
    justifyContent: 'flex-start',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 5,
    marginTop: 8,
  },
  price: {
    color: Colors.priceColor,
    fontSize: 14,
    fontWeight: 'bold',
  },
  salePrice: {
    color: Colors.red,
    fontSize: 14,
    fontWeight: 'bold',
  },
  orderTransId:{
    color: Colors.textColor2,
    fontSize: 14,
    fontWeight: 'bold',
  },
  orderTime: {
    color: Colors.textColor3,
    fontSize: 12,
  },
  reOrderBtnContainer: {
    flexDirection: 'row',
    margin: 0, 
    padding: 0,
    alignItems: 'center', 
    paddingHorizontal: 18,
  },
  reOrderBtn: {
    height: 36,
    padding: 0,
    paddingHorizontal: 24,
    borderRadius: 50,
    backgroundColor: Colors.systemColor2,
  },
  reOrderText: {
    fontSize: 14,
    lineHeight: 22,
  },
  cancelContainer: {
    // position: 'absolute',
    paddingHorizontal: 10,
    // bottom: 10,
    // right: 8,
  },
  buyAgainContainer: {
    // position: 'absolute',
    // backgroundColor: 'red',
    paddingHorizontal: 15,
    // bottom: 10,
    borderWidth: 1,
    borderColor: Colors.colorMain,
    borderStyle: 'solid',
    borderRadius: 20,
    // right: 80,
  },
  buyAgainText: {
    fontSize: 12,
    lineHeight: 20,
    color:Colors.primary,
  },
  cancelText: {
    fontSize: 12,
    lineHeight: 20,
    color:Colors.errorColor,
  },
  confirmText: {
    fontSize: 12,
    lineHeight: 20,
    color:Colors.green,
  },
})
