import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 6,
    backgroundColor: Colors.white,
    marginTop: 8,
  },
  title: {
    color: Colors.textColor2,
    textAlign: 'left',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '700',
    marginTop: 6,
    marginLeft: 6,
    marginBottom: 12,
  },
  all: {
    color: Colors.systemColor2,
    fontWeight: '700',
    fontSize: 14,
  },
  allContainer: {
    position: 'absolute',
    right: 18,
    top: 9,
  },
})
