import React, { useCallback, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from '../../common'
import { NAVIGATION_TO_CART_SCREEN } from '~/navigation/routes'
import { useDispatch, useSelector } from 'react-redux'
import { getListItem } from '~/store/cart/cartSelectors'
import { getInfo } from '~/store/actions'
import { getAuthStore } from '~/store/selector'
import { showToast } from '~/utils/toast'
import strings from '~/i18n'

const CartHeaderButton = ({ navigation, color = '#4F4F4F' }) => {
  const listItem = useSelector((state) => getListItem(state))
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => getAuthStore(state))

  useEffect(() => {
    if (listItem === null && isLoggedIn) {
      dispatch(getInfo())
    }
  }, [listItem, isLoggedIn])

  const getNumberProducts = useCallback(() => {
    let number = 0
    if (!listItem || !listItem.items)
      return number
    listItem.items?.forEach(cd => {
      if (!cd.items)
        return
      cd.items.forEach(item => {
        number += item.items?.length
      })
    })
    return number
  }, [listItem])

  const onPress = () => {
    if (!isLoggedIn) {
      showToast(strings.common.requireLogin)
      return
    }
    navigation.navigate(NAVIGATION_TO_CART_SCREEN)
  }

  return (
    <TouchableOpacity
      onPress={() => onPress()}
    >
      <View style={styles.cartLayout}>
        <Icon
          type={'antdesign'}
          name={'shopping-cart'}
          color={color}
          size={25}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{getNumberProducts()}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  cartLayout: {
    width: 40,
    height: 30,
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#EB5757',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    color: '#FFFFFF',
  },

})

export default CartHeaderButton