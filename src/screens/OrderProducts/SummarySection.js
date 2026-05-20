import React from 'react'
import { View, StyleSheet } from 'react-native'

const SummarySection = ({ children }) => {
  return <View style={styles.wrap}>{children}</View>
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    backgroundColor: '#FFF',

    paddingVertical: 9,

    borderTopColor: '#F5F5F5',
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
})

export default SummarySection
