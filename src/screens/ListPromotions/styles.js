import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'

const styles = StyleSheet.create({
  safeArea: {
    flex:1,
    backgroundColor: Colors.backgroundColor,
  },
  mainContainer: {
    marginTop: 1,
    flex: 1, 
    paddingHorizontal: 18,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 9,
    marginBottom: 18,
    fontFamily: Fonts.bold,
    color: Colors.textColor2,
  },
  iconCheck: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
})

export default styles