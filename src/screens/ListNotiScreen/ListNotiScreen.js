import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import Header from '~/common/Header/index'
import { back } from '~/assets/constants'
import styles from './styles'
import ItemListNoti from './ItemListNoti'
import { getListNoti, resetListNoti, getCheckReadNoti, requestGetItemHistory } from '~/store/actions'
import { isListNoti, isStatusListNoti, isErrorGetListNoti, isStatusCheckRead } from '~/store/selector'
import { useDispatch, useSelector } from 'react-redux'
import Status from '~/common/Status/Status'
import { LoadingView } from '~/common'
import ErrorView from '~/common/ErrorView/index'
import EmptyItem from '~/common/EmptyItem/index'
import {
  // NAVIGATION_TO_HOT_DEAL_SCREEN,
  NAVIGATION_VOUCHER,
  NAVIGATION_TOPUP_SCREEN,
  NAVIGATION_PROMOTION_DETAIL,
  NAVIGATION_CONFIRM_ORDER_PRODUCTS_SCREEN,
  NAVIGATION_ORDER_DETAIL_SCREEN,
  // NAVIGATION_COMBO_PRODUCT_DETAIL,
} from '~/navigation/routes'

const ListNotiScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const listNoti = useSelector(state => isListNoti(state))
  const statusListNoti = useSelector(state => isStatusListNoti(state))
  const statusCheckRead = useSelector(state => isStatusCheckRead(state))
  const errorGetListNoti = useSelector(state => isErrorGetListNoti(state))

  const [listPage, setListPage] = useState(1)
  const [isRefreshing, setRefreshing] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [isLoadNotiAllRead, setLoadNotiAllRead] = useState(false)
  const [isReadAll, setReadAll] = useState(false)

  const loadMore = () => {
    setListPage(listPage + 1)
    dispatch(getListNoti(10, listPage + 1, true))
  }
  const onRefresh = () => {
    setListPage(1)
    setRefreshing(true)
    dispatch(getListNoti(10, 1, false))
  }
  const reset = useCallback(() => {
    dispatch(resetListNoti())
  })
  const clickNoti = (noti, dataNoti, idNoti, isRead) => {
    console.log('dataNoti', noti)
    if (!isRead) {
      dispatch(getCheckReadNoti(idNoti, 1))
    }

    const action = noti?.action.toLowerCase()
    const category = noti.category.toLowerCase()
    if (action == 'confirm_changes') {
      dispatch(requestGetItemHistory(dataNoti.order_id))
      navigation.navigate(NAVIGATION_CONFIRM_ORDER_PRODUCTS_SCREEN, { orderId: dataNoti.order_id })
    } else if (category === 'voucher' && action === 'assigned') {
      navigation.navigate(NAVIGATION_VOUCHER)
    } else if (category === 'order' && action === 'status_changed') {
      navigation.navigate(NAVIGATION_ORDER_DETAIL_SCREEN, {
        order: {
          order_id: dataNoti.order_id,
        },
      })
    } else if (category === 'balance' && action === 'topup') {
      //waiting
    } else if (category === 'campaign' && action === 'campaign_noti') {
      if (dataNoti.CampaignType == 2) {
        navigation.navigate(NAVIGATION_TOPUP_SCREEN, { distributor: { id: dataNoti?.DistributorId } })
      }
      else if (dataNoti.CampaignType == 3) {
        navigation.navigate(NAVIGATION_VOUCHER)
      } else {
        navigation.navigate(NAVIGATION_PROMOTION_DETAIL, {
          id_campaign: dataNoti.Id,
        })
      }
    }
  }

  const checkAllNoti = () => {
    dispatch(getCheckReadNoti(0, 0))
    setLoadNotiAllRead(true)
  }

  //get list noti chưa đọc
  useEffect(() => {
    if (statusCheckRead == Status.SUCCESS) {
      dispatch(getListNoti(0, 1, false, 0))
      if (isLoadNotiAllRead) {
        setLoadNotiAllRead(false)
        setReadAll(true)
      }
    }
  }, [statusCheckRead])
  useEffect(() => {
    if (statusListNoti === Status.LOADING) {
      if (!isRefreshing) {
        setLoading(true)
      }
    }
    if (statusListNoti === Status.SUCCESS) {
      setLoading(false)
      setRefreshing(false)
    }
    if (statusListNoti === Status.ERROR) {
      setLoading(false)
      setRefreshing(false)
    }
  }, [statusListNoti])
  useEffect(() => {
    dispatch(getListNoti(10, 1, false))
  }, [])

  const keyExtractor = useCallback((item, index) => index.toString())
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title={'Thông báo'}
        leftAction={() => navigation.pop()}
        iconLeft={back}
        navigation={navigation.navigation}
        showRight={true}
        iconRight='checkmark-done-sharp'
        rightAction={checkAllNoti}
      />
      <FlatList
        data={listNoti}
        renderItem={(item) => {
          return (
            <ItemListNoti
              item={item.item}
              index={item.index}
              onPress={(dataNoti, idCampaign, isRead) => clickNoti(item.item, dataNoti, idCampaign, isRead)}
              isReadAll={isReadAll}
            />
          )
        }}
        ListEmptyComponent={() => {
          return (
            <EmptyItem
              text={'Hiện tại không có Thông báo'}
            />)
        }}
        onRefresh={() => onRefresh()}
        refreshing={isRefreshing}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadMore()}
        keyExtractor={keyExtractor}
      />
      {isLoading && <LoadingView />}
      <ErrorView
        error={errorGetListNoti}
        isOpen={errorGetListNoti ? true : false}
        onClose={reset}
      />
    </SafeAreaView>
  )
}
export default ListNotiScreen