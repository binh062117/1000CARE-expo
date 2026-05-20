import { NEOMED } from '../actionsTypes'

export const getBalance = () => {
  return {
    type: NEOMED.BALANCE_REQUEST,
  }
}

export const getWallet = (page, size) => {
  return {
    type: NEOMED.GET_WALLET_REQUEST,
    payload: {
      page,
      size,
    },
  }
}

export const getInfoWallet = () => {
  return {
    type: NEOMED.GET_INFO_WALLET_REQUEST,
  }
}

export const linkPayment = () => {
  return {
    type: NEOMED.LINK_PAYMENT_REQUEST,
  }
}

export const confirmLinkPayment = (otp, requestId) => {
  return {
    type: NEOMED.CONFIRM_LINK_REQUEST,
    payload: {
      otp,
      requestId,
    },
  }
}

export const requestTopup = (distributorId, amount, paymentCode) => {
  return {
    type: NEOMED.REQ_TOPUP_REQUEST,
    payload: {
      distributorId,
      amount,
      paymentCode,
    },
  }
}

export const confirmTopup = (otp, requestId) => {
  return {
    type: NEOMED.CONFIRM_TOPUP_REQUEST,
    payload: {
      otp,
      requestId,
    },
  }
}

export const resetLinkPaymentStatus = () => {
  return {
    type: 'RESET_LINK_PAYMENT_STATUS',
  }
}

export const resetConfirmLinkStatus = () => {
  return {
    type: 'RESET_CONFIRM_LINK_PAYMENT_STATUS',
  }
}

export const resetConfirmPaymentStatus = () => {
  return {
    type: 'RESET_CONFIRM_PAYMENT_STATUS',
  }
}

export const resetReqTopup = () =>{
  return {
    type: 'RESET_REQ_TOPUP',
  }
}

export const resetConfirmTopup = () => {
  return {
    type: 'RESET_CONFIRM_TOPUP',
  }
}

export const requestGetTransactionHistory = (type, distributorId, page, size, loadMore) => {
  return {
    type: NEOMED.GET_TRANSACTION_HISTORY_REQUEST,
    payload: {
      type,
      distributorId,
      page,
      size,
      loadMore,
    },
  }
}

export const requestCheckLoan = () => {
  return {
    type: NEOMED.CHECK_LOAN_REQUEST,
  }
}

export const requestGetLoanInfo = () => {
  return {
    type: NEOMED.GET_LOAN_INFO_REQUEST,
  }
}

export const requestCreateLoan = (data) => {
  return {
    type: NEOMED.CREATE_LOAN_REQUEST,
    payload: {
      data,
    },
  }
}

export const requestCreateLoanConfirm = (request_id, otp) => {
  var data = { request_id, otp }
  return {
    type: NEOMED.CREATE_LOAN_CONFIRM_REQUEST,
    payload: {
      data,
    },
  }
}
export const resetCreateLoanConfirm = () => {
  return {
    type: 'RESET_CREATE_LOAN_CONFIRM',
  }
}

export const resetLoan= () => {
  return {
    type: 'RESET_LOAN',
  }
}

export const requestPreClose = () => {
  return {
    type: NEOMED.PRE_CLOSE_REQUEST,
  }
}

export const requestPreCloseConfirm = (request_id, otp) => {
  return {
    type: NEOMED.PRE_CLOSE_CONFIRM_REQUEST,
    payload: {
      data: {
        request_id, 
        otp,
      },
    },
  }
}

export const requestGetLoanProposals = () => {
  return {
    type: NEOMED.GET_LOAN_PROPOSALS_REQUEST,
  }
}

export const resetCreateLoan = () => {
  return {
    type: 'RESET_LOAN_CREATE',
  }
}

export const resetLoanError = () => {
  return {
    type: 'RESET_LOAN_ERROR',
  }
}

export const resetPreCloseConfirm = () => {
  return {
    type: 'RESET_PRE_CLOSE_CONFIRM',
  }
}

export const resetPreClose = () => {
  return {
    type: 'RESET_PRE_CLOSE',
  }
}

export const requestLinkResource = () => {
  return {
    type: NEOMED.LINK_RESOURCE_REQUEST,
  }
}

export const requestLinkResourceConfirm = (request_id, otp) => {
  return {
    type: NEOMED.LINK_RESOURCE_CONFIRM_REQUEST,
    payload: {
      data: {
        request_id, 
        otp,
      },
    },
  }
}

export const resetLinkResourceConfirm = () => {
  return {
    type: 'RESET_LINK_RESOURCE_CONFIRM',
  }
}

export const resetLinkResource = () => {
  return {
    type: 'RESET_LINK_RESOURCE',
  }
}

export const requestGetCustomerInfo = () => {
  return {
    type: NEOMED.GET_CUSTOMER_INFO_REQUEST,
  }
}

export const requestChargeFee = (amount, action) => {
  return {
    type: NEOMED.CHARGE_FEE_REQUEST,
    payload: {
      amount,
      action,
    },
  }
}