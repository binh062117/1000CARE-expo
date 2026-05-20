import React from 'react'
import { View } from 'react-native'
import ListRelationshipInfo from './ListRelationshipInfo/index'
import styles from './styles'
import UserInfo from './UserInfo/index'

const StepTwo = ({ userInfo, setUserInfo, listRelationShip, setListRelationShip }) => {
  return (
    <View style={styles.mainContainer}>
      <UserInfo
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
      <View style={styles.divider} />
      <ListRelationshipInfo
        listRelationShip={listRelationShip}
        setListRelationShip={setListRelationShip}
      />
    </View>
  )
}

export default StepTwo