import React from 'react'
import { Image } from '~/common/index'
import { View, Text } from 'react-native'
import { box_empty } from '~/assets/constants'

import styles from './styles'

const EmptyItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        resizeMode={'contain'}
        source={box_empty}
        style={styles.image}
      />
      <Text style={styles.message}>
        {'Hiện tại không có sản phẩm khuyến mãi nào.'}
      </Text>
    </View>
  )
}

export default EmptyItem
