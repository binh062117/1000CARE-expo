import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { s, fs } from '../utils/responsive';

const PremiumButton = ({ text, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.container, style]}>
      <LinearGradient
        colors={['#00616D', '#0B7B8A']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: s(16),
    overflow: 'hidden',
    marginVertical: s(8),
    shadowColor: '#0B7B8A',
    shadowOffset: { width: 0, height: s(4) },
    shadowOpacity: 0.2,
    shadowRadius: s(5),
    elevation: 5,
  },
  gradient: {
    paddingVertical: s(14),
    paddingHorizontal: s(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: fs(16),
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default PremiumButton;
