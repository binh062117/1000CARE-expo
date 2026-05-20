# NeomedApi.CategoriesApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoryControllerCreate**](CategoriesApi.md#categoryControllerCreate) | **POST** /categories/ | 
[**categoryControllerDelete**](CategoriesApi.md#categoryControllerDelete) | **DELETE** /categories/{id} | 
[**categoryControllerGetCategoriesBySupplier**](CategoriesApi.md#categoryControllerGetCategoriesBySupplier) | **GET** /categories/suppliers/{supplierId} | 
[**categoryControllerGetCategoriesFull**](CategoriesApi.md#categoryControllerGetCategoriesFull) | **GET** /categories/ | 
[**categoryControllerGetCategoriesWithProductsBySupplier**](CategoriesApi.md#categoryControllerGetCategoriesWithProductsBySupplier) | **GET** /categories/suppliers/{supplierId}/products | 
[**categoryControllerGetCategoryByID**](CategoriesApi.md#categoryControllerGetCategoryByID) | **GET** /categories/{id} | 
[**categoryControllerGetSubCategories**](CategoriesApi.md#categoryControllerGetSubCategories) | **GET** /categories/{id}/sublist | 
[**categoryControllerSearch**](CategoriesApi.md#categoryControllerSearch) | **GET** /categories/_search | 
[**categoryControllerUpdateCategory**](CategoriesApi.md#categoryControllerUpdateCategory) | **PUT** /categories/{id} | 


<a name="categoryControllerCreate"></a>
# **categoryControllerCreate**
> PresenterCategory categoryControllerCreate(body)



create Categories &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CategoriesApi();

var body = new NeomedApi.PresenterCreateCategoryRequest(); // PresenterCreateCategoryRequest | body for Categories content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoryControllerCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCreateCategoryRequest**](PresenterCreateCategoryRequest.md)| body for Categories content | 

### Return type

[**PresenterCategory**](PresenterCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="categoryControllerDelete"></a>
# **categoryControllerDelete**
> PresenterCommonErrResponse categoryControllerDelete(id)



delete the Categories &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CategoriesApi();

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoryControllerDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="categoryControllerGetCategoriesBySupplier"></a>
# **categoryControllerGetCategoriesBySupplier**
> PresenterListCategoriesResponse categoryControllerGetCategoriesBySupplier(supplierId, opts)



get Categories &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CategoriesApi();

var supplierId = "supplierId_example"; // String | supplier id

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
apiInstance.categoryControllerGetCategoriesBySupplier(supplierId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **String**| supplier id | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListCategoriesResponse**](PresenterListCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="categoryControllerGetCategoriesFull"></a>
# **categoryControllerGetCategoriesFull**
> PresenterListCategoriesResponse categoryControllerGetCategoriesFull(opts)



Get All of Categories &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CategoriesApi();

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
apiInstance.categoryControllerGetCategoriesFull(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListCategoriesResponse**](PresenterListCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="categoryControllerGetCategoriesWithProductsBySupplier"></a>
# **categoryControllerGetCategoriesWithProductsBySupplier**
> PresenterListCategoriesResponse categoryControllerGetCategoriesWithProductsBySupplier(supplierId, opts)



get Categories &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CategoriesApi();

var supplierId = "supplierId_example"; // String | supplier id

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
apiInstance.categoryControllerGetCategoriesWithProductsBySupplier(supplierId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **String**| supplier id | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListCategoriesResponse**](PresenterListCategoriesResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="categoryControllerGetCategoryByID"></a>
# **categoryControllerGetCategoryByID**
> PresenterGetCategoryResponse categoryControllerGetCategoryByID(id)



get Categories by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CategoriesApi();

var id = "id_example"; // String | The key for staticblock


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoryControllerGetCategoryByID(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The key for staticblock | 

### Return type

[**PresenterGetCategoryResponse**](PresenterGetCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="categoryControllerGetSubCategories"></a>
# **categoryControllerGetSubCategories**
> PresenterListCategoriesResponse categoryControllerGetSubCategories(id, opts)



get sublist of a Category &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CategoriesApi();

var id = "id_example"; // String | id

var opts = { 
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
apiInstance.categoryControllerGetSubCategories(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **limit** | **String**| Limit the size of result set. Must be an integer | [optional] 
 **offset** | **String**| Start position of result set. Must be an integer | [optional] 

### Return type

[**PresenterListCategoriesResponse**](PresenterListCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="categoryControllerSearch"></a>
# **categoryControllerSearch**
> PresenterListCategoriesResponse categoryControllerSearch(opts)



get list of Product by Distributor with pagination &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CategoriesApi();

var opts = { 
  'condition': "condition_example" // String | the search condition
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoryControllerSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **condition** | **String**| the search condition | [optional] 

### Return type

[**PresenterListCategoriesResponse**](PresenterListCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="categoryControllerUpdateCategory"></a>
# **categoryControllerUpdateCategory**
> PresenterCommonErrResponse categoryControllerUpdateCategory(id, body)



update the Category &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CategoriesApi();

var id = "id_example"; // String | id

var body = new NeomedApi.PresenterCreateCategoryRequest(); // PresenterCreateCategoryRequest | body for Categories content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoryControllerUpdateCategory(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **body** | [**PresenterCreateCategoryRequest**](PresenterCreateCategoryRequest.md)| body for Categories content | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

