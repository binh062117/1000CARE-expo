import React from 'react'
import { Dimensions, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { Image } from '~/common/index'
import dropdown from '~/assets/configNeoMed/Wallet/dropdown.png'
const fullWith = Dimensions.get('window').width

const InfoPay = props => {
  const { code, money,textMethod,textInfo,textMoney } = props
  return(
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
    >
      <View style={styles.viewPay}>
        <Text style={styles.textPay}>{textMethod}</Text>
        <Text style={styles.textCode}>{textInfo}: {code}</Text>
      </View>
      <View style={styles.viewMoney}>
        <Text style={styles.textCode}>{textMoney}:</Text>
        <Text style={{ color: parseInt(money,10)>=0?'#4DDD8A':'red' }}>{money}</Text>
      </View>
      <TouchableOpacity style={styles.buttonRight}>
        <Image
          style={styles.styleImage}
          source={dropdown}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
export default InfoPay

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor:'white',
  },
  viewPay: {
    width: fullWith*0.55,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  textPay: {
    color: '#0095D9',
    fontSize: 14,
  },
  textCode: {
    color: '#8C8C8C',
  },
  viewMoney: {
    width: fullWith*0.3,
    paddingBottom: 10,
    paddingTop: 10,
  },
  styleImage: {
    height: 12,
    width: 8,
  },
  buttonRight: {
    justifyContent: 'center',
    alignItems: 'center',
    width: fullWith*0.15,
  },
})