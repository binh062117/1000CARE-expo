import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Image } from '~/common/index'

const TitleDetailOrderBox = ({ urlIcon, title, route, navigation, params }) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.titleAndIcon}>
        <View style={styles.wrapIcon}>
          <Image
            style={styles.icon}
            source={urlIcon}
            tintColor="#0B7B8A"
          />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      {route ? (
        <TouchableOpacity
          style={styles.viewDetailButton}
          onPress={() => {
            navigation.navigate(route, params)
          }}
        >
          <Text style={styles.textViewDetailButton}>Xem chi tiết</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    backgroundColor: '#fff',

    paddingHorizontal: 18,
    paddingVertical: 12,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleAndIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapIcon: {
    width: 42,
    height: 42,
    backgroundColor: '#E5F4FB',

    borderRadius: 21,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    marginLeft: 12,

    fontSize: 14,
    fontFamily: '-Bold',
    color: '#595959',
  },
  viewDetailButton: {
    width: 100,
    height: 24,

    borderRadius: 12,
    borderColor: '#0B7B8A',
    borderStyle: 'solid',
    borderWidth: 1,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textViewDetailButton: {
    fontSize: 12,
    color: '#0B7B8A',
    lineHeight: 16,
  },
})

export default TitleDetailOrderBox
