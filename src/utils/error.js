const errMap = new Map([
  /*Register*/
  ['204', 'National Identity is invalid'],
  ['2040', 'National Identity already exists'],
  ['206', 'File type is invalid'],
  ['219', 'Mobile number is invalid'],
  ['2190', 'Mobile number not match with MB info'],
  ['237', 'Mã xác thực không hợp lệ'],
  ['268', 'Invalid issue date'],
  ['278', 'Wallet ID is invalid'],
  ['2780', 'Wallet ID already exists'],
  ['279', 'Customer name is invalid'],
  ['280', 'Email is invalid'],
  ['281', 'Date of birth is invalid'],
  ['4080', 'Service not declare in config!'],
  ['4630', 'Invalid request'],
  ['500', 'Unknown error'],
  ['282', 'Gender is invalid'],
  ['502', 'Database error'],
  ['290', 'Input place of issue invalid'],
  ['2860', 'Current or residence address is invalid'],
  ['288', 'Current or residence street is invalid'],
  ['289', 'Current or residence town code is invalid'],
  ['2940', 'Current or residence ward code is invalid'],
  ['287', 'Current or residence district code is invalid'],

  /*---Payment---*/
  ['209', 'Amount is invalid'],
  ['219', 'Mobile number is invalid'],
  ['2190', 'Mobile number not match with MB info'],
  ['231', 'Card number is invalid'],
  ['240', 'Limit has reached the maximum'],
  ['255', 'Card status not valid'],
  ['272', 'Transaction value does not meet minimum limit set by bank'],
  ['278', 'Wallet ID is invalid'],
  ['2781', 'Wallet ID does not exists'],
  ['2840', 'Resource does not exists'],
  ['285', 'Invalid details'],
  ['286', 'Card is disable'],
  ['400', 'Account balance is insufficient'],
  ['4013', 'Unacceptable transaction fee'],
  ['4058', 'Limit not setuped'],
  ['4080', 'Service not declare in config!'],
  ['4110', 'The number of transactions per day exceeded the limit'],
  ['4111', 'The daily transaction amount exceeded the limit'],
  ['414', 'Service is not supported'],
  ['418', 'Transaction is pending'],
  ['429', 'Tranfer money is failed'],
  ['451', 'The customer has not yet identified'],
  ['4605', 'Card not registered for online payment'],
  ['500', 'Unknown error'],
  ['502', 'Database error'],
  ['284', 'ResourceId is invalid'],
])

export const handleError = (body, statusCode) => {
  // Logic for 401 should be handled in the interceptor to avoid require cycles
  if (statusCode === 401) {
    return 'UNAUTHORIZED'
  }
  
  if (!body) 
    return 'Có lỗi xảy ra ' + statusCode

  if(typeof body.error === 'string') {
    return body.message || body.error
  } else if (body.errors && body.errors.length > 0) {
    return body.errors[0].title || body.errors[0].message
  } else if (body.message) {
    return body.message
  }
  
  return 'Có lỗi xảy ra ' + statusCode
}