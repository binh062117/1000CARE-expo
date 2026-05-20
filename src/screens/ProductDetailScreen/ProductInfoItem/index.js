import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const ProductInfoItem = ({ title, value, component, focus }) => {
  if ((!value || value === '') && !component)
    return <></>
  return (
    <View style={focus ? [styles.container, styles.focus]: styles.container}>
      <Text style={styles.title}>{title}</Text>
      {
        value && (
          <Text style={styles.value}>
            {value}
          </Text>
        )
      }
      {
        component && (
          <View style={styles.component}>
            {component}
          </View>
        )
      }
    </View>
  )
}

export default ProductInfoItem