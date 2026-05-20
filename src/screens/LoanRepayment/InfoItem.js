import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InfoItem = ({ title, children }) => {
  return <View style={styles.wrap}>
    <Text style={styles.text}>{title}</Text>
    {
      children
    }
  </View>
}

const styles = StyleSheet.create({
  wrap: {
    paddingVertical: 12,

    borderBottomWidth: 1,
    borderColor: '#F1F1F1',
  },
  text: {
    fontSize: 12,
    color: '#8C8C8C',
    marginBottom: 12,
  },
})

export default InfoItem