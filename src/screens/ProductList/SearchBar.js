import React, { useState } from 'react'
import { View, TouchableOpacity, TextInput, StyleSheet, FlatList } from 'react-native'
import { Icon } from '~/common'
import Colors from '~/common/Colors/Colors'
import { Text } from '~/common/index'
import { NAVIGATION_FILTER_PRODUCT } from '~/navigation/routes'

const tabs = [
  { id: 1, name: 'Siêu rẻ', icon: true, iconName: 'star' },
  { id: 2, name: 'Khuyến mãi', icon: false, iconName: '' },
  { id: 3, name: 'Tất cả', icon: false, iconName: '' },
  // { id: 4, name: 'Lọc', icon: true, iconName: 'filter' },
]
const SearchBar = ({ navigation, type, viewMode, setViewMode, onLoad, query, distributorId, mode = 'supplier', onTabChange }) => {
  const [tabSelected, setTabSelected] = useState(0)

  const handleTabChanged = (tab, index) => {
    if (tab.id === 4) {
      navigation.navigate(NAVIGATION_FILTER_PRODUCT, {
        onLoad: onLoad,
        query,
        distributorId : type !== 'priceSock' ? distributorId : null,
        mode,
      })
    } else {
      setTabSelected(index)
      onTabChange(tab)
    }
  }
  return (
    <View
      style={styles.wrapperContainer}
    >
      {type === 'product_by_distributor' &&
      <View>
        <FlatList
          data={tabSelected !== 2 ? tabs.filter(i => i.id !== 4) : tabs}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={tabSelected === index ? styles.wrapperDisplayTabSelected : styles.wrapperDisplayTab}
                onPress={() => handleTabChanged(item, index)}
              >
                <Text style={styles.titleTab}>{item.name}</Text>
                {item.icon && 
                  <Icon
                    type="font-awesome"
                    name={item.iconName}
                    color={item.iconName === 'filter' ? Colors.systemColor2 : '#FFC700'}
                    size={24}
                  />}
              </TouchableOpacity>
            )
          }}
        />
      </View> }
      {type === 'priceSock' && 
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION_FILTER_PRODUCT, {
            onLoad: onLoad,
            query,
            distributorId : type !== 'priceSock' ? distributorId : null,
            mode,
          })}
          style={styles.searchContainer}
        >
          <View
            style={type=== 'priceSock' || type === 'product_by_distributor' ? styles.wrapperInputSearch : { width:'100%' }}
          >
            <View
              style={styles.wrapperTextInput}
            >
              <Icon
                type="font-awesome"
                name={'filter'}
                color={Colors.systemColor2}
                size={17}
              />
              <TextInput
                style={styles.searchInput}
                editable={false}
                placeholder={'Lọc theo giá, nhóm sản phẩm'}
              />
            </View>
          </View>
          <Icon
            type="ionicon"
            name={'filter'}
            color={'#586B90'}
            size={24}
          />
        </TouchableOpacity>}
      {
        (type === 'priceSock' || type === 'product_by_distributor') && (
          <TouchableOpacity
            style={styles.wrapperDisplayIcon}
            onPress={() => {
              if (viewMode === 'list') {
                setViewMode('grid')
              } else {
                setViewMode('list')
              }
            }}
          >
            {
              viewMode === 'list' ? (
                <Icon
                  type="ionicon"
                  name={'ios-grid'}
                  color={Colors.textColor3}
                  size={28}
                />
              ) : (
                <Icon
                  type="font-awesome-5"
                  name={'list-ul'}
                  color={Colors.textColor3}
                  size={28}
                />
              )
            }
          </TouchableOpacity>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  titleTab:  { 
    marginTop: 4,
    fontWeight: '600',
    marginRight: 2,
  },
  titleTabSelected: {
    marginTop: 4,
    marginRight: 2,
    fontWeight: '700',
    color: Colors.colorMain,
  },
  wrapperInputSearch: { 
    width:'80%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperContainer: {
    backgroundColor: Colors.white,
    marginTop: 4,
    display: 'flex',
    flexDirection:'row',
    width: '100%',
    justifyContent:'space-around',
  },
  wrapperTextInput: {
    alignItems: 'center',
    flexDirection:'row',
    height: 36,
    paddingHorizontal: 12,
  },
  iconFilter: {
    marginRight: 0,
  },
  wrapperDisplayTab: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D0D5E7',
    paddingVertical: 4,
    paddingHorizontal: 7,
    marginVertical: 6,
    marginHorizontal: 3,
    borderRadius: 6,
  },
  wrapperDisplayTabSelected: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.colorMain,
    paddingVertical: 4,
    paddingHorizontal: 7,
    marginVertical: 6,
    marginHorizontal: 3,
    borderRadius: 6,
  },
  wrapperDisplayIcon: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D0D5E7',
    paddingVertical: 4,
    paddingHorizontal: 5,
    marginVertical: 6,
    marginHorizontal: 3,
    borderRadius: 6,
  },
  searchInput:{
    marginLeft: 8,
    fontSize: 12,
  },
  searchContainer:{
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 149, 217, 0.05)',
    marginHorizontal: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
    borderRadius: 6,
    height: 40,
  },
  searchWithIconContainer: {
    flex: 1,
  },
})

export default SearchBar