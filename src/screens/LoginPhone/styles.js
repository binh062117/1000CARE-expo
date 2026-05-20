import { StyleSheet } from 'react-native';
import Colors from '~/common/Colors/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  inner_container: {
    flex: 2,
    marginHorizontal: 24,
  },
  logo: {
    // alignSelf: 'center',
    // marginVertical: 64,
    height: 200,
     width: 200,
     borderRadius: 10,
     marginVertical: 30
  },
  footer_views: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 24,
  },

  text_register_now: {
    color: Colors.systemColor2,
    textDecorationLine: 'underline',
    marginLeft: 6,
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

  loginBtnContainer: {
    flexDirection: 'row',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  loginBtn: {
    height: 50,
    width: '100%',
    padding: 0,
    paddingHorizontal: 0,
    borderRadius: 50,
    backgroundColor: Colors.systemColor2,
  },

  listLoginBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 22,
    justifyContent: 'center',
  },

  otherLoginMethod: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 14,
    color: Colors.textColor3,
  },

  otherLoginMethodContainer: {
    marginTop: 84,
  },

  logoLogin: {
    alignSelf: 'center',
  },

  btnContainer: {
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
    borderRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 12,
  },

  title: {
    color: Colors.textColor3,
    fontSize: 16,
    marginBottom: 25,
  },
});

export default styles;
