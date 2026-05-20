# NeomedApi.AttributesApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attributeControllerCreate**](AttributesApi.md#attributeControllerCreate) | **POST** /attributes/ | 
[**attributeControllerDelete**](AttributesApi.md#attributeControllerDelete) | **DELETE** /attributes/{id} | 
[**attributeControllerGetAll**](AttributesApi.md#attributeControllerGetAll) | **GET** /attributes/ | 
[**attributeControllerGetOne**](AttributesApi.md#attributeControllerGetOne) | **GET** /attributes/{id} | 
[**attributeControllerPut**](AttributesApi.md#attributeControllerPut) | **PUT** /attributes/{id} | 


<a name="attributeControllerCreate"></a>
# **attributeControllerCreate**
> PresenterAttribute attributeControllerCreate(body)



create Attributes &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AttributesApi();

var body = new NeomedApi.PresenterAttribute(); // PresenterAttribute | body for Attributes content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attributeControllerCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterAttribute**](PresenterAttribute.md)| body for Attributes content | 

### Return type

[**PresenterAttribute**](PresenterAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attributeControllerDelete"></a>
# **attributeControllerDelete**
> attributeControllerDelete(id)



delete the Attributes &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AttributesApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.attributeControllerDelete(id, callback);
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

<a name="attributeControllerGetAll"></a>
# **attributeControllerGetAll**
> PresenterAttribute attributeControllerGetAll(opts)



get Attributes &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AttributesApi();

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
apiInstance.attributeControllerGetAll(opts, callback);
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

[**PresenterAttribute**](PresenterAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attributeControllerGetOne"></a>
# **attributeControllerGetOne**
> PresenterAttribute attributeControllerGetOne(id)



get Attributes by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AttributesApi();

var id = "id_example"; // String | The key for staticblock


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attributeControllerGetOne(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The key for staticblock | 

### Return type

[**PresenterAttribute**](PresenterAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attributeControllerPut"></a>
# **attributeControllerPut**
> PresenterAttribute attributeControllerPut(id, body)



update the Attributes &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AttributesApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterAttribute(); // PresenterAttribute | body for Attributes content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attributeControllerPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterAttribute**](PresenterAttribute.md)| body for Attributes content | 

### Return type

[**PresenterAttribute**](PresenterAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

