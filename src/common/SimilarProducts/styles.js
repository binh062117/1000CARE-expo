import { StyleSheet } from 'react-native'
import dimension from '~/constants/dimens'

export default StyleSheet.create({
  similarProductContainer: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
    paddingBottom: 20,
  },
  productContainer: {
    marginRight: 10,
    width: dimension.common.WINDOW_WIDTH * 0.23,
  },
  productImage: {
    width: dimension.common.WINDOW_WIDTH * 0.23,
    height: dimension.common.WINDOW_WIDTH * 0.2,
  },
  title: {
    color: '#072480',
    fontSize: 16,
    marginBottom: 10,
  },
  productPrice: {
    color: 'red',
  },
})
