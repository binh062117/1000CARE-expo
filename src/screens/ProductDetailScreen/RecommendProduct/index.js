import React, { useState,useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '~/common/index'
import ProductItem from '~/common/ProductItem/ProductItem'
import { check_info } from '~/assets/constants'
import ErrorView from '~/common/ErrorView/index'

import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getListProductsByDistributorId } from '~/store/selector'
import { getProductByCateByDistributorId } from '~/store/actions'

const RecommendProduct = ({ navigation, product, scrollToTop }) => {
  const [message, setMessage] = useState('Đã thêm sản phẩm yêu thích')
  const [openMessage, setOpenMessage] = useState(false)
  const products = useSelector(state => getListProductsByDistributorId(state, 1))
  const safeProducts = Array.isArray(products) ? products : []
  const dispatch = useDispatch()

  useEffect(() => {
    if (product && product.categories) {
      const cateNeomed = product.categories.find(cate => cate?.supplier?.distributor?.id === 1)
      if (!cateNeomed) {
        return
      }
      setTimeout(() => {
        dispatch(getProductByCateByDistributorId(1, cateNeomed.category_id, 1, 10, false))
      }, 500)
    }
  }, [product])

  useEffect(() => {
    console.log('products', products)
  }, [products])

  const onShowMessage = (msg) => {
    setMessage(msg)
    setOpenMessage(true)
    setTimeout(() => {
      setOpenMessage(false)
    }, 2000)
  }
  if (safeProducts.length === 0) {
    return null
  }

  return (
    <View
      style={styles.mainContainer}
    >
      <View>
        <Text
          style={styles.title}
        >
          {'Có thể bạn quan tâm'}
        </Text>
      </View>
      
      <FlatList
        data={safeProducts}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ProductItem
              navigation={navigation}
              data={item}
              distributorId={item.distributor_id}
              type={2}
              onNavigate={scrollToTop}
              onMessage={(msg) => onShowMessage(msg)}
              onFavorClick={(isAdd) => {
                if (isAdd) {
                  setMessage('Đã thêm sản phẩm yêu thích')
                } else {
                  setMessage('Đã xóa sản phẩm yêu thích')
                }
                setOpenMessage(true)
                setTimeout(() => {
                  setOpenMessage(false)
                }, 1000)
              }}
              onAdd={() => {
                console.log('item', item)
                setMessage('Thêm sản phẩm thành công')
                setOpenMessage(true)
                setTimeout(() => {
                  setOpenMessage(false)
                }, 1000)
              }}
            />
          )
        }}
        keyExtractor={(item, index) => (item?.product_id ?? item?.id ?? index).toString()}
        ItemSeparatorComponent={() => {
          return (
            <View style={{ width: 6 }} />
          )
        }}
      />
      <ErrorView
        icon={check_info}
        error={message}
        isOpen={openMessage}
        onClose={() => setOpenMessage(false)}
      />
    </View>
  )
}

export default RecommendProduct