# NeomedApi.OrdersApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderControllerAddInvoice**](OrdersApi.md#orderControllerAddInvoice) | **POST** /orders/invoice | 
[**orderControllerBuyAgain**](OrdersApi.md#orderControllerBuyAgain) | **POST** /orders/buy_again/{orderId} | 
[**orderControllerCancelOrder**](OrdersApi.md#orderControllerCancelOrder) | **POST** /orders/cancel | 
[**orderControllerChangeOrderStatus**](OrdersApi.md#orderControllerChangeOrderStatus) | **POST** /orders/back-offices/change-status/ | 
[**orderControllerCountOrdersByStatus**](OrdersApi.md#orderControllerCountOrdersByStatus) | **GET** /orders/back-offices/counting-orders | 
[**orderControllerDistributorCreateMultiOrders**](OrdersApi.md#orderControllerDistributorCreateMultiOrders) | **POST** /orders/distributors/create | 
[**orderControllerGetAll**](OrdersApi.md#orderControllerGetAll) | **GET** /orders/ | 
[**orderControllerGetAllBackOffice**](OrdersApi.md#orderControllerGetAllBackOffice) | **GET** /orders/back-offices | 
[**orderControllerGetItemsChangedHistory**](OrdersApi.md#orderControllerGetItemsChangedHistory) | **GET** /orders/items/history/{orderId} | 
[**orderControllerGetOne**](OrdersApi.md#orderControllerGetOne) | **GET** /orders/{id} | 
[**orderControllerGetStateHistory**](OrdersApi.md#orderControllerGetStateHistory) | **GET** /orders/state-histories/{orderId} | 
[**orderControllerListingStatus**](OrdersApi.md#orderControllerListingStatus) | **GET** /orders/back-offices/listing-status | 
[**orderControllerManualTopUpAccumulated**](OrdersApi.md#orderControllerManualTopUpAccumulated) | **POST** /orders/manual-topup-accum | 
[**orderControllerMigrateToElastic**](OrdersApi.md#orderControllerMigrateToElastic) | **GET** /orders/back-offices/migrate-elastic | 
[**orderControllerPayment**](OrdersApi.md#orderControllerPayment) | **POST** /orders/payment/{orderId} | 
[**orderControllerPaymentConfirm**](OrdersApi.md#orderControllerPaymentConfirm) | **POST** /orders/payment-confirm | 
[**orderControllerPaymentRequest**](OrdersApi.md#orderControllerPaymentRequest) | **POST** /orders/payment-request | 
[**orderControllerPaymentRequestBiz**](OrdersApi.md#orderControllerPaymentRequestBiz) | **POST** /orders/payment-request-biz | 
[**orderControllerPayments**](OrdersApi.md#orderControllerPayments) | **POST** /orders/payments | 
[**orderControllerQueryNextStatus**](OrdersApi.md#orderControllerQueryNextStatus) | **GET** /orders/back-offices/status/{orderId} | 
[**orderControllerUpdateOrder**](OrdersApi.md#orderControllerUpdateOrder) | **PUT** /orders/{orderId} | 
[**orderControllerUpdateOrderItem**](OrdersApi.md#orderControllerUpdateOrderItem) | **PUT** /orders/items/{orderId} | 
[**orderControllerUpdateStatus**](OrdersApi.md#orderControllerUpdateStatus) | **PUT** /orders/back-offices/status/{orderId} | 
[**orderControllerUserConfirmed**](OrdersApi.md#orderControllerUserConfirmed) | **POST** /orders/user-confirm/{orderId} | 


<a name="orderControllerAddInvoice"></a>
# **orderControllerAddInvoice**
> PresenterAddOrderInvoiceResponse orderControllerAddInvoice(body, opts)



add user&#39;s invoice &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var body = new NeomedApi.PresenterInvoiceInfo(); // PresenterInvoiceInfo | content body

var opts = { 
  'orderId': "orderId_example", // String | order id
  'scope': 789 // Number | invoice for personal (1 - default) or business (2)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerAddInvoice(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterInvoiceInfo**](PresenterInvoiceInfo.md)| content body | 
 **orderId** | **String**| order id | [optional] 
 **scope** | **Number**| invoice for personal (1 - default) or business (2) | [optional] 

### Return type

[**PresenterAddOrderInvoiceResponse**](PresenterAddOrderInvoiceResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerBuyAgain"></a>
# **orderControllerBuyAgain**
> PresenterBuyAgainResponse orderControllerBuyAgain(orderId)



buy again with exist order &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var orderId = "orderId_example"; // String | order id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerBuyAgain(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order id | 

### Return type

[**PresenterBuyAgainResponse**](PresenterBuyAgainResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerCancelOrder"></a>
# **orderControllerCancelOrder**
> PresenterCancelOrderResponse orderControllerCancelOrder(body)



cancel exist order &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var body = new NeomedApi.PresenterCancelOrderRequest(); // PresenterCancelOrderRequest | body for request content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerCancelOrder(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCancelOrderRequest**](PresenterCancelOrderRequest.md)| body for request content | 

### Return type

[**PresenterCancelOrderResponse**](PresenterCancelOrderResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerChangeOrderStatus"></a>
# **orderControllerChangeOrderStatus**
> orderControllerChangeOrderStatus(body)



pay order transaction &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var body = new NeomedApi.PresenterChangeOrderStatus(); // PresenterChangeOrderStatus | body for request content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.orderControllerChangeOrderStatus(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterChangeOrderStatus**](PresenterChangeOrderStatus.md)| body for request content | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerCountOrdersByStatus"></a>
# **orderControllerCountOrdersByStatus**
> PresenterCountOrdersByStatusResponse orderControllerCountOrdersByStatus(opts)



aggregation with countype (distributor,...) and status order &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var opts = { 
  'ctype': 789, // Number | type of counting: 0 - distributor (default)
  'status': "status_example", // String | a string order's status was separated by commas (example: status=1,2,3)
  'subStatus': "subStatus_example", // String | a string fulfillment status was separated by commas (example: status=1,2,3)
  'fromAt': "fromAt_example", // String | begin time to count (format time: dd-MM-yyyy)
  'toAt': "toAt_example" // String | end time to count (format time: dd-MM-yyyy)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerCountOrdersByStatus(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctype** | **Number**| type of counting: 0 - distributor (default) | [optional] 
 **status** | **String**| a string order&#39;s status was separated by commas (example: status&#x3D;1,2,3) | [optional] 
 **subStatus** | **String**| a string fulfillment status was separated by commas (example: status&#x3D;1,2,3) | [optional] 
 **fromAt** | **String**| begin time to count (format time: dd-MM-yyyy) | [optional] 
 **toAt** | **String**| end time to count (format time: dd-MM-yyyy) | [optional] 

### Return type

[**PresenterCountOrdersByStatusResponse**](PresenterCountOrdersByStatusResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerDistributorCreateMultiOrders"></a>
# **orderControllerDistributorCreateMultiOrders**
> PresenterDistributorCreateMultiOrdersResponse orderControllerDistributorCreateMultiOrders(body)



create multi order from operator&#39;s distributor for customer &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var body = new NeomedApi.PresenterDistributorCreateMultiOrdersRequest(); // PresenterDistributorCreateMultiOrdersRequest | body for request content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerDistributorCreateMultiOrders(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterDistributorCreateMultiOrdersRequest**](PresenterDistributorCreateMultiOrdersRequest.md)| body for request content | 

### Return type

[**PresenterDistributorCreateMultiOrdersResponse**](PresenterDistributorCreateMultiOrdersResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerGetAll"></a>
# **orderControllerGetAll**
> PresenterGetListOrderResponse orderControllerGetAll(opts)



get Orders &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var opts = { 
  'size': 789, // Number | Limit the size of result set. Must be an integer
  'next': "next_example", // String | next cursor
  'status': 789, // Number | order status (if negative value, it's mean exclude). Array status will use comma separated(example: 1,2))
  'paymentStatus': 789, // Number | payment status (if negative value, it's mean exclude. Array status will use comma separated(example: 1,2))
  'pmc': "pmc_example" // String | payment method code (cod)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerGetAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| Limit the size of result set. Must be an integer | [optional] 
 **next** | **String**| next cursor | [optional] 
 **status** | **Number**| order status (if negative value, it&#39;s mean exclude). Array status will use comma separated(example: 1,2)) | [optional] 
 **paymentStatus** | **Number**| payment status (if negative value, it&#39;s mean exclude. Array status will use comma separated(example: 1,2)) | [optional] 
 **pmc** | **String**| payment method code (cod) | [optional] 

### Return type

[**PresenterGetListOrderResponse**](PresenterGetListOrderResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerGetAllBackOffice"></a>
# **orderControllerGetAllBackOffice**
> PresenterListOrdersBackOfficeResponse orderControllerGetAllBackOffice(opts)



get Orders &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var opts = { 
  'size': 789, // Number | Limit the size of result set. Must be an integer (default = 50)
  'page': 789, // Number | Offset of result
  'status': 789, // Number | Order status
  'subStatus': 789, // Number | Fulfillment status
  'distributorId': 789, // Number | distributor id
  'fromAt': "fromAt_example", // String | begin time to statistics (format time: dd-MM-yyyy)
  'toAt': "toAt_example" // String | end time to statistics (format time: dd-MM-yyyy)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerGetAllBackOffice(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| Limit the size of result set. Must be an integer (default &#x3D; 50) | [optional] 
 **page** | **Number**| Offset of result | [optional] 
 **status** | **Number**| Order status | [optional] 
 **subStatus** | **Number**| Fulfillment status | [optional] 
 **distributorId** | **Number**| distributor id | [optional] 
 **fromAt** | **String**| begin time to statistics (format time: dd-MM-yyyy) | [optional] 
 **toAt** | **String**| end time to statistics (format time: dd-MM-yyyy) | [optional] 

### Return type

[**PresenterListOrdersBackOfficeResponse**](PresenterListOrdersBackOfficeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerGetItemsChangedHistory"></a>
# **orderControllerGetItemsChangedHistory**
> PresenterGetOrderItemChangeHistoryResponse orderControllerGetItemsChangedHistory(orderId, opts)



get order items changed history &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var orderId = "orderId_example"; // String | order id

var opts = { 
  'cursor': "cursor_example", // String | next cursor
  'latest': true, // Boolean | only get latest changed item
  'isConfirmed': true // Boolean | only state confirmed
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerGetItemsChangedHistory(orderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order id | 
 **cursor** | **String**| next cursor | [optional] 
 **latest** | **Boolean**| only get latest changed item | [optional] 
 **isConfirmed** | **Boolean**| only state confirmed | [optional] 

### Return type

[**PresenterGetOrderItemChangeHistoryResponse**](PresenterGetOrderItemChangeHistoryResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerGetOne"></a>
# **orderControllerGetOne**
> PresenterGetOneOrderResponse orderControllerGetOne(id, opts)



get Order by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var id = "id_example"; // String | order id

var opts = { 
  'backOffice': true // Boolean | from back-office or normal user
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerGetOne(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| order id | 
 **backOffice** | **Boolean**| from back-office or normal user | [optional] 

### Return type

[**PresenterGetOneOrderResponse**](PresenterGetOneOrderResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerGetStateHistory"></a>
# **orderControllerGetStateHistory**
> PresenterGetStateHistoryResponse orderControllerGetStateHistory(orderId)



get Order by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var orderId = "orderId_example"; // String | order id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerGetStateHistory(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order id | 

### Return type

[**PresenterGetStateHistoryResponse**](PresenterGetStateHistoryResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerListingStatus"></a>
# **orderControllerListingStatus**
> PresenterListingStatusResponse orderControllerListingStatus(opts)



aggregation by status (order or payment) &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var opts = { 
  'ts': 789, // Number | type of status: 0 - order (default), 1 - payment
  'fromAt': "fromAt_example", // String | begin time to count (format time: dd-MM-yyyy)
  'toAt': "toAt_example" // String | end time to count (format time: dd-MM-yyyy)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerListingStatus(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ts** | **Number**| type of status: 0 - order (default), 1 - payment | [optional] 
 **fromAt** | **String**| begin time to count (format time: dd-MM-yyyy) | [optional] 
 **toAt** | **String**| end time to count (format time: dd-MM-yyyy) | [optional] 

### Return type

[**PresenterListingStatusResponse**](PresenterListingStatusResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerManualTopUpAccumulated"></a>
# **orderControllerManualTopUpAccumulated**
> PresenterManualTopUpAccumulatedResponse orderControllerManualTopUpAccumulated(orderId, orderUid)



manual topup accumulated &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var orderId = "orderId_example"; // String | order id

var orderUid = "orderUid_example"; // String | id user own order


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerManualTopUpAccumulated(orderId, orderUid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order id | 
 **orderUid** | **String**| id user own order | 

### Return type

[**PresenterManualTopUpAccumulatedResponse**](PresenterManualTopUpAccumulatedResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerMigrateToElastic"></a>
# **orderControllerMigrateToElastic**
> orderControllerMigrateToElastic(checksum, opts)



migrate all orders into elastic &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var checksum = "checksum_example"; // String | checksum to validate

var opts = { 
  'fromAt': "fromAt_example", // String | from At: dd-MM-yyyy
  'toAt': "toAt_example", // String | to At: dd-MM-yyyy
  'orderIds': "orderIds_example" // String | orderids sepparate by commas
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.orderControllerMigrateToElastic(checksum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checksum** | **String**| checksum to validate | 
 **fromAt** | **String**| from At: dd-MM-yyyy | [optional] 
 **toAt** | **String**| to At: dd-MM-yyyy | [optional] 
 **orderIds** | **String**| orderids sepparate by commas | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerPayment"></a>
# **orderControllerPayment**
> PresenterPayOrderResponse orderControllerPayment(orderId, pmCode)



pay order transaction &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var orderId = "orderId_example"; // String | order id

var pmCode = "pmCode_example"; // String | payment method cod


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerPayment(orderId, pmCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order id | 
 **pmCode** | **String**| payment method cod | 

### Return type

[**PresenterPayOrderResponse**](PresenterPayOrderResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerPaymentConfirm"></a>
# **orderControllerPaymentConfirm**
> PresenterPaymentConfirmResponseV2 orderControllerPaymentConfirm(body)



PaymentConfirm &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var body = new NeomedApi.PresenterPaymentConfirmRequest(); // PresenterPaymentConfirmRequest | body for Ewallet content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerPaymentConfirm(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterPaymentConfirmRequest**](PresenterPaymentConfirmRequest.md)| body for Ewallet content | 

### Return type

[**PresenterPaymentConfirmResponseV2**](PresenterPaymentConfirmResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerPaymentRequest"></a>
# **orderControllerPaymentRequest**
> PresenterPaymentRequestResponseV2 orderControllerPaymentRequest(body)



PaymentRequest &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var body = new NeomedApi.PresenterPaymentRequestRequest(); // PresenterPaymentRequestRequest | body for request content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerPaymentRequest(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterPaymentRequestRequest**](PresenterPaymentRequestRequest.md)| body for request content | 

### Return type

[**PresenterPaymentRequestResponseV2**](PresenterPaymentRequestResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerPaymentRequestBiz"></a>
# **orderControllerPaymentRequestBiz**
> PresenterPaymentRequestBizResponse orderControllerPaymentRequestBiz(body)



PaymentRequestBiz &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var body = new NeomedApi.PresenterPaymentRequestBizRequest(); // PresenterPaymentRequestBizRequest | body for request content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerPaymentRequestBiz(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterPaymentRequestBizRequest**](PresenterPaymentRequestBizRequest.md)| body for request content | 

### Return type

[**PresenterPaymentRequestBizResponse**](PresenterPaymentRequestBizResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerPayments"></a>
# **orderControllerPayments**
> PresenterPayOrderResponse orderControllerPayments(body)



pay order transaction &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var body = new NeomedApi.PresenterPayOrdersRequest(); // PresenterPayOrdersRequest | listing orders pay


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerPayments(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterPayOrdersRequest**](PresenterPayOrdersRequest.md)| listing orders pay | 

### Return type

[**PresenterPayOrderResponse**](PresenterPayOrderResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerQueryNextStatus"></a>
# **orderControllerQueryNextStatus**
> PresenterGetStateHistoryResponse orderControllerQueryNextStatus(orderId)



query next fulfillment status &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var orderId = "orderId_example"; // String | order id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerQueryNextStatus(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order id | 

### Return type

[**PresenterGetStateHistoryResponse**](PresenterGetStateHistoryResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerUpdateOrder"></a>
# **orderControllerUpdateOrder**
> PresenterUpdateOrderResponse orderControllerUpdateOrder(orderId, body, opts)



update order &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var orderId = "orderId_example"; // String | order id

var body = new NeomedApi.PresenterUpdateOrderRequest(); // PresenterUpdateOrderRequest | content body

var opts = { 
  'backOffice': true // Boolean | whether is backoffice account
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerUpdateOrder(orderId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order id | 
 **body** | [**PresenterUpdateOrderRequest**](PresenterUpdateOrderRequest.md)| content body | 
 **backOffice** | **Boolean**| whether is backoffice account | [optional] 

### Return type

[**PresenterUpdateOrderResponse**](PresenterUpdateOrderResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerUpdateOrderItem"></a>
# **orderControllerUpdateOrderItem**
> PresenterUpdateOrderItemResponse orderControllerUpdateOrderItem(orderId, body, opts)



update order item &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var orderId = "orderId_example"; // String | order id

var body = new NeomedApi.PresenterUpdateOrderItemRequest(); // PresenterUpdateOrderItemRequest | content body

var opts = { 
  'backOffice': true // Boolean | whether is backoffice account
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerUpdateOrderItem(orderId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order id | 
 **body** | [**PresenterUpdateOrderItemRequest**](PresenterUpdateOrderItemRequest.md)| content body | 
 **backOffice** | **Boolean**| whether is backoffice account | [optional] 

### Return type

[**PresenterUpdateOrderItemResponse**](PresenterUpdateOrderItemResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerUpdateStatus"></a>
# **orderControllerUpdateStatus**
> PresenterUpdateStatusResponse orderControllerUpdateStatus(orderId, newStatus, opts)



pay order transaction &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var orderId = "orderId_example"; // String | order id

var newStatus = 789; // Number | new status updated

var opts = { 
  'newPaymentStatus': 789, // Number | new payment status updated
  'paymentAt': 789, // Number | payment time (unix timestamp)
  'extData': "extData_example" // String | ext data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerUpdateStatus(orderId, newStatus, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order id | 
 **newStatus** | **Number**| new status updated | 
 **newPaymentStatus** | **Number**| new payment status updated | [optional] 
 **paymentAt** | **Number**| payment time (unix timestamp) | [optional] 
 **extData** | **String**| ext data | [optional] 

### Return type

[**PresenterUpdateStatusResponse**](PresenterUpdateStatusResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderControllerUserConfirmed"></a>
# **orderControllerUserConfirmed**
> PresenterUserConfirmedResponse orderControllerUserConfirmed(orderId)



user confirm with changed order by CS &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.OrdersApi();

var orderId = "orderId_example"; // String | order id is confirmed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderControllerUserConfirmed(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order id is confirmed | 

### Return type

[**PresenterUserConfirmedResponse**](PresenterUserConfirmedResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

