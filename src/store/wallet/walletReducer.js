import Status from '../../common/Status/Status'
import { NEOMED } from '../../store/actionsTypes'

const initialState = {
  balanceStatus: Status.DEFAULT,
  accounts: [],

  getWalletStatus: Status.DEFAULT,
  paymentAccounts: [],

  getTransactionHistoryStatus: Status.DEFAULT,
  transactionHistory: [],

  linkPaymentStatus: Status.DEFAULT,
  requestId: '',
  linkPaymentErr : '',

  confirmLinkStatus: Status.DEFAULT,
  accountId: '',
  customerId: '',
  confirmLinkErr: '',

  reqTopupStatus: Status.DEFAULT,
  reqTopupId: '',
  reqTopupErr: '',

  confirmTopupStatus: Status.DEFAULT,
  refNumber: '',
  confirmTopupErr: '',

  infoAccount: {},
  getInfoAccountStatus: Status.DEFAULT,
  getInfoAccountError: '',

  loanCreateError: '',
  loanCreateDetail: null,
  createLoanRequestId: '',
  loanCreateStatus: Status.DEFAULT,

  loanConfirmDetail: null,
  loanConfirmStatus: Status.DEFAULT,
  loanConfirmError: '',

  loanProposalsDetail: null,
  loanProposalsStatus: Status.DEFAULT,
  loanProposalsError: '',

  loanInfoDetail : null,
  loanInfoDetailStatus: Status.DEFAULT,
  loanInfoDetailError: '',

  preCloseError: '',
  preCloseRequestId: '',
  preCloseStatus: Status.DEFAULT,

  preCloseConfirmDetail: null,
  preCloseConfirmStatus: Status.DEFAULT,
  preCloseConfirmError: '',

  linkResourceError: '',
  linkResourceRequestId: '',
  linkResourceStatus: Status.DEFAULT,

  linkResourceConfirmDetail: null,
  linkResourceConfirmStatus: Status.DEFAULT,
  linkResourceConfirmError: '',

  loanCheckDetail: null,
  loanCheckStatus: Status.DEFAULT,
  loanCheckError: '',
  
  customerInfoStatus: Status.DEFAULT,
  customerInfo: null,

  chargeFeeStatus: Status.DEFAULT,
  chargeFee: null,
  chargeFeeError: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEOMED.BALANCE_LOADING:
      return {
        ...state,
        balanceStatus: Status.LOADING,
      }
    case NEOMED.BALANCE_SUCCESS:
      return {
        ...state,
        balanceStatus: Status.SUCCESS,
        accounts: payload.accounts,
      }
    case NEOMED.BALANCE_FAILURE:
      return {
        ...state,
        balanceStatus: Status.FAILURE,
        accounts: [],
      }
    case NEOMED.GET_WALLET_LOADING:
      return {
        ...state,
        getWalletStatus: Status.LOADING,
      }
    case NEOMED.GET_WALLET_SUCCESS:
      return {
        ...state,
        getWalletStatus: Status.SUCCESS,
        paymentAccounts: payload.paymentAccounts,
      }
    case NEOMED.GET_WALLET_FAILURE:
      return {
        ...state,
        getWalletStatus: Status.FAILURE,
        paymentAccounts: [],
      }
    case NEOMED.LINK_PAYMENT_LOADING:
      return {
        ...state,
        linkPaymentStatus: Status.LOADING,
      }
    case NEOMED.LINK_PAYMENT_SUCCESS:
      return {
        ...state,
        linkPaymentStatus: Status.SUCCESS,
        requestId: payload.requestId,
      }
    case NEOMED.LINK_PAYMENT_FAILURE:
      return {
        ...state,
        linkPaymentStatus: Status.ERROR,
        linkPaymentErr: payload.errorMsg,
      }
    case NEOMED.GET_CUSTOMER_INFO_LOADING:
      return {
        ...state,
        customerInfoStatus: Status.LOADING,
      }
    case NEOMED.GET_CUSTOMER_INFO_SUCCESS:
      return {
        ...state,
        customerInfoStatus: Status.SUCCESS,
        customerInfo: payload.customerInfo,
      }
    case NEOMED.GET_CUSTOMER_INFO_FAILURE:
      return {
        ...state,
        customerInfoStatus: Status.ERROR,
      }
    case 'RESET_LINK_PAYMENT_STATUS':{
      return {
        ...state,
        linkPaymentStatus: Status.DEFAULT,
        linkPaymentErr: '',
      }
    }
    case 'RESET_CONFIRM_LINK_PAYMENT_STATUS':{
      return {
        ...state,
        confirmLinkStatus: Status.DEFAULT,
        confirmLinkErr: '',
      }
    }
    case 'RESET_CONFIRM_PAYMENT_STATUS':{
      return {
        ...state,
        confirmLinkStatus: Status.DEFAULT,
        confirmLinkErr: '',
      }
    }
    case NEOMED.CONFIRM_LINK_LOADING:
      return {
        ...state,
        confirmLinkStatus: Status.LOADING,
      }
    case NEOMED.CONFIRM_LINK_SUCCESS:
      return {
        ...state,
        confirmLinkStatus: Status.SUCCESS,
        accountId: payload.accountId,
        customerId: payload.customerId,
      }
    case NEOMED.CONFIRM_LINK_FAILURE:
      return {
        ...state,
        confirmLinkStatus: Status.ERROR,
        confirmLinkErr: payload.errorMsg,
      }
    case NEOMED.REQ_TOPUP_LOADING:
      return {
        ...state,
        reqTopupStatus: Status.LOADING,
      }
    case NEOMED.REQ_TOPUP_SUCCESS:{
      return {
        ...state,
        reqTopupStatus: Status.SUCCESS,
        reqTopupId: payload.reqTopupId,
      }
    }
    case NEOMED.REQ_TOPUP_FAILURE:
    {
      return {
        ...state,
        reqTopupStatus: Status.ERROR,
        reqTopupErr: payload.errorMsg,
      }
    }
    case 'RESET_REQ_TOPUP': {
      return {
        ...state,
        reqTopupStatus: Status.DEFAULT,
        reqTopupErr: '',
      }
    }

    case NEOMED.GET_TRANSACTION_HISTORY_LOADING:
      return {
        ...state,
        getTransactionHistoryStatus: Status.LOADING,
      }
    case NEOMED.GET_TRANSACTION_HISTORY_SUCCESS:
      let transactionHistory = payload.transactionHistory ? payload.transactionHistory : []
      if (payload.loadMore) {
        transactionHistory = [...state.transactionHistory, ...transactionHistory]
      }
      return {
        ...state,
        getTransactionHistoryStatus: Status.SUCCESS,
        transactionHistory,
      }
    case NEOMED.GET_TRANSACTION_HISTORY_FAILURE:
      return {
        ...state,
        getTransactionHistoryStatus: Status.ERROR,
        transactionHistory: [],
      }

    case NEOMED.CONFIRM_TOPUP_LOADING:
      return {
        ...state,
        confirmTopupStatus: Status.LOADING,
      }
    case NEOMED.CONFIRM_TOPUP_SUCCESS:
      return {
        ...state,
        confirmTopupStatus: Status.SUCCESS,
        refNumber: payload.refNumber,
      }
    case NEOMED.CONFIRM_TOPUP_FAILURE:
      return {
        ...state,
        confirmTopupStatus: Status.ERROR,
        confirmTopupErr: payload.errorMsg,
      }
    case 'RESET_CONFIRM_TOPUP': {
      return {
        ...state,
        confirmTopupStatus: Status.DEFAULT,
        confirmTopupErr: '',
      }
    }

    case NEOMED.GET_INFO_WALLET_REQUEST:
      return {
        ...state,
        getInfoAccountStatus: Status.LOADING,
      }
    case NEOMED.GET_INFO_WALLET_SUCCESS:
      return {
        ...state,
        infoAccount: payload,
        getInfoAccountStatus: Status.SUCCESS,
      }
    case NEOMED.GET_INFO_WALLET_FAILURE: 
      return {
        ...state,
        infoAccount: {},
        getInfoAccountStatus: Status.ERROR,
        getInfoAccountError: payload.errorMsg,
      }

    case NEOMED.CREATE_LOAN_REQUEST:
      return {
        ...state,
        loanCreateStatus: Status.LOADING,
      }
    case NEOMED.CREATE_LOAN_SUCCESS:
      return {
        ...state,
        createLoanRequestId: payload.requestId,
        loanCreateStatus: Status.SUCCESS,
      }
    case NEOMED.CREATE_LOAN_FAILURE:
      return {
        ...state,
        loanCreateError: payload.errorMsg,
        loanCreateStatus: Status.ERROR,
      }
    
    case NEOMED.CHECK_LOAN_REQUEST:
      return {
        ...state,
        loanCheckStatus: Status.LOADING,
      }
    case NEOMED.CHECK_LOAN_SUCCESS:
      return {
        ...state,
        loanCheckDetail: payload.loanCheckDetail,
        loanCheckStatus: Status.SUCCESS,
      }
    case NEOMED.CHECK_LOAN_FAILURE:
      return {
        ...state,
        loanCheckError: payload.errorMsg,
        loanCheckStatus: Status.ERROR,
      }

    case NEOMED.GET_LOAN_INFO_REQUEST:
      return {
        ...state,
        loanInfoDetailStatus: Status.LOADING,
      }
    case NEOMED.GET_LOAN_INFO_SUCCESS:
      return {
        ...state,
        loanInfoDetail: payload.loanInfoDetail,
        loanInfoDetailStatus: Status.SUCCESS,
      }
    case NEOMED.GET_LOAN_INFO_FAILURE:
      return {
        ...state,
        loanInfoDetailError: payload.errorMsg,
        loanInfoDetailStatus: Status.ERROR,
      }
    case 'RESET_LOAN_CREATE': {
      return {
        ...state,
        loanCreateError: '',
        loanCreateDetail: null,
        loanCreateStatus: Status.DEFAULT,
        loanConfirmError: '',
        loanConfirmDetail: null,
        loanConfirmStatus: Status.DEFAULT,
      }
    }

    case NEOMED.CREATE_LOAN_CONFIRM_REQUEST:
      return {
        ...state,
        loanConfirmStatus: Status.LOADING,
      }
    case NEOMED.CREATE_LOAN_CONFIRM_SUCCESS:
      return {
        ...state,
        loanConfirmDetail: payload.loanConfirmDetail,
        loanConfirmStatus: Status.SUCCESS,
      }
    case NEOMED.CREATE_LOAN_CONFIRM_FAILURE:
      return {
        ...state,
        loanConfirmError: payload.errorMsg,
        loanConfirmStatus: Status.ERROR,
      }
    case 'RESET_CREATE_LOAN_CONFIRM': {
      return {
        ...state,
        loanConfirmError: '',
        loanConfirmDetail: null,
        loanConfirmStatus: Status.DEFAULT,
      }
    }

    case NEOMED.GET_LOAN_PROPOSALS_REQUEST:
      return {
        ...state,
        loanProposalsStatus: Status.LOADING,
      }
    case NEOMED.GET_LOAN_PROPOSALS_SUCCESS:
      return {
        ...state,
        loanProposalsStatus: Status.SUCCESS,
        loanProposalsDetail: payload.data,
      }
    case NEOMED.GET_LOAN_PROPOSALS_FAILURE:
      return {
        ...state,
        loanProposalsError: payload.errorMsg,
        loanProposalsStatus: Status.ERROR,
      }
    case 'RESET_LOAN_PROPOSALS': {
      return {
        ...state,
        loanProposalsError: '',
        loanProposalsDetail: null,
        loanProposalsStatus: Status.DEFAULT,
      }
    }

    case 'RESET_LOAN_ERROR' :{
      return {
        ...state,
        loanConfirmError: '',
        loanCreateError: '',
        loanProposalsError: '',
        loanInfoDetailError: '',
        loanProposalsStatus: Status.DEFAULT,
        loanConfirmStatus: Status.DEFAULT,
        loanCreateStatus: Status.DEFAULT,
        loanCheckError: '',
        loanCheckStatus: Status.DEFAULT,
      }
    }

    case 'RESET_LOAN' :{
      return {
        ...state,
        loanConfirmError: '',
        loanCreateError: '',
        loanProposalsError: '',
        loanInfoDetailError: '',
        loanProposalsDetail: null,
        loanProposalsStatus: Status.DEFAULT,
        loanConfirmDetail: null,
        createLoanRequestId: '',
        loanConfirmStatus: Status.DEFAULT,
        loanCreateDetail: null,
        loanCreateStatus: Status.DEFAULT,
        loanCheckError: '',
        loanCheckStatus: Status.DEFAULT,
      }
    }

    case NEOMED.PRE_CLOSE_REQUEST:
      return {
        ...state,
        preCloseStatus: Status.LOADING,
      }
    case NEOMED.PRE_CLOSE_SUCCESS:
      return {
        ...state,
        preCloseStatus: Status.SUCCESS,
        preCloseRequestId: payload.requestId,
      }
    case NEOMED.PRE_CLOSE_FAILURE:
      return {
        ...state,
        preCloseError: payload.errorMsg,
        preCloseStatus: Status.ERROR,
      }

    case 'RESET_PRE_CLOSE' :{
      return {
        ...state,
        preCloseConfirmError: '',
        preCloseError: '',
        preCloseStatus: Status.DEFAULT,
        preCloseConfirmStatus: Status.DEFAULT,
      }
    }

    case NEOMED.PRE_CLOSE_CONFIRM_REQUEST:
      return {
        ...state,
        preCloseConfirmStatus: Status.LOADING,
      }
    case NEOMED.PRE_CLOSE_CONFIRM_SUCCESS:
      return {
        ...state,
        preCloseConfirmStatus: Status.SUCCESS,
        preCloseConfirmDetail: payload.data,
      }
    case NEOMED.PRE_CLOSE_CONFIRM_FAILURE:
      return {
        ...state,
        preCloseConfirmError: payload.errorMsg,
        preCloseConfirmStatus: Status.ERROR,
      }
    case 'RESET_PRE_CLOSE_CONFIRM' :{
      return {
        ...state,
        preCloseConfirmError: '',
        preCloseConfirmStatus: Status.DEFAULT,
      }
    }
  
    case NEOMED.LINK_RESOURCE_REQUEST:
      return {
        ...state,
        linkResourceStatus: Status.LOADING,
      }
    case NEOMED.LINK_RESOURCE_SUCCESS:
      return {
        ...state,
        linkResourceStatus: Status.SUCCESS,
        linkResourceRequestId: payload.requestId,
      }
    case NEOMED.LINK_RESOURCE_FAILURE:
      return {
        ...state,
        linkResourceError: payload.errorMsg,
        linkResourceStatus: Status.ERROR,
      }

    case 'RESET_LINK_RESOURCE' :{
      return {
        ...state,
        linkResourceConfirmError: '',
        linkResourceError: '',
        linkResourceStatus: Status.DEFAULT,
        linkResourceConfirmStatus: Status.DEFAULT,
      }
    }

    case NEOMED.LINK_RESOURCE_CONFIRM_REQUEST:
      return {
        ...state,
        linkResourceConfirmStatus: Status.LOADING,
      }
    case NEOMED.LINK_RESOURCE_CONFIRM_SUCCESS:
      return {
        ...state,
        linkResourceConfirmStatus: Status.SUCCESS,
        linkResourceConfirmDetail: payload.data,
      }
    case NEOMED.LINK_RESOURCE_CONFIRM_FAILURE:
      return {
        ...state,
        linkResourceConfirmError: payload.errorMsg,
        linkResourceConfirmStatus: Status.ERROR,
      }
    case 'RESET_LINK_RESOURCE_CONFIRM' :{
      return {
        ...state,
        linkResourceConfirmError: '',
        linkResourceConfirmStatus: Status.DEFAULT,
      }
    }

    case NEOMED.CHARGE_FEE_REQUEST:
      return {
        ...state,
        chargeFeeStatus: Status.LOADING,
      }
    case NEOMED.CHARGE_FEE_SUCCESS:
      return {
        ...state,
        chargeFeeStatus: Status.SUCCESS,
        chargeFee: payload.chargeFee,
      }
    case NEOMED.CHARGE_FEE_FAILURE:
      return {
        ...state,
        chargeFeeError: payload.errorMsg,
        chargeFeeStatus: Status.ERROR,
      }
    default:
      return state
  }
}

