import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'
import { DIMENS } from '~/constants/index'
import { s, fs } from '~/utils/responsive'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  swiperItem: {
    width: DIMENS.common.WINDOW_WIDTH,
    height: DIMENS.common.WINDOW_WIDTH * 2 / 5,
  },
  swiper: {
    height: DIMENS.common.WINDOW_WIDTH * 2 / 5,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(16),
    marginVertical: s(14),
  },
  labelDistributor: {
    fontSize: fs(13),
    color: '#1A202C',
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  seeAll: {
    color: '#0B7B8A',
    fontSize: fs(13),
    fontWeight: '700',
  },
  listDistributorContainer: {
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
  rowItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: s(6),
  },
  dot: {
    width: s(8),
    height: s(8),
    borderRadius: s(4),
  },
  dotContainer: {
    marginHorizontal: s(3),
  },
  paginationBox: {
    paddingVertical: s(8),
  },
})