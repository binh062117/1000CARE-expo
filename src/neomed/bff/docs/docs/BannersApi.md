# NeomedApi.BannersApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bannerControllerCreateMulti**](BannersApi.md#bannerControllerCreateMulti) | **POST** /banners/multi/ | 
[**bannerControllerDelete**](BannersApi.md#bannerControllerDelete) | **DELETE** /banners/{id} | 
[**bannerControllerGetAll**](BannersApi.md#bannerControllerGetAll) | **GET** /banners/ | 
[**bannerControllerGetOne**](BannersApi.md#bannerControllerGetOne) | **GET** /banners/{id} | 
[**bannerControllerListBannerByCampaign**](BannersApi.md#bannerControllerListBannerByCampaign) | **GET** /banners/campaigns/{campaignId} | 
[**bannerControllerListBannerByCampaignActive**](BannersApi.md#bannerControllerListBannerByCampaignActive) | **GET** /banners/distributors/{distributorId} | 
[**bannerControllerListBannersByActiveCampaignAndCampaignType**](BannersApi.md#bannerControllerListBannersByActiveCampaignAndCampaignType) | **GET** /banners/distributors/{distributorId}/type/{campaignType} | 
[**bannerControllerPost**](BannersApi.md#bannerControllerPost) | **POST** /banners/ | 
[**bannerControllerPut**](BannersApi.md#bannerControllerPut) | **PUT** /banners/{id} | 


<a name="bannerControllerCreateMulti"></a>
# **bannerControllerCreateMulti**
> bannerControllerCreateMulti(body)



create Banner &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.BannersApi();

var body = new NeomedApi.PresenterBannerMultiRequest(); // PresenterBannerMultiRequest | body for Banner content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bannerControllerCreateMulti(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterBannerMultiRequest**](PresenterBannerMultiRequest.md)| body for Banner content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bannerControllerDelete"></a>
# **bannerControllerDelete**
> bannerControllerDelete(id)



delete the Banner &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.BannersApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bannerControllerDelete(id, callback);
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

<a name="bannerControllerGetAll"></a>
# **bannerControllerGetAll**
> PresenterListBannersResponse bannerControllerGetAll(opts)



get Banner &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.BannersApi();

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
apiInstance.bannerControllerGetAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListBannersResponse**](PresenterListBannersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bannerControllerGetOne"></a>
# **bannerControllerGetOne**
> PresenterBanner bannerControllerGetOne(id)



get Banner by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.BannersApi();

var id = "id_example"; // String | The key for staticblock


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bannerControllerGetOne(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The key for staticblock | 

### Return type

[**PresenterBanner**](PresenterBanner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bannerControllerListBannerByCampaign"></a>
# **bannerControllerListBannerByCampaign**
> PresenterListBannersResponse bannerControllerListBannerByCampaign(campaignId, opts)



get Banners &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.BannersApi();

var campaignId = "campaignId_example"; // String | campaignId

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
apiInstance.bannerControllerListBannerByCampaign(campaignId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| campaignId | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListBannersResponse**](PresenterListBannersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bannerControllerListBannerByCampaignActive"></a>
# **bannerControllerListBannerByCampaignActive**
> PresenterListBannersResponse bannerControllerListBannerByCampaignActive(distributorId, opts)



get Banners &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.BannersApi();

var distributorId = "distributorId_example"; // String | distributorId

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
apiInstance.bannerControllerListBannerByCampaignActive(distributorId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListBannersResponse**](PresenterListBannersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bannerControllerListBannersByActiveCampaignAndCampaignType"></a>
# **bannerControllerListBannersByActiveCampaignAndCampaignType**
> PresenterListBannersResponse bannerControllerListBannersByActiveCampaignAndCampaignType(distributorId, campaignType, opts)



get Banners &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.BannersApi();

var distributorId = "distributorId_example"; // String | distributorId

var campaignType = "campaignType_example"; // String | campaignType

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
apiInstance.bannerControllerListBannersByActiveCampaignAndCampaignType(distributorId, campaignType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 
 **campaignType** | **String**| campaignType | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListBannersResponse**](PresenterListBannersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bannerControllerPost"></a>
# **bannerControllerPost**
> bannerControllerPost(body)



create Banner &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.BannersApi();

var body = new NeomedApi.PresenterCreateBannerUpdateRequest(); // PresenterCreateBannerUpdateRequest | body for Banner content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bannerControllerPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCreateBannerUpdateRequest**](PresenterCreateBannerUpdateRequest.md)| body for Banner content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bannerControllerPut"></a>
# **bannerControllerPut**
> PresenterCreateBannerUpdateRequest bannerControllerPut(id, body)



update the Banner &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.BannersApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterCreateBannerUpdateRequest(); // PresenterCreateBannerUpdateRequest | body for Banner content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bannerControllerPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterCreateBannerUpdateRequest**](PresenterCreateBannerUpdateRequest.md)| body for Banner content | 

### Return type

[**PresenterCreateBannerUpdateRequest**](PresenterCreateBannerUpdateRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

