import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'

const BottomButon = ({ label, onPress }) => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: 68,
    backgroundColor: '#FFF',

    paddingHorizontal: 18,
    paddingVertical: 18,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: Dimensions.get('window').width - 36,
    height: 50,
    backgroundColor: '#0095D9',

    maxWidth: 320,
    borderRadius: 25,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#FFF',
  },
})

export default BottomButon
