import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'

export default StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    height: 58,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.textColor2,
    width: '80%',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: -35,
  },
  backBtn: {
    padding: 12,
  },
  cartQuantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 12,
  },
  buttonReadAllNoti: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.systemColor2,
    marginRight: 10,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
})
