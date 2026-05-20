import React from 'react'
import { View , StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from '~/common/index'
import {
  logoNeoMed, log_mb_bank_landscape,
} from '~/assets/constants'
import Colors from '../Colors/Colors'
import { DIMENS } from '~/constants/index'
import { back } from '~/assets/constants'

const ItemDistributorTab = ({ data, onItemPress, selected }) => {
  let imageSource = {
    uri: data.logo,
  }
  if (!data.logo && data.id == -1) {
    imageSource = logoNeoMed
  }
  if(!data.logo && data.id != -1) {
    imageSource = log_mb_bank_landscape
  }
  return (
    <TouchableOpacity
      onPress={onItemPress.bind(this, data)}
    >
      <View style={styles.container}>
        {/* <Image
          style={imageSource==log_mb_bank_landscape ? styles.imageMB : styles.image}
          source={imageSource}
        />
        { selected ? <View style={styles.selected} /> : null} */}
        <Image
          style={{width: 20, height: 20}}
          resizeMode={'contain'}
          source={back}
        />
      </View>
    </TouchableOpacity>
        
  )
}

const ItemWidth = DIMENS.common.WINDOW_WIDTH / 3.5
const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: ItemWidth - 20,
    height: 66 - 20,
    resizeMode: 'contain',
  },
  imageMB: {
    width: ItemWidth - 5,
    height: 46,
    resizeMode: 'contain',
  },
  selected: {
    position: 'absolute',
    bottom: 0,
    height: 4,
    width: ItemWidth,
    backgroundColor: Colors.systemColor2,
  },

})
export default React.memo(ItemDistributorTab)