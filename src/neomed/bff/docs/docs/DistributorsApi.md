# NeomedApi.DistributorsApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributorControllerAddPharmaciesToDistributor**](DistributorsApi.md#distributorControllerAddPharmaciesToDistributor) | **POST** /distributors/{distId}/pharmacies/ | 
[**distributorControllerDelete**](DistributorsApi.md#distributorControllerDelete) | **DELETE** /distributors/{id} | 
[**distributorControllerGetAll**](DistributorsApi.md#distributorControllerGetAll) | **GET** /distributors/ | 
[**distributorControllerGetGetActiveDistributorForMobile**](DistributorsApi.md#distributorControllerGetGetActiveDistributorForMobile) | **GET** /distributors/activated-with-location/ | 
[**distributorControllerGetGetAllActive**](DistributorsApi.md#distributorControllerGetGetAllActive) | **GET** /distributors/active/ | 
[**distributorControllerGetOne**](DistributorsApi.md#distributorControllerGetOne) | **GET** /distributors/{id} | 
[**distributorControllerPost**](DistributorsApi.md#distributorControllerPost) | **POST** /distributors/ | 
[**distributorControllerPut**](DistributorsApi.md#distributorControllerPut) | **PUT** /distributors/{id} | 
[**distributorControllerPutHotDeal**](DistributorsApi.md#distributorControllerPutHotDeal) | **PUT** /distributors/hot-deal/{id} | 
[**distributorControllerRemovePharmaciesFromDistributor**](DistributorsApi.md#distributorControllerRemovePharmaciesFromDistributor) | **DELETE** /distributors/{distId}/pharmacies/ | 
[**distributorControllerSearch**](DistributorsApi.md#distributorControllerSearch) | **GET** /distributors/_search | 
[**distributorControllerUpdateGroupTelegram**](DistributorsApi.md#distributorControllerUpdateGroupTelegram) | **PUT** /distributors/{id}/telegram | 


<a name="distributorControllerAddPharmaciesToDistributor"></a>
# **distributorControllerAddPharmaciesToDistributor**
> PresenterCommonErrResponse distributorControllerAddPharmaciesToDistributor(distId, body)



Add Pharmacy To Distributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.DistributorsApi();

var distId = "distId_example"; // String | The ID of customer group

var body = new NeomedApi.PresenterPharmaciesInDistributorRequest(); // PresenterPharmaciesInDistributorRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.distributorControllerAddPharmaciesToDistributor(distId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distId** | **String**| The ID of customer group | 
 **body** | [**PresenterPharmaciesInDistributorRequest**](PresenterPharmaciesInDistributorRequest.md)| body of category to be link with | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="distributorControllerDelete"></a>
# **distributorControllerDelete**
> PresenterCommonErrResponse distributorControllerDelete(id)



delete the Distributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.DistributorsApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.distributorControllerDelete(id, callback);
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

<a name="distributorControllerGetAll"></a>
# **distributorControllerGetAll**
> PresenterListDistributorsResponse distributorControllerGetAll(opts)



get Distributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.DistributorsApi();

var opts = { 
  'status': 789, // Number | Status: -1 : all
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
apiInstance.distributorControllerGetAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Number**| Status: -1 : all | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListDistributorsResponse**](PresenterListDistributorsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="distributorControllerGetGetActiveDistributorForMobile"></a>
# **distributorControllerGetGetActiveDistributorForMobile**
> PresenterListDistributorsResponse distributorControllerGetGetActiveDistributorForMobile(opts)



get Distributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.DistributorsApi();

var opts = { 
  'districts': "districts_example", // String | districts is an numbers array, separate by comma. e.g `100,200,300`
  'sortBy': "sortBy_example", // String | sortBy :: 0:default 1:hotdeal_priority
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
apiInstance.distributorControllerGetGetActiveDistributorForMobile(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **districts** | **String**| districts is an numbers array, separate by comma. e.g &#x60;100,200,300&#x60; | [optional] 
 **sortBy** | **String**| sortBy :: 0:default 1:hotdeal_priority | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListDistributorsResponse**](PresenterListDistributorsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="distributorControllerGetGetAllActive"></a>
# **distributorControllerGetGetAllActive**
> PresenterListDistributorsResponse distributorControllerGetGetAllActive(opts)



get Distributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.DistributorsApi();

var opts = { 
  'sortBy': "sortBy_example", // String | sortBy :: 0:default 1:hotdeal_priority
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
apiInstance.distributorControllerGetGetAllActive(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | **String**| sortBy :: 0:default 1:hotdeal_priority | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListDistributorsResponse**](PresenterListDistributorsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="distributorControllerGetOne"></a>
# **distributorControllerGetOne**
> PresenterDistributor distributorControllerGetOne(id)



get Distributor by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.DistributorsApi();

var id = "id_example"; // String | The key for staticblock


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.distributorControllerGetOne(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The key for staticblock | 

### Return type

[**PresenterDistributor**](PresenterDistributor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="distributorControllerPost"></a>
# **distributorControllerPost**
> distributorControllerPost(body)



create Distributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.DistributorsApi();

var body = new NeomedApi.PresenterDistributor(); // PresenterDistributor | body for Distributor content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.distributorControllerPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterDistributor**](PresenterDistributor.md)| body for Distributor content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="distributorControllerPut"></a>
# **distributorControllerPut**
> PresenterCommonErrResponse distributorControllerPut(id, body)



update the Distributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.DistributorsApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterDistributor(); // PresenterDistributor | body for Distributor content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.distributorControllerPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterDistributor**](PresenterDistributor.md)| body for Distributor content | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="distributorControllerPutHotDeal"></a>
# **distributorControllerPutHotDeal**
> PresenterCommonErrResponse distributorControllerPutHotDeal(id, hotdealPriority)



update the hotdeal &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.DistributorsApi();

var id = "id_example"; // String | The id you want to update

var hotdealPriority = 789; // Number | hotdeal_priority for Distributor content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.distributorControllerPutHotDeal(id, hotdealPriority, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **hotdealPriority** | **Number**| hotdeal_priority for Distributor content | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="distributorControllerRemovePharmaciesFromDistributor"></a>
# **distributorControllerRemovePharmaciesFromDistributor**
> PresenterCommonErrResponse distributorControllerRemovePharmaciesFromDistributor(groupId, body)



Remove Pharmacies from Distributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.DistributorsApi();

var groupId = "groupId_example"; // String | The ID of group

var body = new NeomedApi.PresenterPharmaciesInDistributorRequest(); // PresenterPharmaciesInDistributorRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.distributorControllerRemovePharmaciesFromDistributor(groupId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| The ID of group | 
 **body** | [**PresenterPharmaciesInDistributorRequest**](PresenterPharmaciesInDistributorRequest.md)| body of category to be link with | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="distributorControllerSearch"></a>
# **distributorControllerSearch**
> PresenterListDistributorsResponse distributorControllerSearch(opts)



get list of Distributor by Name or Phone with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.DistributorsApi();

var opts = { 
  'name': "name_example", // String | name
  'status': 789, // Number | status
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
apiInstance.distributorControllerSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name | [optional] 
 **status** | **Number**| status | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListDistributorsResponse**](PresenterListDistributorsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="distributorControllerUpdateGroupTelegram"></a>
# **distributorControllerUpdateGroupTelegram**
> PresenterCommonErrResponse distributorControllerUpdateGroupTelegram(id, groupId)



update the Update group telegram &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.DistributorsApi();

var id = "id_example"; // String | The id you want to update

var groupId = "groupId_example"; // String | The group_id want to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.distributorControllerUpdateGroupTelegram(id, groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **groupId** | **String**| The group_id want to update | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

