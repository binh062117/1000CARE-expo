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
import { s, fs } from '~/utils/responsive'
import { brandColors, brandShadow } from '~/design-system/tokens'

const numColumns = 2
const LAYOUTPADDING = 6 * 2
const ContentPadding = 9 * 2
const CategoriesWidth = 100
const ITEMPADDING = 4
const PRODUCT_WIDTH = dimens.common.WINDOW_WIDTH / numColumns - ITEMPADDING * 2 - 10
const IMAGE_CONTAINER_HEIGHT = PRODUCT_WIDTH
const IMAGE_HEIGHT = IMAGE_CONTAINER_HEIGHT - 8
const PRODUCT_COLUMN_WIDTH = (dimens.common.WINDOW_WIDTH - CategoriesWidth - LAYOUTPADDING - ContentPadding) / 3
const PRODUCT_COLUMN_HEIGHT = 120
const IMAGE_COLUMN_WIDTH = PRODUCT_COLUMN_WIDTH
const IMAGE_COLUMN_HEIGHT = PRODUCT_COLUMN_HEIGHT * 3.5 / 5

const ProductItem = ({ navigation, data, distributorId, type, addButton = true, combo = false, goBack, onFavorClick, onAdd, onMessage, onNavigate, productWidth }) => {
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
    console.log('distributorId', distributorId)
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

  const resolvedProductWidth = Number(productWidth) > 0 ? Number(productWidth) : PRODUCT_WIDTH
  const resolvedImageContainerHeight = resolvedProductWidth
  const resolvedImageHeight = resolvedImageContainerHeight - 8

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
    >
      {
        type ? (
          <View
            style={[
              styles.productContainer,
              {
                width: resolvedProductWidth,
                height: resolvedProductWidth * 1.4 + 50,
              },
            ]}
          >
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
            <View style={[styles.imageContainer, { height: resolvedImageContainerHeight }]}>
              <Image
                style={[styles.productImage, { height: resolvedImageHeight }]}
                widthImage={Number(1.5 * resolvedProductWidth).toFixed(0)}
                heightImage={Number(1.5 * resolvedImageHeight).toFixed(0)}
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
                              <Text style={{ marginLeft: 6, color: brandColors.danger, fontSize: fs(12) }}>-{(100 - (Number(data.sale_price) / Number(data.price)) * 100).toFixed(1)}%</Text>
                            </View>
                          )
                        }
                        <Text style={{ color: brandColors.tealDark, fontSize: fs(12) }}>{data?.distributor?.nick_name ? data?.distributor?.nick_name : ''}</Text>
                      </View>
                    )
                  }
                  {
                    data.payment_type === 2 && (
                      <View style={{ justifyContent: 'space-around' }}>
                        <View style={styles.salePriceContainer}>
                          <Text style={styles.salePrice}>{formatMoney(data.sale_price, { unit: 'điểm', space: false })}</Text>
                        </View>
                        <Text style={{ color: brandColors.tealDark, fontSize: fs(12) }}>{data?.distributor?.nick_name ? data?.distributor?.nick_name : ''}</Text>
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
        ) : (
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
            <Text
              style={styles.productColumName}
              numberOfLines={2}
              ellipsizeMode='tail'
            >{data.name}</Text>
          </View>
        )
      }
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: fs(14),
    color: brandColors.textDark,
  },
  buttonAll: {
    height: 24,
    borderRadius: s(12),
    borderWidth: 1,
    borderColor: brandColors.tealPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    paddingHorizontal: LAYOUTPADDING,
    paddingVertical: 4,
    fontSize: fs(12),
    color: brandColors.tealPrimary,
  },
  listProductsContainer: {
    marginTop: 20,
  },
  productContainer: {
    width: PRODUCT_WIDTH,
    height: PRODUCT_WIDTH * 1.4 + 50,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: brandColors.surface,
    margin: s(5),
    borderWidth: 1,
    borderColor: brandColors.borderSoft,
    borderRadius: s(18),
    overflow: 'hidden',
    ...brandShadow.soft,
  },
  productColumnContainer: {
    width: PRODUCT_COLUMN_WIDTH,
    height: PRODUCT_COLUMN_HEIGHT,
    flexDirection: 'column',
  },
  imageContainer: {
    height: IMAGE_CONTAINER_HEIGHT,
    backgroundColor: brandColors.surface,
    alignItems: 'center',
    borderTopLeftRadius: s(18),
    borderTopRightRadius: s(18),
  },
  imageColumnContainer: {
    backgroundColor: brandColors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    width: PRODUCT_COLUMN_WIDTH,
    height: 120,
  },
  productImage: {
    width: '100%',
    height: IMAGE_HEIGHT,
    borderTopLeftRadius: s(18),
    borderTopRightRadius: s(18),
    resizeMode: 'cover',
  },
  productImageColumn: {
    width: IMAGE_COLUMN_WIDTH - 2,
    height: IMAGE_COLUMN_HEIGHT - 2,
    resizeMode: 'contain',
  },
  productInfoContainer: {
    padding: s(10),
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
    fontSize: fs(14),
    color: brandColors.textDark,
    lineHeight: fs(18),
    height: fs(38),
    flex: 2,
    marginRight: 3,
  },
  productColumName: {
    fontSize: fs(14),
    color: brandColors.textDark,
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 15,
    marginHorizontal: 2,
    flex: 2,
  },
  buttonAddContainer: {
    backgroundColor: brandColors.tealPrimary,
    width: s(30),
    height: s(30),
    borderRadius: s(15),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buttonAdd: {
    width: s(13),
    height: s(13),
    borderRadius: s(12),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favorContainer: {
    height: s(30),
    width: s(30),
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
    fontSize: fs(13),
    marginTop: 1,
    fontWeight: 'bold',
    color: Colors.priceColor,
    lineHeight: 20,
  },
  salePriceContainer: {
    marginTop: 1,
    flexDirection: 'row',
    // flex: 2,
  },
  salePrice: {
    fontSize: fs(14),
    fontWeight: 'bold',
    color: Colors.priceColor,
    lineHeight: 22,
  },
  discount: {
    fontSize: fs(12),
    color: brandColors.mutedLight,
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
    backgroundColor: brandColors.tealLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundBtn: {
    width: 66,
    height: 32,
    borderRadius: 28,
    marginHorizontal: 4,
    backgroundColor: brandColors.tealLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signText: {
    color: brandColors.muted,
    fontSize: fs(14),
  },
  quatityInput: {
    color: brandColors.muted,
    fontSize: fs(12),
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
