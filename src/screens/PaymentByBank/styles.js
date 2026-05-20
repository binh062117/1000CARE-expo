import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'

const styles = StyleSheet.create({
  mainContainer: { 
    flex:1,
    display: 'flex',
    justifyContent:'space-between',
    backgroundColor: Colors.backgroundColor,
  },
  
  listCheckoutContainer: {
    flex: 2,
    backgroundColor: Colors.white,
  },
})

export default styles