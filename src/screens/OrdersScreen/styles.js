import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'

const styles = StyleSheet.create({
  mainContainer: { 
    flex:1,
    display: 'flex',
    justifyContent:'space-between',
    backgroundColor: Colors.backgroundColor,
  },
  
  listItem: {
    marginVertical: 12,
    backgroundColor: Colors.white,
  },

  listProductContainer: {
    flex: 2,
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  listStatus: {
    flex: 1,
    maxHeight: 57,
    marginBottom: 2,
  },

  contentListStatus: {
    height: 57,
  },

  itemSeparator: {
    height: 2,
    backgroundColor: Colors.backgroundColor,
  },

  statusLabel: {
    textAlign: 'center',
    color: Colors.textColor3,
    fontFamily: Fonts.medium,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
  },

  statusLabelSelected: {
    textAlign: 'center',
    color: Colors.systemColor2,
    fontSize: 14,
    fontFamily: Fonts.medium,
    lineHeight: 22,
    fontWeight: '700',
  },

  statusLabelContainer: {
    paddingVertical: 16,
    paddingHorizontal: 18,
  },

  statusLabelContainerSelected: {
    borderBottomColor: Colors.systemColor2,
    borderBottomWidth: 2,
  },

  closeBtnContainer: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
  closeBtn: {
    height: 12,
    width: 12,
  },
  title: {
    // alignSelf: 'center',
    width: '99%',
    fontWeight: '700',
    fontFamily: Fonts.bold,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
  },

  bottomSheetContainer: {
    height: '100%',
    backgroundColor: Colors.white,
  },
  radioButtonContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  radioButtonItem: {
    width: '100%',
    marginBottom: 18,
    marginHorizontal: 18,
  },
  bottomSheetActionContainer: {
    position: 'absolute',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: Colors.gray,
    bottom: 0,
    width: '100%',
    padding: 4,
  },
  btnContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.errorColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainerDisable: {
    backgroundColor: Colors.gray,
  },
  btnText: {
    color: Colors.white,
    borderRadius: 2,
    fontSize: 14,
    fontFamily: Fonts.bold,
  },
  searchInput: {
    marginHorizontal: 18,
    marginTop: -9,
  },
  warningContainer: {
    margin: 18,
    backgroundColor: '#f9edbe', 
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  warningText: {
    fontFamily: Fonts.bold,
    color: '#FF9900',
  },
})

export default styles