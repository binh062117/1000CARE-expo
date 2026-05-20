import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = props => {
  const { placeholder,style,onChangeText,keyboardType,value } = props
  return(
    <TextInput 
      placeholder={placeholder}
      style={[styles.styleTextInput,style]}
      placeholderTextColor={'#8C8C8C'}
      underlineColorAndroid='transparent'
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      value={value}
    />
  )
}
export default Input

const styles = StyleSheet.create({
  styleTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#DFDFDF',
  },
})