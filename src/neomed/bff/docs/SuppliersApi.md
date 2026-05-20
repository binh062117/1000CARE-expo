# NeomedApi.SuppliersApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**supplierControllerDelete**](SuppliersApi.md#supplierControllerDelete) | **DELETE** /suppliers/{id} | 
[**supplierControllerGetAll**](SuppliersApi.md#supplierControllerGetAll) | **GET** /suppliers/ | 
[**supplierControllerGetOne**](SuppliersApi.md#supplierControllerGetOne) | **GET** /suppliers/{id} | 
[**supplierControllerGetSupplierByDistributor**](SuppliersApi.md#supplierControllerGetSupplierByDistributor) | **GET** /suppliers/distributors/{id} | 
[**supplierControllerPost**](SuppliersApi.md#supplierControllerPost) | **POST** /suppliers/ | 
[**supplierControllerPut**](SuppliersApi.md#supplierControllerPut) | **PUT** /suppliers/{id} | 
[**supplierControllerSearch**](SuppliersApi.md#supplierControllerSearch) | **GET** /suppliers/_search | 


<a name="supplierControllerDelete"></a>
# **supplierControllerDelete**
> PresenterCommonErrResponse supplierControllerDelete(id)



delete the Supplier &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.SuppliersApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.supplierControllerDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to delete | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="supplierControllerGetAll"></a>
# **supplierControllerGetAll**
> PresenterListSuppliersResponse supplierControllerGetAll(opts)



get Supplier &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.SuppliersApi();

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
apiInstance.supplierControllerGetAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListSuppliersResponse**](PresenterListSuppliersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="supplierControllerGetOne"></a>
# **supplierControllerGetOne**
> PresenterSupplier supplierControllerGetOne(id)



get Supplier by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.SuppliersApi();

var id = "id_example"; // String | The key for staticblock


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.supplierControllerGetOne(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The key for staticblock | 

### Return type

[**PresenterSupplier**](PresenterSupplier.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="supplierControllerGetSupplierByDistributor"></a>
# **supplierControllerGetSupplierByDistributor**
> PresenterListSuppliersResponse supplierControllerGetSupplierByDistributor(id, opts)



get Supplier &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.SuppliersApi();

var id = "id_example"; // String | The distributor id you want to get

var opts = { 
  'type': "type_example", // String | type: 0= ALL 1=Active
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
apiInstance.supplierControllerGetSupplierByDistributor(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The distributor id you want to get | 
 **type** | **String**| type: 0&#x3D; ALL 1&#x3D;Active | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListSuppliersResponse**](PresenterListSuppliersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="supplierControllerPost"></a>
# **supplierControllerPost**
> supplierControllerPost(body)



create Supplier &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.SuppliersApi();

var body = new NeomedApi.PresenterSupplier(); // PresenterSupplier | body for Supplier content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.supplierControllerPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterSupplier**](PresenterSupplier.md)| body for Supplier content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="supplierControllerPut"></a>
# **supplierControllerPut**
> PresenterSupplier supplierControllerPut(id, body)



update the Supplier &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.SuppliersApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterSupplier(); // PresenterSupplier | body for Supplier content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.supplierControllerPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterSupplier**](PresenterSupplier.md)| body for Supplier content | 

### Return type

[**PresenterSupplier**](PresenterSupplier.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="supplierControllerSearch"></a>
# **supplierControllerSearch**
> PresenterListSuppliersResponse supplierControllerSearch(opts)



get list of Product by Distributor with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.SuppliersApi();

var opts = { 
  'condition': "condition_example" // String | the search condition
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.supplierControllerSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **condition** | **String**| the search condition | [optional] 

### Return type

[**PresenterListSuppliersResponse**](PresenterListSuppliersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

