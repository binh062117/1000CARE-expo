import React, { useEffect, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Header from '~/common/Header/index'
import { back } from '~/assets/constants'
import { Button } from '~/common/index'
import Colors from '~/common/Colors/Colors'
import { getCategories, getListDistributorAll, getListSuppliers } from '~/store/selector'
import { getAllDistributors, getCateBySup, getSupplierByDistributor, resetCateBySup } from '~/store/actions'

import styles from './styles'
import Group from './Group'

const FilterProduct = ({ navigation, route }) => {
  const { onLoad, query, distributorId, mode = 'supplier' } = route.params
  const dispatch = useDispatch()
  const [supplierSelected, setSupplierSelected] = useState(null)
  const [cateSelected, setCateSelected] = useState(null)
  const [distributorSelected, setDistributorSelected] = useState(null)

  const listDistributor = useSelector(state => getListDistributorAll(state))
  const listSupplier = useSelector(state => getListSuppliers(state))
  const listCategories = useSelector(state => getCategories(state))

  useEffect(() => {
    dispatch(getAllDistributors(1,80,1,false))
  }, [])

  useEffect(() => {
    if (distributorId) {
      setDistributorSelected({ id: distributorId })
    }
  }, [distributorId])

  useEffect(()=>{
    if (distributorSelected) {
      dispatch(resetCateBySup())
      dispatch(getSupplierByDistributor(distributorSelected?.id, 1, 100, false))
    }
  }, [distributorSelected])

  useEffect(() => {
    if (query) {
      if (query.distributorSelected) {
        setDistributorSelected(query.distributorSelected)
      }
      setSupplierSelected(query.supplierSelected)
      setCateSelected(query.cateSelected)
    }
  }, [query])

  useEffect(()=>{
    if (listSupplier && listSupplier.length > 0) {
      dispatch(getCateBySup(listSupplier[0].id, 1, 100, false))
    }
  }, [listSupplier])

  useEffect(() => {
    if (supplierSelected) {
      dispatch(getCateBySup(supplierSelected.id, 1, 100, false))
    }
  }, [supplierSelected])

  const onSelectCate = (_, item) => {
    setCateSelected(item)
  }

  const cleanUp = () => {
    setDistributorSelected(null)
    setSupplierSelected(null)
    setCateSelected(null)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        leftAction={() => navigation.pop()}
        iconLeft={back}
        title={'Bộ lọc'}
        navigation={navigation}
        cart={false}
      />
      <ScrollView style={{ backgroundColor: Colors.white, marginTop: 6 }}>
        {
          mode !== 'supplier' && (
            <Group
              title={'Nhà cung cấp'}
              subTitle={'(Chọn tối đa 1 nhà cung cấp)'}
              data={listDistributor}
              isSelect={(idx, item) => {
                return item?.id === distributorSelected?.id
              }}
              clickItem={(idx, item) => {
                setCateSelected(null)
                setSupplierSelected(null)
                setDistributorSelected(item)
              }}
              navigation={navigation}
            />
          )
        }
        {
          mode === 'supplier' && (
            <>
              <Group 
                title={'Nhóm sản phẩm'}
                subTitle={'(Chọn tối đa 1 nhóm sản phẩm)'}
                data={listSupplier}
                isSelect={(idx, item) => {
                  return item?.id === supplierSelected?.id
                }}
                clickItem={(idx, item) => {
                  setCateSelected(null)
                  setSupplierSelected(item)
                }}
                navigation={navigation}
              />
              <Group 
                title={'Nhóm bệnh'}
                subTitle={'(Chọn tối đa 1 nhóm bệnh)'}
                data={listCategories}
                isSelect={(idx, item) => {
                  return item?.category_id === cateSelected?.category_id
                }}
                clickItem={(idx, item) => onSelectCate(idx, item)}
                navigation={navigation}
              />
            </>
          )

        }
        
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-around',
            marginVertical: 36,
          }}
        >
          <Button
            text={'Thiết lập lại'}
            styleButton={{ 
              borderRadius: 35, 
              backgroundColor: Colors.white,
              borderColor: Colors.systemColor2,
              borderWidth: 1,
            }}
            styleText={{ fontWeight:'700', color: Colors.systemColor2 }}
            styleView={styles.buttonConfirm}
            onPressEvent={cleanUp}
          />
          <Button 
            text={'Áp dụng'}
            styleButton={{ 
              borderRadius: 35, 
            }}
            styleText={{ fontWeight:'700' }}
            styleView={styles.buttonConfirm}
            onPressEvent={() => {
              if (onLoad) {
                onLoad(supplierSelected, cateSelected, distributorSelected)
              }
              navigation.pop()
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FilterProduct