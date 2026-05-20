import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Platform, LayoutAnimation, UIManager } from 'react-native';
import { Image, Text } from '~/common/index';
import { shopping_bag, home, gift, account } from '~/assets/constants';
import {
  NAVIGATION_TO_HOME_SCREEN,
  NAVIGATION_ORDERS_SCREEN,
  NAVIGATION_TO_HOT_DEAL_SCREEN,
  NAVIGATION_TO_PROFILE_SCREEN,
} from '~/navigation/routes';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const { width } = Dimensions.get('window');

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    [NAVIGATION_TO_HOME_SCREEN]: home,
    [NAVIGATION_ORDERS_SCREEN]: shopping_bag,
    [NAVIGATION_TO_HOT_DEAL_SCREEN]: gift,
    [NAVIGATION_TO_PROFILE_SCREEN]: account,
  };

  const labels = {
    [NAVIGATION_TO_HOME_SCREEN]: 'Trang chủ',
    [NAVIGATION_ORDERS_SCREEN]: 'Đơn hàng',
    [NAVIGATION_TO_HOT_DEAL_SCREEN]: 'Giỏ quà',
    [NAVIGATION_TO_PROFILE_SCREEN]: 'Tài khoản',
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = labels[route.name] || route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // Trigger smooth animation before navigating
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={[styles.tabItem, isFocused && styles.activeTabItem]}
              activeOpacity={0.7}
            >
              <View style={[styles.iconContainer, isFocused && styles.activeIconContainer]}>
                <Image
                  source={icons[route.name]}
                  style={[
                    styles.icon,
                    { tintColor: isFocused ? '#FFFFFF' : '#8C8C8C' }
                  ]}
                  resizeMode="contain"
                />
              </View>
              {isFocused && (
                <Text style={styles.labelText}>{label}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: width,
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === 'ios' ? 24 : 16,
    backgroundColor: 'transparent',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    height: 75,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    paddingHorizontal: 8,
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
  },
  activeTabItem: {
    backgroundColor: '#E0F4F6', // Teal Light
  },
  iconContainer: {
    padding: 8,
    borderRadius: 20,
  },
  activeIconContainer: {
    backgroundColor: '#0B7B8A', // Teal Primary
  },
  icon: {
    width: 22,
    height: 22,
  },
  labelText: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: '700',
    color: '#0B7B8A', // Teal Primary
  }
});

export default CustomTabBar;
