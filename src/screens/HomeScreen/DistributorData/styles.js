import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'
import { DIMENS } from '~/constants/index'

export default StyleSheet.create({
  listSupplierColumnContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleSupplierContainer: {
    height: 36,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  viewTitleSupplier: {
    height: 36,
    width: 100,
    backgroundColor: Colors.systemColor2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleSupplier: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  viewNameSupplier: {
    height: 36,
    justifyContent: 'center',
  },
  nameSupplier: {
    color: Colors.textColor1,
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingLeft: 12,
    paddingVertical: 7,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  banner: {
    width: '100%',
    height: (DIMENS.common.WINDOW_WIDTH - 100) * 2 / 5,
    marginBottom: 4,
    borderRadius: 2,
  },
  listCategoriesContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Colors.backgroundColor,
    padding: 6,
  },

  swiper: {
    width: (DIMENS.common.WINDOW_WIDTH - 116),
    height: (DIMENS.common.WINDOW_WIDTH - 100) * 2 / 5,
    zIndex: -1,
  },
  swiperItemContainer: {
    backgroundColor: 'transparent',
    height: (DIMENS.common.WINDOW_WIDTH - 100) * 2 / 5,
  },
  swiperItem: {
    width: (DIMENS.common.WINDOW_WIDTH - 116),
    height: (DIMENS.common.WINDOW_WIDTH - 100) * 2 / 5,
  },
  textButton: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '700',
    color: Colors.systemColor2,
  },
})