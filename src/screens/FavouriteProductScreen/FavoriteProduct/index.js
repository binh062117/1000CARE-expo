import React, { useEffect, useCallback, useState } from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '~/common/ProductItem/ProductItem'
import { getWishLists } from '~/store/selector'
import { requestGetWishList } from '~/store/actions'

import styles from './style'
import EmptyItem from '../EmptyItem'

const FavoriteProduct = ({ navigation, onFavorClick, onAddProduct, onMessage }) => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setLoading] = useState(false)
  const listProduct = useSelector(state => getWishLists(state))

  useEffect(() => {
    setCurrentPage(1)
    dispatch(requestGetWishList(1, 11))
  }, [])

  const loadMore = () => {
    setTimeout(() => {
      setCurrentPage(currentPage + 1)
      dispatch(requestGetWishList(currentPage + 1, 11, true))
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
          setCurrentPage(1)
          setLoading(true)
          dispatch(requestGetWishList(1, 11))
        }}
        refreshing={isLoading}
        onEndReached={() => loadMore()}
        keyExtractor={keyExtractorProduct}
        ListEmptyComponent={() => {
          return (
            <EmptyItem />
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
              distributorId={item.distributor_id}
              type={2}
            />
          )
        }}
      />
    </View>
  )
}
export default FavoriteProduct

