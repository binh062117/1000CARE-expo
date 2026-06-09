import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'
import { s, fs } from '~/utils/responsive'
import { brandColors, brandShadow } from '~/design-system/tokens'

const styles = StyleSheet.create({
  mainContainer: { 
    flex:1,
    display: 'flex',
    justifyContent:'space-between',
    backgroundColor: brandColors.background,
  },
  ordersHero: {
    marginHorizontal: s(16),
    marginTop: s(10),
    marginBottom: s(12),
    borderRadius: s(28),
    paddingHorizontal: s(20),
    paddingVertical: s(20),
    backgroundColor: brandColors.textDark,
    ...brandShadow.soft,
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
    color: 'rgba(255,255,255,0.66)',
  },
  
  listItem: {
    marginVertical: s(12),
    marginHorizontal: s(16),
    backgroundColor: brandColors.surface,
    borderRadius: s(20),
    ...brandShadow.soft,
  },

  listProductContainer: {
    flex: 2,
    backgroundColor: brandColors.background,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  listStatus: {
    flex: 1,
    maxHeight: s(64),
    marginBottom: s(8),
    backgroundColor: brandColors.background,
  },

  contentListStatus: {
    minHeight: s(60),
    paddingHorizontal: s(16),
    alignItems: 'center',
  },

  itemSeparator: {
    height: s(8),
    backgroundColor: brandColors.background,
  },

  statusLabel: {
    textAlign: 'center',
    color: brandColors.muted,
    fontFamily: Fonts.medium,
    fontSize: fs(12),
    lineHeight: fs(18),
    fontWeight: '800',
  },

  statusLabelSelected: {
    textAlign: 'center',
    color: brandColors.surface,
    fontSize: fs(12),
    fontFamily: Fonts.medium,
    lineHeight: fs(18),
    fontWeight: '900',
  },

  statusLabelContainer: {
    paddingVertical: s(10),
    paddingHorizontal: s(16),
    borderRadius: s(18),
    marginRight: s(8),
    backgroundColor: brandColors.surface,
    borderWidth: 1,
    borderColor: brandColors.borderSoft,
  },

  statusLabelContainerSelected: {
    backgroundColor: brandColors.tealPrimary,
    borderColor: brandColors.tealPrimary,
  },

  closeBtnContainer: {
    position: 'absolute',
    right: s(8),
    top: s(8),
  },
  closeBtn: {
    height: s(12),
    width: s(12),
  },
  title: {
    // alignSelf: 'center',
    width: '99%',
    fontWeight: '700',
    fontFamily: Fonts.bold,
    textAlign: 'center',
    fontSize: fs(14),
    lineHeight: fs(22),
    color: brandColors.textDark,
  },

  bottomSheetContainer: {
    height: '100%',
    backgroundColor: brandColors.surface,
  },
  radioButtonContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  radioButtonItem: {
    width: '100%',
    marginBottom: s(18),
    marginHorizontal: s(18),
  },
  bottomSheetActionContainer: {
    position: 'absolute',
    height: s(64),
    borderTopWidth: 1,
    borderTopColor: brandColors.border,
    bottom: 0,
    width: '100%',
    padding: s(8),
  },
  btnContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: brandColors.danger,
    borderRadius: s(20),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainerDisable: {
    backgroundColor: Colors.gray,
  },
  btnText: {
    color: brandColors.surface,
    borderRadius: s(2),
    fontSize: fs(14),
    fontFamily: Fonts.bold,
  },
  searchInput: {
    marginHorizontal: s(18),
    marginTop: -s(9),
  },
  warningContainer: {
    margin: s(18),
    backgroundColor: '#FFF5D8',
    paddingVertical: s(8),
    paddingHorizontal: s(12),
    borderRadius: s(12),
  },
  warningText: {
    fontFamily: Fonts.bold,
    color: brandColors.warning,
  },
})

export default styles
