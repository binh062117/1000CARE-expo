import React from 'react'

import { StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from '~/common/index'

const DistributorItem = ({ data, selected, changeDistrinutor }) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, { borderColor: selected ? '#0095D9' : '#FFF' }]}
      onPress={() => changeDistrinutor(data.id)}
    >
      <Image
        style={styles.image}
        source={data.urlImage}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 66,
    backgroundColor: '#FFF',

    paddingHorizontal: 8,
    paddingVertical: 8,

    borderBottomWidth: 4,
    borderStyle: 'solid',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
})

export default DistributorItem
