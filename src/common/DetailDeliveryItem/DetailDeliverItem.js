import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { getTime } from '~/utils/date'

const colorStatus = ['#4DDD8A', '#FF9900']

const DetailDeliveryItem = ({ data, status }) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.wrapHour}>
        <Text style={[styles.hour, { color: colorStatus[status] }]}>
          {getTime(data.time,"HH:mm:ss DD/MM/YYYY")}
        </Text>
      </View>
      <View style={styles.wrapInfo}>
        <Text style={styles.title}>{data.sub_state_text}</Text>
        {/* <Text style={styles.date}>{getDateString(data.time)}</Text> */}
        <Text style={styles.date}>{data.time}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    backgroundColor: '#FFF',

    borderRightColor: '#F5F5F5',
    borderRightWidth: 1,
    borderStyle: 'solid',

    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 1,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  wrapHour: {
    width: 78,
    height: 78,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRightColor: '#EAEBF0',
    borderRightWidth: 1,
    borderStyle: 'solid',
  },
  hour: {
    fontSize: 14,
    color: '#0095D9',
  },
  wrapInfo: {
    width: Dimensions.get('window').width - 78,
    height: 78,

    padding: 18,
  },
  title: {
    fontSize: 14,
    color: '#595959',
  },
  date: {
    marginTop: 2,

    fontSize: 12,
    color: '#8C8C8C',
  },
})

export default DetailDeliveryItem
