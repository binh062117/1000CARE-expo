# NeomedAuthApi.AuthApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerByPassFirebase**](AuthApi.md#authControllerByPassFirebase) | **GET** /auth/bypass-firebase | 
[**authControllerConfirmLoginByMobileOtp**](AuthApi.md#authControllerConfirmLoginByMobileOtp) | **PUT** /auth/login/mobile | 
[**authControllerConfirmTokenByMobile**](AuthApi.md#authControllerConfirmTokenByMobile) | **POST** /auth/confirm-token-by-mobile | 
[**authControllerLoginByMobileOtp**](AuthApi.md#authControllerLoginByMobileOtp) | **POST** /auth/login/mobile | 
[**authControllerTokenByFirebase**](AuthApi.md#authControllerTokenByFirebase) | **POST** /auth/token-by-firebase | 
[**authControllerTokenByMobile**](AuthApi.md#authControllerTokenByMobile) | **POST** /auth/token-by-mobile | 
[**authLogoutGet**](AuthApi.md#authLogoutGet) | **GET** /auth/logout | 
[**authRefreshCookiePost**](AuthApi.md#authRefreshCookiePost) | **POST** /auth/refresh-cookie | 
[**authRefreshTokenPost**](AuthApi.md#authRefreshTokenPost) | **POST** /auth/refresh-token | 
[**authSocialCallbackPost**](AuthApi.md#authSocialCallbackPost) | **POST** /auth/social/callback | 
[**authSocialRedirectPost**](AuthApi.md#authSocialRedirectPost) | **POST** /auth/social/redirect | 
[**authTokenPost**](AuthApi.md#authTokenPost) | **POST** /auth/token | 


<a name="authControllerByPassFirebase"></a>
# **authControllerByPassFirebase**
> PresenterByPassFirebaseResponse authControllerByPassFirebase()



ByPassFirebase

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');
var defaultClient = NeomedAuthApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedAuthApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authControllerByPassFirebase(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterByPassFirebaseResponse**](PresenterByPassFirebaseResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authControllerConfirmLoginByMobileOtp"></a>
# **authControllerConfirmLoginByMobileOtp**
> PresenterAuthToken authControllerConfirmLoginByMobileOtp(body)



ConfirmLoginByMobileOtp

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');
var defaultClient = NeomedAuthApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedAuthApi.AuthApi();

var body = new NeomedAuthApi.PresenterConfirmLoginByMobile(); // PresenterConfirmLoginByMobile | body for User content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authControllerConfirmLoginByMobileOtp(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterConfirmLoginByMobile**](PresenterConfirmLoginByMobile.md)| body for User content | 

### Return type

[**PresenterAuthToken**](PresenterAuthToken.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authControllerConfirmTokenByMobile"></a>
# **authControllerConfirmTokenByMobile**
> PresenterAuthToken authControllerConfirmTokenByMobile(body)



ConfirmTokenByMobile

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');
var defaultClient = NeomedAuthApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedAuthApi.AuthApi();

var body = new NeomedAuthApi.PresenterConfirmLoginByMobile(); // PresenterConfirmLoginByMobile | body for User content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authControllerConfirmTokenByMobile(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterConfirmLoginByMobile**](PresenterConfirmLoginByMobile.md)| body for User content | 

### Return type

[**PresenterAuthToken**](PresenterAuthToken.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authControllerLoginByMobileOtp"></a>
# **authControllerLoginByMobileOtp**
> PresenterLoginByMobileResponse authControllerLoginByMobileOtp(body)



TokenByMobile

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');
var defaultClient = NeomedAuthApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedAuthApi.AuthApi();

var body = new NeomedAuthApi.PresenterLoginByMobileRequest(); // PresenterLoginByMobileRequest | body for User content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authControllerLoginByMobileOtp(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterLoginByMobileRequest**](PresenterLoginByMobileRequest.md)| body for User content | 

### Return type

[**PresenterLoginByMobileResponse**](PresenterLoginByMobileResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authControllerTokenByFirebase"></a>
# **authControllerTokenByFirebase**
> PresenterAuthToken authControllerTokenByFirebase(body)



TokenByFirebase

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');
var defaultClient = NeomedAuthApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedAuthApi.AuthApi();

var body = new NeomedAuthApi.PresenterLoginByFirebaseRequest(); // PresenterLoginByFirebaseRequest | body for Login by firebase content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authControllerTokenByFirebase(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterLoginByFirebaseRequest**](PresenterLoginByFirebaseRequest.md)| body for Login by firebase content | 

### Return type

[**PresenterAuthToken**](PresenterAuthToken.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authControllerTokenByMobile"></a>
# **authControllerTokenByMobile**
> PresenterLoginByMobileResponse authControllerTokenByMobile(body)



TokenByMobile

### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');
var defaultClient = NeomedAuthApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedAuthApi.AuthApi();

var body = new NeomedAuthApi.PresenterLoginByMobileRequest(); // PresenterLoginByMobileRequest | body for User content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authControllerTokenByMobile(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterLoginByMobileRequest**](PresenterLoginByMobileRequest.md)| body for User content | 

### Return type

[**PresenterLoginByMobileResponse**](PresenterLoginByMobileResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authLogoutGet"></a>
# **authLogoutGet**
> authLogoutGet()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.authLogoutGet(callback);
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

<a name="authRefreshCookiePost"></a>
# **authRefreshCookiePost**
> authRefreshCookiePost()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.authRefreshCookiePost(callback);
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

<a name="authRefreshTokenPost"></a>
# **authRefreshTokenPost**
> authRefreshTokenPost()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.authRefreshTokenPost(callback);
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

<a name="authSocialCallbackPost"></a>
# **authSocialCallbackPost**
> authSocialCallbackPost()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.authSocialCallbackPost(callback);
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

<a name="authSocialRedirectPost"></a>
# **authSocialRedirectPost**
> authSocialRedirectPost()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.authSocialRedirectPost(callback);
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

<a name="authTokenPost"></a>
# **authTokenPost**
> authTokenPost()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.authTokenPost(callback);
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

