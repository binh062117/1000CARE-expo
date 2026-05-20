# NeomedApi.AddressApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addressControllerCreateAddressBook**](AddressApi.md#addressControllerCreateAddressBook) | **POST** /address/address-books | 
[**addressControllerDeleteAddressBook**](AddressApi.md#addressControllerDeleteAddressBook) | **DELETE** /address/address-books/{id} | 
[**addressControllerGetAddressBook**](AddressApi.md#addressControllerGetAddressBook) | **GET** /address/address-books/{id} | 
[**addressControllerGetOptionsByProduct**](AddressApi.md#addressControllerGetOptionsByProduct) | **GET** /address/address-books/customers/{customerId} | 
[**addressControllerListDistrictByProvince**](AddressApi.md#addressControllerListDistrictByProvince) | **GET** /address/districts | 
[**addressControllerListProvinceByCountry**](AddressApi.md#addressControllerListProvinceByCountry) | **GET** /address/provinces | 
[**addressControllerListWardByDistrict**](AddressApi.md#addressControllerListWardByDistrict) | **GET** /address/wards | 
[**addressControllerUpdateAddressBook**](AddressApi.md#addressControllerUpdateAddressBook) | **PUT** /address/address-books/{id} | 


<a name="addressControllerCreateAddressBook"></a>
# **addressControllerCreateAddressBook**
> PresenterAddressBook addressControllerCreateAddressBook(body)



CreateAddressBook &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AddressApi();

var body = new NeomedApi.PresenterAddressBookRequest(); // PresenterAddressBookRequest | body for Options content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressControllerCreateAddressBook(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterAddressBookRequest**](PresenterAddressBookRequest.md)| body for Options content | 

### Return type

[**PresenterAddressBook**](PresenterAddressBook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="addressControllerDeleteAddressBook"></a>
# **addressControllerDeleteAddressBook**
> addressControllerDeleteAddressBook(id)



DeleteAddressBook &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AddressApi();

var id = "id_example"; // String | The id you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addressControllerDeleteAddressBook(id, callback);
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

<a name="addressControllerGetAddressBook"></a>
# **addressControllerGetAddressBook**
> PresenterPrice addressControllerGetAddressBook(id)



get Options by id &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AddressApi();

var id = "id_example"; // String | The key for staticblock


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressControllerGetAddressBook(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The key for staticblock | 

### Return type

[**PresenterPrice**](PresenterPrice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="addressControllerGetOptionsByProduct"></a>
# **addressControllerGetOptionsByProduct**
> PresenterListAddressBooksResponse addressControllerGetOptionsByProduct(customerId, opts)



get Options &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AddressApi();

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
apiInstance.addressControllerGetOptionsByProduct(customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| customerId | 
 **size** | **String**| Size of result set. Must be an integer | [optional] 
 **page** | **String**| Page number of view. Must be an integer | [optional] 

### Return type

[**PresenterListAddressBooksResponse**](PresenterListAddressBooksResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="addressControllerListDistrictByProvince"></a>
# **addressControllerListDistrictByProvince**
> PresenterListDistrict addressControllerListDistrictByProvince(opts)



get Pharmacy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AddressApi();

var opts = { 
  'province': "province_example" // String | Filter. e.g. col1:v1,col2:v2 ...
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressControllerListDistrictByProvince(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **province** | **String**| Filter. e.g. col1:v1,col2:v2 ... | [optional] 

### Return type

[**PresenterListDistrict**](PresenterListDistrict.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="addressControllerListProvinceByCountry"></a>
# **addressControllerListProvinceByCountry**
> PresenterListProvince addressControllerListProvinceByCountry(opts)



get Pharmacy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AddressApi();

var opts = { 
  'country': "country_example" // String | Filter. e.g. col1:v1,col2:v2 ...
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressControllerListProvinceByCountry(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| Filter. e.g. col1:v1,col2:v2 ... | [optional] 

### Return type

[**PresenterListProvince**](PresenterListProvince.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="addressControllerListWardByDistrict"></a>
# **addressControllerListWardByDistrict**
> PresenterListWard addressControllerListWardByDistrict(opts)



get Pharmacy &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AddressApi();

var opts = { 
  'district': "district_example" // String | Filter. e.g. col1:v1,col2:v2 ...
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressControllerListWardByDistrict(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **district** | **String**| Filter. e.g. col1:v1,col2:v2 ... | [optional] 

### Return type

[**PresenterListWard**](PresenterListWard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="addressControllerUpdateAddressBook"></a>
# **addressControllerUpdateAddressBook**
> PresenterCommonErrResponse addressControllerUpdateAddressBook(id, body)



update the Options &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.AddressApi();

var id = "id_example"; // String | The id you want to update

var body = new NeomedApi.PresenterAddressBookRequest(); // PresenterAddressBookRequest | body for Options content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressControllerUpdateAddressBook(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id you want to update | 
 **body** | [**PresenterAddressBookRequest**](PresenterAddressBookRequest.md)| body for Options content | 

### Return type

[**PresenterCommonErrResponse**](PresenterCommonErrResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

