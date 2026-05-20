import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'
import dimen from '~/constants/dimens'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  buttonItem: (read,isReadAll) => ({
    flexDirection: 'row',
    marginTop: 1,
    backgroundColor: read || isReadAll ? 'white' : 'rgba(114, 114, 114, 0.1)',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 5,
  }),
  title: {
    fontWeight:'bold',
    lineHeight:22,
    fontSize:14,
    fontFamily: Fonts.bold,
    color: Colors.textColor2,
  },
  gift_fill: {
    height: 25,
    width: 25,
  },
  viewBell: {
    height:42,
    width:42,
    borderRadius:50,
    backgroundColor: 'rgba(66, 118, 254, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: 10,
  },
  content: {
    width: dimen.common.WINDOW_WIDTH-62,
  },
  textMessage: {
    lineHeight: 22,
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.textColor2,
  },
  textTime: {
    lineHeight: 20,
    fontSize: 12,
    fontFamily: Fonts.base,
    color: Colors.textColor3,
  },
})
export default styles