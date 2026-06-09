import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'
import { s, fs } from '~/utils/responsive'
import { brandColors, brandShadow } from '~/design-system/tokens'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
  infoCard: {
    marginHorizontal: s(16),
    marginTop: s(14),
    borderRadius: s(24),
    padding: s(18),
    backgroundColor: brandColors.surface,
    borderWidth: 1,
    borderColor: brandColors.borderSoft,
    ...brandShadow.soft,
  },
  sectionEyebrow: {
    fontSize: fs(10),
    lineHeight: fs(14),
    fontWeight: '900',
    letterSpacing: 1.5,
    color: brandColors.tealPrimary,
  },
  sectionTitle: {
    marginTop: s(5),
    fontSize: fs(20),
    lineHeight: fs(26),
    fontWeight: '900',
    color: brandColors.textDark,
  },
  sectionBody: {
    marginTop: s(14),
  },
  field: {
    marginBottom: s(14),
  },
  fieldLabel: {
    marginBottom: s(7),
    fontSize: fs(12),
    lineHeight: fs(16),
    fontWeight: '800',
    color: brandColors.textDark,
  },
  fieldInput: {
    minHeight: s(52),
    borderRadius: s(16),
    borderWidth: 1,
    borderColor: brandColors.border,
    backgroundColor: brandColors.surface,
  },
  fieldInputText: {
    color: brandColors.textDark,
    fontSize: fs(14),
    fontWeight: '600',
    paddingHorizontal: s(16),
  },
  twoColumn: {
    flexDirection: 'row',
  },
  columnField: {
    flex: 1,
  },
  columnFieldRight: {
    flex: 1,
    marginLeft: s(12),
  },
  readonlyInput: {
    minHeight: s(52),
    borderRadius: s(16),
    borderWidth: 1,
    borderColor: brandColors.border,
    backgroundColor: brandColors.background,
    paddingHorizontal: s(16),
    justifyContent: 'center',
  },
  readonlyText: {
    fontSize: fs(14),
    fontWeight: '700',
    color: brandColors.textDark,
  },
  selectInput: {
    minHeight: s(52),
    borderRadius: s(16),
    borderWidth: 1,
    borderColor: brandColors.border,
    backgroundColor: brandColors.surface,
    justifyContent: 'center',
    paddingHorizontal: s(12),
  },
  deleteButton: {
    alignSelf: 'center',
    marginTop: s(18),
    paddingHorizontal: s(18),
    paddingVertical: s(10),
    borderRadius: s(16),
    backgroundColor: '#FFF1F0',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  content: {
    paddingHorizontal: 10,
  },
  textInput: {
    padding: 3,
    height: 35,
  },
  section: {
    margin: 8,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 8,
    paddingVertical: 16,
  },
  titleSection: {
    color: Colors.textColor1,
    fontFamily: Fonts.bold,
    fontSize: 18,
  },
  label: {
    marginTop: 10,
  },
  titleContent: {
    fontSize: 18,
  },
  selectCamera: {
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(66, 118, 254, 0.1)',
    borderRadius: 65,
  },
  containerModal: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 5,
  },
  textSelect: {
    fontSize: 16,
  },
  titleModal: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 18,
  },
  textDelete: {
    color: brandColors.danger,
    fontSize: fs(13),
    fontWeight: '900',
  },
  mainContainer: { 
    flex:1,
    display: 'flex',
    // justifyContent:'space-between',
    backgroundColor: Colors.backgroundColor,
    marginTop: 12,
  },
  formContainer:{
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Colors.white,
  },
  mt12: {
    paddingTop: 12,
  },
  formItemContainer:{
    marginHorizontal: 18,
  },
  labelStyle: {
    color: Colors.textColor3,
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 20,
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderColor: Colors.borderColor,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  modalSelectPlaceHolder: {
    textAlign: 'left',
    color: brandColors.textDark,
    fontSize: fs(14),
    fontWeight: '700',
  },
  
})
export default styles
