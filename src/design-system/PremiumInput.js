import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { s, fs } from '../utils/responsive';

const PremiumInput = ({ label, value, onChangeText, placeholder, keyboardType = 'default', error }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, error && styles.errorInput]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#979da0"
          keyboardType={keyboardType}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: s(10),
    width: '100%',
  },
  label: {
    fontSize: fs(14),
    color: '#354052',
    marginBottom: s(8),
    fontWeight: '500',
    marginLeft: s(4),
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: s(16),
    paddingHorizontal: s(16),
    height: s(56),
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: s(2) },
    shadowOpacity: 0.05,
    shadowRadius: s(4),
    elevation: 2,
  },
  input: {
    fontSize: fs(16),
    color: '#354052',
  },
  errorInput: {
    borderColor: '#ff190c',
  },
  errorText: {
    color: '#ff190c',
    fontSize: fs(12),
    marginTop: s(4),
    marginLeft: s(4),
  },
});

export default PremiumInput;
