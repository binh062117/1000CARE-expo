import { StyleSheet } from 'react-native'
import { Fonts } from '~/assets/config'
import Colors from '~/common/Colors/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.backgroundColor,
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
    color: Colors.colorMain,
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationStyle: 'double',
    marginLeft: 10,
    marginBottom: 10,
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
  },
  
})
export default styles