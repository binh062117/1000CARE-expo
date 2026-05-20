# NeomedApi.GovApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**govControllerGetMicReport**](GovApi.md#govControllerGetMicReport) | **GET** /gov/mic/report | 


<a name="govControllerGetMicReport"></a>
# **govControllerGetMicReport**
> PresenterPrice govControllerGetMicReport()



get Options &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.GovApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.govControllerGetMicReport(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PresenterPrice**](PresenterPrice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

