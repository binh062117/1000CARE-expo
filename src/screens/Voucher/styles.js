import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'
import { s, fs } from '~/utils/responsive'
import { brandColors, brandShadow } from '~/design-system/tokens'

export default StyleSheet.create({
  hero: {
    marginHorizontal: s(16),
    marginTop: s(12),
    borderRadius: s(26),
    padding: s(18),
    backgroundColor: brandColors.tealPrimary,
    ...brandShadow.teal,
  },
  heroEyebrow: {
    fontSize: fs(10),
    lineHeight: fs(14),
    fontWeight: '900',
    letterSpacing: 1.5,
    color: 'rgba(255,255,255,0.7)',
  },
  heroTitle: {
    marginTop: s(6),
    fontSize: fs(24),
    lineHeight: fs(30),
    fontWeight: '900',
    color: brandColors.surface,
  },
  heroSubtitle: {
    marginTop: s(8),
    fontSize: fs(12),
    lineHeight: fs(18),
    fontWeight: '600',
    color: 'rgba(255,255,255,0.72)',
  },
  tabHeaderContainer: {
    flexDirection: 'row',
    justifyContent:'space-around',
    marginTop: s(10),
    marginHorizontal: s(16),
    borderRadius: s(18),
    backgroundColor: brandColors.tealLight,
    padding: s(4),
  },
  tabHeader: {
    justifyContent:'center',
    flex:1,
    alignItems: 'center',
    height: s(48),
    backgroundColor: 'transparent',
    borderRadius: s(14),
  },
  selected: {
    backgroundColor: brandColors.surface,
    ...brandShadow.soft,
  },
  textSelected: {
    fontFamily: Fonts.medium,
    color: brandColors.tealPrimary,
    fontSize: fs(14),
    fontWeight: '800',
  },
  voucherContainer: {
    backgroundColor: brandColors.background,
    marginTop: s(10),
  },
})
