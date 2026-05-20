import React from 'react'
import { useState } from 'react'
import { View } from 'react-native'
import { Text, TextInput } from '~/common/index'
import RadioButtonGroup from '~/common/RadioButtonGroup/RadioButtonGroup'
import styles from './styles'
import { RELATIONSHIP_TYPE } from '~/constants/constants'

const UserInfo = ({ userInfo, setUserInfo }) => {
  const [show, setShow] = useState(!!userInfo)

  const onChange = (key, value) => {
    setUserInfo({
      ...userInfo,
      [key]: value,
    })
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textTitle}>Bạn đã có vợ/chồng?</Text>
      <View style={{ paddingVertical: 18 }}>
        <RadioButtonGroup 
          value={show}
          data={[
            {
              value: true,
              title: 'Có',
            },
            {
              value: false,
              title: 'Không',
            },
          ]}
          onDataChange={(item) => {
            if (item.value) {
              setUserInfo({ type: RELATIONSHIP_TYPE.Yokefellow, name: '', phone: '', email: '' })
            } else {
              setUserInfo(null)
            }
            setShow(item.value)
          }}
        />
      </View>
      {
        show && (
          <>
            <TextInput
              inputContainerStyle={styles.inputContainerStyle}
              labelStyle={styles.labelStyle}
              value={userInfo?.name}
              onChangeText={(value) => { 
                onChange('name', value)
              }}
              label={'Họ và tên'}
            />
            <TextInput
              inputContainerStyle={styles.inputContainerStyle}
              labelStyle={styles.labelStyle}
              value={userInfo?.identityCardNumber}
              onChangeText={(value) => { 
                onChange('identityCardNumber', value)
              }}
              label={'Số giấy tờ tùy thân'}
            />
            <TextInput
              inputContainerStyle={styles.inputContainerStyle}
              labelStyle={styles.labelStyle}
              keyboardType='numeric'
              value={userInfo?.phone}
              onChangeText={(value) => { 
                onChange('phone', value)
              }}
              label={'Số điện thoại'}
            />
            <TextInput
              inputContainerStyle={styles.inputContainerStyle}
              labelStyle={styles.labelStyle}
              value={userInfo?.email}
              onChangeText={(value) => { 
                onChange('email', value)
              }}
              label={'Email'}
            />
          </>
        )
      }
    </View>
  )
}

export default UserInfo