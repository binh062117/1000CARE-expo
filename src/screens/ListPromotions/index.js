import React from 'react'
import { SafeAreaView, View, FlatList } from 'react-native'
import Header from '~/common/Header/index'
import { back } from '~/assets/constants'
import styles from './styles'
import { Text } from '~/common/index'
import PromotionInfo from '~/common/PromotionInfo/index'

const ListPromotions = ({ navigation, route }) => {
  const listPromotions = route?.params?.listPromotions
  console.log('listPromotions', listPromotions)
  return (
    <SafeAreaView
      style={styles.safeArea}
    >
      <Header 
        title={'Chương trình khuyến mãi'}
        leftAction={() => navigation.pop()}
        iconLeft={back}
      />
      <View 
        style={styles.mainContainer}
      >
        <FlatList 
          data={listPromotions}
          scrollEnabled={true}
          ListHeaderComponent={() => {
            return (
              <Text style={styles.title}>{`Danh sách khuyến mãi (${listPromotions?.length})`}</Text>
            )
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <PromotionInfo
                showLevelInfo={true}
                promotion={item}
              />
            )
          }}
          keyExtractor={(item) => {
            return item.id.toString()
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default ListPromotions