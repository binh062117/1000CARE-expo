import React, { useState, useEffect } from 'react'
import { Dimensions, View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { banner_2, banner_3, banner_4 } from '~/assets/constants'
import { useDispatch, useSelector } from 'react-redux'
import ListTrademarksAdvertisement from './ListTrademarksAdvertisement'
import ListProductPromotion from './ListProductPromotion'
import ProductPriceSock from './ProductPriceSock'
import HotProducts from './HotProducts'
import Distributors from './Distributors'
import PlaceHolder from './PlaceHolder'
import {
  getListAdsBannerNeomed,
  getListProductPriceSock,
  getListProductsBestSeller,
  getListProductsHotDeal,
  getListTrademarksAdvertisement,
} from '~/store/selector'
import { requestGetListAdsBannerHomeNeomedByDistributor } from '~/store/actions'
import SliderBox from '~/common/SliderBox/index'
import { Icon } from '~/common'
import Colors from '~/common/Colors/Colors'
import { s, fs } from '~/utils/responsive'
import AppSection from '~/design-system/AppSection'
import { brandColors, brandShadow } from '~/design-system/tokens'
import { NAVIGATION_TO_SEARCH } from '~/navigation/routes'

const bannerWidth = Dimensions.get('window').width - s(32)
const bannerHeight = Math.round(bannerWidth / 2.5)
const hasItems = data => Array.isArray(data) && data.length > 0

const EmptySectionCard = ({ title, description }) => (
  <View style={styles.emptySectionCard}>
    <Text style={styles.emptyEyebrow}>{title}</Text>
    <Text style={styles.emptyDescription}>{description}</Text>
  </View>
)

const QuickActionRail = ({ navigation }) => {
  const actions = [
    { title: 'Tìm thuốc', caption: 'Tra cứu nhanh', type: 'feather', icon: 'search', color: brandColors.tealPrimary },
    { title: 'Ưu đãi', caption: 'Deal mới', type: 'antdesign', icon: 'tag', color: brandColors.goldAccent },
    { title: 'Bán chạy', caption: 'Gợi ý mua', type: 'feather', icon: 'trending-up', color: brandColors.success },
  ]

  return (
    <View style={styles.quickRail}>
      {actions.map(item => (
        <TouchableOpacity
          key={item.title}
          activeOpacity={0.86}
          style={styles.quickTile}
          onPress={() => navigation.navigate(NAVIGATION_TO_SEARCH)}
        >
          <View style={[styles.quickIcon, { backgroundColor: item.color }]}>
            <Icon type={item.type} name={item.icon} size={s(18)} color={brandColors.surface} />
          </View>
          <Text style={styles.quickTitle}>{item.title}</Text>
          <Text style={styles.quickCaption}>{item.caption}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const ListDistributor = ({ navigation, onItemPress, selectedDistri, onFavorClick, onAddProduct, onMessage }) => {
  const dispatch = useDispatch()
  const listAdsBanner = useSelector(state => getListAdsBannerNeomed(state))
  const trademarks = useSelector(state => getListTrademarksAdvertisement(state))
  const hotDeals = useSelector(state => getListProductsHotDeal(state))
  const priceSockProducts = useSelector(state => getListProductPriceSock(state))
  const bestSellerProducts = useSelector(state => getListProductsBestSeller(state))
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
      <View style={styles.bannerContainer}>
        <SliderBox
          resizeMode="stretch"
          dotColor={brandColors.tealPrimary}
          dotStyle={styles.dot}
          dotContainerStyle={styles.dotContainer}
          paginationBoxStyle={styles.paginationBox}
          inactiveDotColor="rgba(255,255,255,0.5)"
          autoplay={true}
          circleLoop
          parentWidth={bannerWidth}
          items={(Array.isArray(listAdsBanner) && listAdsBanner.length > 0
            ? listAdsBanner
            : [{ images: banner_2 }, { images: banner_3 }, { images: banner_4 }]
          ).map(i => ({ image: i?.images }))}
          openImage={() => {}}
          onCurrentItemPressed={() => { }}
          ImageComponentStyle={styles.swiperItem}
        />
      </View>

      <QuickActionRail navigation={navigation} />

      <AppSection title="Nhà phân phối" subtitle="Chọn đối tác cung ứng để xem sản phẩm">
        <View style={styles.sectionCard}>
          <Distributors
            onItemPress={onItemPress}
            navigation={navigation}
          />
        </View>
      </AppSection>

      <View style={styles.contentPanel}>
        <View style={styles.panelIntro}>
          <Text style={styles.panelEyebrow}>GỢI Ý MUA HÀNG</Text>
          <Text style={styles.panelTitle}>Danh mục được tuyển chọn cho nhà thuốc</Text>
        </View>
      </View>

      <AppSection title="Thương hiệu nổi bật">
        {hasItems(trademarks) ? (
          <View style={styles.sectionCard}>
            <ListTrademarksAdvertisement
              navigation={navigation}
              distributor={selectedDistri}
              onMessage={onMessage}
            />
          </View>
        ) : (
          <EmptySectionCard
            title="Đang đồng bộ thương hiệu"
            description="Các thương hiệu nổi bật sẽ xuất hiện khi dữ liệu từ nhà phân phối sẵn sàng."
          />
        )}
      </AppSection>

      <AppSection title="Khuyến mãi dành cho bạn">
        {hasItems(hotDeals) ? (
          <View style={styles.sectionCard}>
            <ListProductPromotion
              navigation={navigation}
              onFavorClick={onFavorClick}
              onAddProduct={onAddProduct}
              onMessage={onMessage}
            />
          </View>
        ) : (
          <EmptySectionCard
            title="Chưa có khuyến mãi"
            description="Ưu đãi mới sẽ được cập nhật tự động theo dữ liệu từ hệ thống."
          />
        )}
      </AppSection>

      <AppSection title="Giá sốc hôm nay">
        {hasItems(priceSockProducts) ? (
          <View style={styles.sectionCard}>
            <ProductPriceSock
              navigation={navigation}
              onFavorClick={onFavorClick}
              onAddProduct={onAddProduct}
              onMessage={onMessage}
            />
          </View>
        ) : (
          <EmptySectionCard
            title="Đang cập nhật giá sốc"
            description="Danh sách giá tốt sẽ hiển thị ngay khi API trả về dữ liệu hợp lệ."
          />
        )}
      </AppSection>

      <AppSection title="Bán chạy">
        {hasItems(bestSellerProducts) ? (
          <View style={styles.sectionCard}>
            <HotProducts
              navigation={navigation}
              onFavorClick={onFavorClick}
              onAddProduct={onAddProduct}
              onMessage={onMessage}
            />
          </View>
        ) : (
          <EmptySectionCard
            title="Đang xếp hạng sản phẩm"
            description="Các sản phẩm bán chạy sẽ xuất hiện sau khi dữ liệu được tải thành công."
          />
        )}
      </AppSection>

      <View style={{ height: s(100) }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: brandColors.background,
  },
  bannerContainer: {
    borderRadius: s(24),
    overflow: 'hidden',
    marginHorizontal: s(16),
    marginTop: s(14),
    backgroundColor: brandColors.surface,
    ...brandShadow.teal,
  },
  quickRail: {
    flexDirection: 'row',
    marginHorizontal: s(16),
    marginTop: s(14),
  },
  quickTile: {
    flex: 1,
    minHeight: s(104),
    borderRadius: s(22),
    padding: s(12),
    marginRight: s(9),
    backgroundColor: brandColors.surface,
    borderWidth: 1,
    borderColor: brandColors.borderSoft,
    ...brandShadow.soft,
  },
  quickIcon: {
    width: s(34),
    height: s(34),
    borderRadius: s(13),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: s(10),
  },
  quickTitle: {
    fontSize: fs(13),
    lineHeight: fs(17),
    fontWeight: '900',
    color: brandColors.textDark,
  },
  quickCaption: {
    marginTop: s(2),
    fontSize: fs(10),
    lineHeight: fs(14),
    fontWeight: '700',
    color: brandColors.muted,
  },
  contentPanel: {
    marginHorizontal: s(16),
    marginTop: s(18),
    borderRadius: s(26),
    backgroundColor: brandColors.textDark,
    padding: s(18),
  },
  panelIntro: {
    maxWidth: '86%',
  },
  panelEyebrow: {
    fontSize: fs(10),
    lineHeight: fs(14),
    fontWeight: '900',
    letterSpacing: 1.6,
    color: brandColors.goldAccent,
  },
  panelTitle: {
    marginTop: s(6),
    fontSize: fs(19),
    lineHeight: fs(25),
    fontWeight: '900',
    color: brandColors.surface,
  },
  swiperItem: {
    width: bannerWidth,
    height: bannerHeight,
    borderRadius: s(24),
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
  sectionCard: {
    marginHorizontal: s(16),
    borderRadius: s(24),
    backgroundColor: brandColors.surface,
    borderWidth: 1,
    borderColor: brandColors.borderSoft,
    overflow: 'hidden',
    ...brandShadow.soft,
  },
  emptySectionCard: {
    marginHorizontal: s(16),
    borderRadius: s(20),
    paddingHorizontal: s(18),
    paddingVertical: s(18),
    backgroundColor: brandColors.tealLight,
    borderWidth: 1,
    borderColor: brandColors.border,
  },
  emptyEyebrow: {
    fontSize: fs(12),
    lineHeight: fs(16),
    fontWeight: '800',
    color: brandColors.tealDark,
    textTransform: 'uppercase',
    letterSpacing: 1.4,
  },
  emptyDescription: {
    marginTop: s(8),
    fontSize: fs(14),
    lineHeight: fs(21),
    color: brandColors.muted,
  },
})

export default ListDistributor
