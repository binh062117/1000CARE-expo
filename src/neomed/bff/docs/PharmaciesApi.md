# NeomedApi.PharmaciesApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pharmacityControllerAddOrRemoveAccredit**](PharmaciesApi.md#pharmacityControllerAddOrRemoveAccredit) | **POST** /pharmacies/accredit | 
[**pharmacityControllerGetAll**](PharmaciesApi.md#pharmacityControllerGetAll) | **GET** /pharmacies/ | 
[**pharmacityControllerGetAllAccredit**](PharmaciesApi.md#pharmacityControllerGetAllAccredit) | **GET** /pharmacies/accredit/{distributor_id} | 
[**pharmacityControllerGetAllInDistributor**](PharmaciesApi.md#pharmacityControllerGetAllInDistributor) | **GET** /pharmacies/distributors/{distId} | 
[**pharmacityControllerGetAllNotInDistributor**](PharmaciesApi.md#pharmacityControllerGetAllNotInDistributor) | **GET** /pharmacies/distributors/{distId}/non-relation | 
[**pharmacityControllerGetByPhone**](PharmaciesApi.md#pharmacityControllerGetByPhone) | **GET** /pharmacies/phone/{phoneNumber} | 
[**pharmacityControllerGetOne**](PharmaciesApi.md#pharmacityControllerGetOne) | **GET** /pharmacies/{pharId} | 
[**pharmacityControllerPharmacyImport**](PharmaciesApi.md#pharmacityControllerPharmacyImport) | **POST** /pharmacies/import | 
[**pharmacityControllerPharmacyOnline**](PharmaciesApi.md#pharmacityControllerPharmacyOnline) | **POST** /pharmacies/online | 
[**pharmacityControllerPost**](PharmaciesApi.md#pharmacityControllerPost) | **POST** /pharmacies/ | 
[**pharmacityControllerPut**](PharmaciesApi.md#pharmacityControllerPut) | **PUT** /pharmacies/{pharId} | 
[**pharmacityControllerSearch**](PharmaciesApi.md#pharmacityControllerSearch) | **GET** /pharmacies/_search | 
[**pharmacityControllerSendMessForPhar**](PharmaciesApi.md#pharmacityControllerSendMessForPhar) | **POST** /pharmacies/noti | 
[**pharmacityControllerUpdateFavouriteDis**](PharmaciesApi.md#pharmacityControllerUpdateFavouriteDis) | **PUT** /pharmacies/{pharId}/favourite/distributor/{disId} | 
[**pharmacityControllerUpdateSection**](PharmaciesApi.md#pharmacityControllerUpdateSection) | **PUT** /pharmacies/{pharId}/section | 
[**pharmacityControllerUpdateStatus**](PharmaciesApi.md#pharmacityControllerUpdateStatus) | **PUT** /pharmacies/{pharId}/status | 
[**pharmacityControllerUpdateType**](PharmaciesApi.md#pharmacityControllerUpdateType) | **PUT** /pharmacies/{pharId}/type | 


<a name="pharmacityControllerAddOrRemoveAccredit"></a>
# **pharmacityControllerAddOrRemoveAccredit**
> pharmacityControllerAddOrRemoveAccredit(body)



Add or Remove accredit for pharmacy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var body = new NeomedApi.PresenterAccreditRequest(); // PresenterAccreditRequest | body- type:[1]:Add [2]Remove distributors: a lot of distributor_ids


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pharmacityControllerAddOrRemoveAccredit(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterAccreditRequest**](PresenterAccreditRequest.md)| body- type:[1]:Add [2]Remove distributors: a lot of distributor_ids | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerGetAll"></a>
# **pharmacityControllerGetAll**
> PresenterListPharmaciesResponse pharmacityControllerGetAll(opts)



get Pharmacy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var opts = { 
  'status': "status_example", // String | Status of pharmacy. Must be an string
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
apiInstance.pharmacityControllerGetAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Status of pharmacy. Must be an string | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListPharmaciesResponse**](PresenterListPharmaciesResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerGetAllAccredit"></a>
# **pharmacityControllerGetAllAccredit**
> PresenterListPharmaciesResponse pharmacityControllerGetAllAccredit(distributorId, opts)



GetAllAccredit &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var distributorId = "distributorId_example"; // String | The distributor_id you want to get pharmacy

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
apiInstance.pharmacityControllerGetAllAccredit(distributorId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| The distributor_id you want to get pharmacy | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListPharmaciesResponse**](PresenterListPharmaciesResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerGetAllInDistributor"></a>
# **pharmacityControllerGetAllInDistributor**
> PresenterListPharmaciesResponse pharmacityControllerGetAllInDistributor(distId, opts)



GetAllInDistributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var distId = "distId_example"; // String | The key for static block

var opts = { 
  'status': "status_example", // String | Status of pharmacy. Status => initial approved
  'type': "type_example", // String | 0:Phar not in customer group 1:Phar in customer group
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
apiInstance.pharmacityControllerGetAllInDistributor(distId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distId** | **String**| The key for static block | 
 **status** | **String**| Status of pharmacy. Status &#x3D;&gt; initial approved | [optional] 
 **type** | **String**| 0:Phar not in customer group 1:Phar in customer group | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListPharmaciesResponse**](PresenterListPharmaciesResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerGetAllNotInDistributor"></a>
# **pharmacityControllerGetAllNotInDistributor**
> PresenterListPharmaciesResponse pharmacityControllerGetAllNotInDistributor(distId, opts)



GetAllNotInDistributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var distId = "distId_example"; // String | The key for static block

var opts = { 
  'status': "status_example", // String | Status
  'customerId': 789, // Number | customerId of pharmacy. Must be an integer
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
apiInstance.pharmacityControllerGetAllNotInDistributor(distId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distId** | **String**| The key for static block | 
 **status** | **String**| Status | [optional] 
 **customerId** | **Number**| customerId of pharmacy. Must be an integer | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListPharmaciesResponse**](PresenterListPharmaciesResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerGetByPhone"></a>
# **pharmacityControllerGetByPhone**
> PresenterPharmacy pharmacityControllerGetByPhone(phoneNumber)



get Pharmacy by phone number &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var phoneNumber = "phoneNumber_example"; // String | The key for static block


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pharmacityControllerGetByPhone(phoneNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | **String**| The key for static block | 

### Return type

[**PresenterPharmacy**](PresenterPharmacy.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerGetOne"></a>
# **pharmacityControllerGetOne**
> PresenterPharmacy pharmacityControllerGetOne(pharId)



get Pharmacy by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var pharId = "pharId_example"; // String | The key for static block


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pharmacityControllerGetOne(pharId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pharId** | **String**| The key for static block | 

### Return type

[**PresenterPharmacy**](PresenterPharmacy.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerPharmacyImport"></a>
# **pharmacityControllerPharmacyImport**
> pharmacityControllerPharmacyImport(body)



add Pharmacy from file import &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var body = new NeomedApi.PresenterPharmacyImports(); // PresenterPharmacyImports | body for PharmacyImport content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pharmacityControllerPharmacyImport(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterPharmacyImports**](PresenterPharmacyImports.md)| body for PharmacyImport content | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerPharmacyOnline"></a>
# **pharmacityControllerPharmacyOnline**
> PresenterPharmacy pharmacityControllerPharmacyOnline()



Pharmacy online &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pharmacityControllerPharmacyOnline(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterPharmacy**](PresenterPharmacy.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerPost"></a>
# **pharmacityControllerPost**
> pharmacityControllerPost(body)



create Pharmacy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var body = new NeomedApi.PresenterCreatePharmacyUpdateRequest(); // PresenterCreatePharmacyUpdateRequest | body for Pharmacy content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pharmacityControllerPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCreatePharmacyUpdateRequest**](PresenterCreatePharmacyUpdateRequest.md)| body for Pharmacy content | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerPut"></a>
# **pharmacityControllerPut**
> PresenterCommonErrResponse pharmacityControllerPut(pharId, body)



update the Pharmacy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var pharId = "pharId_example"; // String | The id you want to update

var body = new NeomedApi.PresenterCreatePharmacyUpdateRequest(); // PresenterCreatePharmacyUpdateRequest | body for Pharmacy content , format approved_at : dd/MM/yyyy hh:mm:ss


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pharmacityControllerPut(pharId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pharId** | **String**| The id you want to update | 
 **body** | [**PresenterCreatePharmacyUpdateRequest**](PresenterCreatePharmacyUpdateRequest.md)| body for Pharmacy content , format approved_at : dd/MM/yyyy hh:mm:ss | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerSearch"></a>
# **pharmacityControllerSearch**
> PresenterListPharmaciesResponse pharmacityControllerSearch(opts)



get list of Pharmacy by Name or Phone with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.PharmaciesApi();

var opts = { 
  'disId': 789, // Number | disId
  'name': "name_example", // String | name
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
apiInstance.pharmacityControllerSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disId** | **Number**| disId | [optional] 
 **name** | **String**| name | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListPharmaciesResponse**](PresenterListPharmaciesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerSendMessForPhar"></a>
# **pharmacityControllerSendMessForPhar**
> pharmacityControllerSendMessForPhar(body)



Send mess for Phar &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var body = new NeomedApi.PresenterSendMessForPhar(); // PresenterSendMessForPhar | Ids: customer_group_id or user_id || obj_type: 1.customer_group 2.User || send_type: 1.Now 2.Schedule || exec_time: format dd/MM/yyyy hh:mm:ss


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pharmacityControllerSendMessForPhar(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterSendMessForPhar**](PresenterSendMessForPhar.md)| Ids: customer_group_id or user_id || obj_type: 1.customer_group 2.User || send_type: 1.Now 2.Schedule || exec_time: format dd/MM/yyyy hh:mm:ss | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerUpdateFavouriteDis"></a>
# **pharmacityControllerUpdateFavouriteDis**
> PresenterCommonErrResponse pharmacityControllerUpdateFavouriteDis(pharId, disId)



update the UpdateFavouriteDis of Pharmacy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var pharId = "pharId_example"; // String | The pharId you want to update

var disId = "disId_example"; // String | The disId you want to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pharmacityControllerUpdateFavouriteDis(pharId, disId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pharId** | **String**| The pharId you want to update | 
 **disId** | **String**| The disId you want to update | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerUpdateSection"></a>
# **pharmacityControllerUpdateSection**
> PresenterCommonErrResponse pharmacityControllerUpdateSection(pharId, type, body)



update section the Pharmacy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var pharId = "pharId_example"; // String | The id you want to update

var type = 789; // Number | 0:General Infomation 1:Legal information 2:Billing infomation

var body = new NeomedApi.PresenterCreatePharmacyUpdateRequest(); // PresenterCreatePharmacyUpdateRequest | body for Pharmacy content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pharmacityControllerUpdateSection(pharId, type, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pharId** | **String**| The id you want to update | 
 **type** | **Number**| 0:General Infomation 1:Legal information 2:Billing infomation | 
 **body** | [**PresenterCreatePharmacyUpdateRequest**](PresenterCreatePharmacyUpdateRequest.md)| body for Pharmacy content | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerUpdateStatus"></a>
# **pharmacityControllerUpdateStatus**
> PresenterCommonErrResponse pharmacityControllerUpdateStatus(pharId, body)



update status the Pharmacy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var pharId = "pharId_example"; // String | The id you want to update

var body = new NeomedApi.PresenterUpdatePharmacyStatusRequest(); // PresenterUpdatePharmacyStatusRequest | body for Pharmacy status


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pharmacityControllerUpdateStatus(pharId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pharId** | **String**| The id you want to update | 
 **body** | [**PresenterUpdatePharmacyStatusRequest**](PresenterUpdatePharmacyStatusRequest.md)| body for Pharmacy status | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pharmacityControllerUpdateType"></a>
# **pharmacityControllerUpdateType**
> PresenterCommonErrResponse pharmacityControllerUpdateType(pharId, body)



update status the Pharmacy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.PharmaciesApi();

var pharId = "pharId_example"; // String | The id you want to update

var body = new NeomedApi.PresenterUpdatePharmacyRequest(); // PresenterUpdatePharmacyRequest | body for Pharmacy type


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pharmacityControllerUpdateType(pharId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pharId** | **String**| The id you want to update | 
 **body** | [**PresenterUpdatePharmacyRequest**](PresenterUpdatePharmacyRequest.md)| body for Pharmacy type | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

