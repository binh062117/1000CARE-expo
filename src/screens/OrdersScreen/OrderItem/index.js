import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import strings from '~/i18n'
import { formatMoney } from '~/utils/index'
import { Image } from '~/common/index'

import styles from './styles'
import { NAVIGATION_ORDER_DETAIL_SCREEN } from '~/navigation/routes'

const orderStatuses = [
  'Không xác định', // 0
  'Chờ xử lý', // 1
  'Đã xác minh', // 2
  'Đang giao hàng', //3
  'Hoàn thành',//4
  'Hoàn tiền',//5
  'Quá hạn',//6
  'Đã thanh toán',//7
  'Chờ xác nhận',// 8
  'Chờ xác minh', //9
  'Đang giao hàng',//10
  'Đã giao hàng', // 11
  'Đã hủy', // 12
  'Đang xử lý', // 13
  'Thất bại', // 14
  'Đang đóng gói', //15
  'Đã trả hàng', // 16
  'Nhận hàng lần đầu', //17
  'Nhận hàng lần 2', //18
  'Nhận hàng lần 3', //19
  'Gưi hàng lần đầu', //20
  'Gưi hàng lần 2', // 21
  'Gưi hàng lần 3', //22
  'Đang trả hàng',//23
  '',
  '',
  '',
  '',
  'Chờ người dùng xác nhận',
]

const OrderItem = ({ order, onPayment, navigation, goBack, onCancelOrder, buyAgain, confirmOrder }) => {
  // console.log('order?.order_status::::', order?.order_status)
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NAVIGATION_ORDER_DETAIL_SCREEN, {
        goBack,
        order: {
          ...order,
          address: JSON.parse(order.address),
          items: JSON.parse(order.items),
        },
      })}
      style={styles.orderContainer}
    >
      <View
        style={styles.logoContainer}
      >
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={{
            uri: order?.distributor?.logo,
          }}
        />
      </View>

      <View
        style={styles.orderInfoContainer}
      >
        <Text
          numberOfLines={2}
          ellipsizeMode='tail'
          style={styles.orderTransId}
        >

          Mã đơn hàng: `${order.order_id}`
        </Text>
        <Text
          style={styles.orderTime}
        >
          {order.created_time}
        </Text>
        <Text
          style={styles.orderTime}
        >
          {orderStatuses[order?.order_status]}
        </Text>
        <View
          style={styles.priceContainer}
        >
          {
            order.payment_type !== 2 && (
              <Text style={styles.price}>{formatMoney(order.total_sale)}</Text>
            )
          }
          {
            order.payment_type === 2 && (
              <Text style={styles.salePrice}>
                {formatMoney(order.total_sale, { unit: 'điểm' })}
              </Text>
            )
          }
          <TouchableOpacity
            style={styles.buyAgainContainer}
            onPress={buyAgain}
          >
            <Text style={styles.buyAgainText}>{'ĐẶT LẠI'}</Text>
          </TouchableOpacity>
          {
            order?.order_status === 1 && (
              <TouchableOpacity
                style={styles.cancelContainer}
                onPress={() => onCancelOrder(order.order_id)}
              >
                <Text style={styles.cancelText}>{'HUỶ ĐƠN'}</Text>
              </TouchableOpacity>
            )
          }
          {
            order?.order_status === 28 && (
              <TouchableOpacity
                style={styles.cancelContainer}
                onPress={confirmOrder}
              >
                <Text style={styles.confirmText}>{'XÁC NHẬN'}</Text>
              </TouchableOpacity>
            )
          }
          {/* {
            order?.order_status === 4 && (
              <Button
                styleView={styles.reOrderBtnContainer}
                styleButton={styles.reOrderBtn}
                styleText={styles.reOrderText}
                text={strings.orders.orderItem.reOrder}
                onPressEvent={() => {
                  navigation.navigate(NAVIGATION_ORDER_DETAIL_SCREEN, {
                    order: {
                      ...order,
                      address: JSON.parse(order.address),
                      items: JSON.parse(order.items),
                    },
                  })
                }}
              />
            )
          } */}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default OrderItem
