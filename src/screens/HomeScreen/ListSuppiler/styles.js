import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'

export default StyleSheet.create({
  categories: {
    height: 75,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 18,
  },
  listSupplierColumn: {
    zIndex: 10,
    width: 100,
    flexGrow: 0,
    backgroundColor: 'rgba(0, 149, 217, 0.08)',
    marginRight: 1,
  },
  listSupplier: {
    flexGrow: 0,
    backgroundColor: Colors.white,
    marginTop: 6,
    marginBottom: 6,
  },
  itemSeparator: {
    height: 1,
    backgroundColor: Colors.gray,
  },
})