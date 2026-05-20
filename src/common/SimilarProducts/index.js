import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { View } from 'react-native'

import Text from '~/common/Text/index'
import Image from '~/common/Image/Image'
import { logoMedicine, logiDistri } from '~/assets/constants'
import styles from './styles'

const data = [
  { image: logoMedicine, name: 'Bộ 2 hộp Tràng Vị Khang', money: '608.000' },
  { image: logiDistri, name: 'Thực phẩm chức năng', money: '868.000' },
  { image: logoMedicine, name: 'Bộ 2 hộp Tràng Vị Khang', money: '608.000' },
  { image: logiDistri, name: 'Thực phẩm chức năng', money: '868.000' },
  { image: logoMedicine, name: 'Bộ 2 hộp Tràng Vị Khang', money: '608.000' },
  { image: logiDistri, name: 'Thực phẩm chức năng', money: '868.000' },
]

const renderProduct = data.map((item, index) => {
  return (
    <TouchableOpacity
      key={index}
      style={styles.productContainer}
    >
      <Image
        source={item.image}
        style={styles.productImage}
      />
      <Text numberOfLines={1}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.money} đ</Text>
    </TouchableOpacity>
  )
})

const SimilarProducts = () => {
  return (
    <View style={styles.similarProductContainer}>
      <Text style={styles.title}>Sản phẩm tương tự</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {renderProduct}
      </ScrollView>
    </View>
  )
}

export default SimilarProducts
