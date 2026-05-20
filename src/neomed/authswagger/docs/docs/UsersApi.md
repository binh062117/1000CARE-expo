# NeomedAuthApi.UsersApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userControllerConfirmSignUpByPhone**](UsersApi.md#userControllerConfirmSignUpByPhone) | **POST** /users/confirm-signup | 
[**userControllerCreateDistributorsUser**](UsersApi.md#userControllerCreateDistributorsUser) | **POST** /users/distributor-admin | 
[**userControllerCreateDistributorsUser_0**](UsersApi.md#userControllerCreateDistributorsUser_0) | **POST** /users/distributor-users | 
[**userControllerCreateSuperUser**](UsersApi.md#userControllerCreateSuperUser) | **POST** /users/super-admin | 
[**userControllerDeleteUser**](UsersApi.md#userControllerDeleteUser) | **DELETE** /users/{id} | 
[**userControllerGetUserOfDistributor**](UsersApi.md#userControllerGetUserOfDistributor) | **GET** /users/distributors/{distId} | 
[**userControllerIdentityUser**](UsersApi.md#userControllerIdentityUser) | **POST** /users/identity | 
[**userControllerSignUpByPhone**](UsersApi.md#userControllerSignUpByPhone) | **POST** /users/signup | 
[**userControllerUpdateSelfUserPassword**](UsersApi.md#userControllerUpdateSelfUserPassword) | **PUT** /users/self-password | 
[**userControllerUpdateSelfUserProfile**](UsersApi.md#userControllerUpdateSelfUserProfile) | **PUT** /users/self-profile | 
[**userControllerUpdateUser**](UsersApi.md#userControllerUpdateUser) | **PUT** /users/ | 
[**userControllerUpdateUserByAdmin**](UsersApi.md#userControllerUpdateUserByAdmin) | **PUT** /users/{id}/profile-by-admin | 
[**usersDisableMfaPost**](UsersApi.md#usersDisableMfaPost) | **POST** /users/disable-mfa | 
[**usersForgotPasswordPost**](UsersApi.md#usersForgotPasswordPost) | **POST** /users/forgot-password | 
[**usersIdAuthenticatorPatch**](UsersApi.md#usersIdAuthenticatorPatch) | **PATCH** /users/{id}/authenticator | 
[**usersIdGenerateAuthCodePatch**](UsersApi.md#usersIdGenerateAuthCodePatch) | **PATCH** /users/{id}/generate-auth-code | 
[**usersIdGet**](UsersApi.md#usersIdGet) | **GET** /users/{id} | 
[**usersIdPasswordPatch**](UsersApi.md#usersIdPasswordPatch) | **PATCH** /users/{id}/password | 
[**usersIdPatch**](UsersApi.md#usersIdPatch) | **PATCH** /users/{id} | 
[**usersIdRecoveryQuestionsPatch**](UsersApi.md#usersIdRecoveryQuestionsPatch) | **PATCH** /users/{id}/recovery-questions | 
[**usersIdSendVerifySmsPatch**](UsersApi.md#usersIdSendVerifySmsPatch) | **PATCH** /users/{id}/send-verify-sms | 
[**usersIdVerifyMobilePatch**](UsersApi.md#usersIdVerifyMobilePatch) | **PATCH** /users/{id}/verify-mobile | 
[**usersPost**](UsersApi.md#usersPost) | **POST** /users/ | 
[**usersRecoveryQuestionsPost**](UsersApi.md#usersRecoveryQuestionsPost) | **POST** /users/recovery-questions | 
[**usersResetPasswordPost**](UsersApi.md#usersResetPasswordPost) | **POST** /users/reset-password | 
[**usersUsernameUsernameGet**](UsersApi.md#usersUsernameUsernameGet) | **GET** /users/username/{username} | 
[**usersVerifyEmailPost**](UsersApi.md#usersVerifyEmailPost) | **POST** /users/verify-email | 


<a name="userControllerConfirmSignUpByPhone"></a>
# **userControllerConfirmSignUpByPhone**
> userControllerConfirmSignUpByPhone(body)



ConfirmSignUpByPhone

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');
var defaultClient = NeomedAuthApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedAuthApi.UsersApi();

var body = new NeomedAuthApi.PresenterConfirmSignUpRequest(); // PresenterConfirmSignUpRequest | body for Confirm content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userControllerConfirmSignUpByPhone(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterConfirmSignUpRequest**](PresenterConfirmSignUpRequest.md)| body for Confirm content | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userControllerCreateDistributorsUser"></a>
# **userControllerCreateDistributorsUser**
> Success userControllerCreateDistributorsUser(body)



Create distributor&#39;s user

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var body = new NeomedAuthApi.PresenterCreateDistributorAdminRequest(); // PresenterCreateDistributorAdminRequest | body for role content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userControllerCreateDistributorsUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCreateDistributorAdminRequest**](PresenterCreateDistributorAdminRequest.md)| body for role content | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userControllerCreateDistributorsUser_0"></a>
# **userControllerCreateDistributorsUser_0**
> Success userControllerCreateDistributorsUser_0(body)



Create distributor&#39;s user

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var body = new NeomedAuthApi.PresenterCreateDistributorUserRequest(); // PresenterCreateDistributorUserRequest | body for role content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userControllerCreateDistributorsUser_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCreateDistributorUserRequest**](PresenterCreateDistributorUserRequest.md)| body for role content | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userControllerCreateSuperUser"></a>
# **userControllerCreateSuperUser**
> Success userControllerCreateSuperUser(body)



Create super user

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var body = new NeomedAuthApi.PresenterCreateSuperAdminRequest(); // PresenterCreateSuperAdminRequest | body for role content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userControllerCreateSuperUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterCreateSuperAdminRequest**](PresenterCreateSuperAdminRequest.md)| body for role content | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userControllerDeleteUser"></a>
# **userControllerDeleteUser**
> Success userControllerDeleteUser(id)



Delete user

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');
var defaultClient = NeomedAuthApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedAuthApi.UsersApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userControllerDeleteUser(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to delete | 

### Return type

[**Success**](Success.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userControllerGetUserOfDistributor"></a>
# **userControllerGetUserOfDistributor**
> EntityUser userControllerGetUserOfDistributor(distId, opts)



Get user of distributor

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var distId = "distId_example"; // String | distributor id

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
apiInstance.userControllerGetUserOfDistributor(distId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distId** | **String**| distributor id | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**EntityUser**](EntityUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userControllerIdentityUser"></a>
# **userControllerIdentityUser**
> userControllerIdentityUser(body)



identity User

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');
var defaultClient = NeomedAuthApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedAuthApi.UsersApi();

var body = new NeomedAuthApi.PresenterIdentityRequest(); // PresenterIdentityRequest | body for Identity request content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userControllerIdentityUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterIdentityRequest**](PresenterIdentityRequest.md)| body for Identity request content | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userControllerSignUpByPhone"></a>
# **userControllerSignUpByPhone**
> PresenterSignUpResponse userControllerSignUpByPhone(body)



SignUpByPhone

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');
var defaultClient = NeomedAuthApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedAuthApi.UsersApi();

var body = new NeomedAuthApi.PresenterSignUpRequest(); // PresenterSignUpRequest | body for User content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userControllerSignUpByPhone(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterSignUpRequest**](PresenterSignUpRequest.md)| body for User content | 

### Return type

[**PresenterSignUpResponse**](PresenterSignUpResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userControllerUpdateSelfUserPassword"></a>
# **userControllerUpdateSelfUserPassword**
> Success userControllerUpdateSelfUserPassword(body)



Update self user password

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var body = new NeomedAuthApi.PresenterUpdatePassword(); // PresenterUpdatePassword | body for user profile


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userControllerUpdateSelfUserPassword(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterUpdatePassword**](PresenterUpdatePassword.md)| body for user profile | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userControllerUpdateSelfUserProfile"></a>
# **userControllerUpdateSelfUserProfile**
> Success userControllerUpdateSelfUserProfile(body)



Update user by admin

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var body = new NeomedAuthApi.PresenterUpdateUserProfileRequest(); // PresenterUpdateUserProfileRequest | body for user profile


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userControllerUpdateSelfUserProfile(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterUpdateUserProfileRequest**](PresenterUpdateUserProfileRequest.md)| body for user profile | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userControllerUpdateUser"></a>
# **userControllerUpdateUser**
> userControllerUpdateUser(body, opts)



UpdateUser

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');
var defaultClient = NeomedAuthApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedAuthApi.UsersApi();

var body = new NeomedAuthApi.PresenterUpdateUserRequest(); // PresenterUpdateUserRequest | body for User content

var opts = { 
  'fields': "fields_example" // String | Fields returned. e.g. col1,col2 ...
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userControllerUpdateUser(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterUpdateUserRequest**](PresenterUpdateUserRequest.md)| body for User content | 
 **fields** | **String**| Fields returned. e.g. col1,col2 ... | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userControllerUpdateUserByAdmin"></a>
# **userControllerUpdateUserByAdmin**
> Success userControllerUpdateUserByAdmin(body, opts)



Update user by admin

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var body = new NeomedAuthApi.PresenterUpdateUserProfileRequest(); // PresenterUpdateUserProfileRequest | body for user profile

var opts = { 
  'id': 789 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userControllerUpdateUserByAdmin(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterUpdateUserProfileRequest**](PresenterUpdateUserProfileRequest.md)| body for user profile | 
 **id** | **Number**|  | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersDisableMfaPost"></a>
# **usersDisableMfaPost**
> usersDisableMfaPost()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersDisableMfaPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersForgotPasswordPost"></a>
# **usersForgotPasswordPost**
> usersForgotPasswordPost()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersForgotPasswordPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersIdAuthenticatorPatch"></a>
# **usersIdAuthenticatorPatch**
> usersIdAuthenticatorPatch()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersIdAuthenticatorPatch(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersIdGenerateAuthCodePatch"></a>
# **usersIdGenerateAuthCodePatch**
> usersIdGenerateAuthCodePatch()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersIdGenerateAuthCodePatch(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersIdGet"></a>
# **usersIdGet**
> usersIdGet(opts)



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

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
apiInstance.usersIdGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersIdPasswordPatch"></a>
# **usersIdPasswordPatch**
> usersIdPasswordPatch()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersIdPasswordPatch(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersIdPatch"></a>
# **usersIdPatch**
> usersIdPatch()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersIdPatch(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersIdRecoveryQuestionsPatch"></a>
# **usersIdRecoveryQuestionsPatch**
> usersIdRecoveryQuestionsPatch()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersIdRecoveryQuestionsPatch(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersIdSendVerifySmsPatch"></a>
# **usersIdSendVerifySmsPatch**
> usersIdSendVerifySmsPatch()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersIdSendVerifySmsPatch(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersIdVerifyMobilePatch"></a>
# **usersIdVerifyMobilePatch**
> usersIdVerifyMobilePatch()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersIdVerifyMobilePatch(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersPost"></a>
# **usersPost**
> usersPost()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersRecoveryQuestionsPost"></a>
# **usersRecoveryQuestionsPost**
> usersRecoveryQuestionsPost()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersRecoveryQuestionsPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersResetPasswordPost"></a>
# **usersResetPasswordPost**
> usersResetPasswordPost()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersResetPasswordPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersUsernameUsernameGet"></a>
# **usersUsernameUsernameGet**
> usersUsernameUsernameGet(opts)



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var opts = { 
  'username': "username_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersUsernameUsernameGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersVerifyEmailPost"></a>
# **usersVerifyEmailPost**
> usersVerifyEmailPost()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersVerifyEmailPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

