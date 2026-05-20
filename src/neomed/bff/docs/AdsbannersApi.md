# NeomedApi.AdsbannersApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adsBannerControllerDelete**](AdsbannersApi.md#adsBannerControllerDelete) | **DELETE** /ads-banners/{id} | 
[**adsBannerControllerGetOne**](AdsbannersApi.md#adsBannerControllerGetOne) | **GET** /ads-banners/{id} | 
[**adsBannerControllerListAdsBannersByDistributor**](AdsbannersApi.md#adsBannerControllerListAdsBannersByDistributor) | **GET** /ads-banners/distributors/{distributorId} | 
[**adsBannerControllerPost**](AdsbannersApi.md#adsBannerControllerPost) | **POST** /ads-banners/ | 
[**adsBannerControllerPut**](AdsbannersApi.md#adsBannerControllerPut) | **PUT** /ads-banners/{id} | 
[**adsBannerControllerUpdateAdvertiseAdsBanner**](AdsbannersApi.md#adsBannerControllerUpdateAdvertiseAdsBanner) | **PUT** /ads-banners/advertisement | 


<a name="adsBannerControllerDelete"></a>
# **adsBannerControllerDelete**
> adsBannerControllerDelete(id)



delete the Banner &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AdsbannersApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.adsBannerControllerDelete(id, callback);
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

<a name="adsBannerControllerGetOne"></a>
# **adsBannerControllerGetOne**
> PresenterAdsBanner adsBannerControllerGetOne(id)



get Banner by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AdsbannersApi();

var id = "id_example"; // String | The key for staticblock


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.adsBannerControllerGetOne(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The key for staticblock | 

### Return type

[**PresenterAdsBanner**](PresenterAdsBanner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="adsBannerControllerListAdsBannersByDistributor"></a>
# **adsBannerControllerListAdsBannersByDistributor**
> PresenterListAdsBannersResponse adsBannerControllerListAdsBannersByDistributor(distributorId, status, isAdvertise, opts)



get Banners &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AdsbannersApi();

var distributorId = "distributorId_example"; // String | distributorId, 0 All, > 0 NCC

var status = "status_example"; // String | status,-1 All, 0 Inactive, 1 Active

var isAdvertise = "isAdvertise_example"; // String | isAdvertise,-1 All, 1 IsAdvertise

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
apiInstance.adsBannerControllerListAdsBannersByDistributor(distributorId, status, isAdvertise, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId, 0 All, &gt; 0 NCC | 
 **status** | **String**| status,-1 All, 0 Inactive, 1 Active | 
 **isAdvertise** | **String**| isAdvertise,-1 All, 1 IsAdvertise | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListAdsBannersResponse**](PresenterListAdsBannersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="adsBannerControllerPost"></a>
# **adsBannerControllerPost**
> adsBannerControllerPost(body)



create Banner &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AdsbannersApi();

var body = new NeomedApi.PresenterAdsBanner(); // PresenterAdsBanner | body for Banner content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.adsBannerControllerPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterAdsBanner**](PresenterAdsBanner.md)| body for Banner content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="adsBannerControllerPut"></a>
# **adsBannerControllerPut**
> PresenterCommonErrResponse adsBannerControllerPut(id, body)



update the Banner &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AdsbannersApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterAdsBanner(); // PresenterAdsBanner | body for Banner content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.adsBannerControllerPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterAdsBanner**](PresenterAdsBanner.md)| body for Banner content | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="adsBannerControllerUpdateAdvertiseAdsBanner"></a>
# **adsBannerControllerUpdateAdvertiseAdsBanner**
> PresenterCommonErrResponse adsBannerControllerUpdateAdvertiseAdsBanner(body)



update advertise ads banner &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AdsbannersApi();

var body = new NeomedApi.PresenterCreateAdsBannerAdvertiseRequest(); // PresenterCreateAdsBannerAdvertiseRequest | body for Ads banner (advertise) content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.adsBannerControllerUpdateAdvertiseAdsBanner(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCreateAdsBannerAdvertiseRequest**](PresenterCreateAdsBannerAdvertiseRequest.md)| body for Ads banner (advertise) content | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

