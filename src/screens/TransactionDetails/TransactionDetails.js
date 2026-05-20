import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from '~/common/index'
import Header from '~/common/Header/index'
import { back } from '~/assets/constants'
import strings from '~/i18n'
import { successPay } from '~/assets/constants'
import Colors from '~/common/Colors/Colors'
const data = [
  { name: 'Dịch vụ', value: 'Nạp tiền' }, { name: 'Phí giao dịch', value: 'Miễn phí' },
  { name: 'Thời gian', value: '12/2/2021 08:07:45' }, { name: 'Mã giao dịch', value: 'CODE-275612891' },
]

const TransactionDetails = props => {
  const renderList = data.map((item, index) => {
    return (
      <View
        key={index}
        style={styles.viewDetail}
      >
        <Text style={styles.textDetail}>{item.name}</Text>
        <Text style={styles.textValue}>{item.value}</Text>
      </View>
    )
  })
  return (
    <View>
      <Header
        title={strings.TransactionDetails.titleRecharge}
        leftAction={() => props.navigation.pop()}
        iconLeft={back}
      />
      <View style={styles.containerInfo}>
        <View style={styles.bigCircle}>
          <View style={styles.smallCircle}>
            <Image
              resizeMode={'contain'}
              source={successPay}
            />
          </View>
        </View>
        <Text style={styles.textNumber}><Text style={styles.number}>+200.000</Text>VND</Text>
        <Text style={styles.textRecharge}>Nạp tiền vào tải khoản NEO</Text>
      </View>
      <View style={styles.containerDetail}>
        {renderList}
      </View>
    </View>
  )
}
export default TransactionDetails

const styles = StyleSheet.create({
  bigCircle: {
    backgroundColor: 'rgba(77, 221, 138, 0.5)',
    borderRadius: 100,
    height: 100,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  smallCircle: {
    backgroundColor: '#4DDD8A',
    borderRadius: 80,
    height: 80,
    width: 80,
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInfo: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
  },
  textNumber: {
    color: '#8C8C8C',
    fontSize: 12,
  },
  number: {
    color: '#595959',
    fontSize: 24,
  },
  textRecharge: {
    color: '#8C8C8C',
    marginTop: 20,
    marginBottom: 10,
  },
  viewDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  containerDetail: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 20,
    paddingBottom: 30,
  },
  textDetail: {
    color: '#8C8C8C',
    fontSize: 15,
  },
  textValue: {
    color: '#595959',
    fontSize: 15,
  },
})