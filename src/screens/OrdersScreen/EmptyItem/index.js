import React from 'react'
import { Image } from '~/common/index'
import { View, Text } from 'react-native'
import { empty_cart } from '~/assets/constants'

import styles from './styles'

const EmptyItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        resizeMode={'contain'}
        source={empty_cart}
      />
      <Text style={styles.message}>
        {'Không tồn tại đơn hàng.'}
      </Text>
    </View>
  )
}

export default EmptyItem
