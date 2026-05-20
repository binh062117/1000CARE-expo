import { Dimensions, StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'
const fullWidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    backgroundColor: Colors.white,
  },
  containerConfirm: {
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
    flex: 1,
  },
  phoneContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderColor: Colors.borderColor,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  labelStyle: {
    color: Colors.textColor3,
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 20,
  },
  image: {
    marginTop: 30,
    marginBottom: 30,
  },
  buttonConfirm: {
    flex: 1,
    justifyContent: 'flex-end',
    width: fullWidth,
  },
  ml14: {
    flex: 2,
    marginLeft: 14,
  },
  formItem:{
    flex: 1,
  },
  message: {
    marginTop: 24,
    textAlign: 'center',
    marginBottom: 18,
    color: Colors.textColor3,
    lineHeight: 22,
  },
  phoneNumber: {
    color: Colors.systemColor2,
    lineHeight: 22,
    fontSize: 18,
    fontWeight: 'bold',
  },
})