import React, { useEffect, useCallback, useState } from 'react'
import { SafeAreaView, FlatList, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Header from '~/common/Header/index'
import ProductItem from '~/common/ProductItem/ProductItem'
import { getListProducts, getListProductsBestSeller, getListProductsHotDeal, getListProductsOfTrademark, getListProductPriceSock, getListProductsPropose, getListProductsBySupplier } from '~/store/selector'
import { getProductByCate, getProductsByDistributor, requestGetProductBestSeller, requestGetProductsByTrademarkId, requestGetProductsHotDeal, requestGetProductPriceSock, requestGetProductPropose, getProductsBySupplier } from '~/store/actions'
import Colors from '~/common/Colors/Colors'
import { back } from '~/assets/constants'
import { LoadingView } from '~/common'
import EmptyItem from '~/common/EmptyItem/index'
import ErrorView from '~/common/ErrorView/index'
import { check_info } from '~/assets/constants'
import { Text } from '~/common/index'
import { Fonts } from '~/assets/config'
import { setSelectedDistri } from '~/store/actions'
import { NAVIGATION_TO_HOME_SCREEN } from '~/navigation/routes'
import ProductItemListView from '~/common/ProductItemListView/ProductItemListView'
import SearchBar from './SearchBar'
import { s, fs } from '~/utils/responsive'
import { brandColors, brandShadow } from '~/design-system/tokens'

const ListViewListProduct = ({ navigation, products, loadMore, onShowMessage, setMessage, setOpenMessage }) => {
  const keyExtractorProduct = useCallback((_, idx) => {
    return idx.toString()
  })
  return (
    <FlatList
      numColumns={1}
      contentContainerStyle={[styles.listProductsContainer, {
        marginHorizontal: 4,
      }]}
      data={Array.isArray(products) ? products : []}
      keyExtractor={keyExtractorProduct}
      onEndReachedThreshold={0.1}
      onEndReached={() => loadMore()}
      ListEmptyComponent={() => {
        return (
          <EmptyItem
            text='Không có sản phẩm nào'
          />
        )
      }}
      renderItem={({ item }) => {
        return (
          <ProductItemListView
            navigation={navigation}
            data={item}
            distributorId={item.distributor_id}
            onMessage={(msg) => onShowMessage(msg)}
            onFavorClick={(isAdd) => {
              if (isAdd) {
                setMessage('Đã thêm sản phẩm yêu thích')
              } else {
                setMessage('Đã xóa sản phẩm yêu thích')
              }
              setOpenMessage(true)
              setTimeout(() => {
                setOpenMessage(false)
              }, 1000)
            }}
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
    />
  )
}

const GridViewListProduct = ({ navigation, products, loadMore, onShowMessage, setMessage, setOpenMessage }) => {
  const keyExtractorProduct = useCallback((_, idx) => {
    return idx.toString()
  })
  return (
    <FlatList
      numColumns={2}
      contentContainerStyle={styles.listProductsContainer}
      data={Array.isArray(products) ? products : []}
      keyExtractor={keyExtractorProduct}
      onEndReachedThreshold={0.1}
      onEndReached={() => loadMore()}
      ListEmptyComponent={() => {
        return (
          <EmptyItem
            text='Không có sản phẩm nào'
          />
        )
      }}
      renderItem={({ item }) => {
        return (
          <ProductItem
            navigation={navigation}
            data={item}
            distributorId={item.distributor_id}
            type={2}
            onMessage={(msg) => onShowMessage(msg)}
            onFavorClick={(isAdd) => {
              if (isAdd) {
                setMessage('Đã thêm sản phẩm yêu thích')
              } else {
                setMessage('Đã xóa sản phẩm yêu thích')
              }
              setOpenMessage(true)
              setTimeout(() => {
                setOpenMessage(false)
              }, 1000)
            }}
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
    />
  )
}

const ProductListScreen = ({ navigation, route }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { title, distributorId, categoryId, trademarkId, type = 'product', productId, distributor } = route.params

  const [isLoading, setLoading] = useState(false)
  const [openMessage, setOpenMessage] = useState(false)
  const [viewMode, setViewMode] = useState('list')
  const [query, setQuery] = useState({
    supplierSelected: null, 
    cateSelected: null,
    distributorSelected: null,
  })
  const [message, setMessage] = useState('Đã thêm sản phẩm yêu thích')

  const dispatch = useDispatch()
  const listProduct = useSelector(state => getListProducts(state))
  const listProductsOfTrademark = useSelector(state => getListProductsOfTrademark(state))
  const listProductsHotDeal = useSelector(state => getListProductsHotDeal(state))
  const listProductsBestSeller = useSelector(state => getListProductsBestSeller(state))
  const listProductPriceSock = useSelector(state => getListProductPriceSock(state))
  const listProductsBySupplier = useSelector(state => getListProductsBySupplier(state))
  const listProductsProposeRaw = useSelector(state => getListProductsPropose(state, distributorId))
  const safeListProduct = Array.isArray(listProduct) ? listProduct : []
  const safeListProductsOfTrademark = Array.isArray(listProductsOfTrademark) ? listProductsOfTrademark : []
  const safeListProductsHotDeal = Array.isArray(listProductsHotDeal) ? listProductsHotDeal : []
  const safeListProductsBestSeller = Array.isArray(listProductsBestSeller) ? listProductsBestSeller : []
  const safeListProductPriceSock = Array.isArray(listProductPriceSock) ? listProductPriceSock : []
  const safeListProductsBySupplier = Array.isArray(listProductsBySupplier) ? listProductsBySupplier : []
  const safeListProductsProposeRaw = Array.isArray(listProductsProposeRaw) ? listProductsProposeRaw : []
  const [listProductsPropose, setListProductsPropose] = useState([])
  const [currentTab, setCurrentTab] = useState(null)
  useEffect(() => {
    setLoading(true)
    setCurrentPage(1)
    requestData(1, 11, false)
  }, [title, distributorId, categoryId])
  useEffect(() => {
    setCurrentTab({ id: 1, name: 'Siêu rẻ' })
    dispatch(requestGetProductPropose(distributorId, null, 2, 11,1))
  }, [])
  useEffect(() => {
    if (!safeListProductsProposeRaw || safeListProductsProposeRaw.length === 0) {
      setListProductsPropose([])
      return
    }
    const listProductPropose = []
    safeListProductsProposeRaw.forEach(propose => {
      if (Array.isArray(propose?.products) && propose.products.length > 0) {
        listProductPropose.push(...propose.products)
      }
    })
    setListProductsPropose(listProductPropose)
  }, [listProductsProposeRaw])

  useEffect(() => {
    setLoading(true)
    setCurrentPage(1)
    requestData(1, 11, false)
  }, [query])

  const getData = useCallback(() => {
    if (type === 'product' || type === 'similar' || type === 'product_by_distributor') {
      if (currentTab && currentTab?.id === 3) {
        if (query?.supplierSelected) {
          return safeListProductsBySupplier
        } else {
          return safeListProduct
        }
      }
      if (currentTab && currentTab?.id === 1) {
        return Array.isArray(listProductsPropose) ? listProductsPropose : []
      }
      if (currentTab && currentTab?.id === 2) {
        return safeListProductsHotDeal
      }
    } else if (type === 'trademark') {
      return safeListProductsOfTrademark
    } else if (type === 'promotion' || currentTab?.id === 2) {
      return safeListProductsHotDeal
    } else if (type === 'best_seller') {
      return safeListProductsBestSeller
    } else if (type === 'priceSock') {
      return safeListProductPriceSock
    } else if (type === 'propose') {
      return Array.isArray(listProductsPropose) ? listProductsPropose : []
    }
  }, [safeListProduct, safeListProductsOfTrademark, safeListProductsHotDeal, currentTab, safeListProductsBestSeller, safeListProductPriceSock, listProductsPropose, safeListProductsBySupplier, query])

  const requestData = (page, size, loadMore) => {
    if (type === 'product' || type === 'similar' || type === 'product_by_distributor') {
      if ((categoryId || type === 'similar' || query.cateSelected) && currentTab && currentTab?.id === 3) {
        if (query.cateSelected) { 
          dispatch(getProductByCate(query.cateSelected.category_id, page, size, loadMore))
        } else if (categoryId) {
          dispatch(getProductByCate(categoryId, page, size, loadMore))
        }
      } else if (query.supplierSelected && currentTab && currentTab?.id === 3) {
        dispatch(getProductsBySupplier(query.supplierSelected.id, page, size, loadMore))
      } else if (currentTab && currentTab?.id === 2) { // hot deal
        dispatch(requestGetProductsHotDeal(distributorId, page, size, loadMore))
      } else if (currentTab && currentTab?.id === 1) {
        dispatch(requestGetProductPropose(distributorId, productId, 2, size,page,loadMore))
      } else {
        dispatch(getProductsByDistributor(distributorId, page, size, loadMore))
      }
      
    } else if (type === 'trademark') {
      dispatch(requestGetProductsByTrademarkId(trademarkId, page, size, loadMore))
    } else if (type === 'promotion') {
      dispatch(requestGetProductsHotDeal(distributorId, page, size, loadMore))
    } else if (type === 'best_seller') {
      dispatch(requestGetProductBestSeller(distributorId, page, size, loadMore))
    } else if (type === 'priceSock') {
      if (query.distributorSelected) { 
        dispatch(requestGetProductPriceSock(query.distributorSelected?.id, size,page,loadMore))
      } else {
        dispatch(requestGetProductPriceSock(null, size,page,loadMore))
      }
    }else if (type === 'propose') {
      dispatch(requestGetProductPropose(distributorId, productId, 2, size,page,loadMore))
    }
  }

  const loadMore = () => {
    const data = getData() || []
    if (data.length >= currentPage * 11 && !isLoading) {
      setLoading(true)
      setCurrentPage(currentPage + 1)
      requestData(currentPage + 1, 11, true)
    }
  }

  useEffect(() => {
    setLoading(false)
  }, [listProduct, listProductsOfTrademark, listProductsHotDeal, listProductsBestSeller, listProductPriceSock, listProductsProposeRaw, listProductsBySupplier, query])

  const onShowMessage = (msg) => {
    setMessage(msg)
    setOpenMessage(true)
    setTimeout(() => {
      setOpenMessage(false)
    }, 2000)
  }
  const handleGetProduct = (type) => {
    if (!type) {
      return
    }
    setCurrentTab(type)

    if (type && type?.id <= 2) {
      setQuery({
        supplierSelected: null, 
        cateSelected: [],
      })
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: brandColors.background }}>
      <Header
        leftAction={() => navigation.pop()}
        iconLeft={back}
        title={title}
        navigation={navigation}
        cart={true}
        customTitle={type === 'propose' ? () => {
          return (
            <TouchableOpacity
              onPress={() =>{ 
                dispatch(setSelectedDistri(distributor))
                navigation.navigate(NAVIGATION_TO_HOME_SCREEN)
              }}
              style={styles.titleContainer}
            >
              <Text 
                style={styles.title}
                numberOfLines={1}
                ellipsizeMode='tail'
              >
                {distributor?.nick_name}
              </Text>
            </TouchableOpacity>
          )
        } : null}
        titleStyles={type === 'propose'? { marginLeft: -50 } : { marginLeft:0 }}
      />
      <View style={styles.marketHero}>
        <Text style={styles.heroEyebrow}>PRODUCT CATALOG</Text>
        <Text style={styles.heroTitle} numberOfLines={2}>{title || 'Danh sách sản phẩm'}</Text>
        <Text style={styles.heroSubtitle}>Lọc, xem nhanh và thêm sản phẩm vào giỏ theo nhà phân phối đã chọn.</Text>
      </View>
      {
        (type === 'product_by_distributor' || type === 'priceSock') && (
          <View style={styles.filterPanel}>
            <SearchBar
              navigation={navigation}
              type={type}
              viewMode={viewMode}
              setViewMode={setViewMode}
              onLoad={(supplierSelected, cateSelected, distributorSelected) => {
                setQuery({
                  supplierSelected, cateSelected, distributorSelected,
                })
              }}
              distributorId={distributorId}
              onTabChange={handleGetProduct}
              query={query}
              mode={type === 'priceSock' ? 'distributor' : 'supplier'}
            />
          </View>
        )
      }
      <View
        style={styles.wrap}
      >
        {(viewMode === 'grid' || (type !== 'priceSock' && type !== 'product_by_distributor')) ? (
          <GridViewListProduct 
            navigation={navigation}
            products={getData()}
            loadMore={loadMore}
            onShowMessage={onShowMessage}
            setMessage={setMessage}
            setOpenMessage={setOpenMessage}
          />
        ) :
          (
            <ListViewListProduct 
              navigation={navigation}
              products={getData()}
              loadMore={loadMore}
              onShowMessage={onShowMessage}
              setMessage={setMessage}
              setOpenMessage={setOpenMessage}
            />
          )
        }
      </View>
      {isLoading && <LoadingView />}
      <ErrorView
        icon={check_info}
        error={message}
        isOpen={openMessage}
        onClose={() => setOpenMessage(false)}
      />
    </SafeAreaView>
  )
}
export default ProductListScreen

const styles = StyleSheet.create({
  listProductsContainer: {
    paddingHorizontal: s(12),
    paddingBottom: s(96),
  },
  wrap: {
    flex: 1,
    marginTop: s(10),
    backgroundColor: brandColors.background,
  },
  title: {
    color: brandColors.tealPrimary,
    fontFamily: Fonts.bold,
    fontSize: fs(16),
    fontWeight: '800',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 100,
  },
  titleContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: s(58),
    flexDirection: 'column',
    marginLeft: -s(40),
  },
  filterPanel: {
    marginHorizontal: s(16),
    marginTop: s(12),
    borderRadius: s(24),
    overflow: 'hidden',
    backgroundColor: brandColors.surface,
    borderWidth: 1,
    borderColor: brandColors.borderSoft,
    ...brandShadow.soft,
  },
  marketHero: {
    marginHorizontal: s(16),
    marginTop: s(12),
    borderRadius: s(26),
    padding: s(18),
    backgroundColor: brandColors.textDark,
    ...brandShadow.soft,
  },
  heroEyebrow: {
    fontSize: fs(10),
    lineHeight: fs(14),
    fontWeight: '900',
    letterSpacing: 1.5,
    color: brandColors.goldAccent,
  },
  heroTitle: {
    marginTop: s(6),
    fontSize: fs(24),
    lineHeight: fs(30),
    fontWeight: '900',
    color: brandColors.surface,
  },
  heroSubtitle: {
    marginTop: s(8),
    fontSize: fs(12),
    lineHeight: fs(18),
    fontWeight: '600',
    color: 'rgba(255,255,255,0.68)',
  },
})
