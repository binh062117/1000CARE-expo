import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'
import dimens from '~/constants/dimens'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'flex-start',
    flex: 1,
  },
  distributors: {
    flex: 1,
    marginTop: 1,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listDistributors: {
    flexGrow: 0,
    backgroundColor: Colors.white,
    marginBottom: 8,
  },
  viewContent: {
    backgroundColor: 'white',
    padding: 10,
    height: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5
  },
  image: {
    height: 120,
    width: 120
  },
  buttonUpdate: {
    padding: 10,
    height: 50,
    backgroundColor: Colors.colorMain
  },
  textUpdate: {
    color: 'white'
  },
  textVerApp: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5
  }
})