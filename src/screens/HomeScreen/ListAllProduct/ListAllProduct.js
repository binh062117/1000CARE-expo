import React, { useEffect, useCallback, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '~/common/ProductItem/ProductItem'
import { getListProducts, getListAdsBanner, getListProductsBySupplier, getListProductsPropose, getListProductsHotDeal } from '~/store/selector'
import { getProductByCate, getProductsByDistributor, getProductsBySupplier, requestGetListAdsBannerByDistributor, requestGetProductPropose, requestGetProductsHotDeal } from '~/store/actions'
import Colors from '~/common/Colors/Colors'
import { banner_1, banner_dksh } from '~/assets/constants'
import { Image, Text } from '~/common/index'
import { DIMENS } from '~/constants/index'
import Swiper from 'react-native-swiper'
import SearchBar from '~/screens/ProductList/SearchBar'
import EmptyItem from '~/common/EmptyItem/index'
import ProductItemListView from '~/common/ProductItemListView/ProductItemListView'
import ErrorView from '~/common/ErrorView/index'
import { check_info } from '~/assets/constants'
import AppSection from '~/design-system/AppSection'
import { brandColors, brandShadow } from '~/design-system/tokens'
import { s, fs } from '~/utils/responsive'

const ListViewListProduct = ({ navigation, products, loadMore, onShowMessage, setMessage, setOpenMessage }) => {
  const keyExtractorProduct = useCallback((_, idx) => {
    return idx.toString()
  })
  return (
    <FlatList
      numColumns={1}
      style={{ flex: 1 }}
      contentContainerStyle={styles.listProductsContainer}
      data={products}
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
      data={products}
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

const ListAllProduct = ({ navigation, distributorId, onFavorClick, onAddProduct, onMessage }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const listAdsBanner = useSelector(state => getListAdsBanner(state))
  const [viewMode, setViewMode] = useState('list')
  const [message, setMessage] = useState('Đã thêm sản phẩm yêu thích')
  const [openMessage, setOpenMessage] = useState(false)
  const listProductsProposeRaw = useSelector(state => getListProductsPropose(state, distributorId))
  const listProductsHotDeal = useSelector(state => getListProductsHotDeal(state))
  const [listProductPropose, setProductPropose] = useState(null)
  const [currentTab, setCurrentTab] = useState({ id: 1, name: 'Siêu rẻ' })
  const [query, setQuery] = useState({
    supplierSelected: null, 
    cateSelected: [],
  })
  useEffect(() => {
    if (!listProductsProposeRaw || listProductsProposeRaw.length === 0) {
      return
    }
    const listProductProposes = []
    listProductsProposeRaw.forEach(propose => {
      if (propose && propose.products && Array.isArray(propose.products)) {
        listProductProposes.push(...propose.products)
      }
    })
    setProductPropose(listProductProposes)
  }, [listProductsProposeRaw])

  const dispatch = useDispatch()
  const listProduct = useSelector(state => getListProducts(state))
  const listProductsBySupplier = useSelector(state => getListProductsBySupplier(state))

  useEffect(() => {
    setCurrentPage(1)
    dispatch(requestGetListAdsBannerByDistributor(distributorId, 2, 1, -1, 1000, 1))
    dispatch(getProductsByDistributor(distributorId, 1, 11, false))
    dispatch(requestGetProductsHotDeal(distributorId, 1, 11, false))
    dispatch(requestGetProductPropose(distributorId, null, 2, 11,1))
  }, [distributorId])

  const loadMore = () => {
    if (getData()?.length >= currentPage * 11) {
      setCurrentPage(currentPage + 1)
      requestData(currentPage + 1, 11, true)
    }
  }

  const onShowMessage = (msg) => {
    setMessage(msg)
    setOpenMessage(true)
    setTimeout(() => {
      setOpenMessage(false)
    }, 2000)
  }

  useEffect(() => {
    setCurrentPage(1)
    requestData(1, 11, false)
  }, [query])

  const requestData = (page, size, loadMore) => {
    if (currentTab && currentTab?.id === 3) { // 3 - PRODUCT BY DISTRIBUTOR
      if (query.cateSelected && query.cateSelected.length > 0) {
        dispatch(getProductByCate(query.cateSelected.category_id, page, size, loadMore))
      } else if (query.supplierSelected) {
        dispatch(getProductsBySupplier(query.supplierSelected.id, page, size, loadMore))
      } else {
        dispatch(getProductsByDistributor(distributorId, page, size, loadMore))
      }
    } else if (currentTab && currentTab?.id === 2) { // 2 - HOT DEAL PRODUCT
      dispatch(requestGetProductsHotDeal(distributorId, page, size, loadMore))
    }
  }

  const getData = useCallback(() => {
    if (currentTab && currentTab?.id === 3) {
      if (query.supplierSelected) return listProductsBySupplier
      return listProduct
    }
    if (currentTab && currentTab.id === 1) { // 1- PROPOSE PRODUCT
      return listProductPropose
    }
    if (currentTab && currentTab.id === 2) { // 2 - HOT DEAL PRODUCT
      return listProductsHotDeal
    }
  }, [listProduct,listProductsBySupplier, query, currentTab, listProductsHotDeal])

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

  const renderImage = (Array.isArray(listAdsBanner) && listAdsBanner.length > 0 ? listAdsBanner : [{ images: distributorId == 58 ? banner_dksh : banner_1 }]).map((item, index) => {
    return (
      <View
        key={index.toString()}
        style={styles.swiperItemContainer}
      >
        <Image
          resizeMode={'stretch'}
          style={styles.banner}
          widthImage={1.5 * (DIMENS.common.WINDOW_WIDTH - 16)}
          heightImage={1.5 * ((DIMENS.common.WINDOW_WIDTH - 16) * 2 / 5)}
          source={Array.isArray(listAdsBanner) && listAdsBanner.length > 0 ? { uri: item.images } : item.images}
        />
      </View>
    )
  })

  return (
    <View
      style={styles.wrap}
    >
      <View
        style={styles.heroCard}
      >
        <Swiper
          style={styles.swiper}
          showsButtons
          buttonWrapperStyle={styles.swiper}
          showsPagination={false}
          autoplay={true}
          nextButton={<Text />}
          prevButton={<Text />}
        >
          {renderImage}
        </Swiper>
      </View>
      <View style={styles.filterPanel}>
        <SearchBar
          navigation={navigation}
          type={'product_by_distributor'}
          viewMode={viewMode}
          setViewMode={setViewMode}
          onTabChange={item => handleGetProduct(item)}
          onLoad={(supplierSelected, cateSelected) => {
            setQuery({
              supplierSelected, cateSelected,
            })
          }}
          query={query}
          distributorId={distributorId}
        />
      </View>
      <AppSection
        title={currentTab?.name || 'Sản phẩm'}
        subtitle={viewMode === 'grid' ? 'Hiển thị dạng lưới' : 'Hiển thị dạng danh sách'}
        style={styles.productsSection}
      >
        {listProduct && viewMode === 'grid' ? (
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
      </AppSection>
      {/* <FlatList
        numColumns={2}
        contentContainerStyle={styles.listProductsContainer}
        data={listProduct || []}
        keyExtractor={keyExtractorProduct}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadMore()}
        renderItem={({ item }) => {
          return (
            <ProductItem
              navigation={navigation}
              data={item}
              distributorId={distributorId}
              type={2}
              onMessage={onMessage}
              onFavorClick={onFavorClick}
              onAdd={onAddProduct}
            />
          )
        }}
      /> */}
      <ErrorView
        icon={check_info}
        error={message}
        isOpen={openMessage}
        onClose={() => setOpenMessage(false)}
      />
    </View>
  )
}
export default ListAllProduct

const styles = StyleSheet.create({
  listProductsContainer: {
    paddingHorizontal: s(12),
    paddingBottom: s(96),
  },
  wrap: {
    flex: 1,
    marginTop: s(6),
    backgroundColor: brandColors.background,
  },
  banner: {
    width: DIMENS.common.WINDOW_WIDTH - s(32),
    height: (DIMENS.common.WINDOW_WIDTH - s(32)) * 2 / 5,
    borderRadius: s(24),
  },
  swiper: {
    height: (DIMENS.common.WINDOW_WIDTH - s(32)) * 2 / 5,
  },
  heroCard: {
    marginHorizontal: s(16),
    marginTop: s(12),
    borderRadius: s(24),
    overflow: 'hidden',
    backgroundColor: brandColors.surface,
    ...brandShadow.teal,
  },
  swiperItemContainer: {
    backgroundColor: 'transparent',
    height: (DIMENS.common.WINDOW_WIDTH - s(32)) * 2 / 5,
    alignItems: 'center',
  },
  swiperItem: {
    width: DIMENS.common.WINDOW_WIDTH - s(32),
    height: (DIMENS.common.WINDOW_WIDTH - s(32)) * 2 / 5,
  },
  filterPanel: {
    marginHorizontal: s(16),
    marginTop: s(16),
    borderRadius: s(24),
    backgroundColor: brandColors.surface,
    borderWidth: 1,
    borderColor: brandColors.borderSoft,
    overflow: 'hidden',
    ...brandShadow.soft,
  },
  productsSection: {
    flex: 1,
  },
})
