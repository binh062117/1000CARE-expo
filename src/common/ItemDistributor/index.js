import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Image } from '~/common/index'
import { logoNeoMed } from '~/assets/constants'
import { DIMENS } from '~/constants/index'
import { s, fs } from '~/utils/responsive'

const ItemDistributor = ({ data, onItemPress, selected }) => {
  let imageSource = { uri: data.logo || data.images }
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
      activeOpacity={0.8}
    >
      <View style={[styles.container, selected && styles.containerSelected, isPending && styles.containerPending]}>
        {isPending && (
          <View style={styles.overlay}>
            <Text style={styles.pending}>{'Sắp ra mắt'}</Text>
          </View>
        )}
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={imageSource}
            resizeMode="contain"
          />
        </View>
        <Text style={[styles.label, selected && styles.labelSelected]} numberOfLines={2}>
          {data.nick_name ? data.nick_name : data.name}
        </Text>
        {selected && <View style={styles.activeIndicator} />}
      </View>
    </TouchableOpacity>
  )
}

const ItemWidth = (DIMENS.common.WINDOW_WIDTH - 5 * 6 - 12) / 3

const styles = StyleSheet.create({
  container: {
    width: ItemWidth,
    minHeight: ItemWidth * 0.9,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(16),
    marginHorizontal: s(5),
    marginBottom: s(8),
    paddingVertical: s(12),
    paddingHorizontal: s(6),
    borderWidth: 1.5,
    borderColor: '#EDF2F7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  containerSelected: {
    borderColor: '#0B7B8A',
    backgroundColor: '#F0FAFA',
    shadowColor: '#0B7B8A',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  containerPending: {
    opacity: 0.7,
  },
  imageWrapper: {
    width: s(52),
    height: s(52),
    borderRadius: s(12),
    backgroundColor: '#F7FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: s(8),
  },
  image: {
    width: s(40),
    height: s(40),
    resizeMode: 'contain',
  },
  label: {
    fontSize: fs(11),
    color: '#4A5568',
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: s(16),
    marginHorizontal: s(2),
  },
  labelSelected: {
    color: '#0B7B8A',
    fontWeight: '700',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: s(3),
    backgroundColor: '#0B7B8A',
    borderBottomLeftRadius: s(16),
    borderBottomRightRadius: s(16),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(11, 123, 138, 0.6)',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(16),
  },
  pending: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: fs(10),
    textAlign: 'center',
    paddingHorizontal: s(4),
  },
})

export default React.memo(ItemDistributor)