import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'

export default StyleSheet.create({
  tabBarIndicator: {
    backgroundColor: Colors.tabBarUnderline,
  },

  tabBarContainer: {
    backgroundColor: Colors.white,
    color: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    elevation: 0,
  },

  tabBarLabelActive: {
    color: Colors.tabBarUnderline,
  },

  tabBarLabelInactive: {
    color: Colors.textColor3,
  },

  tabBarHeaderContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  imageAndBadge: {
    width: 36,
    height: 36,
  },
  
  tabBarImage: {
    width: 32,
    height: 32,
  },

  marginBottomMedium: {
    marginBottom: 10,
  },

  badge: {
    backgroundColor: Colors.red,
    marginLeft: 6,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  longBadge: {
    right: -4,
  },

  headerContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },

  tabIcon: {
    width: 32,
    height: 32,
  },

  tabLabelContainer: {
    alignItems: 'center',
  },
})
