import React, { useEffect, useCallback, useState } from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '~/common/ProductItem/ProductItem'
import { getDistributorsActive, getProductsExclusiveByDistributor } from '~/store/actions'

import styles from './style'
import EmptyItem from '../EmptyItem'
import { getListDistributors, getListExclusiveProduct } from '~/store/selector'
import ItemDistributorTab from '~/common/ItemDistributorTab/index'

const ExclusiveProduct = ({ navigation, onFavorClick, onAddProduct, onMessage }) => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setLoading] = useState(false)
  const [currentTabInfo, setCurrentTabInfo] = useState(null)
  const listProduct = useSelector(state => getListExclusiveProduct(state))
  const listDistributors = useSelector(state => getListDistributors(state))

  useEffect(() => {
    setCurrentPage(1)
    dispatch(getProductsExclusiveByDistributor(currentTabInfo?.id, 1, 11))
  }, [currentTabInfo])

  const loadMore = () => {
    setTimeout(() => {
      setCurrentPage(currentPage + 1)
      dispatch(getProductsExclusiveByDistributor(currentTabInfo?.id, currentPage + 1, 11, true))
    }, 500)
  }

  useEffect(() => {
    setLoading(false)
  }, [listProduct])

  useEffect(() => {
    dispatch(getDistributorsActive(0, 1, 100))
  }, [])

  useEffect(() => {
    if (listDistributors != null && listDistributors.length > 0 && !currentTabInfo) {
      setCurrentTabInfo(listDistributors[0])
    }
  }, [listDistributors])

  const keyExtractorProduct = useCallback((item) => {
    return item.product_id.toString()
  })

  const keyExtractorDistri = useCallback((item) => {
    return item.id.toString()
  })

  const onTabPress = (item) => {
    setCurrentTabInfo(item)
  }

  return (
    <View
      style={styles.wrap}
    >
      <FlatList
        style={styles.listDistributors}
        contentContainerStyle={styles.distributors}
        data={listDistributors}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ItemDistributorTab
              onItemPress={onTabPress.bind(this, item)}
              selected={item.id === currentTabInfo?.id}
              data={item}
            />
          )
        }}
        keyExtractor={keyExtractorDistri}
      />

      <FlatList
        numColumns={2}
        contentContainerStyle={styles.listProductsContainer}
        data={listProduct}
        onEndReachedThreshold={0.1}
        onRefresh={() => {
          setCurrentPage(1)
          setLoading(true)
          dispatch(getProductsExclusiveByDistributor(currentTabInfo?.id, 1, 11))
        }}
        refreshing={isLoading}
        onEndReached={() => loadMore()}
        keyExtractor={keyExtractorProduct}
        ListEmptyComponent={() => {
          return (
            <EmptyItem message={'Hiện tại không có sản phẩm dành riêng cho bạn'} />
          )
        }}
        renderItem={({ item }) => {
          return (
            <ProductItem
              navigation={navigation}
              data={item}
              onFavorClick={onFavorClick}
              onMessage={onMessage}
              distributorId={item?.distributor_id}
              onAdd={onAddProduct}
              type={1}
            />
          )
        }}
      />
    </View>
  )
}
export default ExclusiveProduct

