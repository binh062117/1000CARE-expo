import React from 'react'
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItem from '~/common/ProductItem/ProductItem'
import { NAVIGATION_PRODUCT_LIST } from '~/navigation/routes'
import { getListProductsBestSeller } from '~/store/selector'
import { DIMENS } from '~/constants/index'
import { s, fs } from '~/utils/responsive'

const HotProducts = ({ navigation, onFavorClick, onAddProduct, onMessage }) => {
  const listProductsBestSeller = useSelector(state => getListProductsBestSeller(state))
  const safeList = Array.isArray(listProductsBestSeller) ? listProductsBestSeller : []
  if (safeList.length === 0) return null

  const productWidth = Math.round(DIMENS.common.WINDOW_WIDTH * 0.36)
  const snapToInterval = productWidth + 10
  const listHeight = productWidth * 1.4 + 50 + 10

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerAccent} />
          <Text style={styles.headerTitle}>SẢN PHẨM BÁN CHẠY</Text>
        </View>
        <TouchableOpacity
          style={styles.seeAllBtn}
          onPress={() => navigation.navigate(NAVIGATION_PRODUCT_LIST, { type: 'best_seller', title: 'Sản phẩm bán chạy' })}
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
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
  },
  headerAccent: {
    width: s(4),
    height: s(18),
    backgroundColor: '#10B981',
    borderRadius: s(2),
    marginRight: s(8),
  },
  headerTitle: {
    fontSize: fs(13),
    fontWeight: '800',
    color: '#1A202C',
    letterSpacing: 0.5,
  },
  seeAllBtn: {
    backgroundColor: '#F0FAFA',
    paddingHorizontal: s(12),
    paddingVertical: s(6),
    borderRadius: s(20),
    borderWidth: 1,
    borderColor: '#0B7B8A',
  },
  seeAllText: {
    color: '#0B7B8A',
    fontSize: fs(12),
    fontWeight: '700',
  },
})

export default HotProducts