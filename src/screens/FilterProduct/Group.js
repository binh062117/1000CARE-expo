import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import _ from 'lodash'
import { Text } from '~/common/index'

import styles from './styles'
import { NAVIGATION_ALL_FILTER } from '~/navigation/routes'

const GroupItem = ({ index, item, clickItem, isSelect }) => {
  const selected = isSelect(index, item)
  return (
    <TouchableOpacity
      style={[styles.groupItemContrainer, selected ? styles.groupItemContrainerSelected: {}]}
      onPress={() => clickItem && clickItem(index, item)}
    >
      <Text
        style={styles.groupItem}
      >{item.name}</Text>
    </TouchableOpacity>
  )
}

const Group = ({
  title,
  subTitle,
  data,
  clickItem,
  isSelect,
  showAll = false,
  navigation,
}) => {
  const [fromIdx, setFromIdx] = useState(0)

  return (
    <View
      style={styles.groupContainer}
    >
      {
        title && (
          <Text
            style={styles.groupTitle}
          >{title}</Text>
        )
      }
      {
        subTitle && (
          <Text
            style={styles.groupSubTitle}
          >{subTitle}</Text>
        )
      }
      <View>
        {
          _.chunk(data.filter((_, idx) => showAll || idx >= fromIdx && idx < fromIdx + 10), 2).map((items, index) => {
            return (
              <View style={styles.groupListItemContainer}>
                <GroupItem 
                  item={items[0]}
                  index={index}
                  clickItem={clickItem}
                  isSelect={isSelect}
                />
                {
                  items.length > 1 && (
                    <GroupItem 
                      item={items[1]}
                      index={index}
                      clickItem={clickItem}
                      isSelect={isSelect}
                    />
                  )
                }
              </View>
            )
          })
        }
        {
          !showAll && data?.length > 10 && (
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginVertical:8,
              }}
              onPress={() => {
                navigation.navigate(NAVIGATION_ALL_FILTER, {
                  clickItem: (idx, item) => {
                    if (data.length > 10) {
                      setFromIdx(idx)
                    }
                    clickItem(idx, item)
                  },
                  data, 
                  title: title,
                  subTitle: subTitle,
                })
              }}
            >
              <Text style={styles.groupSubTitle}>{'Hiển thị thêm  >'}</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  )
}

export default Group