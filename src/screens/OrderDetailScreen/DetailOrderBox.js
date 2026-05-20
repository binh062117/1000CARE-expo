import React from 'react'
import { View, StyleSheet } from 'react-native'

const DetailOrderBox = ({ children }) => {
  return <View style={styles.wrap}>{children}</View>
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 12,
  },
})

export default DetailOrderBox
