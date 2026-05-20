# NeomedAuthApi.AuditlogsApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auditLogsGet**](AuditlogsApi.md#auditLogsGet) | **GET** /audit-logs/ | 


<a name="auditLogsGet"></a>
# **auditLogsGet**
> auditLogsGet()



### Example
```javascript
var NeomedAuthApi = require('neomed_auth_api');

var apiInstance = new NeomedAuthApi.AuditlogsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.auditLogsGet(callback);
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

