import { takeLatest, call, put } from 'redux-saga/effects'
import { NEOMED } from '../actionsTypes'
import * as APINeoMed from '~/neomed'

function* getBalance({ payload }) {
  try {
    yield put({
      type: NEOMED.BALANCE_LOADING,
    })
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.getBalances },
    )
    console.log('getBalances data:',data)
    yield put({
      type: NEOMED.BALANCE_SUCCESS,
      payload: {
        accounts: data?.balances,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.BALANCE_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* getWallet({ payload }) {
  try {
    yield put({
      type: NEOMED.GET_WALLET_LOADING,
    })
        
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.getLinkAccount },
      payload.page, payload.size,
    )
    console.log('getWallet dataaaaaaaa:',data)
    yield put({
      type: NEOMED.GET_WALLET_SUCCESS,
      payload: {
        paymentAccounts: data.payment_accounts,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.GET_WALLET_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* linkPayment({ payload }) {
  try {
    yield put({
      type: NEOMED.LINK_PAYMENT_LOADING,
    })
    
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.linkPayment },
    )
    console.log('linkPayment data:',data)
    yield put({
      type: NEOMED.LINK_PAYMENT_SUCCESS,
      payload: {
        requestId: data.data.request_id,
      },
    })
  } catch(e) {
    console.log('linkPayment err ', e)
    yield put({
      type: NEOMED.LINK_PAYMENT_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* confirmLinkPayment({ payload }) {
  try {
    yield put({
      type: NEOMED.CONFIRM_LINK_LOADING,
    })
    
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.confirmLinkPayment },
      payload.otp, payload.requestId,
    )
    console.log('confirmlinkPayment data:',data)
    yield put({
      type: NEOMED.CONFIRM_LINK_SUCCESS,
      payload: {
        customerId: data.customer_id,
        accountId: data.account_number,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.CONFIRM_LINK_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* requestTopup({ payload }) {
  try {
    yield put({
      type: NEOMED.REQ_TOPUP_LOADING,
    })
    
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.requestTopup },
      payload.distributorId, payload.amount, payload.paymentCode,
    )
    console.log('requestTopup data:',data)
    yield put({
      type: NEOMED.REQ_TOPUP_SUCCESS,
      payload: {
        reqTopupId: data.data.request_id,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.REQ_TOPUP_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* chargeFee({ payload }) {
  try {
    yield put({
      type: NEOMED.CHARGE_FEE_LOADING,
    })
    
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.chargeFee },
      payload.amount, payload.action,
    )
    console.log('chargeFee data:',data)
    yield put({
      type: NEOMED.CHARGE_FEE_SUCCESS,
      payload: {
        chargeFee: data.data,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.CHARGE_FEE_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* confirmTopup({ payload }) {
  try {
    yield put({
      type: NEOMED.CONFIRM_TOPUP_LOADING,
    })
    
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.confirmTopup },
      payload.otp, payload.requestId,
    )
    console.log('confirmTopup data:', data)
    yield put({
      type: NEOMED.CONFIRM_TOPUP_SUCCESS,
      payload: {
        reqTopupId: data.request_id,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.CONFIRM_TOPUP_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* requestGetCustomerInfo({}) {
  try {
    yield put({
      type: NEOMED.GET_CUSTOMER_INFO_LOADING,
    })
    
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.getCustomerInfo },
    )
    console.log('requestGetCustomerInfo data:',data)
    yield put({
      type: NEOMED.GET_CUSTOMER_INFO_SUCCESS,
      payload: {
        customerInfo: data.data,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.GET_CUSTOMER_INFO_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* requestGetTransactionHistory({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.getTransactionHistory },
      payload.type, payload.distributorId, payload.page, payload.size,
    )
    yield put({
      type: NEOMED.GET_TRANSACTION_HISTORY_SUCCESS,
      payload: {
        transactionHistory: data.data ? data.data : [],
        loadMore: payload.loadMore,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.GET_TRANSACTION_HISTORY_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function*requestInfoWallet() {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.getInfoWallet },
    )
    console.log('Infor Account Bankkkkk:',data)
    yield put({
      type: NEOMED.GET_INFO_WALLET_SUCCESS,
      payload: data.data,
    })
  }catch(e) {
    yield put({
      type: NEOMED.GET_INFO_WALLET_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* requestCheckLoan({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.checkLoan },
    )
    yield put({
      type: NEOMED.CHECK_LOAN_SUCCESS,
      payload: {
        loanCheckDetail: data.data,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.CHECK_LOAN_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* requestGetLoanInfo({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.getLoanInfo },
    )
    yield put({
      type: NEOMED.GET_LOAN_INFO_SUCCESS,
      payload: {
        loanInfoDetail: data.data,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.GET_LOAN_INFO_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* requestCreateLoan({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.createLoan },
      payload.data, 
    )
    yield put({
      type: NEOMED.CREATE_LOAN_SUCCESS,
      payload: {
        requestId: data.data.request_id,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.CREATE_LOAN_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* requestCreateLoanConfirm({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.createLoanConfirm },
      payload.data, 
    )
    yield put({
      type: NEOMED.CREATE_LOAN_CONFIRM_SUCCESS,
      payload: {
        loanConfirmDetail: data.data,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.CREATE_LOAN_CONFIRM_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* requestPreClose({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.preClose },
    )
    yield put({
      type: NEOMED.PRE_CLOSE_SUCCESS,
      payload: {
        requestId: data.data.request_id,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.PRE_CLOSE_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* requestPreCloseConfirm({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.preCloseConfirm },
      payload.data, 
    )
    yield put({
      type: NEOMED.PRE_CLOSE_CONFIRM_SUCCESS,
      payload: {
        data: data.data,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.PRE_CLOSE_CONFIRM_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* requestGetLoanProposals({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.getLoanProposals },
    )
    yield put({
      type: NEOMED.GET_LOAN_PROPOSALS_SUCCESS,
      payload: {
        data: data.data,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.GET_LOAN_PROPOSALS_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* linkResource({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.linkResource },
    )
    console.log('linkResource data:',data)
    yield put({
      type: NEOMED.LINK_RESOURCE_SUCCESS,
      payload: {
        requestId: data.data.request_id,
      },
    })
  } catch(e) {
    console.log('linkResource err ', e)
    yield put({
      type: NEOMED.LINK_RESOURCE_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

function* linkResourceConfirm({ payload }) {
  try {
    const data = yield call(
      { content: APINeoMed, fn: APINeoMed.Ewallet.linkResourceConfirm },
      payload.data,
    )
    console.log('linkResourceConfirm data:',data)
    yield put({
      type: NEOMED.LINK_RESOURCE_CONFIRM_SUCCESS,
      payload: {
        customerId: data.customer_id,
        accountId: data.account_number,
      },
    })
  } catch(e) {
    yield put({
      type: NEOMED.LINK_RESOURCE_CONFIRM_FAILURE,
      payload: {
        errorMsg: e,
      },
    })
  }
}

export default function* watcherSaga() {
  yield takeLatest(NEOMED.BALANCE_REQUEST, getBalance)
  yield takeLatest(NEOMED.GET_WALLET_REQUEST, getWallet)
  yield takeLatest(NEOMED.LINK_PAYMENT_REQUEST, linkPayment)
  yield takeLatest(NEOMED.CONFIRM_LINK_REQUEST, confirmLinkPayment)
  yield takeLatest(NEOMED.REQ_TOPUP_REQUEST, requestTopup)
  yield takeLatest(NEOMED.CONFIRM_TOPUP_REQUEST, confirmTopup)
  yield takeLatest(NEOMED.GET_TRANSACTION_HISTORY_REQUEST, requestGetTransactionHistory)
  yield takeLatest(NEOMED.GET_INFO_WALLET_REQUEST, requestInfoWallet)
  yield takeLatest(NEOMED.CHECK_LOAN_REQUEST, requestCheckLoan)
  yield takeLatest(NEOMED.GET_LOAN_INFO_REQUEST, requestGetLoanInfo)
  yield takeLatest(NEOMED.CREATE_LOAN_REQUEST, requestCreateLoan)
  yield takeLatest(NEOMED.CREATE_LOAN_CONFIRM_REQUEST, requestCreateLoanConfirm)
  yield takeLatest(NEOMED.PRE_CLOSE_REQUEST, requestPreClose)
  yield takeLatest(NEOMED.PRE_CLOSE_CONFIRM_REQUEST, requestPreCloseConfirm)
  yield takeLatest(NEOMED.GET_LOAN_PROPOSALS_REQUEST, requestGetLoanProposals)
  yield takeLatest(NEOMED.LINK_RESOURCE_REQUEST, linkResource)
  yield takeLatest(NEOMED.LINK_RESOURCE_CONFIRM_REQUEST, linkResourceConfirm)
  yield takeLatest(NEOMED.GET_CUSTOMER_INFO_REQUEST, requestGetCustomerInfo)
  yield takeLatest(NEOMED.CHARGE_FEE_REQUEST, chargeFee)
}