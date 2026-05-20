import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Colors.white,
    marginTop: 8,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 18,
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.textColor2,
    fontFamily: Fonts.bold,
    fontWeight: '700',
    lineHeight: 22,
    fontSize: 14,
  },
  seeAll: {
    color: Colors.systemColor2,
    fontFamily: Fonts.medium,
    textDecorationLine: 'underline',
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '500',
  },
  emptyText: {
    color: Colors.textColor2,
    fontFamily: Fonts.medium,
    marginHorizontal: 18,
    marginBottom: 18,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
  },
})

export default styles