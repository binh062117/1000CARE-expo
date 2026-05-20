import React from 'react'
import {
  ScrollView,
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native'
import Header from '~/common/Header/index'
import { back } from '~/assets/constants'
import InfoDetailOrder from '~/common/InfoDetailOrder'
// import BottomButon from '~/common/BottomButon'

const OrderDetailPayment = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header
        title={'Chi tiết thanh toán'}
        leftAction={() => navigation.pop()}
        iconLeft={back}
      />
      <ScrollView style={styles.wrap}>
        <View style={styles.headSection}>
          <Text style={styles.titleSection}>Thông tin thanh toán</Text>
        </View>
        <View style={styles.bodySection}>
          <InfoDetailOrder
            label="Ngày thanh toán:"
            value="08:00, Thứ năm 12-02-2021"
          />
          <InfoDetailOrder
            label="Số lượng:"
            value="12 Sản phẩm"
          />
          <InfoDetailOrder
            label="Phương thức:"
            value="Chuyển khoản"
          />
          <InfoDetailOrder
            label="Trạng thái:"
            value="Đã thanh toán"
            styleValue={{
              color: '#4DDD8A',
            }}
          />
          <InfoDetailOrder
            label="Tổng tiền:"
            value="2.000.000 VNĐ"
            styleValue={{
              color: '#FF9900',
              fontSize: 14,
              
            }}
          />
        </View>

        <View style={styles.headSection}>
          <Text style={styles.titleSection}>Tài khoản thanh toán</Text>
        </View>
        <View style={styles.bodySection}>
          <InfoDetailOrder
            label="Loại tài khoản:"
            value="Ví DAP"
          />
          <InfoDetailOrder
            label="Số tài khoản:"
            value="0948 2523 4262 2462"
          />
          <InfoDetailOrder
            label="Chủ tài khoản:"
            value="Nguyễn Văn A"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: Dimensions.get('window').height - 160,
    backgroundColor: '#FFF',

    marginTop: 12,
  },
  headSection: {
    width: '100%',
    padding: 18,

    borderTopWidth: 1,
    borderColor: '#F5F5F5',
    borderStyle: 'solid',
  },
  titleSection: {
    fontSize: 14,
    
    color: '#595959',
  },
  bodySection: {
    paddingVertical: 9,

    borderTopWidth: 1,
    borderColor: '#F5F5F5',
    borderStyle: 'solid',
  },
})

export default OrderDetailPayment
