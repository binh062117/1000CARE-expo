# NeomedApi.CartsApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartControllerAddInvoice**](CartsApi.md#cartControllerAddInvoice) | **PUT** /carts/invoice | 
[**cartControllerAddMultiToCart**](CartsApi.md#cartControllerAddMultiToCart) | **POST** /carts/backoffice/products | 
[**cartControllerAddMultiToCart_0**](CartsApi.md#cartControllerAddMultiToCart_0) | **POST** /carts/products | 
[**cartControllerAddOptional**](CartsApi.md#cartControllerAddOptional) | **PUT** /carts/optional | 
[**cartControllerAddPromoProducts**](CartsApi.md#cartControllerAddPromoProducts) | **POST** /carts/add-promo-products | 
[**cartControllerAddToCart**](CartsApi.md#cartControllerAddToCart) | **POST** /carts/{prodid} | 
[**cartControllerBOAddToCart**](CartsApi.md#cartControllerBOAddToCart) | **POST** /carts/backoffice/{prodid} | 
[**cartControllerCheckout**](CartsApi.md#cartControllerCheckout) | **POST** /carts/checkout | 
[**cartControllerGetPaymentMethods**](CartsApi.md#cartControllerGetPaymentMethods) | **GET** /carts/payment-methods | 
[**cartControllerInfo**](CartsApi.md#cartControllerInfo) | **GET** /carts/info | 
[**cartControllerUpdateCart**](CartsApi.md#cartControllerUpdateCart) | **PUT** /carts/{prodid} | 
[**cartControllerViewCart**](CartsApi.md#cartControllerViewCart) | **GET** /carts/view | 


<a name="cartControllerAddInvoice"></a>
# **cartControllerAddInvoice**
> PresenterAddInvoiceResponse cartControllerAddInvoice(body, opts)



add user&#39;s invoice &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CartsApi();

var body = new NeomedApi.PresenterAddInvoiceRequest(); // PresenterAddInvoiceRequest | content body

var opts = { 
  'scope': 789 // Number | invoice for personal (1 - default) or business (2)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartControllerAddInvoice(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterAddInvoiceRequest**](PresenterAddInvoiceRequest.md)| content body | 
 **scope** | **Number**| invoice for personal (1 - default) or business (2) | [optional] 

### Return type

[**PresenterAddInvoiceResponse**](PresenterAddInvoiceResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartControllerAddMultiToCart"></a>
# **cartControllerAddMultiToCart**
> PresenterAddProductsToCartResponse cartControllerAddMultiToCart(body)



add products to customer&#39;s cart from backoffice &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CartsApi();

var body = new NeomedApi.PresenterAddProductsToCartRequest(); // PresenterAddProductsToCartRequest | content body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartControllerAddMultiToCart(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterAddProductsToCartRequest**](PresenterAddProductsToCartRequest.md)| content body | 

### Return type

[**PresenterAddProductsToCartResponse**](PresenterAddProductsToCartResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartControllerAddMultiToCart_0"></a>
# **cartControllerAddMultiToCart_0**
> PresenterAddProductsToCartResponse cartControllerAddMultiToCart_0(customerId, body)



add products to customer&#39;s cart &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CartsApi();

var customerId = 789; // Number | the customer id

var body = new NeomedApi.PresenterAddProductsToCartRequest(); // PresenterAddProductsToCartRequest | content body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartControllerAddMultiToCart_0(customerId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| the customer id | 
 **body** | [**PresenterAddProductsToCartRequest**](PresenterAddProductsToCartRequest.md)| content body | 

### Return type

[**PresenterAddProductsToCartResponse**](PresenterAddProductsToCartResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartControllerAddOptional"></a>
# **cartControllerAddOptional**
> PresenterAddOptionalResponse cartControllerAddOptional(value, type, opts)



add shipping address/payment method/ shipping method into cart &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CartsApi();

var value = "value_example"; // String | value of address/payment method/shipping method/noted/voucher id

var type = 56; // Number | optional type: Address = 1, Payment = 2, Shipping = 3, Noted = 4, Voucher = 5, NeoVoucher = 6

var opts = { 
  'distributorId': 789, // Number | the distributor id (for Payment/Noted/Voucher type - required)
  'paymentType': 56 // Number | payment type of product (for Payment/Voucher type- required)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartControllerAddOptional(value, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| value of address/payment method/shipping method/noted/voucher id | 
 **type** | **Number**| optional type: Address &#x3D; 1, Payment &#x3D; 2, Shipping &#x3D; 3, Noted &#x3D; 4, Voucher &#x3D; 5, NeoVoucher &#x3D; 6 | 
 **distributorId** | **Number**| the distributor id (for Payment/Noted/Voucher type - required) | [optional] 
 **paymentType** | **Number**| payment type of product (for Payment/Voucher type- required) | [optional] 

### Return type

[**PresenterAddOptionalResponse**](PresenterAddOptionalResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartControllerAddPromoProducts"></a>
# **cartControllerAddPromoProducts**
> PresenterAddPromoProductsResponse cartControllerAddPromoProducts(body)



add promotion products to customer&#39;s cart &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CartsApi();

var body = new NeomedApi.PresenterAddPromoProductsRequest(); // PresenterAddPromoProductsRequest | content body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartControllerAddPromoProducts(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresenterAddPromoProductsRequest**](PresenterAddPromoProductsRequest.md)| content body | 

### Return type

[**PresenterAddPromoProductsResponse**](PresenterAddPromoProductsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartControllerAddToCart"></a>
# **cartControllerAddToCart**
> PresenterAddProductToCartResponse cartControllerAddToCart(prodid, distributorId, opts)



add product to customer&#39;s cart &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CartsApi();

var prodid = "prodid_example"; // String | product id

var distributorId = 789; // Number | the distributor id

var opts = { 
  'qty': 789, // Number | the quantity of product
  'body': new NeomedApi.PresenterProductOptions() // PresenterProductOptions | body content
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartControllerAddToCart(prodid, distributorId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prodid** | **String**| product id | 
 **distributorId** | **Number**| the distributor id | 
 **qty** | **Number**| the quantity of product | [optional] 
 **body** | [**PresenterProductOptions**](PresenterProductOptions.md)| body content | [optional] 

### Return type

[**PresenterAddProductToCartResponse**](PresenterAddProductToCartResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartControllerBOAddToCart"></a>
# **cartControllerBOAddToCart**
> PresenterAddProductToCartResponse cartControllerBOAddToCart(prodid, distributorId, customerId, opts)



add product to customer&#39;s cart from backoffic &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CartsApi();

var prodid = "prodid_example"; // String | product id

var distributorId = 789; // Number | the distributor id

var customerId = 789; // Number | the customer id

var opts = { 
  'qty': 789, // Number | the quantity of product
  'body': new NeomedApi.PresenterProductOptions() // PresenterProductOptions | body content
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartControllerBOAddToCart(prodid, distributorId, customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prodid** | **String**| product id | 
 **distributorId** | **Number**| the distributor id | 
 **customerId** | **Number**| the customer id | 
 **qty** | **Number**| the quantity of product | [optional] 
 **body** | [**PresenterProductOptions**](PresenterProductOptions.md)| body content | [optional] 

### Return type

[**PresenterAddProductToCartResponse**](PresenterAddProductToCartResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartControllerCheckout"></a>
# **cartControllerCheckout**
> PresenterCheckoutResponse cartControllerCheckout()



checkout customer&#39;s cart &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CartsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartControllerCheckout(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterCheckoutResponse**](PresenterCheckoutResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartControllerGetPaymentMethods"></a>
# **cartControllerGetPaymentMethods**
> PresenterPaymentMethodsResponse cartControllerGetPaymentMethods(opts)



listing payment methods are available &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CartsApi();

var opts = { 
  'distributorId': "distributorId_example", // String | distributor id
  'paymentType': 56 // Number | product payment type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartControllerGetPaymentMethods(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributorId** | **String**| distributor id | [optional] 
 **paymentType** | **Number**| product payment type | [optional] 

### Return type

[**PresenterPaymentMethodsResponse**](PresenterPaymentMethodsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartControllerInfo"></a>
# **cartControllerInfo**
> PresenterBasketInfoResponse cartControllerInfo()



the quantity of items for a cart &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CartsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartControllerInfo(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterBasketInfoResponse**](PresenterBasketInfoResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartControllerUpdateCart"></a>
# **cartControllerUpdateCart**
> PresenterUpdateProductToCartResponse cartControllerUpdateCart(prodid, qtt, distributorId, opts)



update product information in customer&#39;s cart &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CartsApi();

var prodid = 789; // Number | product id

var qtt = 789; // Number | the quantity of product (if qtt = 0, the product will be removed from the cart)

var distributorId = 789; // Number | the distributor id

var opts = { 
  'body': new NeomedApi.PresenterProductOptions() // PresenterProductOptions | body content
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartControllerUpdateCart(prodid, qtt, distributorId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prodid** | **Number**| product id | 
 **qtt** | **Number**| the quantity of product (if qtt &#x3D; 0, the product will be removed from the cart) | 
 **distributorId** | **Number**| the distributor id | 
 **body** | [**PresenterProductOptions**](PresenterProductOptions.md)| body content | [optional] 

### Return type

[**PresenterUpdateProductToCartResponse**](PresenterUpdateProductToCartResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartControllerViewCart"></a>
# **cartControllerViewCart**
> PresenterViewCartResponse cartControllerViewCart(step, opts)



listing cart items &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');
var defaultClient = NeomedApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new NeomedApi.CartsApi();

var step = "step_example"; // String | the current step: 'view', 'checkout'

var opts = { 
  'ids': "ids_example" // String | set ids cart items, seperated by commas(,)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartControllerViewCart(step, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **step** | **String**| the current step: &#39;view&#39;, &#39;checkout&#39; | 
 **ids** | **String**| set ids cart items, seperated by commas(,) | [optional] 

### Return type

[**PresenterViewCartResponse**](PresenterViewCartResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

