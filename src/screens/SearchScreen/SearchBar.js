import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import InputSearch from './InputSearch'
import CustomHeader from './CustomHeader'

const SearchBar = ({ navigation, onBack, onChangeText, idSearchDistri, textSearch, ref_input }) => {
  return (
    <LinearGradient
      colors={['#0B7B8A', '#075E6B']}
      style={styles.wrapSearchBar}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <CustomHeader navigation={navigation} onBack={onBack} />
      <InputSearch 
        ref_input={ref_input} 
        onChangeText={onChangeText} 
        idSearchDistri={idSearchDistri} 
        textSearch={textSearch} 
      />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  wrapSearchBar: {
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? 40 : 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
})

export default SearchBar
