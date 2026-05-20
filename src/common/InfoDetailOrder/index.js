import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InfoDetailOrder = ({ label, value, styleValue, styleWrap, styleLabel }) => {
  return (
    <View style={[styles.wrap, styleWrap]}>
      <Text style={[styles.label, styleLabel]}>{label}</Text>
      <Text style={[styles.value, styleValue]}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',

    paddingHorizontal: 18,
    paddingVertical: 9,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#8C8C8C',
  },
  value: {
    fontSize: 12,
    color: '#595959',
  },
})

export default InfoDetailOrder
