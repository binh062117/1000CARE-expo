import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import RadioButton from './RadioButton'

const RadioButtonGroup = ({
  containerStyles,
  itemContainerStyles,
  data,
  value,
  onDataChange,
}) => {
  return <View style={[styles.wrap, containerStyles]}>
    {
      (Array.isArray(data) ? data : []).map((item, idx) => {
        return (
          <View
            key={idx}
            style={[styles.section, itemContainerStyles]}
          >
            <RadioButton
              onClick={() => {
                if (onDataChange) {
                  onDataChange(item)
                }
              }}
              selected={item?.value === value}
              title={item.title}
            />
          </View>
        )
      })
    }
  </View>
}

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    width: (Dimensions.get('window').width - 36) / 2,
  },
})

export default RadioButtonGroup