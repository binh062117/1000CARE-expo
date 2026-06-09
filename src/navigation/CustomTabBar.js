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
import { s, fs } from '~/utils/responsive';
import { brandColors, brandShadow } from '~/design-system/tokens';

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
                    { tintColor: isFocused ? brandColors.surface : brandColors.mutedLight }
                  ]}
                  resizeMode="contain"
                />
              </View>
              <Text style={[styles.labelText, isFocused && styles.activeLabelText]}>{label}</Text>
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
    paddingHorizontal: s(16),
    paddingBottom: Platform.OS === 'ios' ? s(24) : s(16),
    backgroundColor: 'transparent',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: brandColors.textDark,
    borderRadius: s(28),
    minHeight: s(78),
    alignItems: 'center',
    justifyContent: 'space-between',
    ...brandShadow.soft,
    paddingHorizontal: s(10),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: s(8),
    borderRadius: s(20),
  },
  activeTabItem: {
    backgroundColor: brandColors.surface,
  },
  iconContainer: {
    width: s(34),
    height: s(34),
    borderRadius: s(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIconContainer: {
    backgroundColor: brandColors.tealPrimary,
  },
  icon: {
    width: s(22),
    height: s(22),
  },
  labelText: {
    marginTop: s(4),
    fontSize: fs(10),
    lineHeight: fs(13),
    fontWeight: '800',
    color: 'rgba(255,255,255,0.52)',
  },
  activeLabelText: {
    color: brandColors.tealPrimary,
  }
});

export default CustomTabBar;
