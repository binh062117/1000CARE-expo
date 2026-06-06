import React from 'react'
import { StyleSheet, TouchableOpacity, View, TextInput, Text, Platform } from 'react-native'
import CartHeaderButton from '~/common/CartHeaderButton/CartHeaderButton'
import { Icon } from '~/common'
import { NAVIGATION_TO_SEARCH } from '~/navigation/routes'
import Colors from '../Colors/Colors'

const CustomHeader = ({ navigation, search = true, title }) => {

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        {
          search && (
            <TouchableOpacity
              onPress={() => navigation.navigate(NAVIGATION_TO_SEARCH)}
              style={styles.searchContainer}
              activeOpacity={0.8}
            >
              <View style={styles.searchInner}>
                <Icon
                  type="antdesign"
                  name={'search'}
                  color={'#0B7B8A'}
                  size={18}
                />
                <Text style={styles.searchPlaceholder}>Nhập tên sản phẩm, nhà thuốc...</Text>
              </View>
            </TouchableOpacity>
          )
        }

        {
          title && !search && (
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
          )
        }
        <View style={styles.cartContainer}>
          <CartHeaderButton
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 10,
  },
  container: {
    width: '100%',
    height: 64,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flex: 1,
    height: 46,
    backgroundColor: '#F7FAFC',
    borderRadius: 23,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#EDF2F7',
    justifyContent: 'center',
    paddingHorizontal: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  searchInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchPlaceholder: {
    marginLeft: 10,
    fontSize: 14,
    color: '#A0AEC0',
    fontWeight: '500',
  },
  cartContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F7FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 20,
    color: '#1A202C',
    letterSpacing: -0.5,
  },
})