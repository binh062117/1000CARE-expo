import React, { useEffect } from 'react'
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomHeader from '~/common/CustomHeader/index'
import { getOrders } from '~/store/actions'
import { getListOrders } from '~/store/orders/OrderSelectors'

import DeliveryNotificationItem from './DeliveryNotificationItem'

const screenHeight = Dimensions.get('window').height
const headerHeight = 58
const bottomTabHeight = 54

const DeliveryManagerScreen = ({ navigation }) => {
  const listOrders = useSelector((state) => getListOrders(state))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrders())
  }, [])

  return (
    <SafeAreaView>
      <CustomHeader
        navigation={navigation}
        title={'Giao hàng'}
        search={false}
      />
      <View style={styles.wrap}>
        <FlatList
          data={listOrders}
          horizontal={false}
          renderItem={({ item }) => {
            return (
              <DeliveryNotificationItem
                data={item}
                navigation={navigation}
                goBack={() => {
                  dispatch(getOrders())
                }}
              />
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: screenHeight - headerHeight - bottomTabHeight - 26,
    backgroundColor: '#FFF',

    marginTop: 6,
  },
})

export default DeliveryManagerScreen
