import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from '~/common/index'
import { avt_dafault } from '../../assets/constants'

const InformationUser = ({ user, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
    >
      <Image
        style={styles.avatar}
        source={user?.avatar_url && user?.avatar_url !== '' ? {
          uri: user?.avatar_url,
        }: avt_dafault}
        errorImage={avt_dafault}
      />
      <View style={styles.information}>
        <Text style={styles.fullName}>{user?.username}</Text>
        <Text style={styles.username}>{user?.mobile}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 18,
    backgroundColor: '#FFF',
    
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 64,
    flexShrink: 0,
  },
  information: {
    marginLeft: 12,
  },
  fullName: {
    
    fontSize: 16,
    fontWeight: '600',
    color: '#595959',
  },
  username: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '500',
    color: '#8C8C8C',
  },
})

export default InformationUser
