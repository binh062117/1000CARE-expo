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
  
  listItem: {
    marginVertical: s(12),
    backgroundColor: brandColors.surface,
  },
  checkoutHero: {
    marginHorizontal: s(16),
    marginTop: s(10),
    marginBottom: s(10),
    borderRadius: s(28),
    paddingHorizontal: s(18),
    paddingVertical: s(18),
    backgroundColor: brandColors.tealDark,
    minHeight: s(150),
    justifyContent: 'center',
    position: 'relative',
    ...brandShadow.teal,
  },
  backButton: {
    position: 'absolute',
    left: s(18),
    top: s(18),
    width: s(42),
    height: s(42),
    borderRadius: s(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
  },
  checkoutCopy: {
    alignItems: 'center',
    paddingHorizontal: s(56),
  },
  checkoutEyebrow: {
    fontSize: fs(10),
    lineHeight: fs(14),
    fontWeight: '900',
    letterSpacing: 1.6,
    color: brandColors.goldAccent,
    textAlign: 'center',
  },
  checkoutTitle: {
    marginTop: s(5),
    fontSize: fs(24),
    lineHeight: fs(30),
    fontWeight: '900',
    color: brandColors.surface,
    textAlign: 'center',
  },
  checkoutSubtitle: {
    marginTop: s(7),
    fontSize: fs(12),
    lineHeight: fs(18),
    fontWeight: '600',
    color: 'rgba(255,255,255,0.68)',
    textAlign: 'center',
  },

  bottomContainer: {
    paddingVertical: s(18),
    paddingTop: s(20),
    paddingBottom: s(18),
    backgroundColor: brandColors.surface,
    alignSelf: 'flex-end',
    ...brandShadow.soft,
  },

  nextStepBtnContainer: {
    flexDirection: 'row',
    margin: 0, 
    padding: 0,
    alignItems: 'center', 
    paddingHorizontal: s(18),
  },

  nextStepBtn: {
    height: s(56),
    width: '100%',
    padding: 0,
    paddingHorizontal: 0,
    borderRadius: s(20),
    backgroundColor: brandColors.tealPrimary,
  },

  buyBtnContainer: {
    flexDirection: 'row',
    margin: 0, 
    padding: 0,
    alignItems: 'center', 
    paddingHorizontal: s(18),
  },

  buyBtn: {
    height: s(56),
    width: '100%',
    padding: 0,
    paddingHorizontal: 0,
    borderRadius: s(20),
    backgroundColor: brandColors.surface,
    borderColor: brandColors.tealPrimary,
    borderWidth: 1,
  },

  buyBtnText: {
    color: brandColors.tealPrimary,
  },

  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: s(12),
    marginHorizontal: s(18),
  },

  pointContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: s(50),
    marginHorizontal: s(18),
  },

  priceText: {
    fontSize: fs(18),
    color: brandColors.goldAccent,
  },

  pointText: {
    fontSize: fs(18),
    color: Colors.red,
  },

  totalText: {
    color: brandColors.textDark,
    fontSize: fs(14),
  },

  listProductContainer: {
    flex: 2,
    backgroundColor: brandColors.background,
    marginTop: s(6),
  },

  addressContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: brandColors.background,
    marginTop: s(6),
    paddingBottom: s(6),
  },

  addressTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: s(18),
    backgroundColor: brandColors.surface,
    justifyContent: 'space-between',
  },

  addressInfoContainer: {
    display: 'flex',
    marginTop: 1,
    padding: s(18),
    flexDirection: 'column',
    backgroundColor: brandColors.surface,
  },

  addressName: {
    color: brandColors.textDark,
    fontWeight: '500',
    lineHeight: 22,
    fontSize: fs(14),
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
  },

  itemSeparator: {
    height: s(8),
    backgroundColor: brandColors.background,
  },

  mt6: {
    marginTop: s(6),
  },

  iconGPS: {
    height: 21,
    width: 18,
    marginRight: s(10),
  },

  addressText: {
    color: brandColors.muted,
    fontWeight: '500',
    lineHeight: 22,
    fontSize: fs(14),
  },
  
  chooseAddressText: {
    color: brandColors.tealPrimary,
    textDecorationLine: 'underline',
    fontSize: fs(12),
    lineHeight: 22,
    fontWeight: '500',
  },

  listHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: brandColors.surface,
    marginBottom: s(2),
    padding: s(18),
  },

  textListHeader: {
    marginLeft: s(6),
    color: brandColors.textDark,
    fontSize: fs(14),
  },

  textInfoListHeader: {
    fontFamily: Fonts.bold,
    color: brandColors.mutedLight,
    fontSize: fs(14),
  },

  dialogDeleteContainer: { backgroundColor: brandColors.surface, padding: s(16), borderRadius: s(20) },
  messageDeleteProduct: {
    textAlign: 'center',
    fontSize: fs(14),
    color: brandColors.textDark,
  },
  dialogButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: s(12),
  },
})

export default styles
