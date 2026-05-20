# NeomedApi.OptionsApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**optionControllerCreate**](OptionsApi.md#optionControllerCreate) | **POST** /options/ | 
[**optionControllerDelete**](OptionsApi.md#optionControllerDelete) | **DELETE** /options/{id} | 
[**optionControllerGetAll**](OptionsApi.md#optionControllerGetAll) | **GET** /options/ | 
[**optionControllerGetOne**](OptionsApi.md#optionControllerGetOne) | **GET** /options/{id} | 
[**optionControllerGetOptionsByProduct**](OptionsApi.md#optionControllerGetOptionsByProduct) | **GET** /options/products/{productId} | 
[**optionControllerUpdate**](OptionsApi.md#optionControllerUpdate) | **PUT** /options/{id} | 


<a name="optionControllerCreate"></a>
# **optionControllerCreate**
> PresenterOption optionControllerCreate(body)



create Options &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.OptionsApi();

var body = new NeomedApi.PresenterOption(); // PresenterOption | body for Options content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.optionControllerCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterOption**](PresenterOption.md)| body for Options content | 

### Return type

[**PresenterOption**](PresenterOption.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="optionControllerDelete"></a>
# **optionControllerDelete**
> optionControllerDelete(id)



delete the Options &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.OptionsApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.optionControllerDelete(id, callback);
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

<a name="optionControllerGetAll"></a>
# **optionControllerGetAll**
> PresenterOption optionControllerGetAll(opts)



get Options &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.OptionsApi();

var opts = { 
  'query': "query_example", // String | Filter. e.g. col1:v1,col2:v2 ...
  'fields': "fields_example", // String | Fields returned. e.g. col1,col2 ...
  'sortby': "sortby_example", // String | Sorted-by fields. e.g. col1,col2 ...
  'order': "order_example", // String | Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
  'limit': "limit_example", // String | Limit the size of result set. Must be an integer
  'offset': "offset_example" // String | Start position of result set. Must be an integer
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.optionControllerGetAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Filter. e.g. col1:v1,col2:v2 ... | [optional] 
 **fields** | **String**| Fields returned. e.g. col1,col2 ... | [optional] 
 **sortby** | **String**| Sorted-by fields. e.g. col1,col2 ... | [optional] 
 **order** | **String**| Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ... | [optional] 
 **limit** | **String**| Limit the size of result set. Must be an integer | [optional] 
 **offset** | **String**| Start position of result set. Must be an integer | [optional] 

### Return type

[**PresenterOption**](PresenterOption.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="optionControllerGetOne"></a>
# **optionControllerGetOne**
> PresenterOption optionControllerGetOne(id)



get Options by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.OptionsApi();

var id = "id_example"; // String | The key for staticblock


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.optionControllerGetOne(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The key for staticblock | 

### Return type

[**PresenterOption**](PresenterOption.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="optionControllerGetOptionsByProduct"></a>
# **optionControllerGetOptionsByProduct**
> PresenterOption optionControllerGetOptionsByProduct(productId, opts)



get Options &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.OptionsApi();

var productId = "productId_example"; // String | productId

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
apiInstance.optionControllerGetOptionsByProduct(productId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| productId | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterOption**](PresenterOption.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="optionControllerUpdate"></a>
# **optionControllerUpdate**
> PresenterOption optionControllerUpdate(id, body)



update the Options &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.OptionsApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterOption(); // PresenterOption | body for Options content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.optionControllerUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterOption**](PresenterOption.md)| body for Options content | 

### Return type

[**PresenterOption**](PresenterOption.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

