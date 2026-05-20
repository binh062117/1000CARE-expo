import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '~/common/index'
import ItemInfoCustomer from './ItemInfoCustomer'
import styles from './styles'

const LegalInformation = ({ list, openModal }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.titleSection}>Thông tin pháp lý Cửa hàng</Text>
      <View style={styles.content}>
        <FlatList
          data={list}
          style={{}}
          contentContainerStyle={{}}
          renderItem={(item, index) => {
            return (
              <ItemInfoCustomer
                data={item}
                openCamera={(id) => openModal(id)}
              />
            )
          }}
        />
      </View>
    </View>
  )
}

export default LegalInformation