import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Text } from '~/common/index'
import ProductItem from '~/common/ProductItem/ProductItem'
import { NAVIGATION_PRODUCT_LIST } from '~/navigation/routes'
import { getListProductsBestSeller } from '~/store/selector'
import styles from './styles'
import { DIMENS } from '~/constants/index'

const HotProducts = ({ navigation, onFavorClick, onAddProduct, onMessage }) => {
  const listProductsBestSeller = useSelector(state => getListProductsBestSeller(state))
  const safeListProductsBestSeller = Array.isArray(listProductsBestSeller) ? listProductsBestSeller : []
  if (safeListProductsBestSeller.length === 0)
    return null

  const productWidth = Math.round(DIMENS.common.WINDOW_WIDTH * 0.36)
  const snapToInterval = productWidth + 10
  const listHeight = productWidth * 1.4 + 50 + 10

  return (
    <View style={styles.listDistributorContainer}>
      <View
        style={styles.labelContainer}
      >
        <Text style={styles.labelDistributor}>
          {'SẢN PHẨM MỚI/BÁN CHẠY'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NAVIGATION_PRODUCT_LIST, {
              type: 'best_seller',
              title: 'Sản phẩm bán chạy',
            })
          }}
        >
          <Text style={styles.seeAll} >
            {'Tất cả'}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={safeListProductsBestSeller}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: listHeight }}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        decelerationRate="fast"
        snapToInterval={snapToInterval}
        snapToAlignment="start"
        keyExtractor={(item, idx) => String(item?.product_id ?? item?.id ?? idx)}
        renderItem={({ item }) => {
          return (
            <ProductItem
              type={1}
              navigation={navigation}
              data={item}
              onFavorClick={onFavorClick}
              onAdd={onAddProduct}
              distributorId={item?.distributor_id}
              onMessage={onMessage}
              productWidth={productWidth}
            />
          )
        }}
      />

    </View>
  )
}

export default HotProducts