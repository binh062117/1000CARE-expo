import { StyleSheet } from 'react-native'
import { fs } from '~/utils/responsive'
import { brandColors } from '~/design-system/tokens'

export default StyleSheet.create({
  body: {
    fontSize: fs(14),
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: fs(21),
    color: brandColors.muted,
  },
  title1: {
    fontSize: fs(28),
    fontWeight: '800',
    lineHeight: fs(34),
    color: brandColors.textDark,
  },
  title2: {
    fontSize: fs(18),
    fontWeight: '800',
    lineHeight: fs(24),
    color: brandColors.textDark,
  },
  caption: {
    fontSize: fs(11),
    fontWeight: '700',
    lineHeight: fs(15),
    color: brandColors.mutedLight,
    textTransform: 'uppercase',
  },
})
