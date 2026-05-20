import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, FlatList, SafeAreaView, StatusBar } from 'react-native'

import styles from './styles'
import strings from '~/i18n'
import EmptyItem from './EmptyItem/index'
import { getAddCartInfoStatus, getCartStatus, getListItem, getUpdateCartStatus } from '~/store/cart/cartSelectors'
import Header from '~/common/Header/index'
import { addOptionInfo, getAddressBooksRequest, getInfo, resetStatusCartInfo, updateCart } from '~/store/actions'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { getAddressBooks, getAddressRequestStatus } from '~/store/selector'
import { useState } from 'react'
import Status from '~/common/Status/Status'
import Amount from './Amount/index'
import CartItem from './CartItem'
import DialogInfo from '~/common/DialogInfo/index'
import { Button, Text } from '~/common/index'

const CartScreen = props => {
  const cartData = useSelector((state) => getListItem(state))
  const addressData = useSelector(state => getAddressBooks(state))
  const [isRequestChangeAddress, setIsRequestChangeAddress] = useState(false)
  const [isDialogError, setIsDialogError] = useState(false)
  const [message, setMessage] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [deleteProduct, setDeleteProduct] = useState(null)
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false)
  const [orderLimit, setOrderLimit] = useState([])
  const [listSelectedIds, setListSelectedIds] = useState([])
  const [fullSelectedIds, setFullSelectedIds] = useState([])
  const [countFirst, setCountFirst] = useState(0)
  const statusGetAddress = useSelector(state => getAddressRequestStatus(state))
  const statusGetCart = useSelector(state => getCartStatus(state))
  const [chooseAll, setChooseAll] = useState(true)
  // console.log('alkfjlaksjks::::::::::::::::::', listSelectedIds, fullSelectedIds)
  const addCartInfoStatus = useSelector(state => getAddCartInfoStatus(state))
  const statusUpdateCart = useSelector(state => getUpdateCartStatus(state))

  const dispatch = useDispatch()

  useEffect(() => {
    if (statusUpdateCart === Status.SUCCESS) {
      setOrderLimit([])
    }
  }, [statusUpdateCart])

  const getProducts = useCallback(() => {
    if (cartData && cartData?.items) {
      const data = cartData
      if (!cartData || !cartData.items)
        return []
      return data.items
    }
  }, [cartData])

  useEffect(() => {
    setTimeout(() => {
      dispatch(getAddressBooksRequest())
    }, 100)
  }, [])

  useEffect(() => {
    if (statusGetCart === Status.ERROR && statusGetAddress === Status.SUCCESS) {
      setTimeout(() => {
        dispatch(getInfo())
      }, 100)
    }
  }, [statusGetCart])

  useEffect(() => {
    setOpenDialog(false)
    if (!cartData || !cartData.items || cartData?.shipping_address)
      return
    if (addressData && addressData.length > 0) {
      for (let i = 0; i < addressData.length; i++) {
        if (addressData[i].is_default) {
          setIsRequestChangeAddress(true)
          dispatch(addOptionInfo(addressData[i].id, 1))
          break
        }
      }
    }
  }, [cartData, addressData])
  useEffect(() => {
    if (chooseAll) {
      const allIds = []
      if (productInCart && productInCart.length > 0) {
        productInCart.forEach(item => {
          item?.items.forEach(item1 => {
            item1?.items.forEach(item2 => {
              allIds.push(item2.id)
            })
          })
        })
        setListSelectedIds(allIds)
      }
    } else {
      setListSelectedIds([])
    }
  }, [chooseAll])

  const onDeleteProduct = () => {
    dispatch(updateCart(deleteProduct.product_id, deleteProduct.distributorId, 0))
  }

  useEffect(() => {
    if (!isRequestChangeAddress)
      return
    switch (addCartInfoStatus) {
      case Status.LOADING:
        break
      case Status.SUCCESS:
        setIsRequestChangeAddress(false)
        dispatch(resetStatusCartInfo())
        if (cartData?.shipping_address) {
          dispatch(getInfo())
        }
        break
      case Status.ERROR:
        setIsRequestChangeAddress(false)
        break
    }
  }, [isRequestChangeAddress, addCartInfoStatus])

  const productInCart = getProducts()

  useEffect(() => {
    if (listSelectedIds && listSelectedIds.length > 0 && countFirst === 0) {
      setFullSelectedIds(listSelectedIds.length)
      setCountFirst(1)
    }
    // if(countFirst === 1 && listSelectedIds && listSelectedIds.length === fullSelectedIds) {
    //   setChooseAll(true)
    // }
  }, [listSelectedIds])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor='white'
      />
      <Header
        title={strings.cartDetail.title}
        leftAction={() => {
          dispatch(resetStatusCartInfo())
          props.navigation.pop()
        }}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}
        style={styles.listProductContainer}
      >
        <FlatList
          data={productInCart}
          scrollEnabled={true}
          renderItem={({ item, index }) => {
            return (
              <FlatList
                data={item.items}
                scrollEnabled={true}
                renderItem={({ item: item2 }) => {
                  return (
                    <CartItem
                      setOpenDialogWaiting={(value) => {
                        if (isDialogError) {
                          setIsDialogError(false)
                        }
                        if (isOpenDeleteDialog) {
                          setIsOpenDeleteDialog(false)
                        }
                        setOpenDialog(value)
                      }}
                      navigation={props.navigation}
                      distributor={item.distributor}
                      item={item2}
                      index={index}
                      cartData={cartData}
                      listSelectedIds={listSelectedIds}
                      setSelection={(product, action, force, products) => {
                        console.log('productItem', product)
                        if (force) {
                          if (action === 'add') {
                            setListSelectedIds([...listSelectedIds, ...products.map(p => p.id).filter(id => !listSelectedIds.includes(id))])
                          } else {
                            setListSelectedIds([...listSelectedIds.filter(id => !products.map(p => p.id).includes(id))])
                          }
                        } else {
                          if (listSelectedIds.includes(product.id)) {
                            setListSelectedIds([...listSelectedIds.filter(id => id !== product.id)])
                          } else {
                            setListSelectedIds([...listSelectedIds, product.id])
                          }
                        }
                      }}
                      onDeleteProduct={(product) => {
                        setDeleteProduct(product)
                        setIsOpenDeleteDialog(true)
                        if (isDialogError) {
                          setIsDialogError(false)
                        }
                        setOpenDialog(true)
                      }}
                      pushArrayLimit={(distributors) => {
                        const newOrderLimit = orderLimit
                        newOrderLimit.push(distributors)
                        setOrderLimit(newOrderLimit)
                      }}
                      deleteArrayLimit={(distributors) => {
                        const newOrderLimit = orderLimit
                        if (newOrderLimit && newOrderLimit.length > 0 && newOrderLimit.findIndex(d => d.id === distributors.id) >= 0) {
                          newOrderLimit.splice(newOrderLimit.findIndex(d => d.id === distributors.id), 1)
                          setOrderLimit(newOrderLimit)
                        }
                      }}
                    />
                  )
                }}
                keyExtractor={(_, index) => {
                  return index.toString()
                }}
              />
            )
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.itemSeparator} />
            )
          }}
          ListEmptyComponent={EmptyItem}
          keyExtractor={(item, index) => {
            return index.toString()
          }}
        />
      </KeyboardAwareScrollView>

      <View
        style={styles.bottomContainer}
      >
        <Amount
          openMessage={(msg) => {
            setMessage(msg)
            if (isOpenDeleteDialog) {
              setIsOpenDeleteDialog(false)
            }
            setIsDialogError(true)
            setOpenDialog(true)
          }}
          navigation={props.navigation}
          arrayOrderLimit={orderLimit}
          listSelectedIds={listSelectedIds}
          chooseAll={chooseAll}
          setChooseAll={(isCheckBox) => setChooseAll(isCheckBox)}
          fullSelectedIds={fullSelectedIds}
        />
      </View>
      <DialogInfo
        isOpen={openDialog}
        isError={isDialogError}
        isOrder={false}
        isLoading={true}
        message={message}
        custom={isOpenDeleteDialog}
        closeModal={() => {
          setOpenDialog(false)
        }}
      >
        <View style={styles.dialogDeleteContainer}>
          <Text
            style={styles.messageDeleteProduct}
          >
            Quyết định xoá sản phẩm sẽ ảnh hưởng tới điều kiện nhận khuyến mại. Quý khách có chắc chắn muốn xoá sản phẩm này không
          </Text>
          <View
            style={styles.dialogButtonContainer}
          >
            <Button
              onPressEvent={() => {
                setOpenDialog(false)
              }}
              text={'Hủy'}
            />
            <Button
              styleButton={{
                backgroundColor: 'red',
              }}
              onPressEvent={() => {
                setIsOpenDeleteDialog(false)
                if (deleteProduct) {
                  onDeleteProduct()
                }
              }}
              text={'Xóa'}
            />
          </View>
        </View>
      </DialogInfo>
    </SafeAreaView>
  )
}
export default CartScreen

