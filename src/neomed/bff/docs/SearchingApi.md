# NeomedApi.SearchingApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchingControllerSearch**](SearchingApi.md#searchingControllerSearch) | **GET** /searching/products | 
[**searchingControllerSearchCreateIndex**](SearchingApi.md#searchingControllerSearchCreateIndex) | **POST** /searching/products/index | 


<a name="searchingControllerSearch"></a>
# **searchingControllerSearch**
> PresenterSearchProductsResult searchingControllerSearch(opts)



get list of Product by Distributor with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.SearchingApi();

var opts = { 
  'name': "name_example", // String | the search condition
  'distributorId': "distributorId_example", // String | the search condition
  'productType': "productType_example", // String | the search condition
  'autocomplete': "autocomplete_example" // String | Return auto complete suggestion for search query. default false
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchingControllerSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| the search condition | [optional] 
 **distributorId** | **String**| the search condition | [optional] 
 **productType** | **String**| the search condition | [optional] 
 **autocomplete** | **String**| Return auto complete suggestion for search query. default false | [optional] 

### Return type

[**PresenterSearchProductsResult**](PresenterSearchProductsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="searchingControllerSearchCreateIndex"></a>
# **searchingControllerSearchCreateIndex**
> searchingControllerSearchCreateIndex(opts)



get list of Product by Distributor with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.SearchingApi();

var opts = { 
  'secret': "secret_example" // String | the search condition
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.searchingControllerSearchCreateIndex(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret** | **String**| the search condition | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

