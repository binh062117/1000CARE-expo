import React, { useState, useCallback, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native'

import HotDealItem from './HotDealItem'
import { useDispatch, useSelector } from 'react-redux'
import { getListBanner, getBannerStatus, getAuthStore, getErrorGetAllListBanner, getListDistributorsHotDeal } from '~/store/selector'
import { resetBanners, getBanners, getDistributorsActive } from '~/store/actions'
import { LoadingView } from '~/common'
import Status from '~/common/Status/Status'
import { NAVIGATION_COMBO_PRODUCT_DETAIL, NAVIGATION_TOPUP_SCREEN, NAVIGATION_VOUCHER, NAVIGATION_PROMOTION_DETAIL } from '~/navigation/routes'
import strings from '~/i18n'
import ErrorView from '~/common/ErrorView/index'
import Colors from '~/common/Colors/Colors'
import ItemDistributorTab from '~/common/ItemDistributorTab'
import { check_info } from '~/assets/constants'
import { s, fs } from '~/utils/responsive'
import { brandColors, brandShadow } from '~/design-system/tokens'

const screenHeight = Dimensions.get('window').height
const headerHeight = 58
const distributorHeight = 0
const bottomTabHeight = 45

const HotDealScreen = ({ navigation, route }) => {
  const distributorId = route?.params?.distributorId
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => getAuthStore(state))
  const [isLoading, setLoading] = useState(false)
  const [isRefreshing, setRefreshing] = useState(false)
  const [currentTabInfo, setCurrentTabInfo] = useState(null)
  const [bannerPage, setBannerPage] = useState(1)
  const [openMessage, setOpenMessage] = useState(false)
  const [message, setMessage] = useState('')

  const listBannerByDistri = useSelector(state => getListBanner(state))
  const statusBannerByDistri = useSelector(state => getBannerStatus(state))
  const errorGetAllListBanner = useSelector(state => getErrorGetAllListBanner(state))
  const listDistributors = useSelector(state => getListDistributorsHotDeal(state))

  const keyExtractorDistri = useCallback((item) => {
    return item.id.toString()
  })

  const onClick = (banner) => {
    console.log('itemmmmmmmmmmmmmm:', banner)
    if (!isLoggedIn) {
      onShowMessage(strings.common.requireLogin)
      return
    }
    else if (banner.banner_type === 1) {
      navigation.navigate(NAVIGATION_COMBO_PRODUCT_DETAIL, {
        banner: banner,
        distributorId: currentTabInfo?.id,
      })
    }
    else if (banner.banner_type === 2) {
      navigation.navigate(NAVIGATION_TOPUP_SCREEN, { distributor: { id: currentTabInfo?.id } })
    }
    else if (banner.banner_type === 3) {
      navigation.navigate(NAVIGATION_VOUCHER)
    } else {
      navigation.navigate(NAVIGATION_PROMOTION_DETAIL, {
        id_campaign: banner.campaign.id,
      })
    }
  }
  const reset = useCallback(() => {
    dispatch(resetBanners())
  })
  const onRefresh = () => {
    if (!currentTabInfo?.id) return
    setBannerPage(1)
    setRefreshing(true)
    dispatch(getBanners(currentTabInfo?.id, 10, 1, false))
  }
  const loadMore = () => {
    if (!currentTabInfo?.id) return
    setBannerPage(bannerPage + 1)
    dispatch(getBanners(currentTabInfo?.id, 10, bannerPage + 1, true))
  }

  useEffect(() => {
    if (statusBannerByDistri === Status.LOADING) {
      if (!isRefreshing) {
        setLoading(true)
      }
    }
    if (statusBannerByDistri === Status.SUCCESS) {
      setLoading(false)
      setRefreshing(false)
    }
    if (statusBannerByDistri === Status.ERROR) {
      setLoading(false)
      setRefreshing(false)
    }
  }, [statusBannerByDistri])

  useEffect(() => {
    if (currentTabInfo) {
      setBannerPage(1)
      dispatch(getBanners(currentTabInfo?.id, 10, 1, false))
    }
  }, [currentTabInfo])

  useEffect(() => {
    dispatch(getDistributorsActive(1, 1, 0))
  }, [])

  const compare = () => {
    listDistributors.map((element, index) => {
      if (element.id == distributorId) {
        setCurrentTabInfo(listDistributors[index])
        return
      }
    })
  }
  useEffect(() => {
    if (listDistributors != null && listDistributors.length > 0 && !currentTabInfo) {
      if (distributorId) {
        compare()
      } else {
        setCurrentTabInfo(listDistributors[0])
      }
    }
  }, [listDistributors])

  const onTabPress = (item) => {
    setCurrentTabInfo(item)
  }

  const onShowMessage = (msg) => {
    setMessage(msg)
    setOpenMessage(true)
    setTimeout(() => {
      setOpenMessage(false)
    }, 2000)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: brandColors.background }}>
      <View style={styles.dealHero}>
        <Text style={styles.heroEyebrow}>PROMOTION HUB</Text>
        <Text style={styles.heroTitle}>Ưu đãi nhà thuốc</Text>
        <Text style={styles.heroSubtitle}>Chọn nhà phân phối để xem combo, voucher và chương trình nạp tiền đang mở.</Text>
      </View>
      <FlatList
        style={styles.listDistributors}
        contentContainerStyle={styles.distributors}
        data={listDistributors}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ItemDistributorTab
              onItemPress={onTabPress.bind(this, item)}
              selected={item.id === currentTabInfo?.id}
              data={item}
            />
          )
        }}
        keyExtractor={keyExtractorDistri}
      />
      <View style={styles.contentHotDeal}>
        <FlatList
          data={listBannerByDistri}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => {
            return (
              <>
                <Text style={styles.titleHotDeal}>Chiến dịch hiện có</Text>
                <Text style={styles.subTitleHotDeal}>
                  Vui lòng kiểm tra điều kiện áp dụng trước khi sử dụng ưu đãi.
                </Text>
              </>
            )
          }}
          renderItem={({ item }) => {
            return (
              <HotDealItem
                onClick={(banner_type) => onClick(banner_type)}
                data={{
                  ...item,
                  distributor: currentTabInfo,
                }}
              />
            )
          }}
          onRefresh={() => onRefresh()}
          refreshing={isRefreshing}
          onEndReachedThreshold={0.1}
          onEndReached={() => loadMore()}
          keyExtractor={keyExtractorDistri}
        />
      </View>
      {isLoading && <LoadingView />}
      <ErrorView
        error={errorGetAllListBanner}
        isOpen={errorGetAllListBanner ? true : false}
        onClose={reset}
      />
      <ErrorView
        error={message}
        isOpen={openMessage}
        icon={check_info}
        onClose={() => setOpenMessage(false)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapDistributors: {
    width: '100%',
    backgroundColor: '#FFF',

    borderTopColor: '#F5F5F5',
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
  contentHotDeal: {
    width: '100%',
    height:
      screenHeight - headerHeight - distributorHeight - bottomTabHeight - 26,
    backgroundColor: brandColors.background,

    marginTop: s(4),
    paddingHorizontal: s(16),
    paddingTop: s(8),
    flex: 1,
  },
  dealHero: {
    marginHorizontal: s(16),
    marginTop: s(10),
    marginBottom: s(12),
    borderRadius: s(28),
    paddingHorizontal: s(20),
    paddingVertical: s(20),
    backgroundColor: brandColors.tealPrimary,
    ...brandShadow.teal,
  },
  heroEyebrow: {
    fontSize: fs(10),
    lineHeight: fs(14),
    fontWeight: '900',
    letterSpacing: 1.6,
    color: 'rgba(255,255,255,0.68)',
  },
  heroTitle: {
    marginTop: s(6),
    fontSize: fs(26),
    lineHeight: fs(32),
    fontWeight: '900',
    color: brandColors.surface,
  },
  heroSubtitle: {
    marginTop: s(8),
    fontSize: fs(13),
    lineHeight: fs(20),
    fontWeight: '600',
    color: 'rgba(255,255,255,0.76)',
  },
  titleHotDeal: {
    fontSize: fs(18),
    color: brandColors.textDark,
    fontWeight: '800',

  },
  subTitleHotDeal: {
    marginTop: s(6),
    marginBottom: s(20),
    fontSize: fs(12),
    color: brandColors.muted,

    lineHeight: fs(20),
  },
  distributors: {
    height: s(78),
    backgroundColor: brandColors.background,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: s(8),
  },
  listDistributors: {
    flexGrow: 0,
    backgroundColor: brandColors.background,
  },
})

export default HotDealScreen
