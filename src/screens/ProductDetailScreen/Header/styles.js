import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'
import dimension from '~/constants/dimens'

export default StyleSheet.create({
  headerContainer: {
    height: dimension.common.WINDOW_HEIGHT * 0.06,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartQuantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 12,
  },
  backBtn: {
    padding: 12,
  },
  heart: {
    height: 24,
    width : 20,
  },
})
