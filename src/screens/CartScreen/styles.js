import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'

const styles = StyleSheet.create({
  mainContainer: { 
    flex:1,
    display: 'flex',
    justifyContent:'space-between',
    backgroundColor: Colors.backgroundColor,
  },
  
  listItem: {
    marginVertical: 12,
    backgroundColor: Colors.white,
  },

  bottomContainer: {
    paddingVertical: 18,
    paddingTop: 20,
    paddingBottom: 18,
    backgroundColor: Colors.white,
    alignSelf: 'flex-end',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    elevation: 16,
  },

  nextStepBtnContainer: {
    flexDirection: 'row',
    margin: 0, 
    padding: 0,
    alignItems: 'center', 
    paddingHorizontal: 18,
  },

  nextStepBtn: {
    height: 50,
    width: '100%',
    padding: 0,
    paddingHorizontal: 0,
    borderRadius: 50,
    backgroundColor: Colors.systemColor2,
  },

  buyBtnContainer: {
    flexDirection: 'row',
    margin: 0, 
    padding: 0,
    alignItems: 'center', 
    paddingHorizontal: 18,
  },

  buyBtn: {
    height: 50,
    width: '100%',
    padding: 0,
    paddingHorizontal: 0,
    borderRadius: 50,
    backgroundColor: Colors.white,
    borderColor: Colors.systemColor2,
    borderWidth: 1,
  },

  buyBtnText: {
    color: Colors.systemColor2,
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
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginBottom: 2, 
    padding: 18,
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

  dialogDeleteContainer: { backgroundColor: 'white', padding: 12, borderRadius: 4 },
  messageDeleteProduct: {
    textAlign: 'center',
    fontSize: 14,
  },
  dialogButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
})

export default styles