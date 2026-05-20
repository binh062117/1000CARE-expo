# NeomedApi.NotischedulersApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notiSchedulerControllerDelete**](NotischedulersApi.md#notiSchedulerControllerDelete) | **DELETE** /noti-schedulers/{id} | 
[**notiSchedulerControllerGetAll**](NotischedulersApi.md#notiSchedulerControllerGetAll) | **GET** /noti-schedulers/ | 
[**notiSchedulerControllerGetOne**](NotischedulersApi.md#notiSchedulerControllerGetOne) | **GET** /noti-schedulers/{notiSchedulerId} | 
[**notiSchedulerControllerPost**](NotischedulersApi.md#notiSchedulerControllerPost) | **POST** /noti-schedulers/ | 
[**notiSchedulerControllerPut**](NotischedulersApi.md#notiSchedulerControllerPut) | **PUT** /noti-schedulers/{id} | 


<a name="notiSchedulerControllerDelete"></a>
# **notiSchedulerControllerDelete**
> notiSchedulerControllerDelete(id)



delete the NotiScheduler &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.NotischedulersApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.notiSchedulerControllerDelete(id, callback);
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

<a name="notiSchedulerControllerGetAll"></a>
# **notiSchedulerControllerGetAll**
> PresenterListNotiSschedulerResponse notiSchedulerControllerGetAll(opts)



get list voucher &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.NotischedulersApi();

var opts = { 
  'campaignId': 789, // Number | campaignId
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
apiInstance.notiSchedulerControllerGetAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| campaignId | [optional] 
 **status** | **Number**| status | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListNotiSschedulerResponse**](PresenterListNotiSschedulerResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="notiSchedulerControllerGetOne"></a>
# **notiSchedulerControllerGetOne**
> PresenterNotiScheduler notiSchedulerControllerGetOne(notiSchedulerId)



get notischeduler by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.NotischedulersApi();

var notiSchedulerId = "notiSchedulerId_example"; // String | notiSchedulerId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.notiSchedulerControllerGetOne(notiSchedulerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notiSchedulerId** | **String**| notiSchedulerId | 

### Return type

[**PresenterNotiScheduler**](PresenterNotiScheduler.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="notiSchedulerControllerPost"></a>
# **notiSchedulerControllerPost**
> notiSchedulerControllerPost(body)



create Voucher &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.NotischedulersApi();

var body = new NeomedApi.PresenterListNotiScheduler(); // PresenterListNotiScheduler | body for NotiScheduler , format Exect_time : dd/MM/yyyy hh:mm:ss


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.notiSchedulerControllerPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterListNotiScheduler**](PresenterListNotiScheduler.md)| body for NotiScheduler , format Exect_time : dd/MM/yyyy hh:mm:ss | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="notiSchedulerControllerPut"></a>
# **notiSchedulerControllerPut**
> PresenterCommonErrResponse notiSchedulerControllerPut(id, body)



update the NotiScheduler &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.NotischedulersApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterNotiSchedulerRequest(); // PresenterNotiSchedulerRequest | body for NotiScheduler, format Exect_time : dd/MM/yyyy hh:mm:ss


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.notiSchedulerControllerPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterNotiSchedulerRequest**](PresenterNotiSchedulerRequest.md)| body for NotiScheduler, format Exect_time : dd/MM/yyyy hh:mm:ss | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

