# NeomedApi.PricepoliciesApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pricePolicyControllerAddItems**](PricepoliciesApi.md#pricePolicyControllerAddItems) | **POST** /price-policies/{id}/items | 
[**pricePolicyControllerCreate**](PricepoliciesApi.md#pricePolicyControllerCreate) | **POST** /price-policies/ | 
[**pricePolicyControllerDelete**](PricepoliciesApi.md#pricePolicyControllerDelete) | **DELETE** /price-policies/{id} | 
[**pricePolicyControllerGetOne**](PricepoliciesApi.md#pricePolicyControllerGetOne) | **GET** /price-policies/{id} | 
[**pricePolicyControllerList**](PricepoliciesApi.md#pricePolicyControllerList) | **GET** /price-policies/ | 
[**pricePolicyControllerListItems**](PricepoliciesApi.md#pricePolicyControllerListItems) | **GET** /price-policies/{id}/items | 
[**pricePolicyControllerUpdate**](PricepoliciesApi.md#pricePolicyControllerUpdate) | **PUT** /price-policies/{id} | 


<a name="pricePolicyControllerAddItems"></a>
# **pricePolicyControllerAddItems**
> PresenterCommonErrResponse pricePolicyControllerAddItems(id, body)



Add price&#39;s items to policy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.PricepoliciesApi();

var id = "id_example"; // String | ID chính sách giá

var body = new NeomedApi.PresenterAddItemsPricePolicyRequest(); // PresenterAddItemsPricePolicyRequest | Danh sách ID sản phẩm cần được thêm vào chính sách


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pricePolicyControllerAddItems(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID chính sách giá | 
 **body** | [**PresenterAddItemsPricePolicyRequest**](PresenterAddItemsPricePolicyRequest.md)| Danh sách ID sản phẩm cần được thêm vào chính sách | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pricePolicyControllerCreate"></a>
# **pricePolicyControllerCreate**
> PresenterPricePolicy pricePolicyControllerCreate(body)



create Options &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.PricepoliciesApi();

var body = new NeomedApi.PresenterCreatePricePolicyRequest(); // PresenterCreatePricePolicyRequest | body for Options content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pricePolicyControllerCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCreatePricePolicyRequest**](PresenterCreatePricePolicyRequest.md)| body for Options content | 

### Return type

[**PresenterPricePolicy**](PresenterPricePolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pricePolicyControllerDelete"></a>
# **pricePolicyControllerDelete**
> PresenterCommonErrResponse pricePolicyControllerDelete(id)



delete the Options &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.PricepoliciesApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pricePolicyControllerDelete(id, callback);
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

<a name="pricePolicyControllerGetOne"></a>
# **pricePolicyControllerGetOne**
> PresenterPricePolicy pricePolicyControllerGetOne(id)



get PricePolicy by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.PricepoliciesApi();

var id = "id_example"; // String | The ID of PricePolicy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pricePolicyControllerGetOne(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of PricePolicy | 

### Return type

[**PresenterPricePolicy**](PresenterPricePolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pricePolicyControllerList"></a>
# **pricePolicyControllerList**
> PresenterListPricePolicyResponse pricePolicyControllerList(opts)



List price policies &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.PricepoliciesApi();

var opts = { 
  'distributorId': 789, // Number | Distributor ID
  'customerGid': 789, // Number | Customer Group ID
  'type': 789, // Number | Policy type
  'page': 789, // Number | Page
  'size': 789 // Number | Size of page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pricePolicyControllerList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **Number**| Distributor ID | [optional] 
 **customerGid** | **Number**| Customer Group ID | [optional] 
 **type** | **Number**| Policy type | [optional] 
 **page** | **Number**| Page | [optional] 
 **size** | **Number**| Size of page | [optional] 

### Return type

[**PresenterListPricePolicyResponse**](PresenterListPricePolicyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pricePolicyControllerListItems"></a>
# **pricePolicyControllerListItems**
> PresenterListPricePolicyResponse pricePolicyControllerListItems(opts)



List price items in a policy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.PricepoliciesApi();

var opts = { 
  'searchText': "searchText_example", // String | Search text e.g 'product name'
  'categoryIdLv1': 789, // Number | Category ID level 1
  'categoryIdLv2': 789, // Number | Category ID level 2
  'productStatus': 789, // Number | Product status
  'page': 789, // Number | Page
  'size': 789 // Number | Size of page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pricePolicyControllerListItems(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text e.g &#39;product name&#39; | [optional] 
 **categoryIdLv1** | **Number**| Category ID level 1 | [optional] 
 **categoryIdLv2** | **Number**| Category ID level 2 | [optional] 
 **productStatus** | **Number**| Product status | [optional] 
 **page** | **Number**| Page | [optional] 
 **size** | **Number**| Size of page | [optional] 

### Return type

[**PresenterListPricePolicyResponse**](PresenterListPricePolicyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pricePolicyControllerUpdate"></a>
# **pricePolicyControllerUpdate**
> PresenterCommonErrResponse pricePolicyControllerUpdate(id, body)



update the Options &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.PricepoliciesApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterUpdatePricePolicyRequest(); // PresenterUpdatePricePolicyRequest | body for Options content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pricePolicyControllerUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterUpdatePricePolicyRequest**](PresenterUpdatePricePolicyRequest.md)| body for Options content | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

