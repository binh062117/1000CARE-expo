import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const SearchValueItem = ({ text, onClick }) => {
  return (
    <TouchableOpacity
      style={styles.wrap}
      onPress={onClick}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrap: {
    padding: 18,

    borderColor: '#F5F5F5',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  text: {
    color: '#595959',
    fontSize: 14,
  },
})

export default SearchValueItem
