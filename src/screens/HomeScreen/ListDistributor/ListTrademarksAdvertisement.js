import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Text } from '~/common/index'
import strings from '~/i18n'
import { NAVIGATION_LIST_DISTRIBUTOR_TRADEMARK, NAVIGATION_PRODUCT_LIST } from '~/navigation/routes'
import { getAuthStore, getListTrademarksAdvertisement } from '~/store/selector'
import Swiper from 'react-native-swiper'
import { DIMENS } from '~/constants/index'
import ItemDistributor from '~/common/ItemDistributor/index'
import styles from './styles'

const ListTrademarksAdvertisement = ({ navigation, distributor, onMessage }) => {
  const listTrademarksAdvertisement = useSelector(state => getListTrademarksAdvertisement(state))
  const { isLoggedIn } = useSelector(state => getAuthStore(state))
  const safeListTrademarksAdvertisement = Array.isArray(listTrademarksAdvertisement) ? listTrademarksAdvertisement : []
  if (safeListTrademarksAdvertisement.length === 0)
    return null

  const onItemPress = (item) => {
    // Cho phép xem thương hiệu mà không cần đăng nhập
    navigation.navigate(NAVIGATION_PRODUCT_LIST, {
      type: 'trademark',
      distributorId: distributor?.id,
      trademarkId: item?.id,
      title: item?.name,
    })
  }

  return (
    <View style={styles.listDistributorContainer}>
      <View
        style={styles.labelContainer}
      >
        <Text style={styles.labelDistributor}>
          {'CHỌN THƯƠNG HIỆU'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NAVIGATION_LIST_DISTRIBUTOR_TRADEMARK, {
              type: 'trademark',
              onItemPress: (item) => onItemPress(item),
              title: 'Thương hiệu',
            })
          }}
        >
          <Text style={styles.seeAll} >
            {'Tất cả'}
          </Text>
        </TouchableOpacity>
      </View>
      <Swiper
        showsButtons
        style={{
          height: 2 * ((DIMENS.common.WINDOW_WIDTH - 5 * 6 - 12) / 3) + 12,
        }}
        showsPagination={false}
        autoplay={true}
        autoplayTimeout={10}
        loadMinimal={true}
        loadMinimalSize={1}
        nextButton={<Text />}
        prevButton={<Text />}
      >
        {
          Array.from({ length: Math.ceil(safeListTrademarksAdvertisement.length / 6) }, (_, i) => i + 1).map((value, idx) => {
            return (
              <View key={`page-${value}`}>
                <View style={styles.rowItemContainer}>
                  {
                    safeListTrademarksAdvertisement.filter((_, id) => (value - 1) * 6 <= id && id < value * 6 - 3).map((item, itIdx) => {
                      return (
                        <ItemDistributor
                          key={item?.id ?? itIdx}
                          onItemPress={() => onItemPress(item)}
                          data={item}
                        />
                      )
                    })
                  }
                </View>
                <View style={styles.rowItemContainer}>
                  {
                    safeListTrademarksAdvertisement.filter((_, id) => (value - 1) * 6 + 3 <= id && id < value * 6).map((item, itIdx) => {
                      return (
                        <ItemDistributor
                          key={item?.id ?? itIdx}
                          onItemPress={() => onItemPress(item)}
                          data={item}
                        />
                      )
                    })
                  }
                </View>
              </View>
            )
          })
        }
      </Swiper>

    </View>
  )
}

export default ListTrademarksAdvertisement