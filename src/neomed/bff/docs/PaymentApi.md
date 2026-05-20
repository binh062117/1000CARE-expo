# NeomedApi.PaymentApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentControllerPaymentOrder**](PaymentApi.md#paymentControllerPaymentOrder) | **GET** /payment/access-token | 
[**paymentControllerPaymentOrder_0**](PaymentApi.md#paymentControllerPaymentOrder_0) | **POST** /payment/payment-order | 
[**paymentNonSavingAccountGet**](PaymentApi.md#paymentNonSavingAccountGet) | **GET** /payment/non-saving-account | 


<a name="paymentControllerPaymentOrder"></a>
# **paymentControllerPaymentOrder**
> PresenterAccessTokenResponse paymentControllerPaymentOrder(corpId, username, password, transType)



payment for the order &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PaymentApi();

var corpId = "corpId_example"; // String | corp id

var username = "username_example"; // String | username

var password = "password_example"; // String | password

var transType = "transType_example"; // String | transType


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentControllerPaymentOrder(corpId, username, password, transType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corpId** | **String**| corp id | 
 **username** | **String**| username | 
 **password** | **String**| password | 
 **transType** | **String**| transType | 

### Return type

[**PresenterAccessTokenResponse**](PresenterAccessTokenResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentControllerPaymentOrder_0"></a>
# **paymentControllerPaymentOrder_0**
> PresenterOrderPaymentResponse paymentControllerPaymentOrder_0(body)



payment for the order &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PaymentApi();

var body = new NeomedApi.PresenterOrderPaymentRequest(); // PresenterOrderPaymentRequest | body for Order Payment request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentControllerPaymentOrder_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterOrderPaymentRequest**](PresenterOrderPaymentRequest.md)| body for Order Payment request | 

### Return type

[**PresenterOrderPaymentResponse**](PresenterOrderPaymentResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentNonSavingAccountGet"></a>
# **paymentNonSavingAccountGet**
> paymentNonSavingAccountGet()



### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.PaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.paymentNonSavingAccountGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

