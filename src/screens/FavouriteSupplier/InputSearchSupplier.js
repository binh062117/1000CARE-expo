import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from '../../common'
import { getSearchDistributor, resetSearchDistributor } from '~/store/actions'
import _ from 'lodash'

const InputSearchSupplier = (props) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  console.log('tia saoooooooo:',value == '')
  const searchTextChangeDelay = _.debounce((e)=>{
    console.log('searchTextChangeDelay', e)
    if(e) {
      dispatch(getSearchDistributor(e,80,1,1))
    } else {
      console.log('11111111111')
      dispatch(resetSearchDistributor())
    }
  }, 100) 

  return (
    <View style={styles.wrap}>
      <TextInput
        style={styles.input}
        placeholder="Tìm kiếm NCC"
        onChangeText={(text) => {
          setValue(text)
          searchTextChangeDelay(text)
        }}
        value={value}
      />
      <Icon
        style={styles.icon}
        type="feather"
        name={'search'}
        color={'#8C8C8C'}
        size={20}
      />
      <TouchableOpacity
        onPress={() => {
          searchTextChangeDelay('')
          setValue('')
        }}
        style={styles.iconCancel}
      >
        <Icon
          type="material"
          name={'cancel'}
          size={20}
          color={'#8C8C8C'}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    paddingLeft: 42,
    borderRadius: 6,
    color: '#595959',
    paddingRight: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  icon: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 25,
    top: 10,
  },
  iconCancel: {
    width: 25,
    height: 24,
    position: 'absolute',
    right: 15,
    top: 10,
  },
})

export default InputSearchSupplier
