import { StyleSheet } from 'react-native'
import Colors from '../Colors/Colors'

export default StyleSheet.create({
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
    zIndex: 1,
  },

  headerContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginTop: 8,
    marginBottom: -1, // to remove the divider between header and content
    paddingVertical: 8,
  },

  dragContainer: {
    marginVertical: 8,
  },

  titleContainer: {
    marginHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

