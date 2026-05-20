import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import EmptyItem from '~/common/EmptyItem/index'
import Item from '~/common/InfoPay/InfoPay'
import strings from '~/i18n'

import { requestGetTransactionHistory } from '~/store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactionHistory } from '~/store/selector'

const HistoryType = {
  TransHistory: strings.transactionHistory.title,
}

const HistoryCode = {
  Topup: strings.transactionHistory.titleTabBar.titleRecharge,
}

const AllHistory = ({ distributorId, tabLabel }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const transactionHistory = useSelector(state => getTransactionHistory(state))
  const dispatch = useDispatch()

  useEffect(() => {
    setCurrentPage(1)
    dispatch(requestGetTransactionHistory('all', distributorId, currentPage, 50, false))
  }, [distributorId])

  useEffect(() => {
    if (distributorId != null && currentPage > 1) {
      dispatch(requestGetTransactionHistory('all', distributorId, currentPage, 50, currentPage > 1))
    }
  }, [currentPage, distributorId])

  const loadMore = () => {
    if (transactionHistory.length >= 50) {
      setCurrentPage(currentPage + 1)
    }
  }

  const getValue = (item) => {
    const data = JSON.parse(item.data)
    if (item.type === 'TransHistory') {
      return data.amount
    }
    return item.data
  }

  const isCurrentDistributor = (item) => {
    const data = JSON.parse(item.data)
    if (data.distributor_id === distributorId) {
      return true
    }
    return false
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        data={transactionHistory}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadMore()}
        ListEmptyComponent={() => {
          return (
            <EmptyItem />
          )
        }}
        renderItem={({ item }) => {
          if (isCurrentDistributor(item)) {
            return (
              <Item
                code={HistoryCode[item.ref_id] || item.ref_id}
                money={getValue(item)}
                textMethod={HistoryType[item.type] || item.type}
                textInfo={strings.transactionHistory.titleTabBar.titleType}
                textMoney={strings.wallet.money}
              />
            )
          }
          return <></>
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}
export default AllHistory