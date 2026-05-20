import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, FlatList, View, TouchableOpacity, SectionList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

import SearchBar from './SearchBar'
import { getSelectedDistri, getAuthStore } from '~/store/selector'
import { LoadingView, Text } from '~/common/index'
import ProductItem from '~/common/ProductItem/ProductItem'
import Colors from '~/common/Colors/Colors'
import EmptyItem from '~/common/EmptyItem/index'
import { searchProducts, searchDistributors, searchPharmacies } from '~/services/meilisearch'

const SEARCH_TABS = {
  ALL: 0,
  PRODUCT: 1,
  DISTRIBUTOR: 2,
  PHARMACY: 3,
}

const Search = ({ navigation }) => {
  const [tab, setTab] = useState(SEARCH_TABS.PRODUCT)
  const [textSearch, setTextSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const ref_input = useRef()

  const [productResults, setProductResults] = useState([])
  const [distributorResults, setDistributorResults] = useState([])
  const [pharmacyResults, setPharmacyResults] = useState([])

  const currentDistri = useSelector(state => getSelectedDistri(state))
  const { isLoggedIn } = useSelector(state => getAuthStore(state))

  const keyExtractorProduct = useCallback((_, idx) => {
    return idx.toString()
  }, [])

  useEffect(() => {
    ref_input.current?.focus()
  }, [])

  const performSearch = async (query, searchTab) => {
    if (!query || query.trim() === '') {
      setProductResults([])
      setDistributorResults([])
      setPharmacyResults([])
      return
    }

    setIsLoading(true)
    try {
      switch (searchTab) {
        case SEARCH_TABS.PRODUCT:
          const productRes = await searchProducts(query, { limit: 50 })
          setProductResults(productRes.hits || [])
          break
        case SEARCH_TABS.DISTRIBUTOR:
          const distRes = await searchDistributors(query, { limit: 50 })
          setDistributorResults(distRes.hits || [])
          break
        case SEARCH_TABS.PHARMACY:
          const pharmaRes = await searchPharmacies(query, { limit: 50 })
          setPharmacyResults(pharmaRes.hits || [])
          break
        case SEARCH_TABS.ALL:
          const [products, distributors, pharmacies] = await Promise.all([
            searchProducts(query, { limit: 20 }),
            searchDistributors(query, { limit: 20 }),
            searchPharmacies(query, { limit: 20 }),
          ])
          setProductResults(products.hits || [])
          setDistributorResults(distributors.hits || [])
          setPharmacyResults(pharmacies.hits || [])
          break
      }
    } catch (error) {
      console.error('Meilisearch error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const debouncedSearch = useCallback(
    _.debounce((query, searchTab) => {
      performSearch(query, searchTab)
    }, 300),
    []
  )

  const onBack = () => {
    navigation.pop()
  }

  const onChangeText = (text) => {
    setTextSearch(text)
    debouncedSearch(text, tab)
  }

  const onTabChange = (newTab) => {
    setTab(newTab)
    if (textSearch) {
      performSearch(textSearch, newTab)
    }
  }

  const renderDistributorItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('DistributorDetail', { distributor: item })}
    >
      <Text style={styles.listItemTitle}>{item.name || item.nick_name || 'N/A'}</Text>
      <Text style={styles.listItemSubtitle}>{item.address || ''}</Text>
    </TouchableOpacity>
  )

  const renderPharmacyItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('PharmacyDetail', { pharmacy: item })}
    >
      <Text style={styles.listItemTitle}>{item.name || item.pharmacy_name || 'N/A'}</Text>
      <Text style={styles.listItemSubtitle}>{item.address || ''}</Text>
    </TouchableOpacity>
  )

  const getSectionData = () => {
    const sections = []
    if (productResults.length > 0) {
      sections.push({ title: 'Sản phẩm', data: productResults, type: 'product' })
    }
    if (distributorResults.length > 0) {
      sections.push({ title: 'Nhà phân phối', data: distributorResults, type: 'distributor' })
    }
    if (pharmacyResults.length > 0) {
      sections.push({ title: 'Nhà thuốc', data: pharmacyResults, type: 'pharmacy' })
    }
    return sections
  }

  const renderSectionItem = ({ item, section }) => {
    switch (section.type) {
      case 'product':
        return (
          <ProductItem
            navigation={navigation}
            data={item}
            distributorId={item?.distributor_id}
            type={2}
          />
        )
      case 'distributor':
        return renderDistributorItem({ item })
      case 'pharmacy':
        return renderPharmacyItem({ item })
      default:
        return null
    }
  }

  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='rgba(53, 108, 233, 0.85)' />
      <SearchBar
        ref_input={ref_input}
        navigation={navigation}
        onBack={() => onBack()}
        onChangeText={(text) => onChangeText(text)}
        idSearchDistri={-1}
        textSearch={textSearch}
      />

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, tab === SEARCH_TABS.PRODUCT && styles.tabButtonActive]}
          onPress={() => onTabChange(SEARCH_TABS.PRODUCT)}
        >
          <Text style={[styles.tabText, tab === SEARCH_TABS.PRODUCT && styles.tabTextActive]}>Sản phẩm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, tab === SEARCH_TABS.DISTRIBUTOR && styles.tabButtonActive]}
          onPress={() => onTabChange(SEARCH_TABS.DISTRIBUTOR)}
        >
          <Text style={[styles.tabText, tab === SEARCH_TABS.DISTRIBUTOR && styles.tabTextActive]}>Nhà phân phối</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, tab === SEARCH_TABS.PHARMACY && styles.tabButtonActive]}
          onPress={() => onTabChange(SEARCH_TABS.PHARMACY)}
        >
          <Text style={[styles.tabText, tab === SEARCH_TABS.PHARMACY && styles.tabTextActive]}>Nhà thuốc</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, tab === SEARCH_TABS.ALL && styles.tabButtonActive]}
          onPress={() => onTabChange(SEARCH_TABS.ALL)}
        >
          <Text style={[styles.tabText, tab === SEARCH_TABS.ALL && styles.tabTextActive]}>Tất cả</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? <LoadingView /> : null}

      <View style={styles.wrap}>
        {tab === SEARCH_TABS.PRODUCT && (
          <FlatList
            numColumns={2}
            contentContainerStyle={styles.listProductsContainer}
            data={productResults}
            keyExtractor={keyExtractorProduct}
            renderItem={({ item }) => (
              <ProductItem
                navigation={navigation}
                data={item}
                distributorId={item?.distributor_id}
                type={2}
              />
            )}
            ListEmptyComponent={() => (
              <EmptyItem text="Không có sản phẩm nào" />
            )}
          />
        )}

        {tab === SEARCH_TABS.DISTRIBUTOR && (
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={distributorResults}
            keyExtractor={keyExtractorProduct}
            renderItem={renderDistributorItem}
            ListEmptyComponent={() => (
              <EmptyItem text="Không có nhà phân phối nào" />
            )}
          />
        )}

        {tab === SEARCH_TABS.PHARMACY && (
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={pharmacyResults}
            keyExtractor={keyExtractorProduct}
            renderItem={renderPharmacyItem}
            ListEmptyComponent={() => (
              <EmptyItem text="Không có nhà thuốc nào" />
            )}
          />
        )}

        {tab === SEARCH_TABS.ALL && (
          <SectionList
            sections={getSectionData()}
            keyExtractor={keyExtractorProduct}
            renderItem={renderSectionItem}
            renderSectionHeader={renderSectionHeader}
            ListEmptyComponent={() => (
              <EmptyItem text="Không có kết quả nào" />
            )}
            stickySectionHeadersEnabled={false}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listProductsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  wrap: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabButtonActive: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.colorMain,
  },
  tabText: {
    fontSize: 13,
    color: Colors.textColor3,
  },
  tabTextActive: {
    fontWeight: 'bold',
    color: Colors.colorMain,
  },
  listItem: {
    backgroundColor: Colors.white,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  listItemTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.textColor3,
    marginBottom: 4,
  },
  listItemSubtitle: {
    fontSize: 13,
    color: '#888',
  },
  sectionHeader: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.colorMain,
  },
})

export default Search
