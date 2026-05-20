import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Text } from '~/common/index'
import { NAVIGATION_LIST_DISTRIBUTOR_TRADEMARK } from '~/navigation/routes'
import { getListDistributors } from '~/store/selector'
import styles from './styles'
import Swiper from 'react-native-swiper'
import { DIMENS } from '~/constants/index'
import ItemDistributor from '~/common/ItemDistributor/index'

const Distributors = ({ navigation, onItemPress }) => {
  const listDistributors = useSelector(state => getListDistributors(state))
  // console.log('HOME SCREEN ----- distributor:::::', listDistributors)
  
  return (
    <View style={styles.listDistributorContainer}>
      <View
        style={styles.labelContainer}
      >
        <Text style={styles.labelDistributor}>
          {'CHỌN NHÀ CUNG CẤP'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NAVIGATION_LIST_DISTRIBUTOR_TRADEMARK, {
              type: 'distributor',
              onItemPress: (item) => onItemPress(item),
              title: 'Nhà cung cấp',
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
        autoplay={false}
        loadMinimal={true}
        loadMinimalSize={1}
        nextButton={<Text />}
        prevButton={<Text />}
      >
        {
          Array.from({ length: Math.ceil(listDistributors.length / 6) }, (_, i) => i + 1).map((value, idx) => {
            return (
              <View key={`page_${idx}`}>
                <View style={styles.rowItemContainer}>
                  {
                    listDistributors.filter((_, id) => (value - 1) * 6 <= id && id < value * 6 - 3).map((item, index) => {
                      return (
                        <ItemDistributor
                          key={`dist_top_${item.id || item.Id || index}`}
                          onItemPress={() => onItemPress(item)}
                          data={item}
                        />
                      )
                    })
                  }
                </View>
                <View style={styles.rowItemContainer}>
                  {
                    listDistributors.filter((_, id) => (value - 1) * 6 + 3 <= id && id < value * 6).map((item, index) => {
                      return (
                        <ItemDistributor
                          key={`dist_bot_${item.id || item.Id || index}`}
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

export default Distributors