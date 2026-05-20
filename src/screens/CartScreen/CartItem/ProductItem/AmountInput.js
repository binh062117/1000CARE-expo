import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '~/common/Colors/Colors'

const AmountInput = ({ 
  onChangeText,
  onEndEditing,
  onPlus,
  onMinus,
  value,
  keyboardType,
}) => {
  return (
    <View>
      <View style={styles.wrap}>
        <TouchableOpacity
          onPress={onMinus}
          style={styles.btnMinus}
        >
          <View
            style={styles.btnMinusContent}
          />
        </TouchableOpacity>
        <TextInput
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          keyboardType={keyboardType}
          value={value}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={onPlus}
          style={styles.btnPlus}
        >
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  btnMinus: {
    width: 32,
    height: 32,
    backgroundColor: Colors.backgroundColor,

    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 70,
    height: 32,
    padding: 0,

    textAlign: 'center',
    borderColor: Colors.backgroundColor,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnMinusContent: {
    width: 10,
    backgroundColor: Colors.black,
    height: 2,
    alignSelf: 'center',
  },
  btn: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  btnPlus: {
    width: 32,
    height: 32,
    backgroundColor: Colors.backgroundColor,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default AmountInput