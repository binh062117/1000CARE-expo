import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import CartHeaderButton from '~/common/CartHeaderButton/CartHeaderButton'
import { Icon } from '../../common'

const CustomHeader = ({ navigation, onBack }) => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        onPress={() => {
          onBack()
        }}
        style={styles.backButton}
      >
        <Icon
          type="ionicon"
          name={'arrow-back'}
          color={'#FFF'}
          size={28}
        />
      </TouchableOpacity>
      <CartHeaderButton
        navigation={navigation}
        color="#FFF"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CustomHeader
