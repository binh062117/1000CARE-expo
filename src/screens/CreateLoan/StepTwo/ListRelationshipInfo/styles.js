import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    padding: 18,
  },

  textTitle: {
    fontFamily: Fonts.bold,
  },

  addButtonContainer: {
    backgroundColor: Colors.systemColor2,
    alignSelf: 'flex-end',
    marginRight: 18,
    marginBottom: 40,
    width: 36,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },

  addButton: {
    width: 18,
    height: 18,
  },
})