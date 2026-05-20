import { StyleSheet } from 'react-native'
import Colors from '../../common/Colors/Colors'

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    color: Colors.backgroundColor,
  },
  profileInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 18,
    marginVertical: 12,
    backgroundColor: Colors.white,
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatarImg: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
  },
  name: {
    color: Colors.textColor2,
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    color: Colors.textColor3,
    fontSize: 12,
  },
  listItemContainer: {
    display: 'flex',
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  icon: {
    marginRight: 12, 
  },
  value: {
    color: Colors.textColor2,
    fontSize: 14,
  },
  itemIcon: {
    width: 24,
    height: 24,
    borderRadius: 42,
  },
  itemIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 42,
    display: 'flex',
    justifyContent: 'center',
    marginRight: 12,
    alignItems: 'center',
  },
})
export default styles
