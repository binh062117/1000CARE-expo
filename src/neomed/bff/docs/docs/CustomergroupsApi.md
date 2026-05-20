# NeomedApi.CustomergroupsApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupCustomerControllerAddCustomerToGroup**](CustomergroupsApi.md#groupCustomerControllerAddCustomerToGroup) | **POST** /customer-groups/{groupId}/customers/ | 
[**groupCustomerControllerCreate**](CustomergroupsApi.md#groupCustomerControllerCreate) | **POST** /customer-groups/ | 
[**groupCustomerControllerDelete**](CustomergroupsApi.md#groupCustomerControllerDelete) | **DELETE** /customer-groups/{id} | 
[**groupCustomerControllerGetAll**](CustomergroupsApi.md#groupCustomerControllerGetAll) | **GET** /customer-groups/ | 
[**groupCustomerControllerGetAll_0**](CustomergroupsApi.md#groupCustomerControllerGetAll_0) | **GET** /customer-groups/customers/{customerId} | 
[**groupCustomerControllerGetAll_1**](CustomergroupsApi.md#groupCustomerControllerGetAll_1) | **GET** /customer-groups/distributors/{distributorId} | 
[**groupCustomerControllerGetOne**](CustomergroupsApi.md#groupCustomerControllerGetOne) | **GET** /customer-groups/{id} | 
[**groupCustomerControllerRemoveCustomerFromGroup**](CustomergroupsApi.md#groupCustomerControllerRemoveCustomerFromGroup) | **DELETE** /customer-groups/{groupId}/customers/ | 
[**groupCustomerControllerUpdate**](CustomergroupsApi.md#groupCustomerControllerUpdate) | **PUT** /customer-groups/{id} | 


<a name="groupCustomerControllerAddCustomerToGroup"></a>
# **groupCustomerControllerAddCustomerToGroup**
> PresenterCommonErrResponse groupCustomerControllerAddCustomerToGroup(groupId, body)



Add Customer To CustomerGroup &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CustomergroupsApi();

var groupId = "groupId_example"; // String | The ID of customer group

var body = new NeomedApi.PresenterCustomerInGroupRequest(); // PresenterCustomerInGroupRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupCustomerControllerAddCustomerToGroup(groupId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| The ID of customer group | 
 **body** | [**PresenterCustomerInGroupRequest**](PresenterCustomerInGroupRequest.md)| body of category to be link with | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="groupCustomerControllerCreate"></a>
# **groupCustomerControllerCreate**
> groupCustomerControllerCreate(body)



Create Customer Group &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CustomergroupsApi();

var body = new NeomedApi.PresenterCreateCustomerGroupRequest(); // PresenterCreateCustomerGroupRequest | body for CustomerGroup content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.groupCustomerControllerCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCreateCustomerGroupRequest**](PresenterCreateCustomerGroupRequest.md)| body for CustomerGroup content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="groupCustomerControllerDelete"></a>
# **groupCustomerControllerDelete**
> groupCustomerControllerDelete(id)



delete the CustomerGroup &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CustomergroupsApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.groupCustomerControllerDelete(id, callback);
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

<a name="groupCustomerControllerGetAll"></a>
# **groupCustomerControllerGetAll**
> PresenterCustomerGroup groupCustomerControllerGetAll(opts)



get CustomerGroup &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CustomergroupsApi();

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
apiInstance.groupCustomerControllerGetAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterCustomerGroup**](PresenterCustomerGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="groupCustomerControllerGetAll_0"></a>
# **groupCustomerControllerGetAll_0**
> PresenterCustomerGroup groupCustomerControllerGetAll_0(customerId, opts)



get CustomerGroup By Customer &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CustomergroupsApi();

var customerId = "customerId_example"; // String | customerId

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
apiInstance.groupCustomerControllerGetAll_0(customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| customerId | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterCustomerGroup**](PresenterCustomerGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="groupCustomerControllerGetAll_1"></a>
# **groupCustomerControllerGetAll_1**
> PresenterCustomerGroup groupCustomerControllerGetAll_1(distributorId, opts)



get CustomerGroup By Distributor &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CustomergroupsApi();

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
apiInstance.groupCustomerControllerGetAll_1(distributorId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributorId | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterCustomerGroup**](PresenterCustomerGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="groupCustomerControllerGetOne"></a>
# **groupCustomerControllerGetOne**
> PresenterCustomerGroup groupCustomerControllerGetOne(id)



get CustomerGroup by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CustomergroupsApi();

var id = "id_example"; // String | The key for staticblock


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupCustomerControllerGetOne(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The key for staticblock | 

### Return type

[**PresenterCustomerGroup**](PresenterCustomerGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="groupCustomerControllerRemoveCustomerFromGroup"></a>
# **groupCustomerControllerRemoveCustomerFromGroup**
> PresenterCommonErrResponse groupCustomerControllerRemoveCustomerFromGroup(groupId, body)



Remove customer from CustomerGroup &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CustomergroupsApi();

var groupId = "groupId_example"; // String | The ID of group

var body = new NeomedApi.PresenterCustomerInGroupRequest(); // PresenterCustomerInGroupRequest | body of category to be link with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupCustomerControllerRemoveCustomerFromGroup(groupId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| The ID of group | 
 **body** | [**PresenterCustomerInGroupRequest**](PresenterCustomerInGroupRequest.md)| body of category to be link with | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="groupCustomerControllerUpdate"></a>
# **groupCustomerControllerUpdate**
> PresenterCommonErrResponse groupCustomerControllerUpdate(id, body)



update the Customer group &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CustomergroupsApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterCreateCustomerGroupRequest(); // PresenterCreateCustomerGroupRequest | body for CustomerGroup content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupCustomerControllerUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterCreateCustomerGroupRequest**](PresenterCreateCustomerGroupRequest.md)| body for CustomerGroup content | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

