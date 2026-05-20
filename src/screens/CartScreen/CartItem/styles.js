import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'

const styles = StyleSheet.create({
  mainContainer: { 
    flex:1,
    display: 'flex',
    justifyContent:'space-between',
    backgroundColor: Colors.backgroundColor,
    marginBottom: 9,
  },
  
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 6,
    paddingHorizontal: 18,
    paddingTop: 18,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.textColor2,
    fontFamily: Fonts.bold,
    fontWeight: '700',
    lineHeight: 22,
    fontSize: 14,
  },

  amountItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 9,
    backgroundColor: Colors.white,
  },

  label: {
    color: Colors.textColor3,
    fontSize: 12,
    lineHeight: 20,
    fontFamily: Fonts.medium,
  },

  priceItem: {
    color: Colors.systemColor2,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: 'bold',
  },

  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: 12,
    marginHorizontal: 18,
  },

  pointContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: 50,
    marginHorizontal: 18,
  },

  priceText: {
    fontSize: 18,
    color: Colors.priceColor,
  },

  pointText: {
    fontSize: 18,
    color: Colors.red,
  },

  totalText: {
    color: Colors.textColor2,
    fontSize: 14,
  },

  listProductContainer: {
    flex: 2,
    backgroundColor: Colors.backgroundColor,
    marginTop: 6,
  },

  addressContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: Colors.backgroundColor,
    marginTop: 6,
    paddingBottom: 6,
  },

  addressTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 18,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },

  addressInfoContainer: {
    display: 'flex',
    marginTop: 1,
    padding: 18,
    flexDirection: 'column',
    backgroundColor: Colors.white,
  },

  addressName: {
    color: Colors.textColor1,
    fontWeight: '500',
    lineHeight: 22,
    fontSize: 14,
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
  },

  itemSeparator: {
    height: 6,
    backgroundColor: Colors.backgroundColor,
  },

  mt6: {
    marginTop: 6,
  },

  iconGPS: {
    height: 21,
    width: 18,
    marginRight: 10,
  },

  addressText: {
    color: Colors.textColor2,
    fontWeight: '500',
    lineHeight: 22,
    fontSize: 14,
  },
  
  chooseAddressText: {
    color: Colors.systemColor2,
    textDecorationLine: 'underline',
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '500',
  },

  listHeader: {
    display: 'flex',
    // flexDirection: 'row',
    backgroundColor: Colors.white,
    marginBottom: 2, 
    padding: 18,
    paddingHorizontal: 8,
  },
  textOrderLimit: {
    color:'red',
  },
  textListHeader: {
    marginLeft: 6,
    color: Colors.textColor2,
    fontSize: 14,
  },

  textInfoListHeader: {
    fontFamily: Fonts.bold,
    color: Colors.textColor3,
    fontSize: 14,
  },
})

export default styles