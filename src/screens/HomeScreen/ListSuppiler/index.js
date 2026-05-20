import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getSupplierByDistributor } from '~/store/actions'
import { getListSuppliers } from '~/store/selector'
import ItemSupplier from './ItemSupplier'

import styles from './styles'

const SupplierDefault = {
  id: -1,
  display_name: 'Tất cả sản phẩm',
  name: 'Tất cả sản phẩm',
  logo: 'https://storage.googleapis.com/neomed.vn/images/categories/icon/icon1.svg', 
}

const ListSuppiler = ({ selectedDistri, selectedSupplier, setSelectedSupplier }) => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const listSupplier = useSelector(state => getListSuppliers(state))

  useEffect(() => {
    setCurrentPage(1)
    if (selectedDistri != null) {
      dispatch(getSupplierByDistributor(selectedDistri.id, 1, 10, false))
    }
  }, [selectedDistri])

  useEffect(() => {
    if (selectedDistri != null && currentPage > 1) {
      dispatch(getSupplierByDistributor(selectedDistri.id, currentPage, 10, currentPage > 1))
    }
  }, [currentPage, selectedDistri])

  const onSupplierPress = (item) => {
    onSupplierChange(item)
  }

  const onSupplierChange = (item) => {
    setSelectedSupplier(item)
  }

  useEffect(() => {
    if (listSupplier != null && listSupplier.length > 0) {
      if (!selectedDistri?.type) {
        onSupplierChange(SupplierDefault)
      } else {
        onSupplierChange(listSupplier[0])
      }
    }
  }, [listSupplier])

  const keyExtractorSupplier = useCallback((item) => {
    return item.id.toString()
  })
  if (!listSupplier) {
    return <></>
  }

  const loadMore = () => {
    if (listSupplier.length >= 10) {
      setCurrentPage(currentPage + 1)
    }
  }

  if (!selectedDistri?.type) {
    return (
      <FlatList
        style={styles.listSupplierColumn}
        data={listSupplier}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.itemSeparator} />
          )
        }}
        ListHeaderComponent={() => {
          return (
            <ItemSupplier
              onItemPress={onSupplierPress.bind(this, SupplierDefault)}
              selected={SupplierDefault?.id === selectedSupplier?.id}
              data={{ ...SupplierDefault, distributor: selectedDistri }}
              type={selectedDistri?.type}
            />
          )
        }}
        ListFooterComponent={() => {
          return (
            <View style={styles.itemSeparator} />
          )
        }}
        onEndReached={() => loadMore()}
        renderItem={({ item }) => {
          return (
            <ItemSupplier
              onItemPress={onSupplierPress.bind(this, item)}
              selected={item === selectedSupplier}
              data={{ ...item, distributor: selectedDistri }}
              type={selectedDistri?.type}
            />
          )
        }}
        keyExtractor={keyExtractorSupplier}
      />
    )
  }

  return (
    <FlatList
      style={styles.listSupplier}
      contentContainerStyle={styles.categories}
      data={listSupplier}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      onEndReachedThreshold={0.1}
      onEndReached={() => loadMore()}
      renderItem={({ item }) => {
        return (
          <ItemSupplier
            onItemPress={onSupplierPress.bind(this, item)}
            selected={item === selectedSupplier}
            data={item}
            type={selectedDistri?.type}
          />
        )
      }}
      keyExtractor={keyExtractorSupplier}
    />
  )
}

export default ListSuppiler