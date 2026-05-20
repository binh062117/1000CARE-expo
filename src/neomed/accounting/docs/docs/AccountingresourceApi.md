# NeomedAccountingApi.AccountingResourceApi

All URIs are relative to *//123.31.29.218:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAccountUsingPOST**](AccountingResourceApi.md#addAccountUsingPOST) | **POST** /accounting/account/{userId} | addAccount
[**balanceUsingPOST**](AccountingResourceApi.md#balanceUsingPOST) | **POST** /accounting/balance/{userId} | balance
[**paymentUsingPOST**](AccountingResourceApi.md#paymentUsingPOST) | **POST** /accounting/payment/{userId} | payment
[**topupUsingPOST**](AccountingResourceApi.md#topupUsingPOST) | **POST** /accounting/topup/{userId} | topup

<a name="addAccountUsingPOST"></a>
# **addAccountUsingPOST**
> AddAccountResponseDTO addAccountUsingPOST(bodyuserId)

addAccount

### Example
```javascript
import NeomedAccountingApi from 'neomed_accounting_api';

let apiInstance = new NeomedAccountingApi.AccountingResourceApi();
let body = new NeomedAccountingApi.AddAccountRequestDTO(); // AddAccountRequestDTO | req
let userId = 789; // Number | userId

apiInstance.addAccountUsingPOST(bodyuserId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AddAccountRequestDTO**](AddAccountRequestDTO.md)| req | 
 **userId** | **Number**| userId | 

### Return type

[**AddAccountResponseDTO**](AddAccountResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="balanceUsingPOST"></a>
# **balanceUsingPOST**
> BalanceReponseDTO balanceUsingPOST(userId)

balance

### Example
```javascript
import NeomedAccountingApi from 'neomed_accounting_api';

let apiInstance = new NeomedAccountingApi.AccountingResourceApi();
let userId = 789; // Number | userId

apiInstance.balanceUsingPOST(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| userId | 

### Return type

[**BalanceReponseDTO**](BalanceReponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="paymentUsingPOST"></a>
# **paymentUsingPOST**
> PaymentResponseDTO paymentUsingPOST(bodyuserId)

payment

### Example
```javascript
import NeomedAccountingApi from 'neomed_accounting_api';

let apiInstance = new NeomedAccountingApi.AccountingResourceApi();
let body = new NeomedAccountingApi.PaymentRequestDTO(); // PaymentRequestDTO | paymentReq
let userId = 789; // Number | userId

apiInstance.paymentUsingPOST(bodyuserId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PaymentRequestDTO**](PaymentRequestDTO.md)| paymentReq | 
 **userId** | **Number**| userId | 

### Return type

[**PaymentResponseDTO**](PaymentResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="topupUsingPOST"></a>
# **topupUsingPOST**
> TopUpResponseDTO topupUsingPOST(bodyuserId)

topup

### Example
```javascript
import NeomedAccountingApi from 'neomed_accounting_api';

let apiInstance = new NeomedAccountingApi.AccountingResourceApi();
let body = new NeomedAccountingApi.TopUpRequestDTO(); // TopUpRequestDTO | topUpReq
let userId = 789; // Number | userId

apiInstance.topupUsingPOST(bodyuserId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TopUpRequestDTO**](TopUpRequestDTO.md)| topUpReq | 
 **userId** | **Number**| userId | 

### Return type

[**TopUpResponseDTO**](TopUpResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

