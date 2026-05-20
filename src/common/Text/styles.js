import { StyleSheet } from 'react-native'

const Fonts = {
  base: 'Quicksand-Regular', // 400
  medium: 'Quicksand-Medium', // 500
  semiBold: 'Quicksand-SemiBold', // 600
  bold: 'Quicksand-Bold', // 700
}

export default StyleSheet.create({
  body: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    fontFamily: Fonts.base,
  },
})
