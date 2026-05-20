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
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.colorMain,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  circleSelect: {
    backgroundColor: Colors.colorMain,
    width: 10,
    height: 10,
    borderRadius: 10,
  },
})
export default styles