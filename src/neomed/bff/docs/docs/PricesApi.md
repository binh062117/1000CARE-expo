# NeomedApi.PricesApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**priceControllerDelete**](PricesApi.md#priceControllerDelete) | **DELETE** /prices/{id} | 
[**priceControllerGetPricesByProduct**](PricesApi.md#priceControllerGetPricesByProduct) | **GET** /prices/products/{productId} | 
[**priceControllerUpdate**](PricesApi.md#priceControllerUpdate) | **PUT** /prices/{id} | 


<a name="priceControllerDelete"></a>
# **priceControllerDelete**
> PresenterCommonErrResponse priceControllerDelete(id)



delete a price item in the policy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.PricesApi();

var id = "id_example"; // String | The price's Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.priceControllerDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The price&#39;s Id | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="priceControllerGetPricesByProduct"></a>
# **priceControllerGetPricesByProduct**
> PresenterPrice priceControllerGetPricesByProduct(productId, opts)



get Options &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.PricesApi();

var productId = "productId_example"; // String | productId

var opts = { 
  'query': "query_example", // String | Filter. e.g. col1:v1,col2:v2 ...
  'fields': "fields_example", // String | Fields returned. e.g. col1,col2 ...
  'sortby': "sortby_example", // String | Sorted-by fields. e.g. col1,col2 ...
  'order': "order_example", // String | Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
  'limit': "limit_example", // String | Limit the size of result set. Must be an integer
  'offset': "offset_example" // String | Start position of result set. Must be an integer
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.priceControllerGetPricesByProduct(productId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| productId | 
 **query** | **String**| Filter. e.g. col1:v1,col2:v2 ... | [optional] 
 **fields** | **String**| Fields returned. e.g. col1,col2 ... | [optional] 
 **sortby** | **String**| Sorted-by fields. e.g. col1,col2 ... | [optional] 
 **order** | **String**| Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ... | [optional] 
 **limit** | **String**| Limit the size of result set. Must be an integer | [optional] 
 **offset** | **String**| Start position of result set. Must be an integer | [optional] 

### Return type

[**PresenterPrice**](PresenterPrice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="priceControllerUpdate"></a>
# **priceControllerUpdate**
> PresenterPrice priceControllerUpdate(id, body)



update the Options &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.PricesApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterUpdatePriceRequest(); // PresenterUpdatePriceRequest | body for Options content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.priceControllerUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterUpdatePriceRequest**](PresenterUpdatePriceRequest.md)| body for Options content | 

### Return type

[**PresenterPrice**](PresenterPrice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

