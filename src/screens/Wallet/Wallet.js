import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, FlatList, SafeAreaView } from 'react-native'
import Header from '~/common/Header/index'
import strings from '~/i18n'
import { getBalance } from '~/store/actions'
import { getAccounts, getUserId } from '~/store/selector'
import { NAVIGATION_TOPUP_SCREEN, NAVIGATION_WALLET_DETAIL } from '~/navigation/routes'
import WalletItem from './WalletItem'
import EmptyItem from '~/common/EmptyItem/index'

const Wallet = props => {
  const type = props.route?.params?.type
  const dispatch = useDispatch()

  const accounts = useSelector(state => getAccounts(state))
  const userId = useSelector(state => getUserId(state))

  useEffect(() => {
    dispatch(getBalance(userId))
  }, [])

  const keyExtractorAccount = (item) => {
    return item.id.toString()
  }

  const goToWalletDetail = (item) => {
    if (type === 'topup') {
      props.navigation.navigate(NAVIGATION_TOPUP_SCREEN, {
        distributor: item,
      })
    } else {
      props.navigation.navigate(NAVIGATION_WALLET_DETAIL, {
        distributor: item,
      })
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        title={type === 'topup' ? 'Nạp tiền' : strings.walletList.title}
        leftAction={() => props.navigation.goBack()}
      />
      <FlatList
        style={{ flexGrow: 0, marginTop: 10 }}
        data={accounts}
        keyExtractor={keyExtractorAccount}
        renderItem={({ item }) => {
          return (
            <WalletItem
              data={item}
              type={'ASSETS'}
              onItemPress={goToWalletDetail.bind(this, item)}
            />
          )
        }}
        ListEmptyComponent={() => {
          return (
            <EmptyItem text='Không có thông tin' />
          )
        }}
      />
      <View />
    </SafeAreaView>
  )
}
export default Wallet