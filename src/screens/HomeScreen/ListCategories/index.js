import React, { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import EmptyItem from '~/common/EmptyItem/index'
import ProductItemScrollHorizontal from '~/common/ProductItemScrollHorizontal/ProductItemScrollHorizontal'
import { getCateBySup, getProductsByDistributor, resetCateBySup } from '~/store/actions'
import { getCategories, getListProducts } from '~/store/selector'
import HomeCategory from './HomeCategory'
import styles from './styles'

const ListCategories = ({ navigation, selectedDistri, selectedSupplier, type, listHeaderComponent }) => {
  console.log('BIENNNNNNNNNNNNNN:',selectedSupplier)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedSupplierId, setSelectedSupplierId] = useState(selectedSupplier?.id)
  const listCategories = useSelector(state => getCategories(state))
  const products = useSelector(state => getListProducts(state))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetCateBySup())
  }, [selectedDistri])

  useEffect(() => {
    if (selectedSupplier) {
      setSelectedSupplierId(selectedSupplier.id)
      if (selectedSupplier.id === -1) {
        dispatch(getProductsByDistributor(selectedDistri.id, 1, 10, false))
      } else {
        dispatch(getCateBySup(selectedSupplier.id, currentPage, 10, currentPage > 1))
      }
    }
  }, [selectedSupplier, currentPage])

  useEffect(() => {

  }, [products])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedSupplier])

  const keyExtractorCates = useCallback((item) => {
    return item.category_id?.toString()
  })

  const loadMore = () => {
    if (listCategories.length >= currentPage * 10) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    console.log('listCategoriesssssssssss:',listCategories)
    setCurrentPage(currentPage)
  },[listCategories])

  const keyExtractorProduct = useCallback((item) => {
    return item.product_id.toString()
  })

  if (selectedSupplierId === -1) {
    return (
      <FlatList
        key="selectedSupplierId"
        numColumns={2}
        contentContainerStyle={styles.listProductsContainer}
        data={products || []}
        keyExtractor={keyExtractorProduct}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadMore()}
        renderItem={({ item }) => {
          return (
            <ProductItemScrollHorizontal
              navigation={navigation}
              data={item}
              distributorId={selectedDistri?.id}
              type={3}
              goBack={() => {
                dispatch(getProductsByDistributor(selectedDistri.id, 1, 10, false))
              }}
            />
          )
        }}
      />
    )
  }
  if (!listCategories) {
    return null
  }

  return (
    <FlatList
      style={styles.listCategories}
      contentContainerStyle={styles.productsContainer}
      data={(listCategories || []).filter(cate => cate.products && cate.products.length > 0)}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => {
        if (listHeaderComponent) {
          return listHeaderComponent()
        }
        return null
      }}
      keyExtractor={keyExtractorCates}
      onEndReached={() => loadMore()}
      onEndReachedThreshold={0.1}
      renderItem={({ item }) => {
        return (
          <HomeCategory
            data={item}
            navigation={navigation}
            distributorId={selectedDistri?.id}
            type={type}
          />
        )
      }}
      ListEmptyComponent={() => {
        return (
          <EmptyItem
            text='Không có sản phẩm nào'
          />
        )
      }}
    />
  )
}

export default ListCategories