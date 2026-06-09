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
import { s, fs } from '~/utils/responsive'
import { brandColors } from '~/design-system/tokens'

const CartHeaderButton = ({ navigation, color = brandColors.tealPrimary }) => {
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
          size={s(24)}
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
    width: s(40),
    height: s(34),
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -s(6),
    right: -s(6),
    minWidth: s(22),
    height: s(22),
    borderRadius: s(11),
    paddingHorizontal: s(4),
    backgroundColor: brandColors.danger,
    borderWidth: 2,
    borderColor: brandColors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: brandColors.danger,
    shadowOffset: { width: 0, height: s(2) },
    shadowOpacity: 0.15,
    shadowRadius: s(3),
    elevation: 2,
  },
  badgeText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: fs(10),
    color: brandColors.surface,
    fontWeight: '800',
  },

})

export default CartHeaderButton
