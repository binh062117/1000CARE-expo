import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Image } from '~/common/index'
import {
  logoNeoMed,
} from '~/assets/constants'
import { Fonts } from '~/assets/config'
import { DIMENS } from '~/constants/index'
import Colors from '~/common/Colors/Colors'
const ItemDistributor = ({ data, onItemPress, selected }) => {
  let imageSource = {
    uri: data.logo || data.images,
  }
  if (!imageSource.uri) {
    imageSource = logoNeoMed
  }

  const isPending = data.status === 2 || data.distributor?.status === 2

  return (
    <TouchableOpacity
      onPress={() => {
        if (!isPending && onItemPress) {
          onItemPress()
        }
      }}
    >
      <View style={styles.container}>
        {
          isPending && (
            <View style={styles.overlay}>
              <Text
                style={styles.pending}
              >
                {'Coming soon'}
              </Text>
            </View>
          )
        }
        <Image
          style={styles.image}
          source={imageSource}
        />
        <Text
          style={styles.label}
        >
          {data.nick_name ? data.nick_name : data.name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const ItemWidth = (DIMENS.common.WINDOW_WIDTH - 5 * 6 - 12) / 3
const styles = StyleSheet.create({
  container: {
    width: ItemWidth,
    height: ItemWidth,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#F5F5F5',
    marginHorizontal: 5,
    marginBottom: 5,
  },
  label: {
    marginTop: 12,
    fontFamily: Fonts.bold,
    color: Colors.textColor2,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
  image: {
    width: ItemWidth - 24,
    height: 66 - 24,
    resizeMode: 'contain',
  },
  containerSelected: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.systemColor2,
  },
  check: {
    width: 18,
    height: 18,
    margin: 12,
    resizeMode: 'contain',
    position: 'absolute',
    right: '0%',
    bottom: '0%',
    top: '0%',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(114, 114, 114, 0.5)',
    position: 'absolute',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pending: {
    fontFamily: Fonts.bold,
    color: Colors.white,
  },
})
export default React.memo(ItemDistributor)