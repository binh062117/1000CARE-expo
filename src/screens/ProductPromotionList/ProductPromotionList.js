import React, { useEffect, useCallback, useState } from 'react'
import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Header from '~/common/Header/index'
import ProductItem from '~/common/ProductItem/ProductItem'
import { getListProducts } from '~/store/selector'
import { getProductByPayment } from '~/store/actions'
import Colors from '~/common/Colors/Colors'
import EmptyItem from './EmptyItem/index'
import ErrorView from '~/common/ErrorView/index'
import { check_info } from '~/assets/constants'

const ProductPaymentType = {
  NORMAL: 1,
  POINT: 2,
}

const ProductPromotionList = ({ navigation, route }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { distributorId } = route.params
  const [isRequest, setIsRequest] = useState(false)

  const dispatch = useDispatch()
  const listProduct = useSelector(state => getListProducts(state))

  const [openMessage, setOpenMessage] = useState(false)
  const [message, setMessage] = useState('Đã thêm sản phẩm yêu thích')

  const onFavorClick = (isAdd) => {
    if (isAdd) {
      setMessage('Đã thêm sản phẩm yêu thích')
    } else {
      setMessage('Đã xóa sản phẩm yêu thích')
    }
    setOpenMessage(true)
    setTimeout(() => {
      setOpenMessage(false)
    }, 1000)
  }

  useEffect(() => {
    setCurrentPage(1)
    dispatch(getProductByPayment(distributorId, ProductPaymentType.POINT, 1, 11, false))
  }, [distributorId])

  const loadMore = () => {
    if (!isRequest) {
      setIsRequest(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        dispatch(getProductByPayment(distributorId, ProductPaymentType.POINT, currentPage + 1, 11, true))
      }, 1000)
    }
  }

  useEffect(() => {
    setIsRequest(false)
  }, [listProduct])

  const keyExtractorProduct = useCallback((item) => {
    return item.product_id.toString()
  })

  const onShowMessage = (msg) => {
    setMessage(msg)
    setOpenMessage(true)
    setTimeout(() => {
      setOpenMessage(false)
    }, 2000)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        leftAction={() => navigation.pop()}
        title={'Đổi thưởng'}
        navigation={navigation}
        cart={true}
      />
      <View
        style={styles.wrap}
      >
        {listProduct ?
          <FlatList
            numColumns={2}
            contentContainerStyle={styles.listProductsContainer}
            data={listProduct}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={keyExtractorProduct}
            onEndReachedThreshold={0.1}
            onEndReached={() => loadMore()}
            ListEmptyComponent={() => {
              return (
                <EmptyItem />
              )
            }}
            renderItem={({ item }) => {
              return (
                <ProductItem
                  onFavorClick={onFavorClick}
                  onMessage={(msg) => onShowMessage(msg)}
                  onAdd={() => {
                    setMessage('Thêm sản phẩm thành công')
                    setOpenMessage(true)
                    setTimeout(() => {
                      setOpenMessage(false)
                    }, 1000)
                  }}
                  navigation={navigation}
                  distributorId={item.distributor_id}
                  data={{
                    ...item,
                    payment_type: 2,
                  }}
                  type={2}
                />
              )
            }}
          /> : null}
      </View>
      <ErrorView
        error={message}
        isOpen={openMessage}
        icon={check_info}
        onClose={() => setOpenMessage(false)}
      />
    </SafeAreaView>
  )
}
export default ProductPromotionList

const styles = StyleSheet.create({
  listProductsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal: 9,
  },
  wrap: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: Colors.white,
  },
})