import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from '~/common'
import Colors from '~/common/Colors/Colors'

const InputSearch = ({ textSearch, onChangeText, ref_input, placeholder = 'Nhập tên sản phẩm' }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(textSearch)
  },[textSearch])

  return (
    <View style={styles.wrap}>
      <TextInput
        placeholderTextColor={Colors.textColor3}
        underlineColorAndroid='transparent'
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => {
          onChangeText(text)
          setValue(text)
        }}
        value={value}
        ref={ref_input}
      />
      <Icon
        style={styles.icon}
        type="feather"
        name={'search'}
        color={'#0B7B8A'}
        size={17}
      />
      <TouchableOpacity
        onPress={() => {
          onChangeText('')
          setValue('')
        }}
        style={styles.iconCancel}
      >
        <Icon
          type="material"
          name={'cancel'}
          size={20}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(0, 149, 217, 0.05)',
    paddingLeft: 42,
    borderRadius: 6,
    color: Colors.textColor3,
    paddingRight: 50,
  },
  icon: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 30,
    top: 19,
  },
  iconCancel: {
    width: 25,
    height: 24,
    position: 'absolute',
    right: 30,
    top: 17,
  },
})

export default InputSearch
