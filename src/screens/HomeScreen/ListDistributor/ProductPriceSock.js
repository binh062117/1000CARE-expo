import React from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Text } from '~/common/index'
import ProductItem from '~/common/ProductItem/ProductItem'
import { DIMENS } from '~/constants/index'
import { NAVIGATION_PRODUCT_LIST } from '~/navigation/routes'
import { getListProductPriceSock } from '~/store/selector'
import styles from './styles'

const ProductPriceSock = ({ navigation, onFavorClick, onAddProduct, onMessage }) => {
  const listProductPriceSock = useSelector(state => getListProductPriceSock(state))
  const safeListProductPriceSock = Array.isArray(listProductPriceSock) ? listProductPriceSock : []
  if (safeListProductPriceSock.length === 0)
    return null

  const productWidth = Math.round(DIMENS.common.WINDOW_WIDTH * 0.36)
  const snapToInterval = productWidth + 10
  const listHeight = productWidth * 1.4 + 50 + 10

  return (
    <View style={styles.listDistributorContainer}>
      <View
        style={[styles.labelContainer,{ marginVertical:5,marginLeft:5 }]}
      >
        {/* <SVG
          name={'price_sock'}
          height={35}
          width={75}
        /> */}
        <View style={{ borderRadius:50,overflow: 'hidden',width:100 }}>
          <Image 
            // style={{height:200,width:200,borderRadius:50,overlayColor:'white'}}
            style={{ height:40,width:100 }}
            source={require('~/assets/priceSock.png')}
            resizeMode={'contain'}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NAVIGATION_PRODUCT_LIST, {
              type: 'priceSock',
              title: 'Sản phẩm giá sốc',
            })
          }}
        >
          <Text style={styles.seeAll} >
            {'Tất cả'}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={safeListProductPriceSock}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: listHeight }}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        decelerationRate="fast"
        snapToInterval={snapToInterval}
        snapToAlignment="start"
        keyExtractor={(item, idx) => String(item?.product_id ?? item?.id ?? idx)}
        renderItem={({ item }) => {
          return (
            <ProductItem
              type={1}
              navigation={navigation}
              data={item}
              onFavorClick={onFavorClick}
              onAdd={onAddProduct}
              distributorId={item?.distributor_id}
              onMessage={onMessage}
              productWidth={productWidth}
            />
          )
        }}
      />
    </View>
  )
}

export default ProductPriceSock