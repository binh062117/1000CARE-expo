# NeomedApi.ReportApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reportControllerExportDataByUsers**](ReportApi.md#reportControllerExportDataByUsers) | **GET** /report/customers/export-tx | 
[**reportControllerHistogramCashin**](ReportApi.md#reportControllerHistogramCashin) | **GET** /report/wallets/cashin/histogram | 
[**reportControllerHistogramDailyTracking**](ReportApi.md#reportControllerHistogramDailyTracking) | **GET** /report/pharmacies/histogram | 
[**reportControllerHistogramRevenue**](ReportApi.md#reportControllerHistogramRevenue) | **GET** /report/orders/revenues/histogram | 
[**reportControllerHistogramStatus**](ReportApi.md#reportControllerHistogramStatus) | **GET** /report/orders/status/histogram | 
[**reportControllerHistogramVoucher**](ReportApi.md#reportControllerHistogramVoucher) | **GET** /report/vouchers/histogram | 
[**reportControllerReportBalance**](ReportApi.md#reportControllerReportBalance) | **GET** /report/wallets/balance | 
[**reportControllerReportCashin**](ReportApi.md#reportControllerReportCashin) | **GET** /report/wallets/cashin | 
[**reportControllerReportOrders**](ReportApi.md#reportControllerReportOrders) | **GET** /report/orders | 
[**reportControllerReportPharmacy**](ReportApi.md#reportControllerReportPharmacy) | **GET** /report/pharmacies | 
[**reportControllerReportSalePerformance**](ReportApi.md#reportControllerReportSalePerformance) | **GET** /report/sales/performance | 
[**reportControllerReportSalePerformanceByPurchasing**](ReportApi.md#reportControllerReportSalePerformanceByPurchasing) | **GET** /report/sales/performance-purchasing | 
[**reportControllerReportVoucher**](ReportApi.md#reportControllerReportVoucher) | **GET** /report/vouchers | 
[**reportControllerStatisticCustomer**](ReportApi.md#reportControllerStatisticCustomer) | **GET** /report/customers/tx | 
[**reportControllerStatisticDailyTracking**](ReportApi.md#reportControllerStatisticDailyTracking) | **GET** /report/pharmacies/statistic | 
[**reportControllerStatisticRevenue**](ReportApi.md#reportControllerStatisticRevenue) | **GET** /report/orders/revenues/statistic | 
[**reportControllerStatisticStatus**](ReportApi.md#reportControllerStatisticStatus) | **GET** /report/orders/status/statistic | 
[**reportControllerSyncAppliedDistributor**](ReportApi.md#reportControllerSyncAppliedDistributor) | **GET** /report/vouchers/sync | 


<a name="reportControllerExportDataByUsers"></a>
# **reportControllerExportDataByUsers**
> PresenterExportDataByUsersResponse reportControllerExportDataByUsers(fromAt, toAt, opts)



support export data from api StatisticCustomer &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var fromAt = "fromAt_example"; // String | start time, format (dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time, format (dd-MM-yyyy)

var opts = { 
  'distributorId': 789, // Number | distributor id
  'customerId': 789, // Number | customer id
  'size': 789, // Number | Limit the size of result set. Must be an integer (default = 50)
  'page': 789, // Number | Offset of result
  'paymentGt': 789, // Number | greater or equal payment amount
  'paymentLt': 789, // Number | lesser or equal payment amount
  'topupGt': 789, // Number | greater or equal topup amount
  'topupLt': 789 // Number | lesser or equal topup amount
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerExportDataByUsers(fromAt, toAt, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAt** | **String**| start time, format (dd-MM-yyyy) | 
 **toAt** | **String**| end time, format (dd-MM-yyyy) | 
 **distributorId** | **Number**| distributor id | [optional] 
 **customerId** | **Number**| customer id | [optional] 
 **size** | **Number**| Limit the size of result set. Must be an integer (default &#x3D; 50) | [optional] 
 **page** | **Number**| Offset of result | [optional] 
 **paymentGt** | **Number**| greater or equal payment amount | [optional] 
 **paymentLt** | **Number**| lesser or equal payment amount | [optional] 
 **topupGt** | **Number**| greater or equal topup amount | [optional] 
 **topupLt** | **Number**| lesser or equal topup amount | [optional] 

### Return type

[**PresenterExportDataByUsersResponse**](PresenterExportDataByUsersResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerHistogramCashin"></a>
# **reportControllerHistogramCashin**
> PresenterHistogramCashinResponse reportControllerHistogramCashin(fromAt, toAt, opts)



cashin revenue chart over time &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var fromAt = "fromAt_example"; // String | begin time to statistics (format time: dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time to statistics (format time: dd-MM-yyyy)

var opts = { 
  'cashinType': 789, // Number | cashin type: 1 - Topup, 2 - MB Bank. (default = 1)
  'distributorId': 789 // Number | distributor id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerHistogramCashin(fromAt, toAt, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAt** | **String**| begin time to statistics (format time: dd-MM-yyyy) | 
 **toAt** | **String**| end time to statistics (format time: dd-MM-yyyy) | 
 **cashinType** | **Number**| cashin type: 1 - Topup, 2 - MB Bank. (default &#x3D; 1) | [optional] 
 **distributorId** | **Number**| distributor id | [optional] 

### Return type

[**PresenterHistogramCashinResponse**](PresenterHistogramCashinResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerHistogramDailyTracking"></a>
# **reportControllerHistogramDailyTracking**
> PresenterHistogramDailyTrackingResponse reportControllerHistogramDailyTracking(fromAt, toAt)



histogram user daily operation &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var fromAt = "fromAt_example"; // String | begin time to statistics (format time: dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time to statistics (format time: dd-MM-yyyy)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerHistogramDailyTracking(fromAt, toAt, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAt** | **String**| begin time to statistics (format time: dd-MM-yyyy) | 
 **toAt** | **String**| end time to statistics (format time: dd-MM-yyyy) | 

### Return type

[**PresenterHistogramDailyTrackingResponse**](PresenterHistogramDailyTrackingResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerHistogramRevenue"></a>
# **reportControllerHistogramRevenue**
> PresenterHistogramRevenueResponse reportControllerHistogramRevenue(revenueType, fromAt, toAt, opts)



sales revenue chart over time &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var revenueType = 789; // Number | type of revenue: 1 - revenue all, 2 - revenue by distributor, 3 - revenue by product

var fromAt = "fromAt_example"; // String | begin time to statistics (format time: dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time to statistics (format time: dd-MM-yyyy)

var opts = { 
  'distributorId': 789, // Number | distributor id
  'type': 789 // Number | type: 0 - actual revenue (default), 1 - expected revenue, 2 - new order
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerHistogramRevenue(revenueType, fromAt, toAt, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revenueType** | **Number**| type of revenue: 1 - revenue all, 2 - revenue by distributor, 3 - revenue by product | 
 **fromAt** | **String**| begin time to statistics (format time: dd-MM-yyyy) | 
 **toAt** | **String**| end time to statistics (format time: dd-MM-yyyy) | 
 **distributorId** | **Number**| distributor id | [optional] 
 **type** | **Number**| type: 0 - actual revenue (default), 1 - expected revenue, 2 - new order | [optional] 

### Return type

[**PresenterHistogramRevenueResponse**](PresenterHistogramRevenueResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerHistogramStatus"></a>
# **reportControllerHistogramStatus**
> PresenterHistogramStatusResponse reportControllerHistogramStatus(fromAt, toAt, opts)



statistic the quatity of order by status chart over time &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var fromAt = "fromAt_example"; // String | begin time to statistics (format time: dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time to statistics (format time: dd-MM-yyyy)

var opts = { 
  'byPayment': true, // Boolean | default: by order status
  'distributorId': 789 // Number | distributor id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerHistogramStatus(fromAt, toAt, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAt** | **String**| begin time to statistics (format time: dd-MM-yyyy) | 
 **toAt** | **String**| end time to statistics (format time: dd-MM-yyyy) | 
 **byPayment** | **Boolean**| default: by order status | [optional] 
 **distributorId** | **Number**| distributor id | [optional] 

### Return type

[**PresenterHistogramStatusResponse**](PresenterHistogramStatusResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerHistogramVoucher"></a>
# **reportControllerHistogramVoucher**
> PresenterHistogramVoucherResponse reportControllerHistogramVoucher(fromAt, toAt, opts)



status&#39;s voucher chart over time &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var fromAt = "fromAt_example"; // String | begin time to statistics (format time: dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time to statistics (format time: dd-MM-yyyy)

var opts = { 
  'distributorId': 789, // Number | distributor id
  'appliedDistId': 789, // Number | order's distributor id
  'campaignId': 789, // Number | campaign id
  'status': "status_example" // String | voucher's status: assigned, claimed, expired
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerHistogramVoucher(fromAt, toAt, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAt** | **String**| begin time to statistics (format time: dd-MM-yyyy) | 
 **toAt** | **String**| end time to statistics (format time: dd-MM-yyyy) | 
 **distributorId** | **Number**| distributor id | [optional] 
 **appliedDistId** | **Number**| order&#39;s distributor id | [optional] 
 **campaignId** | **Number**| campaign id | [optional] 
 **status** | **String**| voucher&#39;s status: assigned, claimed, expired | [optional] 

### Return type

[**PresenterHistogramVoucherResponse**](PresenterHistogramVoucherResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerReportBalance"></a>
# **reportControllerReportBalance**
> PresenterReportBalanceResponse reportControllerReportBalance(distributorId)



report balance with conditions &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var distributorId = 789; // Number | distributor id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerReportBalance(distributorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **Number**| distributor id | 

### Return type

[**PresenterReportBalanceResponse**](PresenterReportBalanceResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerReportCashin"></a>
# **reportControllerReportCashin**
> PresenterReportCashinResponse reportControllerReportCashin(fromAt, toAt, opts)



report cashin with conditions &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var fromAt = "fromAt_example"; // String | start time, format (dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time, format (dd-MM-yyyy)

var opts = { 
  'distributorId': 789, // Number | distributor id
  'customerId': 789, // Number | customer id
  'cashinType': 789, // Number | cashin type:1 - Topup, 2 - MB Bank. (default = 1)
  'size': 789, // Number | Limit the size of result set. Must be an integer (default = 50)
  'page': 789 // Number | Offset of result
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerReportCashin(fromAt, toAt, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAt** | **String**| start time, format (dd-MM-yyyy) | 
 **toAt** | **String**| end time, format (dd-MM-yyyy) | 
 **distributorId** | **Number**| distributor id | [optional] 
 **customerId** | **Number**| customer id | [optional] 
 **cashinType** | **Number**| cashin type:1 - Topup, 2 - MB Bank. (default &#x3D; 1) | [optional] 
 **size** | **Number**| Limit the size of result set. Must be an integer (default &#x3D; 50) | [optional] 
 **page** | **Number**| Offset of result | [optional] 

### Return type

[**PresenterReportCashinResponse**](PresenterReportCashinResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerReportOrders"></a>
# **reportControllerReportOrders**
> PresenterReportOrdersResponse reportControllerReportOrders(opts)



report orders with conditions &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var opts = { 
  'size': 789, // Number | Limit the size of result set. Must be an integer (default = 50)
  'page': 789, // Number | Offset of result
  'orderId': "orderId_example", // String | order id
  'status': "status_example", // String | Order status. Include multi status separated by comma (example: 1,2,3)
  'subStatus': "subStatus_example", // String | Fulfillment status. Include multi status separated by comma (example: 1,2,3)
  'paymentStatus': "paymentStatus_example", // String | Payment status. Include multi status separated by comma (example: 1,2,3)
  'orderby': "orderby_example", // String | Orderby by fields (created_at,distributor,product_name,total_sale). Include multi separated by comma. Desc by signed '-' before field
  'fromAt': "fromAt_example", // String | start time, format (dd-MM-yyyy)
  'toAt': "toAt_example", // String | end time, format (dd-MM-yyyy)
  'distributorId': 789, // Number | distributor id
  'productName': "productName_example", // String | product name
  'productId': 789, // Number | product id
  'customerId': 789, // Number | customer id
  'keyword': "keyword_example", // String | keyword: customer name, a part of order id [5 - 12 digits]
  'paymentType': 789 // Number | payment type: 0 - all, 1 - cash, 1 - point
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerReportOrders(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| Limit the size of result set. Must be an integer (default &#x3D; 50) | [optional] 
 **page** | **Number**| Offset of result | [optional] 
 **orderId** | **String**| order id | [optional] 
 **status** | **String**| Order status. Include multi status separated by comma (example: 1,2,3) | [optional] 
 **subStatus** | **String**| Fulfillment status. Include multi status separated by comma (example: 1,2,3) | [optional] 
 **paymentStatus** | **String**| Payment status. Include multi status separated by comma (example: 1,2,3) | [optional] 
 **orderby** | **String**| Orderby by fields (created_at,distributor,product_name,total_sale). Include multi separated by comma. Desc by signed &#39;-&#39; before field | [optional] 
 **fromAt** | **String**| start time, format (dd-MM-yyyy) | [optional] 
 **toAt** | **String**| end time, format (dd-MM-yyyy) | [optional] 
 **distributorId** | **Number**| distributor id | [optional] 
 **productName** | **String**| product name | [optional] 
 **productId** | **Number**| product id | [optional] 
 **customerId** | **Number**| customer id | [optional] 
 **keyword** | **String**| keyword: customer name, a part of order id [5 - 12 digits] | [optional] 
 **paymentType** | **Number**| payment type: 0 - all, 1 - cash, 1 - point | [optional] 

### Return type

[**PresenterReportOrdersResponse**](PresenterReportOrdersResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerReportPharmacy"></a>
# **reportControllerReportPharmacy**
> PresenterReportPharmacyResponse reportControllerReportPharmacy(fromAt, toAt, type, opts)



report on pharmacy activities &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var fromAt = "fromAt_example"; // String | begin time to (format time: dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time (format time: dd-MM-yyyy)

var type = 789; // Number | type report: 1 - no created order, 2 - no topup, 3 - no online. (default = 1)

var opts = { 
  'page': 789, // Number | the offset of results (default: 1)
  'size': 789 // Number | Limit the size of result set. Must be an integer (default = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerReportPharmacy(fromAt, toAt, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAt** | **String**| begin time to (format time: dd-MM-yyyy) | 
 **toAt** | **String**| end time (format time: dd-MM-yyyy) | 
 **type** | **Number**| type report: 1 - no created order, 2 - no topup, 3 - no online. (default &#x3D; 1) | 
 **page** | **Number**| the offset of results (default: 1) | [optional] 
 **size** | **Number**| Limit the size of result set. Must be an integer (default &#x3D; 50) | [optional] 

### Return type

[**PresenterReportPharmacyResponse**](PresenterReportPharmacyResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerReportSalePerformance"></a>
# **reportControllerReportSalePerformance**
> PresenterReportSalePerformanceResponse reportControllerReportSalePerformance(fromAt, toAt, userName, opts)



report sale performance &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var fromAt = "fromAt_example"; // String | start time, format (dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time, format (dd-MM-yyyy)

var userName = "userName_example"; // String | Here is a phone number . For example +840111223332

var opts = { 
  'sellerId': 789, // Number | seller id
  'filters': "filters_example", // String | conditions (order, linked, topup) seperated by commas and add '-' prefix in case is pending (example: filters=order,linked,-topup). Default: all completed
  'distributorId': 789, // Number | distributor id
  'size': 789, // Number | Limit the size of result set. Must be an integer (default = 50)
  'page': 789 // Number | Offset of result
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerReportSalePerformance(fromAt, toAt, userName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAt** | **String**| start time, format (dd-MM-yyyy) | 
 **toAt** | **String**| end time, format (dd-MM-yyyy) | 
 **userName** | **String**| Here is a phone number . For example +840111223332 | 
 **sellerId** | **Number**| seller id | [optional] 
 **filters** | **String**| conditions (order, linked, topup) seperated by commas and add &#39;-&#39; prefix in case is pending (example: filters&#x3D;order,linked,-topup). Default: all completed | [optional] 
 **distributorId** | **Number**| distributor id | [optional] 
 **size** | **Number**| Limit the size of result set. Must be an integer (default &#x3D; 50) | [optional] 
 **page** | **Number**| Offset of result | [optional] 

### Return type

[**PresenterReportSalePerformanceResponse**](PresenterReportSalePerformanceResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerReportSalePerformanceByPurchasing"></a>
# **reportControllerReportSalePerformanceByPurchasing**
> PresenterReportSalePerformanceByPurchasingResponse reportControllerReportSalePerformanceByPurchasing(salerId, fromAt, toAt, ufromAt, utoAt, opts)



report sale performance by customer&#39;s purchasing &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var salerId = 789; // Number | salerId id

var fromAt = "fromAt_example"; // String | start time, format (dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time, format (dd-MM-yyyy)

var ufromAt = "ufromAt_example"; // String | start time uncompleted order, format (dd-MM-yyyy)

var utoAt = "utoAt_example"; // String | end time uncompleted order, format (dd-MM-yyyy)

var opts = { 
  'distributorId': 789, // Number | distributor id
  'orderDistributorId': "orderDistributorId_example", // String | list order's distributor ids (seperated by commas)
  'size': 789, // Number | Limit the size of result set. Must be an integer (default = 50)
  'page': 789, // Number | Offset of result
  'timeline': "timeline_example" // String | statistic day timelines (default: timeline=30,60). If param is [timeline=30,60], it means statistic from 0-30days, 30days-60days, more 60days
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerReportSalePerformanceByPurchasing(salerId, fromAt, toAt, ufromAt, utoAt, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **salerId** | **Number**| salerId id | 
 **fromAt** | **String**| start time, format (dd-MM-yyyy) | 
 **toAt** | **String**| end time, format (dd-MM-yyyy) | 
 **ufromAt** | **String**| start time uncompleted order, format (dd-MM-yyyy) | 
 **utoAt** | **String**| end time uncompleted order, format (dd-MM-yyyy) | 
 **distributorId** | **Number**| distributor id | [optional] 
 **orderDistributorId** | **String**| list order&#39;s distributor ids (seperated by commas) | [optional] 
 **size** | **Number**| Limit the size of result set. Must be an integer (default &#x3D; 50) | [optional] 
 **page** | **Number**| Offset of result | [optional] 
 **timeline** | **String**| statistic day timelines (default: timeline&#x3D;30,60). If param is [timeline&#x3D;30,60], it means statistic from 0-30days, 30days-60days, more 60days | [optional] 

### Return type

[**PresenterReportSalePerformanceByPurchasingResponse**](PresenterReportSalePerformanceByPurchasingResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerReportVoucher"></a>
# **reportControllerReportVoucher**
> PresenterReportVoucherResponse reportControllerReportVoucher(opts)



report voucher with conditions &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var opts = { 
  'fromAt': "fromAt_example", // String | start time, format (dd-MM-yyyy)
  'toAt': "toAt_example", // String | end time, format (dd-MM-yyyy)
  'distributorId': 789, // Number | distributor id
  'appliedDistId': 789, // Number | order's distributor id
  'customerId': 789, // Number | customer id
  'status': "status_example", // String | voucher's status: assigned, claimed, expired
  'size': 789, // Number | Limit the size of result set. Must be an integer (default = 50)
  'page': 789, // Number | Offset of result
  'campaignId': 789, // Number | Campaign id (default: 0 - search all)
  'amountFrom': 789, // Number | Voucher's amount from
  'amountTo': 789, // Number | Voucher's amount to
  'orderId': "orderId_example" // String | Order Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerReportVoucher(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAt** | **String**| start time, format (dd-MM-yyyy) | [optional] 
 **toAt** | **String**| end time, format (dd-MM-yyyy) | [optional] 
 **distributorId** | **Number**| distributor id | [optional] 
 **appliedDistId** | **Number**| order&#39;s distributor id | [optional] 
 **customerId** | **Number**| customer id | [optional] 
 **status** | **String**| voucher&#39;s status: assigned, claimed, expired | [optional] 
 **size** | **Number**| Limit the size of result set. Must be an integer (default &#x3D; 50) | [optional] 
 **page** | **Number**| Offset of result | [optional] 
 **campaignId** | **Number**| Campaign id (default: 0 - search all) | [optional] 
 **amountFrom** | **Number**| Voucher&#39;s amount from | [optional] 
 **amountTo** | **Number**| Voucher&#39;s amount to | [optional] 
 **orderId** | **String**| Order Id | [optional] 

### Return type

[**PresenterReportVoucherResponse**](PresenterReportVoucherResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerStatisticCustomer"></a>
# **reportControllerStatisticCustomer**
> PresenterStatisticCustomerResponse reportControllerStatisticCustomer(fromAt, toAt, opts)



statistic customer&#39;s transaction (topup and payment) &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var fromAt = "fromAt_example"; // String | start time, format (dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time, format (dd-MM-yyyy)

var opts = { 
  'distributorId': 789, // Number | distributor id
  'customerId': 789, // Number | customer id
  'size': 789, // Number | Limit the size of result set. Must be an integer (default = 50)
  'page': 789, // Number | Offset of result
  'paymentGt': 789, // Number | greater or equal payment amount
  'paymentLt': 789, // Number | lesser or equal payment amount
  'topupGt': 789, // Number | greater or equal topup amount
  'topupLt': 789 // Number | lesser or equal topup amount
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerStatisticCustomer(fromAt, toAt, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAt** | **String**| start time, format (dd-MM-yyyy) | 
 **toAt** | **String**| end time, format (dd-MM-yyyy) | 
 **distributorId** | **Number**| distributor id | [optional] 
 **customerId** | **Number**| customer id | [optional] 
 **size** | **Number**| Limit the size of result set. Must be an integer (default &#x3D; 50) | [optional] 
 **page** | **Number**| Offset of result | [optional] 
 **paymentGt** | **Number**| greater or equal payment amount | [optional] 
 **paymentLt** | **Number**| lesser or equal payment amount | [optional] 
 **topupGt** | **Number**| greater or equal topup amount | [optional] 
 **topupLt** | **Number**| lesser or equal topup amount | [optional] 

### Return type

[**PresenterStatisticCustomerResponse**](PresenterStatisticCustomerResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerStatisticDailyTracking"></a>
# **reportControllerStatisticDailyTracking**
> PresenterStatisticDailyTrackingResponse reportControllerStatisticDailyTracking(fromAt, toAt, opts)



statistic user daily operation &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var fromAt = "fromAt_example"; // String | begin time to statistics (format time: dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time to statistics (format time: dd-MM-yyyy)

var opts = { 
  'pharmacyId': "pharmacyId_example" // String | pharmacy id (options)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerStatisticDailyTracking(fromAt, toAt, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAt** | **String**| begin time to statistics (format time: dd-MM-yyyy) | 
 **toAt** | **String**| end time to statistics (format time: dd-MM-yyyy) | 
 **pharmacyId** | **String**| pharmacy id (options) | [optional] 

### Return type

[**PresenterStatisticDailyTrackingResponse**](PresenterStatisticDailyTrackingResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerStatisticRevenue"></a>
# **reportControllerStatisticRevenue**
> PresenterStatisticRevenueResponse reportControllerStatisticRevenue(revenueType, fromAt, toAt, opts)



sales revenue statistics, includes : total transaction, total income, total net income (exclude fee charge) &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var revenueType = 789; // Number | type of revenue: 1 - revenue all, 2 - revenue by distributor, 3 - revenue by product

var fromAt = "fromAt_example"; // String | begin time to statistics (format time: dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time to statistics (format time: dd-MM-yyyy)

var opts = { 
  'distributorId': 789, // Number | distributor id
  'page': 789, // Number | page elements
  'size': 789, // Number | size elements
  'type': 789 // Number | type: 0 - actual revenue (default), 1 - expected revenue, 2 - new order
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerStatisticRevenue(revenueType, fromAt, toAt, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revenueType** | **Number**| type of revenue: 1 - revenue all, 2 - revenue by distributor, 3 - revenue by product | 
 **fromAt** | **String**| begin time to statistics (format time: dd-MM-yyyy) | 
 **toAt** | **String**| end time to statistics (format time: dd-MM-yyyy) | 
 **distributorId** | **Number**| distributor id | [optional] 
 **page** | **Number**| page elements | [optional] 
 **size** | **Number**| size elements | [optional] 
 **type** | **Number**| type: 0 - actual revenue (default), 1 - expected revenue, 2 - new order | [optional] 

### Return type

[**PresenterStatisticRevenueResponse**](PresenterStatisticRevenueResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerStatisticStatus"></a>
# **reportControllerStatisticStatus**
> PresenterStatisticStatusResponse reportControllerStatisticStatus(fromAt, toAt, opts)



statistic the quantity of order by status (order status or payment status) &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var fromAt = "fromAt_example"; // String | begin time to statistics (format time: dd-MM-yyyy)

var toAt = "toAt_example"; // String | end time to statistics (format time: dd-MM-yyyy)

var opts = { 
  'byPayment': true, // Boolean | default: by order status
  'distributorId': 789 // Number | distributor id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerStatisticStatus(fromAt, toAt, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAt** | **String**| begin time to statistics (format time: dd-MM-yyyy) | 
 **toAt** | **String**| end time to statistics (format time: dd-MM-yyyy) | 
 **byPayment** | **Boolean**| default: by order status | [optional] 
 **distributorId** | **Number**| distributor id | [optional] 

### Return type

[**PresenterStatisticStatusResponse**](PresenterStatisticStatusResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reportControllerSyncAppliedDistributor"></a>
# **reportControllerSyncAppliedDistributor**
> PresenterSyncAppliedDistributorResponse reportControllerSyncAppliedDistributor(opts)



SyncAppliedDistributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReportApi();

var opts = { 
  'status': "status_example", // String | voucher's status (default: claimed)
  'page': 789, // Number | page (default: 1)
  'size': 789 // Number | size (default: 100)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportControllerSyncAppliedDistributor(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| voucher&#39;s status (default: claimed) | [optional] 
 **page** | **Number**| page (default: 1) | [optional] 
 **size** | **Number**| size (default: 100) | [optional] 

### Return type

[**PresenterSyncAppliedDistributorResponse**](PresenterSyncAppliedDistributorResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

