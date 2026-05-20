import React from 'react'
import { View, Text } from 'react-native'
import { Image } from '~/common/index'
import { formatMoney } from '~/utils/format'

import styles from './styles'
import placeholder from '~/assets/images/placeholder.png'
import { getProductImage } from '~/utils/image'

const OrderProductItem = ({ item }) => {

  const productImage = () => {
    // Try to get from images_resize first
    if (item.images_resize && Array.isArray(item.images_resize) && item.images_resize.length > 0 && item.images_resize[0]) {
      return item.images_resize[0].lg || item.images_resize[0].xl || item.images_resize[0].md || item.images_resize[0].sm
    }
    // Fallback to product_image
    if (!item.product_image || !item.product_image.includes('[')) {
      return item.product_image ? item.product_image : placeholder
    }
    const images = JSON.parse(item.product_image)
    return images[0]
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.wrapImage}>
        <Image
          style={styles.image}
          source={{ uri: productImage() }}
        />
      </View>
      <View style={styles.wrapInfo}>
        <Text
          numberOfLines={2}
          style={styles.title}
        >
          {item.product_name}
        </Text>
        <View style={styles.wrapAmountAndPrice}>
          <Text>
            <Text style={styles.labelAmount}>SL: </Text>
            <Text style={styles.amount}>x{item.quantity}</Text>
          </Text>
          {
            item.payment_type !== 2 && (
              <Text style={styles.price}>{formatMoney(item.price_sale, { unit: 'đ' })}</Text>
            )
          }
          {
            item.payment_type === 2 && (
              <Text style={styles.salePrice}>
                {formatMoney(item.price_sale, { unit: 'điểm' })}
              </Text>
            )
          }
        </View>
      </View>
    </View>
  )
}

export default OrderProductItem
