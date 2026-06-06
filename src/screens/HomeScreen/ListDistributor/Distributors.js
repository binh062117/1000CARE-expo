import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { NAVIGATION_LIST_DISTRIBUTOR_TRADEMARK } from '~/navigation/routes'
import { getListDistributors } from '~/store/selector'
import Swiper from 'react-native-swiper'
import { DIMENS } from '~/constants/index'
import ItemDistributor from '~/common/ItemDistributor/index'
import { s, fs } from '~/utils/responsive'

const Distributors = ({ navigation, onItemPress }) => {
  const listDistributors = useSelector(state => getListDistributors(state))

  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerAccent} />
          <Text style={styles.headerTitle}>NHÀ CUNG CẤP</Text>
        </View>
        <TouchableOpacity
          style={styles.seeAllBtn}
          onPress={() => {
            navigation.navigate(NAVIGATION_LIST_DISTRIBUTOR_TRADEMARK, {
              type: 'distributor',
              onItemPress: (item) => onItemPress(item),
              title: 'Nhà cung cấp',
            })
          }}
        >
          <Text style={styles.seeAllText}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>

      <Swiper
        showsButtons
        style={{
          height: 2 * ((DIMENS.common.WINDOW_WIDTH - 5 * 6 - 12) / 3) * 1.05 + s(20),
        }}
        showsPagination={false}
        autoplay={false}
        loadMinimal={true}
        loadMinimalSize={1}
        nextButton={<Text />}
        prevButton={<Text />}
      >
        {Array.from({ length: Math.ceil(listDistributors.length / 6) }, (_, i) => i + 1).map((value, idx) => (
          <View key={`page_${idx}`} style={styles.swiperPage}>
            <View style={styles.row}>
              {listDistributors.filter((_, id) => (value - 1) * 6 <= id && id < value * 6 - 3).map((item, index) => (
                <ItemDistributor
                  key={`dist_top_${item.id || item.Id || index}`}
                  onItemPress={() => onItemPress(item)}
                  data={item}
                />
              ))}
            </View>
            <View style={styles.row}>
              {listDistributors.filter((_, id) => (value - 1) * 6 + 3 <= id && id < value * 6).map((item, index) => (
                <ItemDistributor
                  key={`dist_bot_${item.id || item.Id || index}`}
                  onItemPress={() => onItemPress(item)}
                  data={item}
                />
              ))}
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: s(20),
    marginHorizontal: s(12),
    marginBottom: s(12),
    paddingVertical: s(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
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
    gap: s(8),
  },
  headerAccent: {
    width: s(4),
    height: s(18),
    backgroundColor: '#0B7B8A',
    borderRadius: s(2),
  },
  headerTitle: {
    fontSize: fs(13),
    fontWeight: '800',
    color: '#1A202C',
    letterSpacing: 0.5,
    marginLeft: s(8),
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
  swiperPage: {
    paddingHorizontal: s(6),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})

export default Distributors