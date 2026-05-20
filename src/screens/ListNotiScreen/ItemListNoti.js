import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import Text from '~/common/Text/index'
import bell from '~/assets/icons/bell.png'
import styles from './styles'
import { getTime, convertBirth } from '~/utils'

const ItemListNoti = ({ item, index, onPress, isReadAll }) => {
  const [read, setRead] = useState(false)
  const data = JSON.parse(item.data)
  useEffect(() => {
    setRead(item?.is_read)
  },[item])

  return(
    <TouchableOpacity
      onPress={() => {
        onPress(data, item?.id, item?.is_read)
        setRead(true)
      }}
      style={styles.buttonItem(read, isReadAll)}
    >
      <View style={styles.viewBell}>
        <Image
          source={bell}
          style={styles.gift_fill}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.content}>
        <View style={{ maxHeight:130, overflow: 'hidden' }}>
          <Text
            numberOfLines={2}
            style={styles.title}
          >{item.title}</Text>
        </View>
        <View>
          <Text style={styles.textTime}>{getTime(data.StartTime)} {convertBirth(data.StartDate)}</Text>
          <Text
            numberOfLines={3}
            style={styles.textMessage}
          >{item.message}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default ItemListNoti