import React from 'react'
import Colors from '../../common/Colors/Colors'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

const Button = ({ text, onPressEvent, styleView, styleButton, styleText, disabled=false }) => {
  return (
    <View style={[styles.container,styleView]}>
      <TouchableOpacity
        style={[styles.btn_container,styleButton]}
        onPress={onPressEvent}
        disabled={disabled}
      >
        <Text style={[styles.text,styleText]}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn_container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal:25,
    backgroundColor: Colors.systemColor2,
    borderRadius: 5,
  },
  container: {
    paddingHorizontal:25,
  },
  loading: { position: 'absolute', left: 20 },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default Button
