import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'

export default StyleSheet.create({
  tabHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-around',
    marginTop: 6,
  },
  tabHeader: {
    display: 'flex',
    justifyContent:'center',
    flex:1,
    alignItems: 'center',
    height: 54,
    backgroundColor: Colors.white,
  },
  selected: {
    borderBottomColor: Colors.systemColor2,
    borderBottomWidth: 1,
  },
  textSelected: {
    fontFamily: Fonts.medium,
    color: Colors.systemColor2,
  },
  voucherContainer: {
    backgroundColor:  Colors.white,
    marginTop: 6,
  },
})