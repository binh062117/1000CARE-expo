/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from '~/common/index'
import { plus_2, heart, heart_red } from '../../assets/constants'
import placeholder from '~/assets/images/placeholder.png'

import { getListItem as getProductInCart } from '~/store/cart/cartSelectors'

import { NAVIGATION_PRODUCT_DETAIL_SCREEN, NAVIGATION_COMBO_PRODUCT_DETAIL } from '~/navigation/routes'
import { formatMoney } from '~/utils/format'
import { getProductImage } from '~/utils/image'
import dimens from '~/constants/dimens'
import Colors from '../Colors/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, requestAddProductWishList, requestRemoveProductWishList, updateCart } from '~/store/actions'
import { getAuthStore } from '~/store/selector'
import strings from '~/i18n'
import { gift_fill } from '~/assets/constants'
import { Fonts } from '~/assets/config'

const numColumns = 2
const LAYOUTPADDING = 6 * 2
const ContentPadding = 9 * 2
const ITEMPADDING = 4
const PRODUCT_WIDTH = dimens.common.WINDOW_WIDTH / numColumns - ITEMPADDING * 2 - 40
const IMAGE_CONTAINER_HEIGHT = PRODUCT_WIDTH
const IMAGE_HEIGHT = IMAGE_CONTAINER_HEIGHT - 8

const PRODUCT_WIDTH2 = dimens.common.WINDOW_WIDTH / 3 - ITEMPADDING * 2 - 4
const IMAGE_CONTAINER_HEIGHT2 = PRODUCT_WIDTH2
const IMAGE_HEIGHT2 = IMAGE_CONTAINER_HEIGHT2 - 8

const CategoriesWidth = 100
const PRODUCT_WIDTH3 = (dimens.common.WINDOW_WIDTH - CategoriesWidth - LAYOUTPADDING - ContentPadding) / 2
const IMAGE_CONTAINER_HEIGHT3 = PRODUCT_WIDTH3
const IMAGE_HEIGHT3 = IMAGE_CONTAINER_HEIGHT3 - 8

const PRODUCT_COLUMN_WIDTH = 2 * (dimens.common.WINDOW_WIDTH - LAYOUTPADDING - ContentPadding) / 3
const PRODUCT_COLUMN_HEIGHT = 120
const IMAGE_COLUMN_WIDTH = PRODUCT_COLUMN_WIDTH / 2 - 10
const IMAGE_COLUMN_HEIGHT = PRODUCT_COLUMN_HEIGHT * 3.5 / 5

const ProductItemScrollHorizontal = ({ navigation, data, distributorId, type, addButton = true, combo = false, goBack, onFavorClick, onAdd, onMessage, onNavigate }) => {
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

  const view1 = () => {
    const ImageH = type === 2 ? IMAGE_HEIGHT : type === 3 ? IMAGE_HEIGHT3 : IMAGE_HEIGHT2
    const ProductW = type === 2 ? PRODUCT_WIDTH : type === 3 ? PRODUCT_WIDTH3 : PRODUCT_WIDTH2
    return (
      <View style={[styles.productContainer, type === 2 ? {} : type === 3 ? styles.productContainer3 : styles.productContainer2]}>
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
        <View style={[styles.imageContainer, type === 2 ? {} : type === 3 ? styles.imageContainer3 : styles.imageContainer2]}>
          <Image
            style={[styles.productImage, type === 2 ? {} : type === 3 ? styles.productImage3 : styles.productImage2]}
            widthImage={Number(1.5 * ProductW).toFixed(0)}
            heightImage={Number(1.5 * ImageH).toFixed(0)}
            source={getProductImage(data, 'xl', placeholder)}
          />
        </View>
        <View style={styles.productInfoContainer}>
          <View
            style={{
              flex: 4,
            }}
          >
            <View style={styles.productNameContainer}>
              <Text
                style={[styles.productName, type === 2 ? {} : styles.productName2]}
                numberOfLines={type === 2 ? 2 : 1}
                ellipsizeMode='tail'
              >{data.name}</Text>
            </View>
            <View
              style={styles.bottomContainer}
            >
              {
                data.payment_type !== 2 && (
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                    }}
                  >
                    <Text
                      style={styles.price}
                      numberOfLines={1}
                      ellipsizeMode='tail'
                    >{formatMoney(data.sale_price, { unit: 'đ', space: false })}
                    </Text>
                    {
                      type === 2 && data.sale_price !== data.price && (
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: -3 }}>
                          <Text style={styles.discount}>{formatMoney(data.price, { unit: 'đ', space: false })}</Text>
                        </View>
                      )
                    }
                    {
                      type === 2 && (<Text style={{ color: '#071F77', fontSize: 12 }}>{data?.distributor?.nick_name ? data?.distributor?.nick_name : ''}</Text>)
                    }
                  </View>
                )
              }
              {
                data.payment_type === 2 && (
                  <View style={{ justifyContent: 'space-around' }}>
                    <View style={styles.salePriceContainer}>
                      <Text
                        style={styles.salePrice}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                      >{formatMoney(data.sale_price, { unit: 'điểm', space: false })}</Text>
                    </View>
                    <Text style={{ color: '#071F77', fontSize: 12 }}>{data?.distributor?.nick_name ? data?.distributor?.nick_name : ''}</Text>
                  </View>
                )
              }
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {
                  addButton && isLoggedIn && (
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
                {
                  isLoggedIn && type === 2 && (
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
                  )
                }
              </View>
            </View>
          </View>
        </View>
        {
          data.range_prices && data.range_prices.length > 0 && (
            <Image
              style={styles.promotionLabel}
              source={gift_fill}
              tintColor={Colors.systemColor2}
            />
          )
        }
      </View>
    )
  }

  const view2 = () => {
    return (
      <View style={styles.imageColumnContainer}>
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
        <Image
          style={styles.productImageColumn}
          widthImage={Number(IMAGE_COLUMN_WIDTH - 2).toFixed(0)}
          heightImage={Number(IMAGE_COLUMN_HEIGHT - 2).toFixed(0)}
          source={getProductImage(data, 'xl', placeholder)}
        />
        <View style={styles.productInfoColumnContainer}>
          <View
            style={{
              flex: 4,
            }}
          >
            <View style={styles.productNameContainer}>
              <Text
                style={styles.productName}
                numberOfLines={2}
                ellipsizeMode='tail'
              >{data.name}</Text>

            </View>
            <View
              style={styles.bottomContainer}
            >
              {
                data.payment_type !== 2 && (
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
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
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -3 }}>
                          <Text style={styles.discount}>{formatMoney(data.price, { unit: 'đ', space: false })}</Text>
                        </View>
                      )
                    }
                    <Text style={{ color: '#071F77', fontSize: 12 }}>{data?.distributor?.nick_name ? data?.distributor?.nick_name : ''}</Text>
                  </View>
                )
              }
              {
                data.payment_type === 2 && (
                  <View style={{ justifyContent: 'space-around' }}>
                    <View style={styles.salePriceContainer}>
                      <Text style={styles.salePrice}>{formatMoney(data.sale_price, { unit: 'điểm', space: false })}</Text>
                    </View>
                    <Text style={{ color: '#071F77', fontSize: 12 }}>{data?.distributor?.nick_name ? data?.distributor?.nick_name : ''}</Text>
                  </View>
                )
              }
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {
                  addButton && isLoggedIn && (
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
                {
                  isLoggedIn && (
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
                  )
                }
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <TouchableOpacity
      onPress={() => {
        if (isPending) {
          return
        }
        if (!isLoggedIn) {
          if (onMessage) {
            onMessage(strings.common.requireLogin)
          }
          return
        }
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
    >
      {
        type ? (
          view1()
        ) : (
          view2()
        )
      }
    </TouchableOpacity >
  )
}

export default ProductItemScrollHorizontal

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 14,
    color: '#262626',
  },
  buttonAll: {
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0095D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    paddingHorizontal: LAYOUTPADDING,
    paddingVertical: 4,
    fontSize: 12,
    color: '#0095D9',
  },
  listProductsContainer: {
    marginTop: 20,
  },
  productContainer: {
    width: PRODUCT_WIDTH,
    height: PRODUCT_WIDTH * 1.4 + 35,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
    margin: 5,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 6,
  },
  productContainer2: {
    width: PRODUCT_WIDTH2,
    height: PRODUCT_WIDTH2 * 1.4 + 8,
  },
  productContainer3: {
    width: PRODUCT_WIDTH3,
    height: PRODUCT_WIDTH3 * 1.4 + 8,
  },
  productColumnContainer: {
    width: PRODUCT_COLUMN_WIDTH,
    height: PRODUCT_COLUMN_HEIGHT,
    flexDirection: 'column',
  },
  imageContainer: {
    height: IMAGE_CONTAINER_HEIGHT,
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  imageContainer2: {
    height: IMAGE_CONTAINER_HEIGHT2,
  },
  imageContainer3: {
    height: IMAGE_CONTAINER_HEIGHT3,
  },
  imageColumnContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: PRODUCT_COLUMN_WIDTH,
    height: 120,
    marginLeft: 8,
    borderRadius: 4,
  },
  productImage: {
    width: '100%',
    height: IMAGE_HEIGHT,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    resizeMode: 'cover',
  },
  productImage2: {
    height: IMAGE_HEIGHT2,
  },
  productImage3: {
    height: IMAGE_HEIGHT3,
  },
  productImageColumn: {
    width: IMAGE_COLUMN_WIDTH - 2,
    height: IMAGE_COLUMN_HEIGHT - 2,
    resizeMode: 'contain',
  },
  productInfoColumnContainer: {
    padding: 8,
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'row',
    width: PRODUCT_COLUMN_WIDTH / 2,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  productInfoContainer: {
    padding: 8,
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  productNameContainer: {
    marginTop: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  productName: {
    fontSize: 14,
    color: Colors.textColor2,
    lineHeight: 15,
    height: 30,
    flex: 2,
    marginRight: 3,
  },
  productName2: {
    height: 15,
  },
  productColumName: {
    fontSize: 14,
    color: Colors.textColor2,
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 15,
    marginHorizontal: 2,
    flex: 2,
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
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favorContainer: {
    height: 28,
    width: 28,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  promotionLabel: {
    height: 24,
    width: 24,
    position: 'absolute',
    top: 8,
    right: 8,
  },
  priceContainer: {
    marginTop: 1,
    flexDirection: 'row',
  },
  price: {
    fontSize: 12,
    marginTop: 1,
    fontWeight: 'bold',
    color: Colors.priceColor,
    width: IMAGE_COLUMN_WIDTH - 42,
    lineHeight: 20,
  },
  salePriceContainer: {
    marginTop: 1,
    flexDirection: 'row',
    // flex: 2,
  },
  salePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    width: IMAGE_COLUMN_WIDTH - 42,
    color: Colors.priceColor,
    lineHeight: 22,
  },
  discount: {
    fontSize: 12,
    color: '#CCCCCC',
    fontWeight: '500',
    lineHeight: 20,
    textDecorationLine: 'line-through',
  },
  quantityContainer: {
    flexDirection: 'row',
    marginTop: 9,
  },
  circleBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundBtn: {
    width: 66,
    height: 32,
    borderRadius: 28,
    marginHorizontal: 4,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signText: {
    color: '#595959',
    fontSize: 14,
  },
  quatityInput: {
    color: '#595959',
    fontSize: 12,
    lineHeight: 15,
    flex: 1,
  },
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
})