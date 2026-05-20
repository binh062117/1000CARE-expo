# NeomedApi.EwalletApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ewalletControllerConfirmPaymentAccount**](EwalletApi.md#ewalletControllerConfirmPaymentAccount) | **POST** /ewallet/confirm-linked-payment-account | 
[**ewalletControllerCreatePaymentAccount**](EwalletApi.md#ewalletControllerCreatePaymentAccount) | **POST** /ewallet/linked-payment-account | 
[**ewalletControllerGetBalances**](EwalletApi.md#ewalletControllerGetBalances) | **GET** /ewallet/get-balances | 
[**ewalletControllerGetBalancesBO**](EwalletApi.md#ewalletControllerGetBalancesBO) | **GET** /ewallet/bo-get-balances | 
[**ewalletControllerGetChargeFee**](EwalletApi.md#ewalletControllerGetChargeFee) | **GET** /ewallet/charge-fee | 
[**ewalletControllerGetCheckLoan**](EwalletApi.md#ewalletControllerGetCheckLoan) | **GET** /ewallet/loan-check | 
[**ewalletControllerGetCustomerInfoCurrentUser**](EwalletApi.md#ewalletControllerGetCustomerInfoCurrentUser) | **GET** /ewallet/customer-info | 
[**ewalletControllerGetLinkResourceRequest**](EwalletApi.md#ewalletControllerGetLinkResourceRequest) | **GET** /ewallet/link-resource-request | 
[**ewalletControllerGetLinkedPaymentAccount**](EwalletApi.md#ewalletControllerGetLinkedPaymentAccount) | **GET** /ewallet/get-linked-payment-account | 
[**ewalletControllerGetLoanInfoCurrentUser**](EwalletApi.md#ewalletControllerGetLoanInfoCurrentUser) | **GET** /ewallet/loan-info | 
[**ewalletControllerGetOne**](EwalletApi.md#ewalletControllerGetOne) | **GET** /ewallet/info | 
[**ewalletControllerGetPreCloseRequest**](EwalletApi.md#ewalletControllerGetPreCloseRequest) | **GET** /ewallet/pre-close-request | 
[**ewalletControllerGetProposals**](EwalletApi.md#ewalletControllerGetProposals) | **GET** /ewallet/proposals | 
[**ewalletControllerGetTransHistory**](EwalletApi.md#ewalletControllerGetTransHistory) | **GET** /ewallet/get-trans-his | 
[**ewalletControllerListAllPaymentAccount**](EwalletApi.md#ewalletControllerListAllPaymentAccount) | **GET** /ewallet/full-linked-payment-account | 
[**ewalletControllerPostBOTopUpRequest**](EwalletApi.md#ewalletControllerPostBOTopUpRequest) | **POST** /ewallet/bo-topup | 
[**ewalletControllerPostCreateLoanConfirm**](EwalletApi.md#ewalletControllerPostCreateLoanConfirm) | **POST** /ewallet/create-loan-confirm | 
[**ewalletControllerPostCreateLoanRequest**](EwalletApi.md#ewalletControllerPostCreateLoanRequest) | **POST** /ewallet/create-loan-request | 
[**ewalletControllerPostLinkResourceConfirm**](EwalletApi.md#ewalletControllerPostLinkResourceConfirm) | **POST** /ewallet/link-resource-confirm | 
[**ewalletControllerPostPreCloseConfirm**](EwalletApi.md#ewalletControllerPostPreCloseConfirm) | **POST** /ewallet/pre-close-confirm | 
[**ewalletControllerPostTopUpConfirm**](EwalletApi.md#ewalletControllerPostTopUpConfirm) | **POST** /ewallet/topup-confirm | 
[**ewalletControllerPostTopUpConfirm_0**](EwalletApi.md#ewalletControllerPostTopUpConfirm_0) | **POST** /ewallet/topup-request | 
[**ewalletControllerPostUnlinkResource**](EwalletApi.md#ewalletControllerPostUnlinkResource) | **POST** /ewallet/unlink-resource | 
[**ewalletControllerUnlinkPaymentAccount**](EwalletApi.md#ewalletControllerUnlinkPaymentAccount) | **DELETE** /ewallet/unlink-payment-account | 


<a name="ewalletControllerConfirmPaymentAccount"></a>
# **ewalletControllerConfirmPaymentAccount**
> PresenterRegisterConfirmResponse ewalletControllerConfirmPaymentAccount(body)



create Ewallet &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var body = new NeomedApi.PresenterRegisterConfirmRequest(); // PresenterRegisterConfirmRequest | body for Ewallet content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerConfirmPaymentAccount(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterRegisterConfirmRequest**](PresenterRegisterConfirmRequest.md)| body for Ewallet content | 

### Return type

[**PresenterRegisterConfirmResponse**](PresenterRegisterConfirmResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ewalletControllerCreatePaymentAccount"></a>
# **ewalletControllerCreatePaymentAccount**
> PresenterRegisterRequestResponse ewalletControllerCreatePaymentAccount()



create Ewallet &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerCreatePaymentAccount(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterRegisterRequestResponse**](PresenterRegisterRequestResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ewalletControllerGetBalances"></a>
# **ewalletControllerGetBalances**
> PresenterBalanceAccountResponse ewalletControllerGetBalances(opts)



GetBalances &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var opts = { 
  'payment': 789 // Number | payment_enable
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerGetBalances(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment** | **Number**| payment_enable | [optional] 

### Return type

[**PresenterBalanceAccountResponse**](PresenterBalanceAccountResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ewalletControllerGetBalancesBO"></a>
# **ewalletControllerGetBalancesBO**
> PresenterBalanceAccountResponse ewalletControllerGetBalancesBO(opts)



GetBalancesBO &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var opts = { 
  'userId': "userId_example" // String | User id. Must be an integer
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerGetBalancesBO(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User id. Must be an integer | [optional] 

### Return type

[**PresenterBalanceAccountResponse**](PresenterBalanceAccountResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ewalletControllerGetChargeFee"></a>
# **ewalletControllerGetChargeFee**
> PresenterGetChargeFeeResponse ewalletControllerGetChargeFee(opts)



GetChargeFee &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var opts = { 
  'amount': 789, // Number | Must be an integer
  'action': 56 // Number | Must be an integer
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerGetChargeFee(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **Number**| Must be an integer | [optional] 
 **action** | **Number**| Must be an integer | [optional] 

### Return type

[**PresenterGetChargeFeeResponse**](PresenterGetChargeFeeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ewalletControllerGetCheckLoan"></a>
# **ewalletControllerGetCheckLoan**
> PresenterCheckLoanResponse ewalletControllerGetCheckLoan()



GetCheckLoan &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerGetCheckLoan(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterCheckLoanResponse**](PresenterCheckLoanResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ewalletControllerGetCustomerInfoCurrentUser"></a>
# **ewalletControllerGetCustomerInfoCurrentUser**
> PresenterGetCustomerInfoResponse ewalletControllerGetCustomerInfoCurrentUser()



GetCustomerInfo &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerGetCustomerInfoCurrentUser(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterGetCustomerInfoResponse**](PresenterGetCustomerInfoResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ewalletControllerGetLinkResourceRequest"></a>
# **ewalletControllerGetLinkResourceRequest**
> PresenterLinkResourceRequestResponse ewalletControllerGetLinkResourceRequest()



GetLinkResourceRequest &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerGetLinkResourceRequest(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterLinkResourceRequestResponse**](PresenterLinkResourceRequestResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ewalletControllerGetLinkedPaymentAccount"></a>
# **ewalletControllerGetLinkedPaymentAccount**
> PresenterListPaymentAccountResponse ewalletControllerGetLinkedPaymentAccount(opts)



GetLinkedPaymentAccount &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var opts = { 
  'size': "size_example", // String | Size of result set. Must be an integer
  'page': "page_example" // String | Page number of view. Must be an integer
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerGetLinkedPaymentAccount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListPaymentAccountResponse**](PresenterListPaymentAccountResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ewalletControllerGetLoanInfoCurrentUser"></a>
# **ewalletControllerGetLoanInfoCurrentUser**
> PresenterGetLoanInfoResponse ewalletControllerGetLoanInfoCurrentUser()



GetLoanInfo &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerGetLoanInfoCurrentUser(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterGetLoanInfoResponse**](PresenterGetLoanInfoResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ewalletControllerGetOne"></a>
# **ewalletControllerGetOne**
> PresenterWalletInfoResponse ewalletControllerGetOne()



get Ewallet &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerGetOne(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterWalletInfoResponse**](PresenterWalletInfoResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ewalletControllerGetPreCloseRequest"></a>
# **ewalletControllerGetPreCloseRequest**
> PresenterPreCloseRequestResponse ewalletControllerGetPreCloseRequest()



GetPreCloseRequest &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerGetPreCloseRequest(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterPreCloseRequestResponse**](PresenterPreCloseRequestResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ewalletControllerGetProposals"></a>
# **ewalletControllerGetProposals**
> PresenterGetProposalsResponse ewalletControllerGetProposals()



GetProposals &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerGetProposals(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterGetProposalsResponse**](PresenterGetProposalsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ewalletControllerGetTransHistory"></a>
# **ewalletControllerGetTransHistory**
> PresenterLogEventResponse ewalletControllerGetTransHistory(type, opts)



GetTransHistory &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var type = "type_example"; // String | history type: all, topup...

var opts = { 
  'size': "size_example", // String | Size of result set. Must be an integer
  'page': "page_example" // String | Page number of view. Must be an integer
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerGetTransHistory(type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| history type: all, topup... | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterLogEventResponse**](PresenterLogEventResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ewalletControllerListAllPaymentAccount"></a>
# **ewalletControllerListAllPaymentAccount**
> PresenterListPaymentAccountResponse ewalletControllerListAllPaymentAccount(opts)



ListAllPaymentAccount &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var opts = { 
  'size': "size_example", // String | Size of result set. Must be an integer
  'page': "page_example" // String | Page number of view. Must be an integer
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerListAllPaymentAccount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListPaymentAccountResponse**](PresenterListPaymentAccountResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ewalletControllerPostBOTopUpRequest"></a>
# **ewalletControllerPostBOTopUpRequest**
> PresenterBOTopUpResponse ewalletControllerPostBOTopUpRequest(body)



PostBOTopUpRequest &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var body = new NeomedApi.PresenterBOTopUpRequest(); // PresenterBOTopUpRequest | body for Ewallet content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerPostBOTopUpRequest(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterBOTopUpRequest**](PresenterBOTopUpRequest.md)| body for Ewallet content | 

### Return type

[**PresenterBOTopUpResponse**](PresenterBOTopUpResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ewalletControllerPostCreateLoanConfirm"></a>
# **ewalletControllerPostCreateLoanConfirm**
> PresenterLoanConfirmResponse ewalletControllerPostCreateLoanConfirm(body)



PostCreateLoanConfirm &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var body = new NeomedApi.PresenterLoanConfirmRequest(); // PresenterLoanConfirmRequest | body for Loan confirm


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerPostCreateLoanConfirm(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterLoanConfirmRequest**](PresenterLoanConfirmRequest.md)| body for Loan confirm | 

### Return type

[**PresenterLoanConfirmResponse**](PresenterLoanConfirmResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ewalletControllerPostCreateLoanRequest"></a>
# **ewalletControllerPostCreateLoanRequest**
> PresenterLoanRequestResponse ewalletControllerPostCreateLoanRequest(body)



PostCreateLoanRequest &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var body = new NeomedApi.PresenterLoanRequestRequest(); // PresenterLoanRequestRequest | body for Loan request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerPostCreateLoanRequest(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterLoanRequestRequest**](PresenterLoanRequestRequest.md)| body for Loan request | 

### Return type

[**PresenterLoanRequestResponse**](PresenterLoanRequestResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ewalletControllerPostLinkResourceConfirm"></a>
# **ewalletControllerPostLinkResourceConfirm**
> PresenterLinkResourceConfirmResponse ewalletControllerPostLinkResourceConfirm(body)



PostPreCloseConfirm &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var body = new NeomedApi.PresenterLinkResourceConfirmRequest(); // PresenterLinkResourceConfirmRequest | body for Pre close confirm


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerPostLinkResourceConfirm(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterLinkResourceConfirmRequest**](PresenterLinkResourceConfirmRequest.md)| body for Pre close confirm | 

### Return type

[**PresenterLinkResourceConfirmResponse**](PresenterLinkResourceConfirmResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ewalletControllerPostPreCloseConfirm"></a>
# **ewalletControllerPostPreCloseConfirm**
> PresenterPreCloseConfirmResponse ewalletControllerPostPreCloseConfirm(body)



PostPreCloseConfirm &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var body = new NeomedApi.PresenterPreCloseConfirmRequest(); // PresenterPreCloseConfirmRequest | body for Pre close confirm


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerPostPreCloseConfirm(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterPreCloseConfirmRequest**](PresenterPreCloseConfirmRequest.md)| body for Pre close confirm | 

### Return type

[**PresenterPreCloseConfirmResponse**](PresenterPreCloseConfirmResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ewalletControllerPostTopUpConfirm"></a>
# **ewalletControllerPostTopUpConfirm**
> PresenterTopUpConfirmResponse ewalletControllerPostTopUpConfirm(body)



PostTopUpConfirm &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var body = new NeomedApi.PresenterTopUpConfirmRequest(); // PresenterTopUpConfirmRequest | body for Ewallet content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerPostTopUpConfirm(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterTopUpConfirmRequest**](PresenterTopUpConfirmRequest.md)| body for Ewallet content | 

### Return type

[**PresenterTopUpConfirmResponse**](PresenterTopUpConfirmResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ewalletControllerPostTopUpConfirm_0"></a>
# **ewalletControllerPostTopUpConfirm_0**
> PresenterTopUpRequestResponse ewalletControllerPostTopUpConfirm_0(body)



PostPaymentConfirm &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var body = new NeomedApi.PresenterTopUpRequest(); // PresenterTopUpRequest | body for Ewallet content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerPostTopUpConfirm_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterTopUpRequest**](PresenterTopUpRequest.md)| body for Ewallet content | 

### Return type

[**PresenterTopUpRequestResponse**](PresenterTopUpRequestResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ewalletControllerPostUnlinkResource"></a>
# **ewalletControllerPostUnlinkResource**
> PresenterUnlinkResourceResponse ewalletControllerPostUnlinkResource(body)



PostUnlinkResource &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var body = new NeomedApi.PresenterUnlinkResourceRequest(); // PresenterUnlinkResourceRequest | body for Ewallet content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ewalletControllerPostUnlinkResource(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterUnlinkResourceRequest**](PresenterUnlinkResourceRequest.md)| body for Ewallet content | 

### Return type

[**PresenterUnlinkResourceResponse**](PresenterUnlinkResourceResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ewalletControllerUnlinkPaymentAccount"></a>
# **ewalletControllerUnlinkPaymentAccount**
> ewalletControllerUnlinkPaymentAccount(body)



UnlinkPaymentAccount &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.EwalletApi();

var body = new NeomedApi.PresenterUnlinkPaymentAccountReq(); // PresenterUnlinkPaymentAccountReq | body for Pre close confirm


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.ewalletControllerUnlinkPaymentAccount(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterUnlinkPaymentAccountReq**](PresenterUnlinkPaymentAccountReq.md)| body for Pre close confirm | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

