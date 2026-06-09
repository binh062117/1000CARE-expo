import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { s, fs } from '~/utils/responsive'
import { brandColors } from '~/design-system/tokens'

const Input = props => {
  const { placeholder,style,onChangeText,keyboardType,value } = props
  return(
    <TextInput 
      placeholder={placeholder}
      style={[styles.styleTextInput,style]}
      placeholderTextColor={brandColors.mutedLight}
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
    minHeight: s(52),
    borderWidth: 1,
    borderColor: brandColors.border,
    backgroundColor: brandColors.surface,
    borderRadius: s(16),
    paddingHorizontal: s(16),
    color: brandColors.textDark,
    fontSize: fs(14),
    fontWeight: '500',
  },
})
