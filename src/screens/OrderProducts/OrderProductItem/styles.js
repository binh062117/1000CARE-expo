import { StyleSheet, Dimensions } from 'react-native'
import Colors from '~/common/Colors/Colors'

export default StyleSheet.create({
  wrap: {
    width: '100%',
    height: 102,
    backgroundColor: '#FFF',

    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderStyle: 'solid',

    display: 'flex',
    flexDirection: 'row',
  },
  wrapImage: {
    width: 140,
    height: 102,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 64,
    width: 64,
    resizeMode: 'contain',
  },
  wrapInfo: {
    width: Dimensions.get('window').width - 140,
    height: 102,
    padding: 18,
  },
  title: {
    fontSize: 14,
    color: '#595959',
    lineHeight: 20,
  },
  wrapAmountAndPrice: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    position: 'absolute',
    left: 18,
    bottom: 18,
  },
  labelAmount: {
    fontSize: 14,
    color: '#8C8C8C',
  },
  amount: {
    fontSize: 14,
    color: '#595959',
  },
  price: {
    fontSize: 14,
    color: Colors.priceColor,
  },
  salePrice:{
    fontSize: 14,
    color: Colors.red,
  },
})