import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'
import { DIMENS } from '~/constants/index'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    marginTop: 12,
    backgroundColor: Colors.backgroundColor,
  },
  listDistributors: {
    flexGrow: 0,
  },
  distributors: {
    backgroundColor: Colors.white,
    marginHorizontal: 5,
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    marginVertical: 18,
  },
  labelDistributor: {
    fontFamily: Fonts.medium,
    color: Colors.textColor2,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  seeAll: {
    color: Colors.systemColor2,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  swiper: {
    height: DIMENS.common.WINDOW_WIDTH * 2 / 5,
  },
  swiperItemContainer: {
    backgroundColor: 'transparent',
    height: DIMENS.common.WINDOW_WIDTH * 2 / 5,
  },
  swiperItem: {
    width: DIMENS.common.WINDOW_WIDTH,
    height: DIMENS.common.WINDOW_WIDTH * 2 / 5,
  },
  listDistributorContainer: {
    marginBottom: 8,
    backgroundColor: Colors.white,
  },
  rowItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})