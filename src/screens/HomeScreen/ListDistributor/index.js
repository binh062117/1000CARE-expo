import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { banner_2, banner_3, banner_4 } from '~/assets/constants'

import styles from './styles'
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
import PremiumCard from '~/design-system/PremiumCard'

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
    >
      <View
        style={styles.swiper}
      >
        <SliderBox
          resizeMode="stretch"
          dotColor={Colors.white}
          dotStyle={styles.dot}
          dotContainerStyle={styles.dotContainer}
          paginationBoxStyle={styles.paginationBox}
          inactiveDotColor={Colors.disabledText}
          autoplay={true}
          circleLoop
          items={(Array.isArray(listAdsBanner) && listAdsBanner.length > 0 ? listAdsBanner : [{ images: banner_2 }, { images: banner_3 }, { images: banner_4 }]).map(i => ({ image: i?.images }))}
          openImage={() => {}}
          onCurrentItemPressed={() => { }}
          ImageComponentStyle={styles.swiperItem}
        />
      </View>
      <View style={{ paddingHorizontal: 16, marginVertical: 10 }}>
        <PremiumCard 
          title="Chăm sóc sức khỏe 1000CARE" 
          subtitle="Hệ thống phân phối dược phẩm chính hãng. Đặt hàng nhanh chóng, hỗ trợ 24/7."
          onPress={() => console.log('Premium Card Pressed')}
        />
      </View>
      <ProductPriceSock
        navigation={navigation}
        onFavorClick={onFavorClick}
        onAddProduct={onAddProduct}
        onMessage={onMessage}
      />
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
      <HotProducts
        navigation={navigation}
        onFavorClick={onFavorClick}
        onAddProduct={onAddProduct}
        onMessage={onMessage}
      />
    </ScrollView>
  )
}

export default ListDistributor