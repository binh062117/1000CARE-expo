import React, { useState, useEffect } from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native'
import { banner_2, banner_3, banner_4 } from '~/assets/constants'
import { useDispatch, useSelector } from 'react-redux'
import ListTrademarksAdvertisement from './ListTrademarksAdvertisement'
import ListProductPromotion from './ListProductPromotion'
import ProductPriceSock from './ProductPriceSock'
import HotProducts from './HotProducts'
import Distributors from './Distributors'
import PlaceHolder from './PlaceHolder'
import { getListAdsBannerNeomed } from '~/store/selector'
import { requestGetListAdsBannerHomeNeomedByDistributor } from '~/store/actions'
import SliderBox from '~/common/SliderBox/index'
import Colors from '~/common/Colors/Colors'
import { s, fs } from '~/utils/responsive'

const ListDistributor = ({ navigation, onItemPress, selectedDistri, onFavorClick, onAddProduct, onMessage }) => {
  const dispatch = useDispatch()
  const listAdsBanner = useSelector(state => getListAdsBannerNeomed(state))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(requestGetListAdsBannerHomeNeomedByDistributor(1, 1, 1, 100, 1))
  }, [])

  useEffect(() => {
    setIsLoading(false)
  }, [selectedDistri])

  if (isLoading) {
    return <PlaceHolder />
  }

  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Banner Slider */}
      <View style={styles.bannerContainer}>
        <SliderBox
          resizeMode="stretch"
          dotColor="#0B7B8A"
          dotStyle={styles.dot}
          dotContainerStyle={styles.dotContainer}
          paginationBoxStyle={styles.paginationBox}
          inactiveDotColor="rgba(255,255,255,0.5)"
          autoplay={true}
          circleLoop
          items={(Array.isArray(listAdsBanner) && listAdsBanner.length > 0
            ? listAdsBanner
            : [{ images: banner_2 }, { images: banner_3 }, { images: banner_4 }]
          ).map(i => ({ image: i?.images }))}
          openImage={() => {}}
          onCurrentItemPressed={() => { }}
          ImageComponentStyle={styles.swiperItem}
        />
      </View>

      {/* Section Spacer */}
      <View style={styles.sectionSpacer} />

      <Distributors
        onItemPress={onItemPress}
        navigation={navigation}
      />

      <ListTrademarksAdvertisement
        navigation={navigation}
        distributor={selectedDistri}
        onMessage={onMessage}
      />

      <ListProductPromotion
        navigation={navigation}
        onFavorClick={onFavorClick}
        onAddProduct={onAddProduct}
        onMessage={onMessage}
      />

      <ProductPriceSock
        navigation={navigation}
        onFavorClick={onFavorClick}
        onAddProduct={onAddProduct}
        onMessage={onMessage}
      />

      <HotProducts
        navigation={navigation}
        onFavorClick={onFavorClick}
        onAddProduct={onAddProduct}
        onMessage={onMessage}
      />

      <View style={{ height: s(100) }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  bannerContainer: {
    borderRadius: s(16),
    overflow: 'hidden',
    marginHorizontal: s(12),
    marginTop: s(12),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  swiperItem: {
    width: '100%',
    height: undefined,
    aspectRatio: 2.5,
    borderRadius: s(16),
  },
  paginationBox: {
    paddingVertical: s(8),
  },
  dot: {
    width: s(8),
    height: s(8),
    borderRadius: s(4),
  },
  dotContainer: {
    marginHorizontal: s(3),
  },
  sectionSpacer: {
    height: s(12),
  },
})

export default ListDistributor