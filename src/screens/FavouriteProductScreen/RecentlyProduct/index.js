import React, { useEffect, useCallback, useState } from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '~/common/ProductItem/ProductItem'
import { getListRecentlyViewedProduct } from '~/store/selector'

import styles from './style'
import EmptyItem from '../EmptyItem'
import { getProductsRecentlyViewed } from '~/store/actions'

const RecentlyProduct = ({ navigation, onFavorClick, onAddProduct, onMessage }) => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setLoading] = useState(false)
  const listProduct = useSelector(state => getListRecentlyViewedProduct(state))

  useEffect(() => {
    setCurrentPage(1)
    dispatch(getProductsRecentlyViewed(1, 11))
  }, [])

  const loadMore = () => {
    setTimeout(() => {
      setCurrentPage(currentPage + 1)
      dispatch(getProductsRecentlyViewed(currentPage + 1, 11, true))
    }, 500)
  }

  useEffect(() => {
    setLoading(false)
  }, [listProduct])

  const keyExtractorProduct = useCallback((item) => {
    return item.product_id.toString()
  })

  return (
    <View
      style={styles.wrap}
    >
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.listProductsContainer}
        data={listProduct}
        onEndReachedThreshold={0.1}
        onRefresh={() => {
          setLoading(true)
          setCurrentPage(1)
          dispatch(getProductsRecentlyViewed(1, 11))
        }}
        refreshing={isLoading}
        onEndReached={() => loadMore()}
        keyExtractor={keyExtractorProduct}
        ListEmptyComponent={() => {
          return (
            <EmptyItem message={'Hiện tại không có sản phẩm xem gần đây'} />
          )
        }}
        renderItem={({ item }) => {
          return (
            <ProductItem
              onFavorClick={onFavorClick}
              onMessage={onMessage}
              navigation={navigation}
              data={item}
              onAdd={onAddProduct}
              distributorId={item?.distributor_id}
              type={2}
            />
          )
        }}
      />
    </View>
  )
}
export default RecentlyProduct

