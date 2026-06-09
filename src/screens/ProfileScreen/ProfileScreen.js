import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { getProfile, getListNoti } from '~/store/actions'
import { getAuthStore, getUser, isGetListNotiNonRead } from '~/store/selector'
import InformationUser from './InformationUser'
import MenuUser from './MenuUser'
import NoAuth from './NoAuth'
import ErrorView from '~/common/ErrorView/index'
import { check_info } from '~/assets/constants'
import { brandColors } from '~/design-system/tokens'
import { s } from '~/utils/responsive'

const ProfileScreen = props => {
  const [openMessage, setOpenMessage] = useState(false)
  const [message, setMessage] = useState('')

  const { isLoggedIn } = useSelector(state => getAuthStore(state))
  const listNotiNonRead = useSelector(state => isGetListNotiNonRead(state))

  const dispatch = useDispatch()
  const user = useSelector(state => getUser(state))

  useEffect(() => {
    dispatch(getProfile())
    dispatch(getListNoti(0, 1, false, 0))
  }, [])

  const onShowMessage = (msg) => {
    setMessage(msg)
    setOpenMessage(true)
    setTimeout(() => {
      setOpenMessage(false)
    }, 2000)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: brandColors.background }}>
    <ScrollView
      style={{ backgroundColor: brandColors.background }}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: s(112) }}
    >
      {
        isLoggedIn ? (
          <InformationUser
            navigation={props.navigation}
            user={user}
          />
        ) :
          (
            <NoAuth navigation={props.navigation} />
          )
      }
      <MenuUser
        onShowMessage={(msg) => onShowMessage(msg)}
        navigation={props.navigation}
        listNotiNonRead={listNotiNonRead}
      />
      <ErrorView
        error={message}
        isOpen={openMessage}
        icon={check_info}
        onClose={() => setOpenMessage(false)}
      />
    </ScrollView>
    </SafeAreaView>
  )
}
export default ProfileScreen
