import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from '~/common';
import { s, fs } from '../utils/responsive';

const { width } = Dimensions.get('window');

const PremiumCard = ({ 
  title, 
  subtitle, 
  onPress, 
  colors = ['#0B7B8A', '#075E6B'], // Teal Primary to Teal Dark
  image 
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.wrapper}>
      <LinearGradient
        colors={colors}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.glassEffect} />
        <View style={styles.circleDecorator} />
        
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
          
          <TouchableOpacity style={styles.actionButton} onPress={onPress}>
            <Text style={styles.actionText}>Khám phá</Text>
          </TouchableOpacity>
        </View>

        {image && (
          <Image source={image} style={styles.cardImage} resizeMode="contain" />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: s(12),
    shadowColor: '#0B7B8A', // Teal Primary
    shadowOffset: { width: 0, height: s(10) },
    shadowOpacity: 0.2,
    shadowRadius: s(15),
    elevation: 8,
  },
  card: {
    width: width - s(32),
    height: s(160),
    borderRadius: s(24),
    padding: s(24),
    alignSelf: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  glassEffect: {
    position: 'absolute',
    top: -s(50),
    right: -s(50),
    width: s(150),
    height: s(150),
    borderRadius: s(75),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  circleDecorator: {
    position: 'absolute',
    bottom: -s(30),
    left: -s(30),
    width: s(100),
    height: s(100),
    borderRadius: s(50),
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    zIndex: 2,
  },
  textContainer: {
    maxWidth: '70%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: fs(22),
    fontWeight: '800',
    lineHeight: s(28),
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: fs(14),
    marginTop: s(6),
    fontWeight: '500',
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: s(10),
    paddingHorizontal: s(20),
    borderRadius: s(15),
    alignSelf: 'flex-start',
  },
  actionText: {
    color: '#0B7B8A', // Teal Primary
    fontSize: fs(13),
    fontWeight: '700',
  },
  cardImage: {
    position: 'absolute',
    right: -s(10),
    bottom: -s(10),
    width: s(140),
    height: s(140),
    zIndex: 1,
    opacity: 0.8,
  },
});

export default PremiumCard;
