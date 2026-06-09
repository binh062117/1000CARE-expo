import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'
import { s, fs } from '~/utils/responsive'
import { brandColors } from '~/design-system/tokens'

export default StyleSheet.create({
  headerContainer: {
    height: s(64),
    backgroundColor: brandColors.surface,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    height: s(62),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontWeight: '800',
    fontSize: fs(18),
    color: brandColors.textDark,
    width: '80%',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: -s(35),
  },
  backBtn: {
    padding: s(12),
  },
  cartQuantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: s(12),
  },
  buttonReadAllNoti: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.systemColor2,
    marginRight: s(10),
    padding: s(6),
    paddingHorizontal: s(12),
    borderRadius: s(12),
  },
})
