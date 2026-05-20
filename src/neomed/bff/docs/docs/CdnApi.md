# NeomedApi.CdnApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cdnControllerUploadImage**](CdnApi.md#cdnControllerUploadImage) | **POST** /cdn/images | 


<a name="cdnControllerUploadImage"></a>
# **cdnControllerUploadImage**
> PresenterGCloudStorageMedia cdnControllerUploadImage(images)



create Product &lt;br&gt;

### Example
```javascript
var NeomedApi = require('neomed_api');

var apiInstance = new NeomedApi.CdnApi();

var images = "/path/to/file.txt"; // File | body for Product content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cdnControllerUploadImage(images, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **images** | **File**| body for Product content | 

### Return type

[**PresenterGCloudStorageMedia**](PresenterGCloudStorageMedia.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

