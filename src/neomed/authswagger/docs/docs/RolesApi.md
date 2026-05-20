# NeomedAuthApi.RolesApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**roleControllerCreateRole**](RolesApi.md#roleControllerCreateRole) | **POST** /roles/ | 
[**roleControllerDeleteRole**](RolesApi.md#roleControllerDeleteRole) | **DELETE** /roles/{id} | 
[**roleControllerGetPermissionsOfDistributorAdminRole**](RolesApi.md#roleControllerGetPermissionsOfDistributorAdminRole) | **GET** /roles/distributor-base-permissions | 
[**roleControllerGetPermissionsOfSupperAdminRole**](RolesApi.md#roleControllerGetPermissionsOfSupperAdminRole) | **GET** /roles/supper-base-permissions | 
[**roleControllerGetPermissionsOfUser**](RolesApi.md#roleControllerGetPermissionsOfUser) | **GET** /roles/users/{id} | 
[**roleControllerGetPermissionsOfUser_0**](RolesApi.md#roleControllerGetPermissionsOfUser_0) | **PUT** /roles/{roleId}/users/{userId} | 
[**roleControllerListDistributorRoles**](RolesApi.md#roleControllerListDistributorRoles) | **GET** /roles/distributors/{id} | 
[**roleControllerListDistributorRoles_0**](RolesApi.md#roleControllerListDistributorRoles_0) | **GET** /roles/{id} | 
[**roleControllerUpdateRole**](RolesApi.md#roleControllerUpdateRole) | **PUT** /roles/{id} | 


<a name="roleControllerCreateRole"></a>
# **roleControllerCreateRole**
> roleControllerCreateRole(body)



Create role

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.RolesApi();

var body = new NeomedAuthApi.PresenterRole(); // PresenterRole | body for role content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.roleControllerCreateRole(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterRole**](PresenterRole.md)| body for role content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="roleControllerDeleteRole"></a>
# **roleControllerDeleteRole**
> roleControllerDeleteRole(id)



delete role

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.RolesApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.roleControllerDeleteRole(id, callback);
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

<a name="roleControllerGetPermissionsOfDistributorAdminRole"></a>
# **roleControllerGetPermissionsOfDistributorAdminRole**
> EntityPermission roleControllerGetPermissionsOfDistributorAdminRole(opts)



Get permissions of distributor:admin role

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.RolesApi();

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
apiInstance.roleControllerGetPermissionsOfDistributorAdminRole(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**EntityPermission**](EntityPermission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="roleControllerGetPermissionsOfSupperAdminRole"></a>
# **roleControllerGetPermissionsOfSupperAdminRole**
> EntityPermission roleControllerGetPermissionsOfSupperAdminRole(opts)



Get permissions of supper:admin role

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.RolesApi();

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
apiInstance.roleControllerGetPermissionsOfSupperAdminRole(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**EntityPermission**](EntityPermission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="roleControllerGetPermissionsOfUser"></a>
# **roleControllerGetPermissionsOfUser**
> EntityPermission roleControllerGetPermissionsOfUser(id, opts)



Get permissions of user

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.RolesApi();

var id = "id_example"; // String | user id

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
apiInstance.roleControllerGetPermissionsOfUser(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| user id | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**EntityPermission**](EntityPermission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="roleControllerGetPermissionsOfUser_0"></a>
# **roleControllerGetPermissionsOfUser_0**
> EntityPermission roleControllerGetPermissionsOfUser_0(userId, roleId, opts)



Get permissions of a role

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.RolesApi();

var userId = "userId_example"; // String | user id

var roleId = "roleId_example"; // String | role id

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
apiInstance.roleControllerGetPermissionsOfUser_0(userId, roleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| user id | 
 **roleId** | **String**| role id | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**EntityPermission**](EntityPermission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="roleControllerListDistributorRoles"></a>
# **roleControllerListDistributorRoles**
> PresenterListProductsResponse roleControllerListDistributorRoles(id, opts)



List distributor roles

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.RolesApi();

var id = "id_example"; // String | distributor id

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
apiInstance.roleControllerListDistributorRoles(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| distributor id | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListProductsResponse**](PresenterListProductsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="roleControllerListDistributorRoles_0"></a>
# **roleControllerListDistributorRoles_0**
> PresenterRole roleControllerListDistributorRoles_0(id)



List distributor roles

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.RolesApi();

var id = "id_example"; // String | role id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.roleControllerListDistributorRoles_0(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| role id | 

### Return type

[**PresenterRole**](PresenterRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="roleControllerUpdateRole"></a>
# **roleControllerUpdateRole**
> roleControllerUpdateRole(body, opts)



Create role

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.RolesApi();

var body = new NeomedAuthApi.PresenterRole(); // PresenterRole | body for role content

var opts = { 
  'id': 789 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.roleControllerUpdateRole(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterRole**](PresenterRole.md)| body for role content | 
 **id** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

