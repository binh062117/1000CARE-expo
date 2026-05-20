import React from 'react'
import { View, StyleSheet } from 'react-native'

const SectionInformation = ({ children }) => {
  return <View style={styles.wrap}>{children}</View>
}

const styles = StyleSheet.create({
  wrap: {
    paddingVertical: 9,
    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,
    borderColor: '#F5F5F5',
    borderStyle: 'solid',
  },
})

export default SectionInformation
