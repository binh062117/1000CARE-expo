# NeomedApi.CampaignsApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**campaignControllerDelete**](CampaignsApi.md#campaignControllerDelete) | **DELETE** /campaigns/{id} | 
[**campaignControllerGetAllByDistributor**](CampaignsApi.md#campaignControllerGetAllByDistributor) | **GET** /campaigns/distributors/{distributorId} | 
[**campaignControllerGetAvailableTopUpCampaign**](CampaignsApi.md#campaignControllerGetAvailableTopUpCampaign) | **GET** /campaigns/distributors/{distributorId}/topup | 
[**campaignControllerGetAvailableTopUpCampaignForBo**](CampaignsApi.md#campaignControllerGetAvailableTopUpCampaignForBo) | **GET** /campaigns/distributors/{distributorId}/bo-topup-promo | 
[**campaignControllerGetOne**](CampaignsApi.md#campaignControllerGetOne) | **GET** /campaigns/{id} | 
[**campaignControllerListAvailableCampaignForProducts**](CampaignsApi.md#campaignControllerListAvailableCampaignForProducts) | **GET** /campaigns/distributors/{distributorId}/products/{productId} | 
[**campaignControllerPost**](CampaignsApi.md#campaignControllerPost) | **POST** /campaigns/ | 
[**campaignControllerPut**](CampaignsApi.md#campaignControllerPut) | **PUT** /campaigns/{id} | 
[**campaignControllerPutBudgets**](CampaignsApi.md#campaignControllerPutBudgets) | **PUT** /campaigns/{id}/budgets/{amount} | 
[**campaignControllerPutStatus**](CampaignsApi.md#campaignControllerPutStatus) | **PUT** /campaigns/{id}/status/{status} | 


<a name="campaignControllerDelete"></a>
# **campaignControllerDelete**
> campaignControllerDelete(id)



delete the Campaign &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CampaignsApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.campaignControllerDelete(id, callback);
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

<a name="campaignControllerGetAllByDistributor"></a>
# **campaignControllerGetAllByDistributor**
> PresenterListCampaignsResponse campaignControllerGetAllByDistributor(distributorId, opts)



get Campaign by Distributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CampaignsApi();

var distributorId = "distributorId_example"; // String | distributorId

var opts = { 
  'status': "status_example", // String | campaign status (default 1). active: 1; inactive: 0
  'campaignTypes': "campaignTypes_example", // String | campaign type (default empty: get all type). campaignType=1,2,3
  'fromAt': "fromAt_example", // String | YYYY-MM-DD
  'toAt': "toAt_example", // String | YYYY-MM-DD
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
apiInstance.campaignControllerGetAllByDistributor(distributorId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 
 **status** | **String**| campaign status (default 1). active: 1; inactive: 0 | [optional] 
 **campaignTypes** | **String**| campaign type (default empty: get all type). campaignType&#x3D;1,2,3 | [optional] 
 **fromAt** | **String**| YYYY-MM-DD | [optional] 
 **toAt** | **String**| YYYY-MM-DD | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListCampaignsResponse**](PresenterListCampaignsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignControllerGetAvailableTopUpCampaign"></a>
# **campaignControllerGetAvailableTopUpCampaign**
> PresenterCampaign campaignControllerGetAvailableTopUpCampaign(distributorId)



Get available TopUp campaign &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CampaignsApi();

var distributorId = "distributorId_example"; // String | distributorId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignControllerGetAvailableTopUpCampaign(distributorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 

### Return type

[**PresenterCampaign**](PresenterCampaign.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignControllerGetAvailableTopUpCampaignForBo"></a>
# **campaignControllerGetAvailableTopUpCampaignForBo**
> PresenterCampaign campaignControllerGetAvailableTopUpCampaignForBo(distributorId, customerId)



Get available TopUp campaign &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CampaignsApi();

var distributorId = "distributorId_example"; // String | distributorId

var customerId = "customerId_example"; // String | customer id (or user id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignControllerGetAvailableTopUpCampaignForBo(distributorId, customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 
 **customerId** | **String**| customer id (or user id) | 

### Return type

[**PresenterCampaign**](PresenterCampaign.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignControllerGetOne"></a>
# **campaignControllerGetOne**
> PresenterCampaign campaignControllerGetOne(id)



get Campaign by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CampaignsApi();

var id = "id_example"; // String | The key for staticblock


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignControllerGetOne(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The key for staticblock | 

### Return type

[**PresenterCampaign**](PresenterCampaign.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignControllerListAvailableCampaignForProducts"></a>
# **campaignControllerListAvailableCampaignForProducts**
> PresenterListCampaignsResponse campaignControllerListAvailableCampaignForProducts(distributorId, productId, opts)



get Campaign by Distributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CampaignsApi();

var distributorId = "distributorId_example"; // String | distributorId

var productId = "productId_example"; // String | productId

var opts = { 
  'amount': 789, // Number | Amount of all products to be add to cart
  'type': 789 // Number | Type 0:promotion of product 1:orthers
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignControllerListAvailableCampaignForProducts(distributorId, productId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 
 **productId** | **String**| productId | 
 **amount** | **Number**| Amount of all products to be add to cart | [optional] 
 **type** | **Number**| Type 0:promotion of product 1:orthers | [optional] 

### Return type

[**PresenterListCampaignsResponse**](PresenterListCampaignsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignControllerPost"></a>
# **campaignControllerPost**
> campaignControllerPost(body)



create Campaign &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CampaignsApi();

var body = new NeomedApi.PresenterCampaign(); // PresenterCampaign | body for Campaign content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.campaignControllerPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCampaign**](PresenterCampaign.md)| body for Campaign content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignControllerPut"></a>
# **campaignControllerPut**
> PresenterCampaign campaignControllerPut(id, body)



update the Campaign &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CampaignsApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterCampaign(); // PresenterCampaign | body for Campaign content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignControllerPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterCampaign**](PresenterCampaign.md)| body for Campaign content | 

### Return type

[**PresenterCampaign**](PresenterCampaign.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignControllerPutBudgets"></a>
# **campaignControllerPutBudgets**
> PresenterCampaign campaignControllerPutBudgets(id, amount)



update the Campaign &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CampaignsApi();

var id = "id_example"; // String | The id you want to update

var amount = "amount_example"; // String | The amount you want to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignControllerPutBudgets(id, amount, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **amount** | **String**| The amount you want to update | 

### Return type

[**PresenterCampaign**](PresenterCampaign.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignControllerPutStatus"></a>
# **campaignControllerPutStatus**
> PresenterCampaign campaignControllerPutStatus(id, status)



update the Campaign &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CampaignsApi();

var id = "id_example"; // String | The id you want to update

var status = "status_example"; // String | The status you want to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignControllerPutStatus(id, status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **status** | **String**| The status you want to update | 

### Return type

[**PresenterCampaign**](PresenterCampaign.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

