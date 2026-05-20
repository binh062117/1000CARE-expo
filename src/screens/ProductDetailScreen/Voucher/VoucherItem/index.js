import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { Image } from '~/common/index'
import { getDateString } from '~/utils/date'
import { formatMoneyString } from '~/utils/format'
import styles from './styles'

const VoucherItem = ({ data, type, onClick, listVoucherExpired, orgDistributorId }) => {
  const [hidden,setHidden] = useState(true)
  
  const element = {
    'assigned': (
      <View>
        {
          !data.is_valid && data?.order_limit ? (
            <Text style={styles.textSaleOff}>{`Đơn tối thiêu ${formatMoneyString(data?.order_limit)}`}</Text>
          ): null
        }
        <Text style={styles.timeVoucher}>{`HSD: ${getDateString(data?.end_date, 'DD/MM/yyyy')}`}</Text>
      </View>
    ),
  }

  useEffect(() => {
    if(listVoucherExpired.length != 0) {
      for(const value of listVoucherExpired){
        if(Object.values(value) == data?.id && (Object.keys(value)[0] != orgDistributorId)){
          setHidden(false)
          return
        } else {
          setHidden(true)
        }
      }
    }
  },[data])

  if(hidden) {
    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.imageVoucher}
          source={data?.campaign?.images ? { uri: data?.campaign?.images } : require('~/assets/image_voucher/voucher.jpg')}
          resizeMode={'contain'}
        />
        {
          type === 'canUse' && !data.is_valid && <View style={styles.overlay} />
        }
        <View style={styles.infoVoucher}>
          <Text
            style={styles.titleVoucher}
            numberOfLines={2}
            ellipsizeMode='tail'
          >
            {data?.name}
          </Text>
          {
          data?.campaign && data?.campaign?.distributor && (data?.campaign?.distributor?.nick_name !== '' || data?.campaign?.distributor?.name !== '') && (
              <Text
                style={styles.distributorName}
                numberOfLines={2}
                ellipsizeMode='tail'
              >
              NCC: {data?.campaign?.distributor?.nick_name ? data?.campaign?.distributor?.nick_name : data?.campaign?.distributor?.name}
              </Text>
            )
          }
          {
            element[type]
          }
        </View>
      </View>
    )}else{
    return null
  }
}

export default VoucherItem
