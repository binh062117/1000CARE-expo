# NeomedApi.WishlistApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wishlistControllerAddWishlistProduct**](WishlistApi.md#wishlistControllerAddWishlistProduct) | **POST** /wishlist/ | 
[**wishlistControllerRemoveWishlist**](WishlistApi.md#wishlistControllerRemoveWishlist) | **DELETE** /wishlist/ | 


<a name="wishlistControllerAddWishlistProduct"></a>
# **wishlistControllerAddWishlistProduct**
> PresenterCommonErrResponse wishlistControllerAddWishlistProduct(body)



AddWishlistProduct &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.WishlistApi();

var body = new NeomedApi.PresenterWishlistProductRequest(); // PresenterWishlistProductRequest | body for Wishlist content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wishlistControllerAddWishlistProduct(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterWishlistProductRequest**](PresenterWishlistProductRequest.md)| body for Wishlist content | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="wishlistControllerRemoveWishlist"></a>
# **wishlistControllerRemoveWishlist**
> PresenterCommonErrResponse wishlistControllerRemoveWishlist(customerId, productId)



RemoveWishlist &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.WishlistApi();

var customerId = "customerId_example"; // String | The customerId you want to delete

var productId = "productId_example"; // String | The productId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wishlistControllerRemoveWishlist(customerId, productId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The customerId you want to delete | 
 **productId** | **String**| The productId you want to delete | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

