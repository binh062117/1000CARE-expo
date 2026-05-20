# NeomedApi.VersionApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**versionControllerGetVersion**](VersionApi.md#versionControllerGetVersion) | **GET** /version/ | 
[**versionControllerGetVersion_0**](VersionApi.md#versionControllerGetVersion_0) | **GET** /version/all | 
[**versionControllerGetVersion_1**](VersionApi.md#versionControllerGetVersion_1) | **DELETE** /version/delete/{id} | 
[**versionControllerPost**](VersionApi.md#versionControllerPost) | **POST** /version/create | 
[**versionControllerPut**](VersionApi.md#versionControllerPut) | **PUT** /version/update/{id} | 


<a name="versionControllerGetVersion"></a>
# **versionControllerGetVersion**
> PresenterVersion versionControllerGetVersion(os, version)



get version &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.VersionApi();

var os = "os_example"; // String | Mobile OS e.g. android, ios

var version = "version_example"; // String | App current version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionControllerGetVersion(os, version, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **os** | **String**| Mobile OS e.g. android, ios | 
 **version** | **String**| App current version | 

### Return type

[**PresenterVersion**](PresenterVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="versionControllerGetVersion_0"></a>
# **versionControllerGetVersion_0**
> PresenterListVersion versionControllerGetVersion_0()



get version &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.VersionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionControllerGetVersion_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterListVersion**](PresenterListVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="versionControllerGetVersion_1"></a>
# **versionControllerGetVersion_1**
> PresenterVersionRequest versionControllerGetVersion_1(id)



get version &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.VersionApi();

var id = 789; // Number | id version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionControllerGetVersion_1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id version | 

### Return type

[**PresenterVersionRequest**](PresenterVersionRequest.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="versionControllerPost"></a>
# **versionControllerPost**
> versionControllerPost(body)



create Version &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.VersionApi();

var body = new NeomedApi.PresenterVersionRequest(); // PresenterVersionRequest | body for Version content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.versionControllerPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterVersionRequest**](PresenterVersionRequest.md)| body for Version content | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="versionControllerPut"></a>
# **versionControllerPut**
> PresenterCommonErrResponse versionControllerPut(id, body)



update the Version &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.VersionApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterVersionRequest(); // PresenterVersionRequest | body for Version content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionControllerPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterVersionRequest**](PresenterVersionRequest.md)| body for Version content | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

