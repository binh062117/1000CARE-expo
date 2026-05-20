# NeomedApi.VouchersApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**voucherControllerAssignVoucherToCustomer**](VouchersApi.md#voucherControllerAssignVoucherToCustomer) | **POST** /vouchers/assign/campaign/{campaign_id}/ | 
[**voucherControllerGetAll**](VouchersApi.md#voucherControllerGetAll) | **GET** /vouchers/ | 
[**voucherControllerGetOne**](VouchersApi.md#voucherControllerGetOne) | **GET** /vouchers/{voucherId} | 
[**voucherControllerListVoucherByCustomer**](VouchersApi.md#voucherControllerListVoucherByCustomer) | **GET** /vouchers/customer | 
[**voucherControllerListVoucherValidByCustomer**](VouchersApi.md#voucherControllerListVoucherValidByCustomer) | **GET** /vouchers/customer/valid | 


<a name="voucherControllerAssignVoucherToCustomer"></a>
# **voucherControllerAssignVoucherToCustomer**
> voucherControllerAssignVoucherToCustomer(campaignId, opts)



assign voucher to customer &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.VouchersApi();

var campaignId = "campaignId_example"; // String | campaign_id

var opts = { 
  'customerId': 789, // Number | customer_id
  'type': 789 // Number | 0: Assign to user belong to Customer group 1:Assign to User
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.voucherControllerAssignVoucherToCustomer(campaignId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| campaign_id | 
 **customerId** | **Number**| customer_id | [optional] 
 **type** | **Number**| 0: Assign to user belong to Customer group 1:Assign to User | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="voucherControllerGetAll"></a>
# **voucherControllerGetAll**
> PresenterListVouchersResponse voucherControllerGetAll(opts)



get list voucher &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.VouchersApi();

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
apiInstance.voucherControllerGetAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListVouchersResponse**](PresenterListVouchersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="voucherControllerGetOne"></a>
# **voucherControllerGetOne**
> PresenterVoucher voucherControllerGetOne(voucherId)



get vouchers by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.VouchersApi();

var voucherId = "voucherId_example"; // String | voucherId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.voucherControllerGetOne(voucherId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucherId** | **String**| voucherId | 

### Return type

[**PresenterVoucher**](PresenterVoucher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="voucherControllerListVoucherByCustomer"></a>
# **voucherControllerListVoucherByCustomer**
> PresenterListVouchersResponse voucherControllerListVoucherByCustomer(opts)



get list voucher by customerId &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.VouchersApi();

var opts = { 
  'status': "status_example", // String | status
  'distributorId': 789, // Number | distributor_id
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
apiInstance.voucherControllerListVoucherByCustomer(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| status | [optional] 
 **distributorId** | **Number**| distributor_id | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListVouchersResponse**](PresenterListVouchersResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="voucherControllerListVoucherValidByCustomer"></a>
# **voucherControllerListVoucherValidByCustomer**
> PresenterListVouchersResponse voucherControllerListVoucherValidByCustomer(distributorId, orderAmount, paymentMethod, opts)



get list voucher valid by customerId &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.VouchersApi();

var distributorId = "distributorId_example"; // String | distributorId

var orderAmount = "orderAmount_example"; // String | orderAmount

var paymentMethod = "paymentMethod_example"; // String | COD NEOW

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
apiInstance.voucherControllerListVoucherValidByCustomer(distributorId, orderAmount, paymentMethod, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 
 **orderAmount** | **String**| orderAmount | 
 **paymentMethod** | **String**| COD NEOW | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListVouchersResponse**](PresenterListVouchersResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

