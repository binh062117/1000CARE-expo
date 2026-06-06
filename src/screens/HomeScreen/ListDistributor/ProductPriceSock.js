import React from 'react'
import { FlatList, Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItem from '~/common/ProductItem/ProductItem'
import { DIMENS } from '~/constants/index'
import { NAVIGATION_PRODUCT_LIST } from '~/navigation/routes'
import { getListProductPriceSock } from '~/store/selector'
import { s, fs } from '~/utils/responsive'

const ProductPriceSock = ({ navigation, onFavorClick, onAddProduct, onMessage }) => {
  const listProductPriceSock = useSelector(state => getListProductPriceSock(state))
  const safeList = Array.isArray(listProductPriceSock) ? listProductPriceSock : []
  if (safeList.length === 0) return null

  const productWidth = Math.round(DIMENS.common.WINDOW_WIDTH * 0.36)
  const snapToInterval = productWidth + 10
  const listHeight = productWidth * 1.4 + 50 + 10

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerAccent} />
          <Text style={styles.headerTitle}>GIÁ SỐC HÔM NAY</Text>
          <View style={styles.hotBadge}>
            <Text style={styles.hotBadgeText}>🔥 HOT</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.seeAllBtn}
          onPress={() => navigation.navigate(NAVIGATION_PRODUCT_LIST, { type: 'priceSock', title: 'Sản phẩm giá sốc' })}
        >
          <Text style={styles.seeAllText}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={safeList}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: listHeight }}
        contentContainerStyle={{ paddingHorizontal: s(10) }}
        decelerationRate="fast"
        snapToInterval={snapToInterval}
        snapToAlignment="start"
        keyExtractor={(item, idx) => String(item?.product_id ?? item?.id ?? idx)}
        renderItem={({ item }) => (
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
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: s(20),
    marginHorizontal: s(12),
    marginBottom: s(12),
    paddingTop: s(16),
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(16),
    marginBottom: s(12),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(6),
  },
  headerAccent: {
    width: s(4),
    height: s(18),
    backgroundColor: '#EF4444',
    borderRadius: s(2),
    marginRight: s(6),
  },
  headerTitle: {
    fontSize: fs(13),
    fontWeight: '800',
    color: '#1A202C',
    letterSpacing: 0.5,
  },
  hotBadge: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: s(8),
    paddingVertical: s(3),
    borderRadius: s(10),
    marginLeft: s(6),
  },
  hotBadgeText: {
    fontSize: fs(10),
    fontWeight: '700',
    color: '#EF4444',
  },
  seeAllBtn: {
    backgroundColor: '#FEF2F2',
    paddingHorizontal: s(12),
    paddingVertical: s(6),
    borderRadius: s(20),
    borderWidth: 1,
    borderColor: '#EF4444',
  },
  seeAllText: {
    color: '#EF4444',
    fontSize: fs(12),
    fontWeight: '700',
  },
})

export default ProductPriceSock