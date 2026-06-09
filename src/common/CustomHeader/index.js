import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import CartHeaderButton from '~/common/CartHeaderButton/CartHeaderButton'
import { Icon } from '~/common'
import { NAVIGATION_TO_SEARCH } from '~/navigation/routes'
import { s, fs } from '~/utils/responsive'
import { brandColors, brandShadow } from '~/design-system/tokens'

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
                  color={brandColors.tealPrimary}
                  size={s(18)}
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
    backgroundColor: brandColors.surface,
    paddingBottom: s(10),
  },
  container: {
    width: '100%',
    height: s(68),
    paddingHorizontal: s(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: brandColors.surface,
  },
  searchContainer: {
    flex: 1,
    height: s(48),
    backgroundColor: brandColors.background,
    borderRadius: s(16),
    marginRight: s(12),
    borderWidth: 1,
    borderColor: brandColors.borderSoft,
    justifyContent: 'center',
    paddingHorizontal: s(16),
    ...brandShadow.soft,
  },
  searchInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchPlaceholder: {
    marginLeft: s(10),
    fontSize: fs(14),
    color: brandColors.mutedLight,
    fontWeight: '500',
  },
  cartContainer: {
    width: s(48),
    height: s(48),
    borderRadius: s(16),
    backgroundColor: brandColors.tealLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: fs(20),
    color: brandColors.textDark,
    letterSpacing: 0,
  },
})
