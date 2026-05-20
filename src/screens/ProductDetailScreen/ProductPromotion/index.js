import React, { useMemo, useState } from 'react'
import { FlatList, View, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { Text } from '~/common/index'
import PromotionItem from '~/common/PromotionItem/index'
import { NAVIGATION_PROMOTION_DETAIL } from '~/navigation/routes'
import { getCampaignsByProduct } from '~/store/selector'
import { SVG } from '~/common'
import promotion_annotation from '~/assets/image_promotion/promotion_annotation.png'

import styles from './styles'

const ListPromotion = ({ distributorId, product, navigation, promotions, expand, setExpand }) => {
  if (Array.isArray(promotions) && promotions.length > 0) {
    return (
      <FlatList
        data={promotions}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <PromotionItem
              type={3}
              onBuy={() => {
                navigation.navigate(NAVIGATION_PROMOTION_DETAIL, {
                  promotion: item,
                  product,
                  distributorId: distributorId,
                })
              }}
              text={item.name}
              textAction={'Xem chi tiết'}
            />
          )
        }}
        ListFooterComponent={() => {
          const currentExpand = expand
          if (currentExpand) {
            return null
          }
          return (
            <TouchableOpacity
              onPress={() => setExpand(true)}
              style={styles.expandContainer}
            >
              <Text style={styles.expand}>Xem thêm</Text>
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item) => {
          return item.id.toString()
        }}
      />
    )
  } else if (Array.isArray(product?.range_prices) && product.range_prices.length > 0) {
    return null
  }
  return (
    <Text>
      {'Không có khuyến mại'}
    </Text>
  )
}

const ProductPromotion = ({ product, navigation, distributorId, addProduct }) => {
  const [expand, setExpand] = useState(false)
  const [expandBlock, setExpandBlock] = useState(true)

  const promotionsOfProduct = useSelector(state => getCampaignsByProduct(state))
  const safePromotionsOfProduct = Array.isArray(promotionsOfProduct) ? promotionsOfProduct : []

  // ensure expand when there are few promotions
  React.useEffect(() => {
    if (Array.isArray(safePromotionsOfProduct) && safePromotionsOfProduct.length <= 5) {
      setExpand(true)
    }
  }, [safePromotionsOfProduct, setExpand])

  const listPromotions = React.useMemo(() => {
    const promotions = safePromotionsOfProduct
    const currentExpand = expand
    if (!promotions) {
      return []
    }
    if (promotions.length <= 5) {
      return promotions
    }
    if (currentExpand) {
      return promotions
    }
    return promotions.filter((_, idx) => idx < 2)
  }, [safePromotionsOfProduct, expand])

  return (
    <View
      style={styles.rangePricesContainer}
    >
      <TouchableOpacity 
        onPress={() => setExpandBlock(!expandBlock)}
      >
        <Text
          style={styles.promotionTitle}
        >
          {'Khuyến mãi'}
        </Text>
        {
          !expandBlock && (listPromotions?.length > 0 || (product.range_prices && product.range_prices.length > 0)) && (
            <Image
              style={styles.imagePromotionAnnotation}
              source={promotion_annotation}
              resizeMode={'contain'}
            />
          )
        }
        
        <SVG
          width={24}
          height={24}
          name={expandBlock? 'chevron_up_outlined' : 'chevron_down_outlined'}
          style={styles.chevronIcon}
        />
      </TouchableOpacity>
      {
        expandBlock && (
          <FlatList
            data={Array.isArray(product?.range_prices) ? product.range_prices : []}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <PromotionItem
                  type={3}
                  text={`Mua ${item.min_quantity} sản phẩm giảm\n${item.discount}% giá bán`}
                  onBuy={() => {
                    addProduct(item.min_quantity)
                  }}
                />
              )
            }}
            ListFooterComponent={() => {
              return (
                <ListPromotion
                  promotions={listPromotions}
                  distributorId={distributorId}
                  product={product}
                  navigation={navigation}
                  expand={expand}
                  setExpand={setExpand}
                />
              )
            }}
            keyExtractor={(item, index) => (item?.id ?? index).toString()}
            ItemSeparatorComponent={() => {
              return (
                <View style={{ width: 6 }} />
              )
            }}
          />
        )
      }
      
    </View>
  )
}

export default ProductPromotion