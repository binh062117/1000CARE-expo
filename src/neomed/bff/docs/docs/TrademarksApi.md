# NeomedApi.TrademarksApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trademarkControllerCreate**](TrademarksApi.md#trademarkControllerCreate) | **POST** /trademarks/ | 
[**trademarkControllerDelete**](TrademarksApi.md#trademarkControllerDelete) | **DELETE** /trademarks/{id} | 
[**trademarkControllerGetOne**](TrademarksApi.md#trademarkControllerGetOne) | **GET** /trademarks/{id} | 
[**trademarkControllerListTrademarkByDistributor**](TrademarksApi.md#trademarkControllerListTrademarkByDistributor) | **GET** /trademarks/distributors/{distributorId} | 
[**trademarkControllerListTrademarkShowHome**](TrademarksApi.md#trademarkControllerListTrademarkShowHome) | **GET** /trademarks/advertisement | 
[**trademarkControllerUpdate**](TrademarksApi.md#trademarkControllerUpdate) | **PUT** /trademarks/{id} | 
[**trademarkControllerUpdateAdvertiseTrademark**](TrademarksApi.md#trademarkControllerUpdateAdvertiseTrademark) | **PUT** /trademarks/advertisement | 


<a name="trademarkControllerCreate"></a>
# **trademarkControllerCreate**
> PresenterTrademark trademarkControllerCreate(body)



create Trademark &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.TrademarksApi();

var body = new NeomedApi.PresenterTrademark(); // PresenterTrademark | body for Trademark content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trademarkControllerCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterTrademark**](PresenterTrademark.md)| body for Trademark content | 

### Return type

[**PresenterTrademark**](PresenterTrademark.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trademarkControllerDelete"></a>
# **trademarkControllerDelete**
> trademarkControllerDelete(id)



delete the Trademark &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.TrademarksApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.trademarkControllerDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trademarkControllerGetOne"></a>
# **trademarkControllerGetOne**
> PresenterTrademark trademarkControllerGetOne(id)



get Trademark by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.TrademarksApi();

var id = "id_example"; // String | The key for staticblock


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trademarkControllerGetOne(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The key for staticblock | 

### Return type

[**PresenterTrademark**](PresenterTrademark.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trademarkControllerListTrademarkByDistributor"></a>
# **trademarkControllerListTrademarkByDistributor**
> PresenterListTrademarksResponse trademarkControllerListTrademarkByDistributor(distributorId, opts)



get Trademark &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.TrademarksApi();

var distributorId = "distributorId_example"; // String | distributorId

var opts = { 
  'status': "status_example", // String | Status of result set. Must be an integer
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
apiInstance.trademarkControllerListTrademarkByDistributor(distributorId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 
 **status** | **String**| Status of result set. Must be an integer | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListTrademarksResponse**](PresenterListTrademarksResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trademarkControllerListTrademarkShowHome"></a>
# **trademarkControllerListTrademarkShowHome**
> PresenterListTrademarksResponse trademarkControllerListTrademarkShowHome(distributorId, type, opts)



get list trademark show home &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.TrademarksApi();

var distributorId = "distributorId_example"; // String | distributorId

var type = "type_example"; // String | type (0: NotShowHome , 1: ShowHome)

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
apiInstance.trademarkControllerListTrademarkShowHome(distributorId, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 
 **type** | **String**| type (0: NotShowHome , 1: ShowHome) | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListTrademarksResponse**](PresenterListTrademarksResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trademarkControllerUpdate"></a>
# **trademarkControllerUpdate**
> PresenterTrademark trademarkControllerUpdate(id, body)



update the Trademark &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.TrademarksApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterTrademark(); // PresenterTrademark | body for Trademark content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trademarkControllerUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterTrademark**](PresenterTrademark.md)| body for Trademark content | 

### Return type

[**PresenterTrademark**](PresenterTrademark.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trademarkControllerUpdateAdvertiseTrademark"></a>
# **trademarkControllerUpdateAdvertiseTrademark**
> PresenterTrademark trademarkControllerUpdateAdvertiseTrademark(body)



update advertise trademark &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.TrademarksApi();

var body = new NeomedApi.PresenterCreateTrademarkAdvertiseRequest(); // PresenterCreateTrademarkAdvertiseRequest | body for Trademark(advertise) content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trademarkControllerUpdateAdvertiseTrademark(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCreateTrademarkAdvertiseRequest**](PresenterCreateTrademarkAdvertiseRequest.md)| body for Trademark(advertise) content | 

### Return type

[**PresenterTrademark**](PresenterTrademark.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

