import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import Header from '~/common/Header/index'
import { back } from '~/assets/constants'
import DetailDeliveryItem from '~/common/DetailDeliveryItem/DetailDeliverItem'

const OrderDetailDelivery = ({ navigation, route }) => {
  const { state_histories } = route.params
  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
      <Header
        title={'Theo dõi đơn hàng'}
        iconLeft={back}
        leftAction={() => navigation.pop()}
      />
      <FlatList
        data={state_histories}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => {
          return (
            <DetailDeliveryItem
              data={item}
              status={1}
            />)
        }}
      />
    </SafeAreaView>
  )
}

export default OrderDetailDelivery
