import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { brandGradients } from './tokens';

const PremiumBackground = ({ children, colors = brandGradients.light }) => {
  return (
    <LinearGradient colors={colors} style={styles.container}>
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
});

export default PremiumBackground;
