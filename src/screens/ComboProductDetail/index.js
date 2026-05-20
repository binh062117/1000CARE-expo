import React, { useState } from 'react'
import { useEffect, useCallback } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import BottomButon from '~/common/BottomButon/index'
import Header from '~/common/Header/index'
import { Image } from '~/common/index'
import ProductItem from '~/common/ProductItem/ProductItem'
import { back } from '~/assets/constants'
import { addToCart, requestGetProductDetails, updateCart, resetStatusAddCart } from '~/store/actions'
import { getProductDetails } from '~/store/selector'
import styles from './styles'
import { getListItem as getProductInCart, getAddItemStatus } from '~/store/cart/cartSelectors'
import { formatMoney } from '~/utils/format'
import HTML from 'react-native-render-html'
import Colors from '~/common/Colors/Colors'
import Status from '~/common/Status/Status'
import ErrorView from '~/common/ErrorView/index'
import { check_info } from '~/assets/constants'

const ComboProductDetail = ({ navigation, route }) => {
  const { banner, distributorId } = route?.params
  const dispatch = useDispatch()
  const product = useSelector((state) => getProductDetails(state))
  const cartData = useSelector((state) => getProductInCart(state))
  const statusAddCart = useSelector(state => getAddItemStatus(state))
  
  const [openMessage, setOpenMessage] = useState(false)
  const [message, setMessage] = useState('Đã thêm sản phẩm yêu thích')

  useEffect(() => {
    if (banner) {
      console.log('banner', banner)
      dispatch(requestGetProductDetails(banner?.ref_id ? banner?.ref_id : banner?.product_id))
    }
  }, [])

  const getProducts = useCallback(() => {
    const data = []
    if (!cartData || !cartData.items)
      return []
    cartData.items.forEach(cd => {
      if (!cd.items)
        return
      cd.items.forEach(item => {
        data.push({
          ...item,
          distributor_id: cd.distributor.id,
        })
      })
    })
    return data
  }, [cartData])
  const productInCart = getProducts()

  const addProduct = useCallback(
    (qty) => {
      const index = inList(product.product_id, productInCart)
      if (index < 0)
      {
        dispatch(addToCart(product.product_id, distributorId, qty))
      } else {
        dispatch(updateCart(product.product_id, distributorId, productInCart[index].qty + qty))
      }
    },
    [product, productInCart],
  )

  const inList = (productId, list = []) => {
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].product_id === productId && list[i].distributor_id === distributorId) {
        return i
      }
    }
    return -1
  }

  useEffect(() => {
    if(statusAddCart === Status.SUCCESS) {
      setMessage('Thêm sản phẩm thành công')
      setOpenMessage(true)
      setTimeout(() => {
        setOpenMessage(false)
        navigation.pop()
      }, 500)
      dispatch(resetStatusAddCart())
    }
  },[statusAddCart])

  const onFavorClick =(isAdd) => {
    if (isAdd) {
      setMessage('Đã thêm sản phẩm yêu thích')
    } else {
      setMessage('Đã xóa sản phẩm yêu thích')
    }
    setOpenMessage(true)
    setTimeout(() => {
      setOpenMessage(false)
      navigation.pop()
    }, 500)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header 
        title={'Chi tiết Combo sản phẩm'}
        navigation={navigation}
        cart={true}
        iconLeft={back}
        leftAction={() => {
          navigation.pop()
        }}
      />
      <ScrollView
        style={{
          backgroundColor: Colors.white,
        }}
      > 
        <Image
          style={styles.banner}
          source={{
            uri: typeof banner?.images !== 'object'? banner?.images : banner?.images[0],
          }}
          resizeMode="contain"
          widthImage={600}
          heightImage={600}
        />
        <View style={styles.infoContainer}>
          <View style={styles.comboNameContainer}>
            <Text style={styles.name}>{product?.name}</Text>
            <View style={{flex:1}}>
              <Text style={styles.price}>{formatMoney(product?.sale_price?product.sale_price:'', { unit : 'đ' })}</Text>
              {product?.price != product?.sale_price
                ?<Text style={styles.discount}>{formatMoney(product?.price, { unit: 'đ', space: false })}</Text>
                :null
                }
            </View>
          </View>
          {
            !!product?.description && (
              <View style={styles.description}>
                <HTML
                  tagsStyles={ { p: { color:'black',lineHeight: 18 } }}
                  source={{ html: product?.description }}
                />
              </View>
            )
          }
        </View>
        <View style={styles.wrap}>
          <FlatList
            numColumns={2}
            contentContainerStyle={styles.listProductsContainer}
            data={product?.combo ? product.combo : []}
            keyExtractor={(_, idx)=> idx.toString()}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            ListHeaderComponent={()=> {
              return (
                <Text style={styles.name}>{'Danh sách sản phẩm'}</Text>
              )
            }}
            renderItem={({ item }) => {
              return (
                <ProductItem 
                  navigation={navigation}
                  addButton={false}
                  data={{ 
                    ...item.ref_product,
                    product_type: 1,
                  }}
                  distributorId={distributorId}
                  type={1}
                  combo={true}
                  onFavorClick={onFavorClick}
                  onMessage={(msg) => {
                    setMessage(msg)
                    setOpenMessage(true)
                    setTimeout(() => {
                      setOpenMessage(false)
                    }, 2000)
                  }}
                  goBack={() => {
                    dispatch(requestGetProductDetails(banner?.ref_id ? banner?.ref_id : banner?.product_id))
                  }}
                />
              )
            }}
          />
        </View>
      </ScrollView>
      <BottomButon 
        label={'Thêm vào giỏ hàng'}
        onPress={()=>{ 
          addProduct(1)
        }}
      />
      <ErrorView
        error={message}
        isOpen={openMessage}
        icon={check_info}
        onClose={() => setOpenMessage(false)}
      />
    </SafeAreaView>
  )
}

export default ComboProductDetail