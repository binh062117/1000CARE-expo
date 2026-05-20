import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

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
    marginVertical: 10,
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#354052',
    marginBottom: 8,
    fontWeight: '500',
    marginLeft: 4,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    fontSize: 16,
    color: '#354052',
  },
  errorInput: {
    borderColor: '#ff190c',
  },
  errorText: {
    color: '#ff190c',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});

export default PremiumInput;
