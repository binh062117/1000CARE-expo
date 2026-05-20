import React from 'react'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Image, Icon } from '~/common/index'
import { user } from '~/assets/constants'
import strings from '~/i18n'
import { getListNoti } from '~/store/actions'
import { useDispatch } from 'react-redux'

const MenuItem = ({ data, navigation, isLoggedIn, onShowMessage, lengthNotiNonRead }) => {
  const dispatch = useDispatch()
  const getListNotiAll = () => {
    dispatch(getListNoti(10, 1, false))
  }
  return (
    <TouchableOpacity
      onPress={() => {
        if (!data.isClickAvailable) {
          return
        }
        if (!isLoggedIn) {
          onShowMessage(strings.common.requireLogin)
          return
        }
        if (data.text == strings.profileScreen.notification) {
          getListNotiAll()
        }
        if (data.routePath !== '') {
          if (data.onPress)
            data.onPress()
          navigation.push(data.routePath)
        } else if (data.onPress) {
          data.onPress()
        } else {
          onShowMessage('Feature is developping')
        }
      }}
    >
      <View style={styles.wrapper}>
        <View style={[styles.wrapperIcon, { backgroundColor: data.background }]}>
          {
            data.icon1 ?
              <Icon
                size={24}
                name={data.icon1}
                type={data.type}
                color={data.colorIcon}
              />
              :
              <Image
                style={styles.icon}
                source={data.icon}
                errorImage={user}
                tintColor={data.colorIcon}
              />
          }
          {data.text == strings.profileScreen.notification && lengthNotiNonRead != 0 ?
            <View style={styles.viewNonNoti}>
              <Text style={{ color: 'white', fontSize: 10 }}>{lengthNotiNonRead >= 100 ? '99+' : lengthNotiNonRead}</Text>
            </View>
            : undefined
          }
        </View>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: '#FFF',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperIcon: {
    width: 42,
    height: 42,
    borderRadius: 42,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    marginLeft: 12,
    fontSize: 14,
    color: '#595959',
    fontWeight: '500',
  },
  viewNonNoti: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 30,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MenuItem
