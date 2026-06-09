import { Dimensions, StyleSheet } from 'react-native'
import { s, fs } from '~/utils/responsive'
import { brandColors, brandShadow } from '~/design-system/tokens'

const fullWidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: brandColors.background,
  },
  scroll: {
    flex: 1,
    backgroundColor: brandColors.background,
  },
  scrollContent: {
    paddingBottom: s(36),
  },
  hero: {
    marginHorizontal: s(16),
    marginTop: s(14),
    borderRadius: s(28),
    padding: s(20),
    backgroundColor: brandColors.tealDark,
    ...brandShadow.teal,
  },
  heroEyebrow: {
    fontSize: fs(10),
    lineHeight: fs(14),
    fontWeight: '900',
    letterSpacing: 1.6,
    color: brandColors.goldAccent,
  },
  heroTitle: {
    marginTop: s(6),
    fontSize: fs(26),
    lineHeight: fs(32),
    fontWeight: '900',
    color: brandColors.surface,
  },
  heroSubtitle: {
    marginTop: s(8),
    fontSize: fs(13),
    lineHeight: fs(20),
    fontWeight: '600',
    color: 'rgba(255,255,255,0.7)',
  },
  containerConfirm: {
    marginHorizontal: s(16),
    marginTop: s(14),
    padding: s(18),
    backgroundColor: brandColors.surface,
    borderRadius: s(24),
    borderWidth: 1,
    borderColor: brandColors.borderSoft,
    ...brandShadow.soft,
  },
  cardEyebrow: {
    fontSize: fs(10),
    lineHeight: fs(14),
    fontWeight: '900',
    letterSpacing: 1.5,
    color: brandColors.tealPrimary,
  },
  cardTitle: {
    marginTop: s(5),
    fontSize: fs(20),
    lineHeight: fs(26),
    fontWeight: '900',
    color: brandColors.textDark,
  },
  phoneContainer: {
    marginTop: s(14),
  },
  inputContainerStyle: {
    minHeight: s(52),
    borderRadius: s(16),
    borderWidth: 1,
    borderColor: brandColors.border,
    backgroundColor: brandColors.surface,
  },
  labelStyle: {
    color: brandColors.textDark,
    fontWeight: '800',
    fontSize: fs(12),
    lineHeight: fs(16),
  },
  buttonConfirm: {
    marginTop: s(8),
    width: '100%',
    paddingHorizontal: 0,
  },
  confirmButton: {
    height: s(54),
    borderRadius: s(18),
    backgroundColor: brandColors.tealPrimary,
  },
  confirmButtonText: {
    fontWeight: '900',
    color: brandColors.surface,
  },
  formItem:{
    width: '100%',
  },
  message: {
    marginTop: s(8),
    color: brandColors.muted,
    lineHeight: fs(20),
    fontSize: fs(13),
    fontWeight: '600',
  },
  phoneNumber: {
    marginTop: s(18),
    color: brandColors.tealPrimary,
    lineHeight: fs(28),
    fontSize: fs(22),
    fontWeight: '900',
  },
})
