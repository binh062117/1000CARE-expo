import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import { Text } from '~/common/index'
import PromotionItem from '~/common/PromotionItem/index'

const Promotions = ( { navigation, promotionData, promotionProductIds }) => {
  if (!promotionData || promotionData.length === 0)
    return null
  return (
    <View style={styles.mainContainer}>
      <FlatList 
        data={promotionData}
        scrollEnabled={true}
        style={styles.listContainer}
        ListHeaderComponent={() => {
          return (
            <View style={styles.titleContainer}>
              <Text
                style={styles.title}
              >
                Khuyến mãi
              </Text>
            </View>
          )
        }}
        renderItem={({ item }) => {
          return (
            <PromotionItem
              promotion={item}
              mode={'order'}
              navigation={navigation}
              promotionProductIds={promotionProductIds}
            />
          )
        }}
        keyExtractor={(item) => {
          return item.id.toString()
        }}
      />
    </View>
  )
}

export default Promotions