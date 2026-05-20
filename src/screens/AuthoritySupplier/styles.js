import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'
import dimens from '~/constants/dimens'

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginBottom: 5,
    marginHorizontal: 10,
  },
  contentDistri: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 50,
    marginHorizontal: 10,
  },
  nameDistri: {
    fontWeight: 'bold',
    width: dimens.common.WINDOW_WIDTH - 120,
  },
  viewCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginRight: 10,
  },
  circleSelect: {
    backgroundColor: Colors.colorMain,
    width: 10,
    height: 10,
    borderRadius: 10,
  },
})
export default styles