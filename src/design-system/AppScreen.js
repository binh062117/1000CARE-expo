import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { brandColors } from './tokens';

const AppScreen = ({
  children,
  scroll = false,
  style,
  contentContainerStyle,
  safeAreaStyle,
  ...scrollProps
}) => {
  const content = scroll ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.body, style]}
      contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
      {...scrollProps}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.body, style]}>{children}</View>
  );

  return (
    <SafeAreaView style={[styles.safeArea, safeAreaStyle]}>
      {content}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: brandColors.background,
  },
  body: {
    flex: 1,
    backgroundColor: brandColors.background,
  },
  scrollContent: {
    paddingBottom: 24,
  },
});

export default AppScreen;
