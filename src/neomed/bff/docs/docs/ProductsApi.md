# NeomedApi.ProductsApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productControllerAddBaseProduct**](ProductsApi.md#productControllerAddBaseProduct) | **POST** /products/base | 
[**productControllerAddComboItems**](ProductsApi.md#productControllerAddComboItems) | **POST** /products/{productId}/combo/ | 
[**productControllerAddMappingResources**](ProductsApi.md#productControllerAddMappingResources) | **POST** /products/mapping | 
[**productControllerAddMappingResources_0**](ProductsApi.md#productControllerAddMappingResources_0) | **DELETE** /products/mapping/{id} | 
[**productControllerAddProductFromBaseProduct**](ProductsApi.md#productControllerAddProductFromBaseProduct) | **POST** /products/reference/ | 
[**productControllerAddPropose**](ProductsApi.md#productControllerAddPropose) | **POST** /products/propose | 
[**productControllerCreate**](ProductsApi.md#productControllerCreate) | **POST** /products/ | 
[**productControllerDelete**](ProductsApi.md#productControllerDelete) | **DELETE** /products/{id} | 
[**productControllerDeleteBaseProduct**](ProductsApi.md#productControllerDeleteBaseProduct) | **DELETE** /products/base/{id} | 
[**productControllerDeletePropose**](ProductsApi.md#productControllerDeletePropose) | **DELETE** /products/propose/{id} | 
[**productControllerGetBaseProduct**](ProductsApi.md#productControllerGetBaseProduct) | **GET** /products/base/{id} | 
[**productControllerGetMappingResources**](ProductsApi.md#productControllerGetMappingResources) | **GET** /products/mapping/{id} | 
[**productControllerGetProductById**](ProductsApi.md#productControllerGetProductById) | **GET** /products/{id} | 
[**productControllerGetProductByIdFromBO**](ProductsApi.md#productControllerGetProductByIdFromBO) | **GET** /products/{id}/backoffice | 
[**productControllerGetProducts**](ProductsApi.md#productControllerGetProducts) | **GET** /products/ | 
[**productControllerGetProductsByCategory**](ProductsApi.md#productControllerGetProductsByCategory) | **GET** /products/categories/{categoryId} | 
[**productControllerGetProductsByDistributor**](ProductsApi.md#productControllerGetProductsByDistributor) | **GET** /products/distributor/{distributorId} | 
[**productControllerGetProductsBySupplier**](ProductsApi.md#productControllerGetProductsBySupplier) | **GET** /products/supplier/{supplierId} | 
[**productControllerGetProductsByTrademark**](ProductsApi.md#productControllerGetProductsByTrademark) | **GET** /products/trademark/{trademarkId} | 
[**productControllerGetPropose**](ProductsApi.md#productControllerGetPropose) | **GET** /products/propose/{id} | 
[**productControllerGetWishlistProduct**](ProductsApi.md#productControllerGetWishlistProduct) | **GET** /products/wishlist | 
[**productControllerImportProducts**](ProductsApi.md#productControllerImportProducts) | **POST** /products/import | 
[**productControllerImportResourcesProduct**](ProductsApi.md#productControllerImportResourcesProduct) | **POST** /products/import/resources | 
[**productControllerLinkBaseProductCategories**](ProductsApi.md#productControllerLinkBaseProductCategories) | **POST** /products/base/{productId}/categories/ | 
[**productControllerLinkProductCategories**](ProductsApi.md#productControllerLinkProductCategories) | **POST** /products/{productId}/categories/ | 
[**productControllerLinkProductDistributors**](ProductsApi.md#productControllerLinkProductDistributors) | **POST** /products/{productId}/distributors/ | 
[**productControllerLinkProductSuppliers**](ProductsApi.md#productControllerLinkProductSuppliers) | **POST** /products/{productId}/suppliers/ | 
[**productControllerListExclusiveProducts**](ProductsApi.md#productControllerListExclusiveProducts) | **GET** /products/distributor/{distributorId}/exclusive | 
[**productControllerListImport**](ProductsApi.md#productControllerListImport) | **GET** /products/imports/ | 
[**productControllerListMappingResources**](ProductsApi.md#productControllerListMappingResources) | **GET** /products/mapping | 
[**productControllerListProductByType**](ProductsApi.md#productControllerListProductByType) | **GET** /products/advertisement | 
[**productControllerListProductsByPayment**](ProductsApi.md#productControllerListProductsByPayment) | **GET** /products/distributor/{distributorId}/payment/{paymentType} | 
[**productControllerListPropose**](ProductsApi.md#productControllerListPropose) | **GET** /products/propose/ | 
[**productControllerListRecentlyViewed**](ProductsApi.md#productControllerListRecentlyViewed) | **GET** /products/recently-viewed | 
[**productControllerRemoveComboItems**](ProductsApi.md#productControllerRemoveComboItems) | **DELETE** /products/{productId}/combo/ | 
[**productControllerSearch**](ProductsApi.md#productControllerSearch) | **GET** /products/autocomplete | 
[**productControllerSearchBO**](ProductsApi.md#productControllerSearchBO) | **GET** /products/searchBO | 
[**productControllerSearchBaseProduct**](ProductsApi.md#productControllerSearchBaseProduct) | **GET** /products/base/ | 
[**productControllerSearchByReserve**](ProductsApi.md#productControllerSearchByReserve) | **GET** /products/reserve | 
[**productControllerSearchMappingResources**](ProductsApi.md#productControllerSearchMappingResources) | **GET** /products/mapping/search | 
[**productControllerSearchProductInImportResources**](ProductsApi.md#productControllerSearchProductInImportResources) | **GET** /products/import/resources/search | 
[**productControllerSearch_0**](ProductsApi.md#productControllerSearch_0) | **GET** /products/search | 
[**productControllerUnlinkBaseProductCategories**](ProductsApi.md#productControllerUnlinkBaseProductCategories) | **DELETE** /products/base/{productId}/categories/ | 
[**productControllerUnlinkProductCategories**](ProductsApi.md#productControllerUnlinkProductCategories) | **DELETE** /products/{productId}/categories/ | 
[**productControllerUnlinkProductSuppliers**](ProductsApi.md#productControllerUnlinkProductSuppliers) | **DELETE** /products/{productId}/suppliers/ | 
[**productControllerUpdatePriceProduct**](ProductsApi.md#productControllerUpdatePriceProduct) | **PUT** /products/{id}/price/ | 
[**productControllerUpdateProduct**](ProductsApi.md#productControllerUpdateProduct) | **PUT** /products/{id} | 
[**productControllerUpdateProductBestSeller**](ProductsApi.md#productControllerUpdateProductBestSeller) | **PUT** /products/bestseller | 
[**productControllerUpdateProductHotDeal**](ProductsApi.md#productControllerUpdateProductHotDeal) | **PUT** /products/hotdeal | 
[**productControllerUpdateProductQuantity**](ProductsApi.md#productControllerUpdateProductQuantity) | **PUT** /products/{id}/quantity | 
[**productControllerUpdateProductsStatus**](ProductsApi.md#productControllerUpdateProductsStatus) | **PUT** /products/status/ | 
[**productControllerUpdatePropose**](ProductsApi.md#productControllerUpdatePropose) | **PUT** /products/base/{id} | 
[**productControllerUpdatePropose_0**](ProductsApi.md#productControllerUpdatePropose_0) | **PUT** /products/propose | 
[**productControllerUpdateReceiptStatus**](ProductsApi.md#productControllerUpdateReceiptStatus) | **PUT** /products/{id}/receipt-status/{status} | 


<a name="productControllerAddBaseProduct"></a>
# **productControllerAddBaseProduct**
> productControllerAddBaseProduct(body)



AddBaseProduct &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var body = new NeomedApi.PresenterBaseProduct(); // PresenterBaseProduct | body for BaseProduct content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productControllerAddBaseProduct(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterBaseProduct**](PresenterBaseProduct.md)| body for BaseProduct content | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerAddComboItems"></a>
# **productControllerAddComboItems**
> PresenterComboItemsResponse productControllerAddComboItems(productId, body)



AddComboItems &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var productId = "productId_example"; // String | The ID of product

var body = new NeomedApi.PresenterAddComboItemsRequest(); // PresenterAddComboItemsRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerAddComboItems(productId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The ID of product | 
 **body** | [**PresenterAddComboItemsRequest**](PresenterAddComboItemsRequest.md)| body of category to be link with | 

### Return type

[**PresenterComboItemsResponse**](PresenterComboItemsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerAddMappingResources"></a>
# **productControllerAddMappingResources**
> productControllerAddMappingResources(body)



AddMappingResources &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var body = new NeomedApi.PresenterRequestMappingResources(); // PresenterRequestMappingResources | body for ImportResourcesProduct content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productControllerAddMappingResources(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterRequestMappingResources**](PresenterRequestMappingResources.md)| body for ImportResourcesProduct content | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerAddMappingResources_0"></a>
# **productControllerAddMappingResources_0**
> productControllerAddMappingResources_0(id)



AddMappingResources &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var id = 789; // Number | id delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productControllerAddMappingResources_0(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id delete | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerAddProductFromBaseProduct"></a>
# **productControllerAddProductFromBaseProduct**
> PresenterListProductsResponse productControllerAddProductFromBaseProduct(body)



AddProductFromBaseProduct &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var body = new NeomedApi.PresenterAddProductFromBaseProductRequest(); // PresenterAddProductFromBaseProductRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerAddProductFromBaseProduct(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterAddProductFromBaseProductRequest**](PresenterAddProductFromBaseProductRequest.md)| body of category to be link with | 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerAddPropose"></a>
# **productControllerAddPropose**
> productControllerAddPropose(opts)



AddPropose &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var opts = { 
  'body': new NeomedApi.PresenterProposeRequest() // PresenterProposeRequest | 1:low_price
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productControllerAddPropose(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterProposeRequest**](PresenterProposeRequest.md)| 1:low_price | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerCreate"></a>
# **productControllerCreate**
> PresenterProduct productControllerCreate(body)



create Product &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var body = new NeomedApi.PresenterCreateProductRequest(); // PresenterCreateProductRequest | body for Product content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCreateProductRequest**](PresenterCreateProductRequest.md)| body for Product content | 

### Return type

[**PresenterProduct**](PresenterProduct.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerDelete"></a>
# **productControllerDelete**
> productControllerDelete(id)



delete the Product &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productControllerDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to delete | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerDeleteBaseProduct"></a>
# **productControllerDeleteBaseProduct**
> productControllerDeleteBaseProduct(id)



DeleteBaseProduct &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var id = 789; // Number | id delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productControllerDeleteBaseProduct(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id delete | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerDeletePropose"></a>
# **productControllerDeletePropose**
> productControllerDeletePropose(id, productPoposeId, opts)



DeletePropose &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var id = 789; // Number | id delete

var productPoposeId = 789; // Number | product_popose_id

var opts = { 
  'type': 789 // Number | true
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productControllerDeletePropose(id, productPoposeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id delete | 
 **productPoposeId** | **Number**| product_popose_id | 
 **type** | **Number**| true | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerGetBaseProduct"></a>
# **productControllerGetBaseProduct**
> PresenterBaseProduct productControllerGetBaseProduct(id)



GetBaseProduct &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerGetBaseProduct(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**PresenterBaseProduct**](PresenterBaseProduct.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerGetMappingResources"></a>
# **productControllerGetMappingResources**
> PresenterMappingResources productControllerGetMappingResources(id)



GetMappingResources &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerGetMappingResources(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**PresenterMappingResources**](PresenterMappingResources.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerGetProductById"></a>
# **productControllerGetProductById**
> PresenterProduct productControllerGetProductById(id, opts)



get Product by id bo &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var id = "id_example"; // String | The ID of product

var opts = { 
  'customerId': "customerId_example", // String | false
  'quantity': "quantity_example" // String | false
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerGetProductById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of product | 
 **customerId** | **String**| false | [optional] 
 **quantity** | **String**| false | [optional] 

### Return type

[**PresenterProduct**](PresenterProduct.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerGetProductByIdFromBO"></a>
# **productControllerGetProductByIdFromBO**
> PresenterProduct productControllerGetProductByIdFromBO(id)



Get Product by ID from Backoffice &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var id = "id_example"; // String | The ID of product


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerGetProductByIdFromBO(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of product | 

### Return type

[**PresenterProduct**](PresenterProduct.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerGetProducts"></a>
# **productControllerGetProducts**
> PresenterListProductsResponse productControllerGetProducts(opts)



get list of Product with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

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
apiInstance.productControllerGetProducts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerGetProductsByCategory"></a>
# **productControllerGetProductsByCategory**
> PresenterListProductsResponse productControllerGetProductsByCategory(categoryId, opts)



get list of Product by Category with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var categoryId = "categoryId_example"; // String | categoryId

var opts = { 
  'size': "size_example", // String | Size of result set. Must be an integer
  'page': "page_example", // String | Page number of view. Must be an integer
  'isBackoffice': true // Boolean | Flag for backoffice request
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerGetProductsByCategory(categoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| categoryId | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 
 **isBackoffice** | **Boolean**| Flag for backoffice request | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerGetProductsByDistributor"></a>
# **productControllerGetProductsByDistributor**
> PresenterListProductsResponse productControllerGetProductsByDistributor(distributorId, opts)



get list of Product by Distributor with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var distributorId = "distributorId_example"; // String | distributorId

var opts = { 
  'status': 789, // Number | status
  'productType': 789, // Number | productType: AllType = 0; Normal = 1; Combo = 2; AddOn = 3
  'saleType': 789, // Number | saleType
  'paymentType': 789, // Number | paymentType
  'exclusiveType': 789, // Number | exclusiveType
  'exclude': "exclude_example", // String | exclude=1,2,3. A list product_id don't want to show.
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
apiInstance.productControllerGetProductsByDistributor(distributorId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 
 **status** | **Number**| status | [optional] 
 **productType** | **Number**| productType: AllType &#x3D; 0; Normal &#x3D; 1; Combo &#x3D; 2; AddOn &#x3D; 3 | [optional] 
 **saleType** | **Number**| saleType | [optional] 
 **paymentType** | **Number**| paymentType | [optional] 
 **exclusiveType** | **Number**| exclusiveType | [optional] 
 **exclude** | **String**| exclude&#x3D;1,2,3. A list product_id don&#39;t want to show. | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerGetProductsBySupplier"></a>
# **productControllerGetProductsBySupplier**
> PresenterListProductsResponse productControllerGetProductsBySupplier(supplierId, opts)



get list of Product by Supplier with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var supplierId = "supplierId_example"; // String | supplierId

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
apiInstance.productControllerGetProductsBySupplier(supplierId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **String**| supplierId | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerGetProductsByTrademark"></a>
# **productControllerGetProductsByTrademark**
> PresenterListProductsResponse productControllerGetProductsByTrademark(trademarkId, opts)



get list of Product by Distributor with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var trademarkId = "trademarkId_example"; // String | trademarkId

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
apiInstance.productControllerGetProductsByTrademark(trademarkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trademarkId** | **String**| trademarkId | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerGetPropose"></a>
# **productControllerGetPropose**
> PresenterListReponse productControllerGetPropose(id, opts)



GetPropose &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

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
apiInstance.productControllerGetPropose(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListReponse**](PresenterListReponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerGetWishlistProduct"></a>
# **productControllerGetWishlistProduct**
> PresenterListProductsResponse productControllerGetWishlistProduct(opts)



get list of Product by Category with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

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
apiInstance.productControllerGetWishlistProduct(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerImportProducts"></a>
# **productControllerImportProducts**
> productControllerImportProducts()



Import products &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productControllerImportProducts(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerImportResourcesProduct"></a>
# **productControllerImportResourcesProduct**
> productControllerImportResourcesProduct(type, body)



add Resources Product from file import &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var type = "type_example"; // String | 1: Si 2:DV

var body = new NeomedApi.PresenterImportResourcesProduct(); // PresenterImportResourcesProduct | body for ImportResourcesProduct content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productControllerImportResourcesProduct(type, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| 1: Si 2:DV | 
 **body** | [**PresenterImportResourcesProduct**](PresenterImportResourcesProduct.md)| body for ImportResourcesProduct content | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerLinkBaseProductCategories"></a>
# **productControllerLinkBaseProductCategories**
> PresenterCommonErrResponse productControllerLinkBaseProductCategories(productId, body)



Link a Product with a Category &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var productId = "productId_example"; // String | The ID of product

var body = new NeomedApi.PresenterLinkProductCategoriesRequest(); // PresenterLinkProductCategoriesRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerLinkBaseProductCategories(productId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The ID of product | 
 **body** | [**PresenterLinkProductCategoriesRequest**](PresenterLinkProductCategoriesRequest.md)| body of category to be link with | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerLinkProductCategories"></a>
# **productControllerLinkProductCategories**
> PresenterCommonErrResponse productControllerLinkProductCategories(productId, body)



Link a Product with a Category &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var productId = "productId_example"; // String | The ID of product

var body = new NeomedApi.PresenterLinkProductCategoriesRequest(); // PresenterLinkProductCategoriesRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerLinkProductCategories(productId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The ID of product | 
 **body** | [**PresenterLinkProductCategoriesRequest**](PresenterLinkProductCategoriesRequest.md)| body of category to be link with | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerLinkProductDistributors"></a>
# **productControllerLinkProductDistributors**
> PresenterCommonErrResponse productControllerLinkProductDistributors(productId, body)



Link a Product with a Category &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var productId = "productId_example"; // String | The ID of product

var body = new NeomedApi.PresenterLinkProductDistributorsRequest(); // PresenterLinkProductDistributorsRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerLinkProductDistributors(productId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The ID of product | 
 **body** | [**PresenterLinkProductDistributorsRequest**](PresenterLinkProductDistributorsRequest.md)| body of category to be link with | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerLinkProductSuppliers"></a>
# **productControllerLinkProductSuppliers**
> PresenterCommonErrResponse productControllerLinkProductSuppliers(productId, body)



Link a Product with a Category &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var productId = "productId_example"; // String | The ID of product

var body = new NeomedApi.PresenterLinkProductSuppliersRequest(); // PresenterLinkProductSuppliersRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerLinkProductSuppliers(productId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The ID of product | 
 **body** | [**PresenterLinkProductSuppliersRequest**](PresenterLinkProductSuppliersRequest.md)| body of category to be link with | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerListExclusiveProducts"></a>
# **productControllerListExclusiveProducts**
> PresenterListProductsResponse productControllerListExclusiveProducts(distributorId, opts)



get list of Product by Distributor and PaymentType with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

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
apiInstance.productControllerListExclusiveProducts(distributorId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerListImport"></a>
# **productControllerListImport**
> PresenterListImportResourcesProduct productControllerListImport(type, opts)



get list of Product of resource product &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var type = "type_example"; // String | 1:Si 2:DV 3:Poc

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
apiInstance.productControllerListImport(type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| 1:Si 2:DV 3:Poc | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListImportResourcesProduct**](PresenterListImportResourcesProduct.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerListMappingResources"></a>
# **productControllerListMappingResources**
> PresenterListMappingResourcesProduct productControllerListMappingResources(opts)



ListMappingResources &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

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
apiInstance.productControllerListMappingResources(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListMappingResourcesProduct**](PresenterListMappingResourcesProduct.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerListProductByType"></a>
# **productControllerListProductByType**
> PresenterListProductsResponse productControllerListProductByType(distributorId, type, opts)



get list of Product by Type (0: NotShow , 1: best_seller , 2: hot_deal) with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var distributorId = "distributorId_example"; // String | distributorId

var type = "type_example"; // String | type (0: NotShow , 1: best_seller , 2: hot_deal)

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
apiInstance.productControllerListProductByType(distributorId, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 
 **type** | **String**| type (0: NotShow , 1: best_seller , 2: hot_deal) | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerListProductsByPayment"></a>
# **productControllerListProductsByPayment**
> PresenterListProductsResponse productControllerListProductsByPayment(distributorId, paymentType, opts)



get list of Product by Distributor and PaymentType with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var distributorId = "distributorId_example"; // String | distributorId

var paymentType = "paymentType_example"; // String | paymentType

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
apiInstance.productControllerListProductsByPayment(distributorId, paymentType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 
 **paymentType** | **String**| paymentType | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerListPropose"></a>
# **productControllerListPropose**
> PresenterListResponse productControllerListPropose(opts)



ListPropose &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var opts = { 
  'kw': "kw_example", // String | keyword
  'productType': 789, // Number | product_type 1:Individually 2:General 3:Recommend
  'distributorId': 789, // Number | distributor_id
  'showUp': 789, // Number | show up for cart or tab(low price) , default is cart
  'productId': 789, // Number | product_id
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
apiInstance.productControllerListPropose(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kw** | **String**| keyword | [optional] 
 **productType** | **Number**| product_type 1:Individually 2:General 3:Recommend | [optional] 
 **distributorId** | **Number**| distributor_id | [optional] 
 **showUp** | **Number**| show up for cart or tab(low price) , default is cart | [optional] 
 **productId** | **Number**| product_id | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListResponse**](PresenterListResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerListRecentlyViewed"></a>
# **productControllerListRecentlyViewed**
> PresenterListProductsResponse productControllerListRecentlyViewed(opts)



get list of Product by Category with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

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
apiInstance.productControllerListRecentlyViewed(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerRemoveComboItems"></a>
# **productControllerRemoveComboItems**
> PresenterComboItemsResponse productControllerRemoveComboItems(productId, body)



RemoveComboItems &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var productId = "productId_example"; // String | The ID of product

var body = new NeomedApi.PresenterRemoveComboItemsRequest(); // PresenterRemoveComboItemsRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerRemoveComboItems(productId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The ID of product | 
 **body** | [**PresenterRemoveComboItemsRequest**](PresenterRemoveComboItemsRequest.md)| body of category to be link with | 

### Return type

[**PresenterComboItemsResponse**](PresenterComboItemsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerSearch"></a>
# **productControllerSearch**
> PresenterAutoCompleteSearchProducts productControllerSearch(opts)



get list of Product by Distributor with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var opts = { 
  'name': "name_example", // String | the search condition
  'distributorId': 789, // Number | default -1:all
  'hashtag': "hashtag_example", // String | the hashtag condition
  'isMapping': 789 // Number | the search condition
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| the search condition | [optional] 
 **distributorId** | **Number**| default -1:all | [optional] 
 **hashtag** | **String**| the hashtag condition | [optional] 
 **isMapping** | **Number**| the search condition | [optional] 

### Return type

[**PresenterAutoCompleteSearchProducts**](PresenterAutoCompleteSearchProducts.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerSearchBO"></a>
# **productControllerSearchBO**
> PresenterListProductsResponse productControllerSearchBO(opts)



get list of Product by Distributor with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.ProductsApi();

var opts = { 
  'name': "name_example", // String | the search condition
  'distributorId': "distributorId_example", // String | the search condition
  'reserve': 789, // Number | the search condition
  'hashtag': "hashtag_example", // String | the hashtag condition
  'productStatus': 789, // Number | the search condition
  'productType': 789, // Number | the search condition
  'isMapping': 789, // Number | the search condition
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
apiInstance.productControllerSearchBO(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| the search condition | [optional] 
 **distributorId** | **String**| the search condition | [optional] 
 **reserve** | **Number**| the search condition | [optional] 
 **hashtag** | **String**| the hashtag condition | [optional] 
 **productStatus** | **Number**| the search condition | [optional] 
 **productType** | **Number**| the search condition | [optional] 
 **isMapping** | **Number**| the search condition | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerSearchBaseProduct"></a>
# **productControllerSearchBaseProduct**
> PresenterListBaseProduct productControllerSearchBaseProduct(opts)



SearchBaseProduct &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.ProductsApi();

var opts = { 
  'keyword': "keyword_example", // String | distributor_id
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
apiInstance.productControllerSearchBaseProduct(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyword** | **String**| distributor_id | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListBaseProduct**](PresenterListBaseProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerSearchByReserve"></a>
# **productControllerSearchByReserve**
> PresenterListProductsResponse productControllerSearchByReserve(reserve, opts)



get list of Product by reserver with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var reserve = 789; // Number | the search condition

var opts = { 
  'productStatus': 789, // Number | the search condition
  'distributorId': 789, // Number | the search condition
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
apiInstance.productControllerSearchByReserve(reserve, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reserve** | **Number**| the search condition | 
 **productStatus** | **Number**| the search condition | [optional] 
 **distributorId** | **Number**| the search condition | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerSearchMappingResources"></a>
# **productControllerSearchMappingResources**
> PresenterListMappingResourcesProduct productControllerSearchMappingResources(opts)



SearchMappingResources &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.ProductsApi();

var opts = { 
  'name': "name_example", // String | the search condition
  'distributorId': 789, // Number | the search condition
  'type': 789, // Number | 1: Si 2:DV 3:Poc
  'compareType': 789, // Number | 1: Expensive 2:Cheap 3:Equal
  'sort': "sort_example", // String | asc or desc , default asc
  'fromAt': "fromAt_example", // String | dd/MM/yyyy
  'toAt': "toAt_example", // String | dd/MM/yyyy
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
apiInstance.productControllerSearchMappingResources(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| the search condition | [optional] 
 **distributorId** | **Number**| the search condition | [optional] 
 **type** | **Number**| 1: Si 2:DV 3:Poc | [optional] 
 **compareType** | **Number**| 1: Expensive 2:Cheap 3:Equal | [optional] 
 **sort** | **String**| asc or desc , default asc | [optional] 
 **fromAt** | **String**| dd/MM/yyyy | [optional] 
 **toAt** | **String**| dd/MM/yyyy | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListMappingResourcesProduct**](PresenterListMappingResourcesProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerSearchProductInImportResources"></a>
# **productControllerSearchProductInImportResources**
> PresenterListImportResourcesProduct productControllerSearchProductInImportResources(opts)



get list of Product In Import Resources with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.ProductsApi();

var opts = { 
  'name': "name_example", // String | the search condition
  'type': 789, // Number | 1: Si 2:DuocVuong 3:Poc
  'registeredCode': "registeredCode_example", // String | the search condition
  'from': "from_example", // String | dd/MM/yyyy
  'to': "to_example", // String | dd/MM/yyyy
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
apiInstance.productControllerSearchProductInImportResources(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| the search condition | [optional] 
 **type** | **Number**| 1: Si 2:DuocVuong 3:Poc | [optional] 
 **registeredCode** | **String**| the search condition | [optional] 
 **from** | **String**| dd/MM/yyyy | [optional] 
 **to** | **String**| dd/MM/yyyy | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListImportResourcesProduct**](PresenterListImportResourcesProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerSearch_0"></a>
# **productControllerSearch_0**
> PresenterListProductsResponse productControllerSearch_0(opts)



get list of Product by Distributor with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var opts = { 
  'name': "name_example", // String | the search condition
  'hashtag': "hashtag_example", // String | the hashtag condition
  'distributorId': "distributorId_example", // String | the search condition
  'isMapping': 789, // Number | the search condition
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
apiInstance.productControllerSearch_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| the search condition | [optional] 
 **hashtag** | **String**| the hashtag condition | [optional] 
 **distributorId** | **String**| the search condition | [optional] 
 **isMapping** | **Number**| the search condition | [optional] 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerUnlinkBaseProductCategories"></a>
# **productControllerUnlinkBaseProductCategories**
> PresenterCommonErrResponse productControllerUnlinkBaseProductCategories(productId, body)



Unlink a Product with a Category &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var productId = "productId_example"; // String | The ID of product

var body = new NeomedApi.PresenterLinkProductCategoriesRequest(); // PresenterLinkProductCategoriesRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerUnlinkBaseProductCategories(productId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The ID of product | 
 **body** | [**PresenterLinkProductCategoriesRequest**](PresenterLinkProductCategoriesRequest.md)| body of category to be link with | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerUnlinkProductCategories"></a>
# **productControllerUnlinkProductCategories**
> PresenterCommonErrResponse productControllerUnlinkProductCategories(productId, body)



Unlink a Product with a Category &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var productId = "productId_example"; // String | The ID of product

var body = new NeomedApi.PresenterLinkProductCategoriesRequest(); // PresenterLinkProductCategoriesRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerUnlinkProductCategories(productId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The ID of product | 
 **body** | [**PresenterLinkProductCategoriesRequest**](PresenterLinkProductCategoriesRequest.md)| body of category to be link with | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerUnlinkProductSuppliers"></a>
# **productControllerUnlinkProductSuppliers**
> PresenterCommonErrResponse productControllerUnlinkProductSuppliers(productId, body)



Link a Product with a Category &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var productId = "productId_example"; // String | The ID of product

var body = new NeomedApi.PresenterLinkProductSuppliersRequest(); // PresenterLinkProductSuppliersRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerUnlinkProductSuppliers(productId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The ID of product | 
 **body** | [**PresenterLinkProductSuppliersRequest**](PresenterLinkProductSuppliersRequest.md)| body of category to be link with | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerUpdatePriceProduct"></a>
# **productControllerUpdatePriceProduct**
> PresenterListProductsResponse productControllerUpdatePriceProduct(id, opts)



get list of Product by Distributor with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var id = "id_example"; // String | product id

var opts = { 
  'price': 789, // Number | true
  'salePrice': 789 // Number | true
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerUpdatePriceProduct(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| product id | 
 **price** | **Number**| true | [optional] 
 **salePrice** | **Number**| true | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerUpdateProduct"></a>
# **productControllerUpdateProduct**
> PresenterProduct productControllerUpdateProduct(id, body)



update the Product &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterCreateProductRequest(); // PresenterCreateProductRequest | body for Product content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerUpdateProduct(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterCreateProductRequest**](PresenterCreateProductRequest.md)| body for Product content | 

### Return type

[**PresenterProduct**](PresenterProduct.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerUpdateProductBestSeller"></a>
# **productControllerUpdateProductBestSeller**
> PresenterProduct productControllerUpdateProductBestSeller(body)



update the Product best seller &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var body = new NeomedApi.PresenterCreateProductBestSellerRequest(); // PresenterCreateProductBestSellerRequest | body for Product(best_seller) content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerUpdateProductBestSeller(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCreateProductBestSellerRequest**](PresenterCreateProductBestSellerRequest.md)| body for Product(best_seller) content | 

### Return type

[**PresenterProduct**](PresenterProduct.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerUpdateProductHotDeal"></a>
# **productControllerUpdateProductHotDeal**
> PresenterProduct productControllerUpdateProductHotDeal(body)



update the Product hot deal &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var body = new NeomedApi.PresenterCreateProductHotDealRequest(); // PresenterCreateProductHotDealRequest | body for Product(hot_deal) content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerUpdateProductHotDeal(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCreateProductHotDealRequest**](PresenterCreateProductHotDealRequest.md)| body for Product(hot_deal) content | 

### Return type

[**PresenterProduct**](PresenterProduct.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerUpdateProductQuantity"></a>
# **productControllerUpdateProductQuantity**
> PresenterProduct productControllerUpdateProductQuantity(id, body)



update the Product quantity &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterProduct(); // PresenterProduct | body for Product content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerUpdateProductQuantity(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterProduct**](PresenterProduct.md)| body for Product content | 

### Return type

[**PresenterProduct**](PresenterProduct.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerUpdateProductsStatus"></a>
# **productControllerUpdateProductsStatus**
> PresenterListProductsResponse productControllerUpdateProductsStatus(body)



UpdateProductsStatus &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var body = new NeomedApi.PresenterUpdateProductsStatus(); // PresenterUpdateProductsStatus | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerUpdateProductsStatus(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterUpdateProductsStatus**](PresenterUpdateProductsStatus.md)| body of category to be link with | 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerUpdatePropose"></a>
# **productControllerUpdatePropose**
> productControllerUpdatePropose(id, body)



UpdatePropose &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var id = 789; // Number | id for update

var body = new NeomedApi.PresenterBaseProduct(); // PresenterBaseProduct | body for BaseProduct content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productControllerUpdatePropose(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id for update | 
 **body** | [**PresenterBaseProduct**](PresenterBaseProduct.md)| body for BaseProduct content | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerUpdatePropose_0"></a>
# **productControllerUpdatePropose_0**
> productControllerUpdatePropose_0(body)



UpdatePropose &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var body = new NeomedApi.PresenterProposeRequest(); // PresenterProposeRequest | body for Propose content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productControllerUpdatePropose_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterProposeRequest**](PresenterProposeRequest.md)| body for Propose content | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productControllerUpdateReceiptStatus"></a>
# **productControllerUpdateReceiptStatus**
> PresenterListProductsResponse productControllerUpdateReceiptStatus(id, status)



get list of Product by Distributor with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ProductsApi();

var id = "id_example"; // String | product id

var status = 789; // Number | Update receipt status 0:false 1:true


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productControllerUpdateReceiptStatus(id, status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| product id | 
 **status** | **Number**| Update receipt status 0:false 1:true | 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

