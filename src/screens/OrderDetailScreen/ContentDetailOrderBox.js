import React from 'react'
import { View, StyleSheet } from 'react-native'

const ContentDetailOrderBox = ({ children }) => {
  return <View style={styles.wrap}>{children}</View>
}

const styles = StyleSheet.create({
  wrap: {
    paddingVertical: 9,
    
    backgroundColor: '#FFF',

    borderTopColor: '#F5F5F5',
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
})

export default ContentDetailOrderBox
