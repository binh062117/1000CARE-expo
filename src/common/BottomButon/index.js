import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { s, fs } from '../../utils/responsive'

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
    height: s(68),
    backgroundColor: '#FFF',

    paddingHorizontal: s(18),
    paddingVertical: s(9),

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: Dimensions.get('window').width - s(36),
    height: s(50),
    backgroundColor: '#0B7B8A',

    maxWidth: 320,
    borderRadius: s(25),

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fs(14),
    color: '#FFF',
    fontWeight: 'bold',
  },
})

export default BottomButon
