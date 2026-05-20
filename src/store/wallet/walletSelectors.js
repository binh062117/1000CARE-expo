export const getAccounts = state => state.wallet.accounts
export const getPaymentAccount = state => state.wallet.paymentAccounts
export const getWalletStatus = state => state.wallet.getWalletStatus
export const getLinkPaymentReqId = state => state.wallet.requestId
export const getLinkPaymentStatus = state => state.wallet.linkPaymentStatus
export const getLinkPaymentErr = state => state.wallet.linkPaymentErr
export const getConfirmLinkStatus = state => state.wallet.confirmLinkStatus
export const getConfirmLinkErr = state => state.wallet.confirmLinkErr
export const getReqTopupStatus = state => state.wallet.reqTopupStatus
export const getReqTopupErr = state => state.wallet.reqTopupErr
export const getTopupReqId = state => state.wallet.reqTopupId
export const getConfirmTopupStatus = state => state.wallet.confirmTopupStatus
export const getConfirmToupErr = state => state.wallet.confirmTopupErr
export const getTopupRefNumber = state => state.wallet.refNumber
export const getTransactionHistory = state => state.wallet.transactionHistory

export const getInfoAccount = state => state.wallet.infoAccount
export const getInfoAccountError = state => state.wallet.getInfoAccountError
export const getInfoAccountStatus = state => state.wallet.getInfoAccountStatus

export const getLoanCreateStatus = state => state.wallet.loanCreateStatus
export const getCreateLoanRequestId = state => state.wallet.createLoanRequestId
export const getLoanCreateError = state => state.wallet.loanCreateError
export const getLoanConfirmStatus = state => state.wallet.loanConfirmStatus
export const getLoanConfirmError = state => state.wallet.loanConfirmError
export const getLoanProposalsStatus = state => state.wallet.loanProposalsStatus
export const getLoanProposalsDetail = state => state.wallet.loanProposalsDetail
export const getLoanProposalsError = state => state.wallet.loanProposalsError
export const getLoanInfo = state => state.wallet.loanInfoDetail
export const getLoanInfoStatus = state => state.wallet.loanInfoDetailStatus
export const getLoanInfoError = state => state.wallet.loanInfoDetailError

export const getPreCloseRequestId = state => state.wallet.preCloseRequestId
export const getPreCloseStatus = state => state.wallet.preCloseStatus
export const getPreCloseError = state => state.wallet.preCloseError

export const getPreCloseConfirmStatus = state => state.wallet.preCloseConfirmStatus
export const getPreCloseConfirmError = state => state.wallet.preCloseConfirmError

export const getLinkResourceRequestId = state => state.wallet.linkResourceRequestId
export const getLinkResourceStatus = state => state.wallet.linkResourceStatus
export const getLinkResourceError = state => state.wallet.linkResourceError

export const getLinkResourceConfirmStatus = state => state.wallet.linkResourceConfirmStatus
export const getLinkResourceConfirmError = state => state.wallet.linkResourceConfirmError

export const getLoanCheckStatus = state => state.wallet.loanCheckStatus
export const getLoanCheckDetail = state => state.wallet.loanCheckDetail
export const getLoanCheckError = state => state.wallet.loanCheckError

export const getCustomerInfoStatus = state => state.wallet.customerInfoStatus
export const getCustomerInfo = state => state.wallet.customerInfo

export const getChargeFeeStatus = state => state.wallet.chargeFeeStatus
export const getChargeFee = state => state.wallet.chargeFee
export const getChargeFeeError = state => state.wallet.chargeFeeError