import React from 'react'
import { SafeAreaView, FlatList, StyleSheet } from 'react-native'

import OrderProductItem from './OrderProductItem/index'
import SummarySection from './SummarySection'
import InfoDetailOrder from '~/common/InfoDetailOrder/index'
import Header from '~/common/Header/index'
import { back } from '~/assets/constants'
import { formatMoney } from '~/utils/format'
import Colors from '~/common/Colors/Colors'
import Promotions from './Promotions/index'

const orderPaymentMethod = {
  NEOW: 'Điểm mua hàng',
  COD: 'COD',
  MBW: 'Ngân hàng MB',
  Point: 'Điểm tích lũy',
  NEOWP: 'Điểm',
  VIETQR: 'Thanh toán qua VietQR',
}

const OrderProducts = ({ navigation, route }) => {
  const { order } = route.params

  return (
    <SafeAreaView
      style={{
        flex: 1,
        display: 'flex',
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <Header
        title={'Thông tin chi tiết đơn hàng'}
        leftAction={() => navigation.pop()}
        iconLeft={back}
      />
      <FlatList
        style={styles.wrapProducts}
        data={order?.items}
        horizontal={false}
        keyExtractor={(_, idx) => idx.toString()}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => {
          return (
            <Promotions
              navigation={navigation}
              promotionProductIds={order?.metadata?.promo_products || []}
              promotionData={order?.metadata?.promotions || []}
            />
          )
        }}
        renderItem={({ item }) => {
          return (
            <OrderProductItem
              item={item}
            />)
        }}
      />
      <SummarySection>
        {
          order?.payment_type !== 'NEOWP' && (
            <>
              {
                order?.total !== order?.total_sale && (
                  <>
                    <InfoDetailOrder
                      label="Tổng tiền hàng:"
                      value={formatMoney(order?.total, { unit: 'đ' })}
                      styleValue={{
                        color: Colors.priceColor,
                        fontSize: 14,
                      }}
                    />
                    {
                      order?.metadata?.voucher && (
                        <InfoDetailOrder
                          label="Voucher giảm giá:"
                          value={formatMoney(order?.metadata?.voucher?.discount, { unit: 'đ' })}
                          styleValue={{
                            color: Colors.priceColor,
                            fontSize: 14,
                          }}
                        />
                      )
                    }
                  </>
                )
              }
              <InfoDetailOrder
                label="Tổng tiền thanh toán:"
                value={formatMoney(order?.total_sale, { unit: 'đ' })}
                styleLabel={{
                  fontSize: 16,
                }}
                styleValue={{
                  color: Colors.priceColor,
                  fontSize: 16,
                }}
              />
            </>
          )
        }
        {
          order?.payment_type === 'NEOWP' && (
            <InfoDetailOrder
              label="Tổng điểm:"
              value={formatMoney(order?.total_sale, { unit: 'điểm' })}
              styleLabel={{
                fontSize: 16,
              }}
              styleValue={{
                color: Colors.red,
                fontSize: 16,
              }}
            />
          )
        }
        <InfoDetailOrder
          label="Phương thức:"
          styleLabel={{
            fontSize: 16,
          }}
          styleValue={{
            color: '#4DDD8A',
            fontSize: 16,
          }}
          value={orderPaymentMethod[order?.payment_type]}
        />
      </SummarySection>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapProducts: {
    width: '100%',
    marginTop: 6,
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
})

export default OrderProducts
