import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const RadioButton = ({ selected, title, onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={styles.wrap}
    >
      <View style={[styles.radio, { borderColor: selected ? '#0095D9' : '#CCC' }]}>
        {
          selected ? <View style={styles.dot} /> : <></>
        }
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderColor: '#CCC',
    borderWidth: 1,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#0095D9',
  },
  text: {
    marginLeft: 6,
    color: '#595959',
  },
})

export default RadioButton