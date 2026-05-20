import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from '~/common';

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
    marginVertical: 12,
    shadowColor: '#0B7B8A', // Teal Primary
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 8,
  },
  card: {
    width: width - 32,
    height: 160,
    borderRadius: 24,
    padding: 24,
    alignSelf: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  glassEffect: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  circleDecorator: {
    position: 'absolute',
    bottom: -30,
    left: -30,
    width: 100,
    height: 100,
    borderRadius: 50,
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
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
    marginTop: 6,
    fontWeight: '500',
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  actionText: {
    color: '#0B7B8A', // Teal Primary
    fontSize: 13,
    fontWeight: '700',
  },
  cardImage: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: 140,
    height: 140,
    zIndex: 1,
    opacity: 0.8,
  },
});

export default PremiumCard;
