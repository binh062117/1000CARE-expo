import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Image } from '~/common/index'
import strings from '~/i18n'
import { NAVIGATION_PHONE_VERIFY, NAVIGATION_TO_LOGIN_SCREEN } from '~/navigation/routes'
import { user } from '../../assets/constants'

const NoAuth = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.notification}>
        <Image
          style={styles.imageNotification}
          source={user}
        />
        <Text style={styles.textNotification}>
          {strings.profileScreen.noAuth.title}
        </Text>
      </View>
      <View style={styles.btnGroup}>
        <TouchableOpacity
          style={styles.btnSignIn}
          onPress={() => navigation.navigate(NAVIGATION_TO_LOGIN_SCREEN)}
        >
          <Text style={styles.textSignIn}>{strings.profileScreen.noAuth.login}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.btnSignUp}
          onPress={() => navigation.navigate(NAVIGATION_PHONE_VERIFY, { title: strings.profileScreen.noAuth.register') })}
        >
          <Text style={styles.textSignUp}>{strings.profileScreen.noAuth.register')}</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 18,
    backgroundColor: '#fff',
  },
  notification: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageNotification: {
    width: 18,
    height: 18,
  },
  textNotification: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: '300',
    color: '#8C8C8C',

  },
  btnGroup: {
    marginTop: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnSignIn: {
    width: 122,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#0B7B8A',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSignIn: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  btnSignUp: {
    marginLeft: 12,
    width: 122,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFF',

    borderColor: '#0B7B8A',
    borderWidth: 1,
    borderStyle: 'solid',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSignUp: {
    color: '#0B7B8A',
    fontSize: 14,
    fontWeight: '600',
  },
})

export default NoAuth
