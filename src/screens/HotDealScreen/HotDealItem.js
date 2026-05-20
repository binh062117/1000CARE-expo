import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'
import { Image } from '~/common/index'
import dimens from '~/constants/dimens'
import { DIMENS } from '~/constants/index'

const HotDealItem = ({ data, onClick }) => {
  const isPending = data.distributor?.status === 2
  return (
    <TouchableOpacity
      style={styles.wrap}
      onPress={() => {
        if (!isPending && onClick) {
          onClick(data)
        }
      }}
    >
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
        source={{ uri: data.images }}
        resizeMode={'stretch'}
        heightImage={Number(1.5 * DIMENS.common.WINDOW_WIDTH * 2 / 3).toFixed(0)}
        widthImage={Number(1.5 * DIMENS.common.WINDOW_WIDTH).toFixed(0)}
      />
      {
        !isPending && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => onClick(data)}
          >
            {data?.banner_type == 1
              ? <Text style={styles.textButton}>Đặt ngay</Text>
              : data?.banner_type == 2 ? <Text style={styles.textButton}>Nạp tiền</Text>
                : <Text style={styles.textButton}>Xem chi tiết</Text>
            }
          </TouchableOpacity>
        )
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: dimens.common.WINDOW_WIDTH - 10,
    height: (dimens.common.WINDOW_WIDTH - 10) * 0.5,
    backgroundColor: 'white',
    marginTop: 12,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    width: 150,
    height: 36,
    backgroundColor: '#0095D9',

    borderRadius: 18,

    shadowColor: '#10FAFB',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,

    position: 'absolute',
    zIndex: 9,
    right: 18,
    bottom: 18,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 14,
    lineHeight: 16,
    color: '#FFF',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(114, 114, 114, 0.5)',
    position: 'absolute',
    zIndex: 999999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pending: {
    fontFamily: Fonts.bold,
    textAlign: 'center',
    color: Colors.white,
  },
})

export default HotDealItem
