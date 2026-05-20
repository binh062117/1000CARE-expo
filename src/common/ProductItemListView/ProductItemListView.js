/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from '~/common/index'
import { plus_2, heart, heart_red } from '../../assets/constants'

import { getListItem as getProductInCart } from '~/store/cart/cartSelectors'

import { NAVIGATION_PRODUCT_DETAIL_SCREEN, NAVIGATION_COMBO_PRODUCT_DETAIL } from '~/navigation/routes'
import { formatMoney } from '~/utils/format'
import Colors from '../Colors/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, requestAddProductWishList, requestRemoveProductWishList, updateCart } from '~/store/actions'
import { getAuthStore } from '~/store/selector'
import strings from '~/i18n'
import { Fonts } from '~/assets/config'
import dimens from '~/constants/dimens'

const ProductItemListView = ({ navigation, data, distributorId, addButton = true, combo = false, goBack, onFavorClick, onAdd, onMessage, onNavigate }) => {
  const { isLoggedIn } = useSelector(state => getAuthStore(state))
  const cartData = useSelector((state) => getProductInCart(state))
  const dispatch = useDispatch()
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
      const index = inList(data.product_id, productInCart)
      if (index < 0) {
        dispatch(addToCart(data.product_id, distributorId, qty))
      } else {
        dispatch(updateCart(data.product_id, distributorId, data.qty + qty))
      }
    },
    [data, productInCart],
  )

  const addProd = (qty) => {
    addProduct(qty)
  }

  const inList = (productId, list = []) => {
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].product_id === productId && list[i].distributor_id === distributorId) {
        return i
      }
    }
    return -1
  }

  const addItem = () => {
    if (!isLoggedIn) {
      if (onMessage) {
        onMessage(strings.common.requireLogin)
      }
      return
    }
    if (onAdd) {
      onAdd()
    }
    addProd(1)
  }

  const favorClick = () => {
    // Yêu cầu đăng nhập để thêm/xóa yêu thích
    if (!isLoggedIn) {
      if (onMessage) {
        onMessage(strings.common.requireLogin)
      }
      return
    }
    if (data.is_wishlist) {
      dispatch(requestRemoveProductWishList(data.product_id))
      if (onFavorClick) {
        data.is_wishlist = false
        onFavorClick(false)
      }
    } else {
      dispatch(requestAddProductWishList(data.product_id))
      if (onFavorClick) {
        data.is_wishlist = true
        onFavorClick(true)
      }
    }
  }

  const isPending = data.distributor?.status === 2

  return (
    <TouchableOpacity
      onPress={() => {
        if (isPending) {
          return
        }
        // Cho phép xem chi tiết sản phẩm mà không cần đăng nhập
        if (navigation && data.product_type === 2) {
          navigation.navigate(NAVIGATION_COMBO_PRODUCT_DETAIL, {
            banner: data,
            distributorId: data.distributor_id,
          })
        } else if (navigation) {
          navigation.navigate(NAVIGATION_PRODUCT_DETAIL_SCREEN, { product: data, distributorId, combo, goBack })
          if (onNavigate) {
            onNavigate()
          }
        }
      }}
    // style={{
    //   width: '100%',
    // }}
    >
      <View style={styles.productContainer}>
        {
          isPending && (
            <View style={styles.overlay}>
              <Text
                style={styles.pending}
              >
                {'Coming soon'}
              </Text>
            </View>
          )
        }
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
          }}
        >
          <View style={styles.productNameContainer}>
            <Text
              style={styles.productName}
              numberOfLines={1}
              ellipsizeMode='tail'
            >{data.name}</Text>
            {/* <Text
              style={[styles.productName, {
                lineHeight: 18,
                height: 18,
                marginTop: 4,
              }]}
              numberOfLines={1}
              ellipsizeMode='tail'
            >{data.packing_specs}</Text> */}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 2,
              }}
            >
              <Text
                style={styles.price}
                numberOfLines={1}
                ellipsizeMode='tail'
              >{formatMoney(data.sale_price, { unit: 'đ', space: false })}
              </Text>
              {
                data.sale_price !== data.price && (
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={styles.discount}
                      numberOfLines={1}
                      ellipsizeMode='tail'
                    >{formatMoney(data.price, { unit: 'đ', space: false })}</Text>
                  </View>
                )
              }
            </View>
            <View
              style={{
                borderLeftWidth: 1,
                borderLeftColor: '#BDBDBD',
                flex: 1,
                paddingLeft: 8,
              }}
            >
              <Text
                style={{
                  color: '#071F77',
                  fontSize: 14,
                  textAlign: 'left',
                }}
                numberOfLines={1}
                ellipsizeMode='tail'
              >{data?.distributor?.nick_name ? data?.distributor?.nick_name : data?.distributor?.name}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: 4,
          }}
        >
          {
            addButton && (
              <TouchableOpacity
                onPress={() => addItem()}
                style={styles.buttonAddContainer}
              >
                <Image
                  source={plus_2}
                  style={styles.buttonAdd}
                />
              </TouchableOpacity>
            )
          }
          <TouchableOpacity
            onPress={() => favorClick()}
            style={styles.favorContainer}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              resizeMode={'contain'}
              source={data.is_wishlist ? heart_red : heart}
              tintColor={Colors.errorColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProductItemListView

const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(114, 114, 114, 0.5)',
    position: 'absolute',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pending: {
    fontFamily: Fonts.bold,
    textAlign: 'center',
    color: Colors.white,
  },
  productContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    marginHorizontal: 5,
    marginVertical: 2,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 6,
    width: dimens.common.WINDOW_WIDTH - 18,
  },
  buttonAddContainer: {
    backgroundColor: Colors.systemColor2,
    width: 25,
    height: 25,
    borderRadius: 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buttonAdd: {
    width: 12,
    height: 12,
    borderRadius: 22,
  },
  productNameContainer: {
    marginTop: 1,
    marginBottom: 4,
  },
  productName: {
    fontSize: 14,
    color: Colors.textColor2,
    textTransform: 'uppercase',
    lineHeight: 18,
    height: 18,
    flex: 2,
  },
  priceContainer: {
    marginTop: 1,
    flexDirection: 'row',
  },
  price: {
    fontSize: 14,
    marginTop: 1,
    fontWeight: 'bold',
    color: Colors.priceColor,
    lineHeight: 20,
  },
  favorContainer: {
    marginTop: 4,
    width: 26,
    height: 26,
  },
  discount: {
    fontSize: 12,
    color: '#CCCCCC',
    fontWeight: '500',
    lineHeight: 20,
    textDecorationLine: 'line-through',
  },
})