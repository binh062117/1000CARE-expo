import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Header from '~/common/Header/index'
import { getDistributorsActive, requestGetTrademarksAdvertisement } from '~/store/actions'
import Colors from '~/common/Colors/Colors'
import { back } from '~/assets/constants'
import { LoadingView } from '~/common'
import ItemDistributor from '~/common/ItemDistributor/index'
import { getListDistributors, getListTrademarksAdvertisement } from '~/store/selector'

const ListDistributorTrademark = ({ navigation, route }) => {
  // const [currentPage, setCurrentPage] = useState(1)
  const { title, type, onItemPress, distributorId } = route.params
  const [isLoading, setLoading] = useState(false)
  const listDistributors = useSelector(state => getListDistributors(state))
  const listTrademarksAdvertisement = useSelector(state => getListTrademarksAdvertisement(state))
  // const statuslistrademarks = useSelector(state => statusGetlistrademarks(state));

  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    // setCurrentPage(1)
    if (type === 'distributor') {
      dispatch(getDistributorsActive(0, 1, 10000, false))
    } else {
      dispatch(requestGetTrademarksAdvertisement(distributorId, 1, 1, 10000, false))
    }
  }, [type])

  // const loadMore = () => {
  //   if (getData().length >= currentPage*16 && !isLoading && statuslistrademarks != Status.LOADING) {
  //     setLoading(true)
  //     setCurrentPage(currentPage + 1)
  //     if (type === 'distributor') {
  //       dispatch(getDistributorsActive(0, currentPage + 1, 16, true))
  //     } else {
  //       dispatch(requestGetTrademarksAdvertisement(distributorId, 1, currentPage + 1, 16, true))
  //     }
  //   }
  // }

  const getData = useCallback(() => {
    if (type === 'distributor') {
      return listDistributors
    } else {
      return listTrademarksAdvertisement
    }
  }, [listDistributors, listTrademarksAdvertisement])

  useEffect(() => {
    setLoading(false)
  }, [listDistributors, listTrademarksAdvertisement])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        leftAction={()=> navigation.pop()}
        iconLeft={back}
        title={title}
        navigation={navigation}
        cart={false}
      />
      <View
        style={styles.wrap}
      >
        {listDistributors ? 
          <FlatList
            style={styles.listDistributors}
            contentContainerStyle={styles.distributors}
            data={getData()}
            numColumns={3}
            onEndReachedThreshold={0.1}
            // onEndReached={() => loadMore()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <ItemDistributor
                  onItemPress={() => {
                    navigation.pop()
                    if (onItemPress) {
                      onItemPress(item)
                    }
                  }}
                  data={item}
                />
              )
            }}
            keyExtractor={(_, idx) => idx.toString()}
          /> : null }
      </View>
      {isLoading && <LoadingView />}
    </SafeAreaView>
  )
}
export default ListDistributorTrademark

const styles = StyleSheet.create({
  listProductsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal: 9,
  },
  wrap: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    marginTop: 6,
    backgroundColor: Colors.backgroundColor,
  },
})