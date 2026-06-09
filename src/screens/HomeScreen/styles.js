import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'
import { s, fs } from '~/utils/responsive'
import { brandColors, brandShadow } from '~/design-system/tokens'

export default StyleSheet.create({
  container: {
    backgroundColor: brandColors.background,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'flex-start',
    flex: 1,
  },
  marketHeader: {
    paddingHorizontal: s(16),
    paddingTop: s(8),
    paddingBottom: s(12),
    backgroundColor: brandColors.tealDark,
    borderBottomLeftRadius: s(24),
    borderBottomRightRadius: s(24),
  },
  marketHeaderTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandMark: {
    width: s(40),
    height: s(40),
    borderRadius: s(14),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: brandColors.surface,
    overflow: 'hidden',
  },
  brandLogo: {
    width: s(40),
    height: s(40),
  },
  brandCopy: {
    flex: 1,
    marginLeft: s(12),
  },
  headerEyebrow: {
    fontSize: fs(9),
    lineHeight: fs(12),
    fontWeight: '800',
    letterSpacing: 1.6,
    color: 'rgba(255,255,255,0.62)',
  },
  headerTitle: {
    marginTop: s(1),
    fontSize: fs(18),
    lineHeight: fs(23),
    fontWeight: '900',
    color: brandColors.surface,
  },
  cartPill: {
    width: s(46),
    height: s(46),
    borderRadius: s(16),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.28)',
  },
  cartBadge: {
    position: 'absolute',
    top: -s(5),
    right: -s(5),
    minWidth: s(22),
    height: s(22),
    borderRadius: s(11),
    paddingHorizontal: s(5),
    backgroundColor: brandColors.danger,
    borderWidth: 2,
    borderColor: brandColors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    fontSize: fs(11),
    lineHeight: fs(14),
    fontWeight: '900',
    color: brandColors.surface,
  },
  searchDock: {
    marginTop: s(12),
    minHeight: s(52),
    borderRadius: s(18),
    backgroundColor: brandColors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(10),
    ...brandShadow.soft,
  },
  searchIconBubble: {
    width: s(36),
    height: s(36),
    borderRadius: s(13),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: brandColors.tealPrimary,
  },
  searchTextWrap: {
    flex: 1,
    marginLeft: s(12),
  },
  searchLabel: {
    fontSize: fs(9),
    lineHeight: fs(12),
    fontWeight: '900',
    letterSpacing: 1.2,
    color: brandColors.goldAccent,
    textTransform: 'uppercase',
  },
  searchText: {
    marginTop: s(1),
    fontSize: fs(13),
    lineHeight: fs(17),
    fontWeight: '700',
    color: brandColors.textDark,
  },
  headerMetrics: {
    marginTop: s(10),
    minHeight: s(42),
    borderRadius: s(16),
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(10),
  },
  metricItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  metricValue: {
    fontSize: fs(13),
    lineHeight: fs(17),
    fontWeight: '900',
    color: brandColors.surface,
  },
  metricLabel: {
    marginTop: 0,
    fontSize: fs(9),
    lineHeight: fs(12),
    fontWeight: '700',
    color: 'rgba(255,255,255,0.68)',
  },
  metricDivider: {
    width: 1,
    height: s(22),
    backgroundColor: 'rgba(255,255,255,0.16)',
  },
  distributors: {
    paddingHorizontal: s(12),
    paddingVertical: s(10),
    backgroundColor: brandColors.background,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listDistributors: {
    flexGrow: 0,
    backgroundColor: brandColors.background,
    marginBottom: s(2),
  },
  viewContent: {
    backgroundColor: brandColors.surface,
    padding: s(20),
    height: s(300),
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: s(24),
    ...brandShadow.soft,
  },
  image: {
    height: s(120),
    width: s(120)
  },
  buttonUpdate: {
    padding: s(10),
    height: s(50),
    backgroundColor: Colors.colorMain
  },
  textUpdate: {
    color: brandColors.surface
  },
  textVerApp: {
    fontSize: fs(16),
    textAlign: 'center',
    marginTop: s(5),
    color: brandColors.textDark,
  }
})
