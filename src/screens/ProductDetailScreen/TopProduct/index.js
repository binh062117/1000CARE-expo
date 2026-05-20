import React, { useState, useEffect } from 'react'
import { FlatList, View, TouchableOpacity } from 'react-native'
import { Image, Text } from '~/common/index'
import ProductItemScrollHorizontal from '~/common/ProductItemScrollHorizontal/ProductItemScrollHorizontal'
import { check_info } from '~/assets/constants'
import ErrorView from '~/common/ErrorView/index'
import Swiper from 'react-native-swiper'
import { SVG } from '~/common'

import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getListProductsPropose } from '~/store/selector'
import { requestGetProductPropose, setSelectedDistri } from '~/store/actions'
import { NAVIGATION_PRODUCT_LIST, NAVIGATION_TO_HOME_SCREEN } from '~/navigation/routes'

const TopProduct = ({ navigation, product, distributorId, scrollToTop }) => {
  const [message, setMessage] = useState('Đã thêm sản phẩm yêu thích')
  const [openMessage, setOpenMessage] = useState(false)
  const products = useSelector(state => getListProductsPropose(state, distributorId))
  const safeProducts = Array.isArray(products) ? products : []
  const dispatch = useDispatch()

  useEffect(() => {
    if (product) {
      dispatch(requestGetProductPropose(distributorId, null, 2, 12, 1))
    }
  }, [product])

  const onShowMessage = (msg) => {
    setMessage(msg)
    setOpenMessage(true)
    setTimeout(() => {
      setOpenMessage(false)
    }, 2000)
  }

  if (!Array.isArray(safeProducts) || safeProducts.length === 0 || !Array.isArray(safeProducts[0]?.products) || safeProducts[0].products.length === 0) {
    return null
  }

  const innerProducts = Array.isArray(safeProducts[0]?.products) ? safeProducts[0].products.filter((_, idx) => idx < 12) : []
  const pages = Array.from({ length: Math.max(1, Math.ceil(innerProducts.length / 6)) }, (_, i) => i + 1)

  return (
    <>
      <TouchableOpacity 
        onPress={() => {
          dispatch(setSelectedDistri(product?.distributor))
          navigation.navigate(NAVIGATION_TO_HOME_SCREEN)
        }}
        style={styles.distributorContainer}
      >
        <Image 
          style={styles.distributorLogo}
          source={{
            uri: product?.distributor?.logo,
          }}
          resizeMode={'contain'}
        />
        <Text style={styles.distributorName}>{product?.distributor?.nick_name}</Text>
        <SVG
          width={24}
          height={24}
          name={'chevron_right_outlined'}
          style={styles.chevronIcon}
        />
      </TouchableOpacity>
      <View
        style={styles.mainContainer}
      >
        <View>
          <Text
            style={styles.title}
          >
            {'Tốp sản phẩm nổi bật'}
          </Text>
          <TouchableOpacity
            style={styles.allContainer}
            onPress={() => {
              navigation.navigate(NAVIGATION_PRODUCT_LIST, {
                distributorId,
                type: 'propose',
                title: 'Tốp sản phẩm nổi bật',
                distributor: product?.distributor,
              })
            }}
          >
            <Text
              style={styles.all}
            >
              {'Tất cả'}
            </Text>
          </TouchableOpacity>
        </View>
        <Swiper
          showsButtons
          style={{
            height: 205 * 2,
          }}
          showsPagination={true}
          autoplay={false}
          loadMinimal={true}
          loadMinimalSize={2}
          nextButton={<Text />}
          prevButton={<Text />}
        >
          {
            pages.map((value) => {
              return (
                <FlatList
                  key={`page-${value}`}
                  data={innerProducts.filter((_, id) => (value - 1) * 6 <= id && id < value * 6)}
                  numColumns={3}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => {
                    return (
                      <ProductItemScrollHorizontal
                        navigation={navigation}
                        data={item}
                        onNavigate={scrollToTop}
                        distributorId={item.distributor_id}
                        type={1}
                        onMessage={(msg) => onShowMessage(msg)}
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
              )
            })
          }
        </Swiper>
        <ErrorView
          icon={check_info}
          error={message}
          isOpen={openMessage}
          onClose={() => setOpenMessage(false)}
        />
      </View>
    </>
  )
}

export default TopProduct