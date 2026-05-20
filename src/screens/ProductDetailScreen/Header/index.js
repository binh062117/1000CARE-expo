import React from 'react'
import { Image } from '~/common/index'
import { TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { back } from '~/assets/constants'
import CartHeaderButton from '~/common/CartHeaderButton/CartHeaderButton'

import styles from './styles'

const Header = ({ navigation, goBack }) => {

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => {
          if (goBack) {
            goBack()
          }
          navigation.pop()
        }}
      >
        <Image
          resizeMode={'contain'}
          source={back}
        />
      </TouchableOpacity>
      <View style={styles.cartQuantityContainer}>
        <CartHeaderButton 
          navigation={navigation}
        />
      </View>
    </View>
  )
}

export default Header
