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

  inputContainerStyle: {
    borderWidth: 0,
    borderColor: Colors.borderColor,
    borderBottomWidth: 1,
    marginBottom: 16,
  },

  labelStyle: {
    color: Colors.textColor3,
    fontFamily: Fonts.medium,
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 20,
  },
})