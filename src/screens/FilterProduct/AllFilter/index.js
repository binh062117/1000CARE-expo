import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { back } from '~/assets/constants'
import _ from 'lodash'
import Colors from '~/common/Colors/Colors'
import Header from '~/common/Header/index'
import Group from '../Group'
import InputSearch from './InputSearch'
import { Button, Text } from '~/common/index'
import styles from './styles'

const AllFilter = ({ navigation, route }) => {
  const { clickItem, data, title = 'Nhà cung cấp', subTitle } = route.params
  const [listData, setListData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedItem, setSelectedItem] = useState({
    idx: -1, 
    item: null,
  })

  const ref_input = useRef()

  useEffect(() => {
    if (data) {
      console.log(data)
      setListData([...data])
    }
  }, [data])

  useEffect(() => {
    if (data) {
      if (!searchQuery || searchQuery ==='') {
        setListData([...data])
      } else {
        setListData([...data].filter((d) => 
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         d.nick_name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
         d.name_en?.toLowerCase().includes(searchQuery.toLowerCase())))
      }
    }
  }, [searchQuery])

  const searchTextChangeDelay = _.debounce((e)=>{
    console.log('searchTextChangeDelay', e)
    setSearchQuery(e)
  }, 10)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Header
        leftAction={() => navigation.pop()}
        iconLeft={back}
        title={'Tất cả ' + title}
        navigation={navigation}
        cart={false}
      />
      <InputSearch
        ref_input={ref_input}
        onChangeText={searchTextChangeDelay}
        textSearch={searchQuery}
        placeholder={'Nhập tên ' + title}
      />
      <View
        style={{
          marginHorizontal: 16,
          marginVertical: 12,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={styles.subTitle}
        >{subTitle}</Text>
        <Button
          text={'Áp dụng'}
          styleButton={{ 
            borderRadius: 50, 
            paddingVertical: 4,
          }}
          styleText={{ 
            fontSize: 14,
            fontWeight:'700',
          }}
          styleView={{
            paddingHorizontal: 0,
          }}
          onPressEvent={() => {
            if (clickItem) {
              console.log('selectedItem', selectedItem)
              clickItem(selectedItem.idx, selectedItem.item)
            }
            navigation.pop()
          }}
        />
      </View>
      <ScrollView style={{ backgroundColor: Colors.white, marginTop: 6 }}>
        <Group
          data={listData || []}
          showAll={true}
          isSelect={(idx, item) => {
            return selectedItem?.item === item
          }}
          clickItem={(idx, item) => {
            setSelectedItem({
              idx: data.findIndex((d) => d === item), 
              item,
            })
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
  
}

export default AllFilter
