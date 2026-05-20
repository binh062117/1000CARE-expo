import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Text } from '~/common/index'
import ProductItem from '~/common/ProductItem/ProductItem'
import { DIMENS } from '~/constants/index'
import { NAVIGATION_PRODUCT_LIST } from '~/navigation/routes'
import { getListProductsHotDeal } from '~/store/selector'
import styles from './styles'

const ListProductPromotion = ({ navigation, onFavorClick, onAddProduct, onMessage }) => {
  const listProductsHotDeal = useSelector(state => getListProductsHotDeal(state))
  const safeListProductsHotDeal = Array.isArray(listProductsHotDeal) ? listProductsHotDeal : []
  if (safeListProductsHotDeal.length === 0)
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
          {'SẢN PHẨM KHUYẾN MÃI'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NAVIGATION_PRODUCT_LIST, {
              type: 'promotion',
              title: 'Sản phẩm khuyến mãi',
            })
          }}
        >
          <Text style={styles.seeAll} >
            {'Tất cả'}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={safeListProductsHotDeal}
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

export default ListProductPromotion