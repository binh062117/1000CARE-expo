import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.white,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  image: {
    width: 42,
    height: 42,
  },
  message: {
    marginTop: 12,
    color: Colors.white,
    fontSize: 14,
    textAlign: 'center',
  },
})

export default styles