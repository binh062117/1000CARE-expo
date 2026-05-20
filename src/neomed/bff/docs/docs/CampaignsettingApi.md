# NeomedApi.CampaignsettingApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**campaignSettingControllerDelete**](CampaignsettingApi.md#campaignSettingControllerDelete) | **DELETE** /campaign-setting/{id} | 
[**campaignSettingControllerGetAll**](CampaignsettingApi.md#campaignSettingControllerGetAll) | **GET** /campaign-setting/ | 
[**campaignSettingControllerGetAllByDistributor**](CampaignsettingApi.md#campaignSettingControllerGetAllByDistributor) | **GET** /campaign-setting/distributor/{id} | 
[**campaignSettingControllerGetOne**](CampaignsettingApi.md#campaignSettingControllerGetOne) | **GET** /campaign-setting/{id} | 
[**campaignSettingControllerPost**](CampaignsettingApi.md#campaignSettingControllerPost) | **POST** /campaign-setting/ | 
[**campaignSettingControllerPut**](CampaignsettingApi.md#campaignSettingControllerPut) | **PUT** /campaign-setting/{id} | 


<a name="campaignSettingControllerDelete"></a>
# **campaignSettingControllerDelete**
> campaignSettingControllerDelete(id)



delete the Campaign &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CampaignsettingApi();

var id = 789; // Number | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.campaignSettingControllerDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id you want to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignSettingControllerGetAll"></a>
# **campaignSettingControllerGetAll**
> PresenterListCampaignSetting campaignSettingControllerGetAll(opts)



get list campaign setting &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CampaignsettingApi();

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
apiInstance.campaignSettingControllerGetAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListCampaignSetting**](PresenterListCampaignSetting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignSettingControllerGetAllByDistributor"></a>
# **campaignSettingControllerGetAllByDistributor**
> PresenterListCampaignSetting campaignSettingControllerGetAllByDistributor(id, opts)



get list campaign setting by distributor_id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CampaignsettingApi();

var id = 789; // Number | id

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
apiInstance.campaignSettingControllerGetAllByDistributor(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListCampaignSetting**](PresenterListCampaignSetting.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignSettingControllerGetOne"></a>
# **campaignSettingControllerGetOne**
> PresenterCampaignSetting campaignSettingControllerGetOne(id)



get campaign setting by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CampaignsettingApi();

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignSettingControllerGetOne(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**PresenterCampaignSetting**](PresenterCampaignSetting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignSettingControllerPost"></a>
# **campaignSettingControllerPost**
> campaignSettingControllerPost(body)



create Campaign &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CampaignsettingApi();

var body = new NeomedApi.PresenterCampaignSetting(); // PresenterCampaignSetting | body for CampaignSetting content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.campaignSettingControllerPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCampaignSetting**](PresenterCampaignSetting.md)| body for CampaignSetting content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignSettingControllerPut"></a>
# **campaignSettingControllerPut**
> PresenterCampaignSetting campaignSettingControllerPut(id, body)



update the Campaign setting &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CampaignsettingApi();

var id = 789; // Number | The id you want to update

var body = new NeomedApi.PresenterCampaignSetting(); // PresenterCampaignSetting | body for Campaign Setting content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignSettingControllerPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id you want to update | 
 **body** | [**PresenterCampaignSetting**](PresenterCampaignSetting.md)| body for Campaign Setting content | 

### Return type

[**PresenterCampaignSetting**](PresenterCampaignSetting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

