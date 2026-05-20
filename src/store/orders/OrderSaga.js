import { takeLatest, call, put, select } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '~/neomed'
import { getUserId } from '../selector'

function* getOrders({ payload }) {
  try {
    const state = yield select()
    var data= {}
    // if(payload.status ==13 && payload.loadMore == false){
    //   let order = [];
    //   const data1 = yield call(
    //     { content: APINeoMed, fn: APINeoMed.Orders.getAll },
    //     payload.loadMore ? state.order.next : '', payload.size, payload.status, payload.paymentMethob, payload.paymentStatus,
    //   )
    //   const data2 = yield call(
    //     { content: APINeoMed, fn: APINeoMed.Orders.getAll },
    //     payload.loadMore ? state.order.next : '', 0, 2, payload.paymentMethob, payload.paymentStatus,
    //   )
    //   console.log('LSLLLLLLLLL:',data1,data2)
    //   order = [...data1?.orders,...data2?.orders];
    //   data = {"next": data1.next, orders: order}
    // } else {
    //   var data1 = yield call(
    //     { content: APINeoMed, fn: APINeoMed.Orders.getAll },
    //     payload.loadMore ? state.order.next : '', payload.size, payload.status, payload.paymentMethob, payload.paymentStatus,
    //   )
    //   data = data1;
    //   console.log('DLKAJDLKAJJDKDDDDDD:',data)
    // }
    if(payload.status ==13){
      const data1 = yield call(
        { content: APINeoMed, fn: APINeoMed.Orders.getAll },
        payload.loadMore ? state.order.next : '', payload.size, '2,13,15,17,18,19', payload.paymentMethob, payload.paymentStatus,
      )
      data = data1
    } else if(payload.status ==3) {
      const data2 = yield call(
        { content: APINeoMed, fn: APINeoMed.Orders.getAll },
        payload.loadMore ? state.order.next : '', payload.size, '3,10,20,21,22', payload.paymentMethob, payload.paymentStatus,
      )
      data = data2
    } else {
      const data3 = yield call(
        { content: APINeoMed, fn: APINeoMed.Orders.getAll },
        payload.loadMore ? state.order.next : '', payload.size, payload.status, payload.paymentMethob, payload.paymentStatus,
      )
      data = data3
    }
    console.log('DLKAJDLKAJJDKDDDDDD:',data)
    yield put({
      type: NEOMED.GET_ORDERS_SUCCESS,
      payload: {
        listOrders: data.orders ? data.orders : [],
        next: data.next,
        loadMore: payload.loadMore,
      },
    })
  } catch(e) {
    console.log(e)
    yield put({
      type: NEOMED.GET_ORDERS_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* getOrderDetails({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Orders.getOne },
      payload.orderId,
    )
    
    console.log('getOrderDetails ',data)
    yield put({
      type: NEOMED.ORDER_DETAILS_SUCCESS,
      payload: {
        orderDetails: data?.order ? { 
          ...data.order, 
          address: JSON.parse(data.order?.address), 
          items: JSON.parse(data.order?.items),
          metadata:{
            ...(data.order?.metadata || {}),
            voucher: data.order?.metadata?.voucher ? JSON.parse(data.order?.metadata?.voucher) : null,
          },
        } : {},
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.ORDER_DETAILS_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* paymentOrder({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Orders.paymentOrder },
      payload.orderId, payload.paymentCode,
    )
    
    console.log('paymentOrder ',data)
    yield put({
      type: NEOMED.ORDER_PAYMENT_SUCCESS,
    })
  } catch(e) {
    console.log('paymentOrder ',e)
    yield put({
      type: NEOMED.ORDER_DETAILS_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* paymentListOrderByBank({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Orders.paymentListOrderByBank },
      payload.orderIds, payload.distributorId, payload.paymentCode,
    )
    
    console.log('paymentListOrderByBank ',data)
    yield put({
      type: NEOMED.LIST_ORDER_PAYMENT_SUCCESS,
      payload:{
        requestId: data.require_id, 
      },
    })
  } catch(e) {
    console.log('paymentListOrderByBank ',e)
    yield put({
      type: NEOMED.LIST_ORDER_PAYMENT_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* userConfirm({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Orders.userConfirm },
      payload.orderId,
    )
    
    console.log('userConfirm ',data)
    yield put({
      type: NEOMED.USER_CONFIRM_SUCCESS,
    })
  } catch(e) {
    console.log('userConfirm ',e)
    yield put({
      type: NEOMED.USER_CONFIRM_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* getItemHistory({ payload }) {
  try {
    console.log('payload', payload)
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Orders.getItemHistory },
      payload.orderId, payload.cursor,
    )
    
    console.log('getItemHistory ',data)
    yield put({
      type: NEOMED.GET_ITEM_HISTORY_SUCCESS,
      payload: {
        orderItemHistory: data.items,
      },
    })
  } catch(e) {
    console.log('getItemHistory ',e)
    yield put({
      type: NEOMED.GET_ITEM_HISTORY_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* paymentByBankConfirm({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Orders.paymentByBankConfirm },
      payload.otp, payload.requestId,
    )
    
    console.log('paymentByBankConfirm ', data)
    yield put({
      type: NEOMED.LIST_ORDER_CONFIRM_PAYMENT_SUCCESS,
    })
  } catch(e) {
    console.log('paymentByBakConfirm ', e)
    yield put({
      type: NEOMED.LIST_ORDER_CONFIRM_PAYMENT_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* buyAgain({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Orders.buyAgain },
      payload.orderId,
    )
    
    const listOrders = (data.items || []).map(d => { 
      return {
        error: '',
        item: d,
      }
    })
    listOrders.push(...(data.items_err || []))

    yield put({
      type: NEOMED.BUY_AGAIN_SUCCESS,
      payload: {
        listOrders: listOrders,
      },
    })
  } catch(e) {
    console.log('buyAgain ', e)
    yield put({
      type: NEOMED.BUY_AGAIN_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* changeOrderStatus({ payload }) {
  try {
    const state = yield select()
    const userId = getUserId(state)
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Orders.changeOrderStatus },
      payload.orderId,
      userId,
      payload.reason,
    )
    yield put({
      type: NEOMED.CHANGE_ORDER_STATUS_SUCCESS,
      payload: {
        data,
      },
    })
  } catch(e) {
    console.log('changeOrderStatus ', e)
    yield put({
      type: NEOMED.CHANGE_ORDER_STATUS_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

export default function*watcherOrders() {
  yield takeLatest(NEOMED.GET_ORDERS_REQUEST, getOrders)
  yield takeLatest(NEOMED.ORDER_PAYMENT_REQUEST, paymentOrder)
  yield takeLatest(NEOMED.ORDER_DETAILS_REQUEST, getOrderDetails)
  yield takeLatest(NEOMED.LIST_ORDER_PAYMENT_REQUEST, paymentListOrderByBank)
  yield takeLatest(NEOMED.LIST_ORDER_CONFIRM_PAYMENT_REQUEST, paymentByBankConfirm)
  yield takeLatest(NEOMED.BUY_AGAIN_REQUEST, buyAgain)
  yield takeLatest(NEOMED.USER_CONFIRM_REQUEST, userConfirm)
  yield takeLatest(NEOMED.GET_ITEM_HISTORY_REQUEST, getItemHistory)
  yield takeLatest(NEOMED.CHANGE_ORDER_STATUS_REQUEST, changeOrderStatus)
}
