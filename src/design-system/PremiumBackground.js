import React from 'react';
import { StyleSheet, SafeAreaView, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const PremiumBackground = ({ children, colors = ['#F8F9FA', '#E9ECEF'] }) => {
  return (
    <LinearGradient colors={colors} style={styles.container}>
      {/* Decorative elements for premium feel */}
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      
      <SafeAreaView style={styles.safeArea}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  safeArea: {
    flex: 1,
    zIndex: 1,
  },
  circle1: {
    position: 'absolute',
    top: -height * 0.1,
    right: -width * 0.2,
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: 'rgba(11, 123, 138, 0.05)', // Teal Primary with 5% opacity
  },
  circle2: {
    position: 'absolute',
    bottom: -height * 0.05,
    left: -width * 0.1,
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
    backgroundColor: 'rgba(11, 123, 138, 0.03)', // Teal Primary with 3% opacity
  },
});

export default PremiumBackground;
