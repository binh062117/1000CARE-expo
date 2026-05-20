import { StyleSheet } from 'react-native'
import Colors from '~/common/Colors/Colors'
const styles = StyleSheet.create({
  groupContainer: {
    paddingHorizontal: 16,
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
  },
  groupTitle: {
    color: Colors.textColor2,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 22,
  },
  groupSubTitle: {
    color: Colors.textColor3,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 8,
  },
  groupItemContrainer: {
    width: '48%',
    padding: 5,
    backgroundColor: '#F1F2FB',
    borderRadius: 5,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: Colors.systemColor2,
  },
  groupItemContrainerSelected: {
    borderWidth: 1,
  },
  groupItem: {
    textAlign: 'center',
    color: Colors.textColor2,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
  },
  groupListItemContainer: {
    display: 'flex',
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
export default styles