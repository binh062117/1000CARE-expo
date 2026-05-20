# NeomedApi.NotiApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notiControllerGetListGroupId**](NotiApi.md#notiControllerGetListGroupId) | **GET** /noti/telegram/list | 
[**notiControllerGetListNoti**](NotiApi.md#notiControllerGetListNoti) | **GET** /noti/list | 
[**notiControllerRegisterToken**](NotiApi.md#notiControllerRegisterToken) | **POST** /noti/register | 
[**notiControllerUnregisterToken**](NotiApi.md#notiControllerUnregisterToken) | **POST** /noti/unregister | 
[**notiControllerUpdateIsRead**](NotiApi.md#notiControllerUpdateIsRead) | **PUT** /noti/{id} | 


<a name="notiControllerGetListGroupId"></a>
# **notiControllerGetListGroupId**
> PresenterListGroupIdRespone notiControllerGetListGroupId(opts)



get list groupId telegram &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.NotiApi();

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
apiInstance.notiControllerGetListGroupId(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListGroupIdRespone**](PresenterListGroupIdRespone.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="notiControllerGetListNoti"></a>
# **notiControllerGetListNoti**
> PresenterListNotiResponse notiControllerGetListNoti(opts)



get list noti &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.NotiApi();

var opts = { 
  'isRead': 789, // Number | isRead type int :: 0 = non-read ; 1 = read
  'platform': 789, // Number | platform  int :: 0 = app ; 1 = BO
  'userId': 789, // Number | userId
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
apiInstance.notiControllerGetListNoti(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isRead** | **Number**| isRead type int :: 0 &#x3D; non-read ; 1 &#x3D; read | [optional] 
 **platform** | **Number**| platform  int :: 0 &#x3D; app ; 1 &#x3D; BO | [optional] 
 **userId** | **Number**| userId | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListNotiResponse**](PresenterListNotiResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="notiControllerRegisterToken"></a>
# **notiControllerRegisterToken**
> PresenterRegisterTokenResponse notiControllerRegisterToken(token)



register fcm token &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.NotiApi();

var token = "token_example"; // String | fcm token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.notiControllerRegisterToken(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| fcm token | 

### Return type

[**PresenterRegisterTokenResponse**](PresenterRegisterTokenResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="notiControllerUnregisterToken"></a>
# **notiControllerUnregisterToken**
> PresenterRegisterTokenResponse notiControllerUnregisterToken(token)



unregister fcm token &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.NotiApi();

var token = "token_example"; // String | fcm token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.notiControllerUnregisterToken(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| fcm token | 

### Return type

[**PresenterRegisterTokenResponse**](PresenterRegisterTokenResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="notiControllerUpdateIsRead"></a>
# **notiControllerUpdateIsRead**
> notiControllerUpdateIsRead(id, opts)



Update is_read &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.NotiApi();

var id = "id_example"; // String | The id you want to update

var opts = { 
  'status': 789, // Number | status => 0:all (update isRead by user)  ;  1 : one (update isRead by notiId)
  'isRead': true // Boolean | is_read
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.notiControllerUpdateIsRead(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **status** | **Number**| status &#x3D;&gt; 0:all (update isRead by user)  ;  1 : one (update isRead by notiId) | [optional] 
 **isRead** | **Boolean**| is_read | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

