# NeomedApi.ReferralApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**referralControllerAddProfiles**](ReferralApi.md#referralControllerAddProfiles) | **POST** /referral/profiles | 
[**referralControllerApplyRefCode**](ReferralApi.md#referralControllerApplyRefCode) | **GET** /referral/apply | 
[**referralControllerChangeRef**](ReferralApi.md#referralControllerChangeRef) | **PUT** /referral/change | 
[**referralControllerCheckEvent**](ReferralApi.md#referralControllerCheckEvent) | **GET** /referral/check | 
[**referralControllerGetProfile**](ReferralApi.md#referralControllerGetProfile) | **GET** /referral/profiles | 
[**referralControllerListingReferee**](ReferralApi.md#referralControllerListingReferee) | **POST** /referral/listing-referee | 
[**referralControllerUpdateProfile**](ReferralApi.md#referralControllerUpdateProfile) | **PUT** /referral/profiles | 


<a name="referralControllerAddProfiles"></a>
# **referralControllerAddProfiles**
> PresenterAddReferralProfilesResponse referralControllerAddProfiles(body)



add new profiles allow to refer &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReferralApi();

var body = new NeomedApi.PresenterAddReferralProfilesRequest(); // PresenterAddReferralProfilesRequest | content body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referralControllerAddProfiles(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterAddReferralProfilesRequest**](PresenterAddReferralProfilesRequest.md)| content body | 

### Return type

[**PresenterAddReferralProfilesResponse**](PresenterAddReferralProfilesResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="referralControllerApplyRefCode"></a>
# **referralControllerApplyRefCode**
> PresenterApplyRefCodeResponse referralControllerApplyRefCode(ref, opts)



apply referral code &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReferralApi();

var ref = "ref_example"; // String | ref code

var opts = { 
  'et': 56, // Number | referral event type (default = 1)
  'type': "type_example" // String | referrer type: S - sale (default), P - pharmacy
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referralControllerApplyRefCode(ref, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ref** | **String**| ref code | 
 **et** | **Number**| referral event type (default &#x3D; 1) | [optional] 
 **type** | **String**| referrer type: S - sale (default), P - pharmacy | [optional] 

### Return type

[**PresenterApplyRefCodeResponse**](PresenterApplyRefCodeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="referralControllerChangeRef"></a>
# **referralControllerChangeRef**
> PresenterChangeRefResponse referralControllerChangeRef(newRefId, newRefCode, oldRefId, opts)



changed referrer &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReferralApi();

var newRefId = "newRefId_example"; // String | new referrer's id

var newRefCode = "newRefCode_example"; // String | new referrer's code

var oldRefId = "oldRefId_example"; // String | old referrer's code

var opts = { 
  'type': "type_example" // String | referrer type: S - sale (default), P - pharmacy
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referralControllerChangeRef(newRefId, newRefCode, oldRefId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newRefId** | **String**| new referrer&#39;s id | 
 **newRefCode** | **String**| new referrer&#39;s code | 
 **oldRefId** | **String**| old referrer&#39;s code | 
 **type** | **String**| referrer type: S - sale (default), P - pharmacy | [optional] 

### Return type

[**PresenterChangeRefResponse**](PresenterChangeRefResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="referralControllerCheckEvent"></a>
# **referralControllerCheckEvent**
> PresenterCheckEventResponse referralControllerCheckEvent(opts)



check whether user has applied refcode or not &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReferralApi();

var opts = { 
  'et': 56 // Number | referral event type (default = 1)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referralControllerCheckEvent(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **et** | **Number**| referral event type (default &#x3D; 1) | [optional] 

### Return type

[**PresenterCheckEventResponse**](PresenterCheckEventResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="referralControllerGetProfile"></a>
# **referralControllerGetProfile**
> PresenterGetReferralProfileResponse referralControllerGetProfile(opts)



get referral profile &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReferralApi();

var opts = { 
  'uid': "uid_example", // String | uid profile
  'refCode': "refCode_example" // String | refCode profile
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referralControllerGetProfile(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **String**| uid profile | [optional] 
 **refCode** | **String**| refCode profile | [optional] 

### Return type

[**PresenterGetReferralProfileResponse**](PresenterGetReferralProfileResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="referralControllerListingReferee"></a>
# **referralControllerListingReferee**
> PresenterListingRefereeResponse referralControllerListingReferee(body)



listing referee &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReferralApi();

var body = new NeomedApi.PresenterListingRefereeRequest(); // PresenterListingRefereeRequest | content body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referralControllerListingReferee(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterListingRefereeRequest**](PresenterListingRefereeRequest.md)| content body | 

### Return type

[**PresenterListingRefereeResponse**](PresenterListingRefereeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="referralControllerUpdateProfile"></a>
# **referralControllerUpdateProfile**
> PresenterUpdateReferralProfileResponse referralControllerUpdateProfile(body)



update referral profile &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.ReferralApi();

var body = new NeomedApi.PresenterUpdateReferralProfileRequest(); // PresenterUpdateReferralProfileRequest | content body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referralControllerUpdateProfile(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterUpdateReferralProfileRequest**](PresenterUpdateReferralProfileRequest.md)| content body | 

### Return type

[**PresenterUpdateReferralProfileResponse**](PresenterUpdateReferralProfileResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

