{
    "swagger": "2.0",
        "info": {
        "title": "HealthCare API",
            "description": "HealthCare API\n",
                "version": "1.0.0",
                    "termsOfService": "https://ciaolink.net/",
                        "contact": {
            "email": "support@ciaolink.net"
        },
        "license": {
            "name": "Apache 2.0",
                "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },
    "basePath": "/v1",
        "paths": {
        "/address/address-books": {
            "post": {
                "tags": [
                    "address"
                ],
                    "description": "CreateAddressBook\n\u003cbr\u003e",
                        "operationId": "AddressController.CreateAddressBook",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Options content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.AddressBookRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.AddressBook"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/address/address-books/customers/{customerId}": {
            "get": {
                "tags": [
                    "address"
                ],
                    "description": "get Options\n\u003cbr\u003e",
                        "operationId": "AddressController.GetOptionsByProduct",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "customerId",
                                    "description": "customerId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListAddressBooksResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/address/address-books/{id}": {
            "get": {
                "tags": [
                    "address"
                ],
                    "description": "get Options by id\n\u003cbr\u003e",
                        "operationId": "AddressController.GetAddressBook",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The key for staticblock",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Price"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                }
            },
            "put": {
                "tags": [
                    "address"
                ],
                    "description": "update the Options\n\u003cbr\u003e",
                        "operationId": "AddressController.UpdateAddressBook",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Options content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.AddressBookRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            },
            "delete": {
                "tags": [
                    "address"
                ],
                    "description": "DeleteAddressBook\n\u003cbr\u003e",
                        "operationId": "AddressController.DeleteAddressBook",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{string} delete success!"
                    },
                    "403": {
                        "description": "id is empty"
                    }
                }
            }
        },
        "/address/districts": {
            "get": {
                "tags": [
                    "address"
                ],
                    "description": "get Pharmacy\n\u003cbr\u003e",
                        "operationId": "AddressController.ListDistrictByProvince",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "province",
                                    "description": "Filter. e.g. col1:v1,col2:v2 ...",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListDistrict"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/address/provinces": {
            "get": {
                "tags": [
                    "address"
                ],
                    "description": "get Pharmacy\n\u003cbr\u003e",
                        "operationId": "AddressController.List Province By Country",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "country",
                                    "description": "Filter. e.g. col1:v1,col2:v2 ...",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProvince"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/address/wards": {
            "get": {
                "tags": [
                    "address"
                ],
                    "description": "get Pharmacy\n\u003cbr\u003e",
                        "operationId": "AddressController.ListWardByDistrict",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "district",
                                    "description": "Filter. e.g. col1:v1,col2:v2 ...",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListWard"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/ads-banners/": {
            "post": {
                "tags": [
                    "ads-banners"
                ],
                    "description": "create Banner\n\u003cbr\u003e",
                        "operationId": "AdsBannerController.Post",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Banner content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.AdsBanner"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/ads-banners/advertisement": {
            "put": {
                "tags": [
                    "ads-banners"
                ],
                    "description": "update advertise ads banner\n\u003cbr\u003e",
                        "operationId": "AdsBannerController.UpdateAdvertiseAdsBanner",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Ads banner (advertise) content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreateAdsBannerAdvertiseRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            }
        },
        "/ads-banners/distributors/{distributorId}": {
            "get": {
                "tags": [
                    "ads-banners"
                ],
                    "description": "get Banners\n\u003cbr\u003e",
                        "operationId": "AdsBannerController.ListAdsBannersByDistributor",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributorId",
                                    "description": "distributorId, 0 All, \u003e 0 NCC",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "status,-1 All, 0 Inactive, 1 Active",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "isAdvertise",
                                    "description": "isAdvertise,-1 All, 1 IsAdvertise",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListAdsBannersResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/ads-banners/{id}": {
            "get": {
                "tags": [
                    "ads-banners"
                ],
                    "description": "get Banner by id\n\u003cbr\u003e",
                        "operationId": "AdsBannerController.Get One",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The key for staticblock",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.AdsBanner"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                }
            },
            "put": {
                "tags": [
                    "ads-banners"
                ],
                    "description": "update the Banner\n\u003cbr\u003e",
                        "operationId": "AdsBannerController.Put",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Banner content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.AdsBanner"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            },
            "delete": {
                "tags": [
                    "ads-banners"
                ],
                    "description": "delete the Banner\n\u003cbr\u003e",
                        "operationId": "AdsBannerController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{string} delete success!"
                    },
                    "403": {
                        "description": "id is empty"
                    }
                }
            }
        },
        "/attributes/": {
            "get": {
                "tags": [
                    "attributes"
                ],
                    "description": "get Attributes\n\u003cbr\u003e",
                        "operationId": "AttributeController.GetAll",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "query",
                                    "description": "Filter. e.g. col1:v1,col2:v2 ...",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "fields",
                                    "description": "Fields returned. e.g. col1,col2 ...",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "sortby",
                                    "description": "Sorted-by fields. e.g. col1,col2 ...",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "order",
                                    "description": "Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "limit",
                                    "description": "Limit the size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "offset",
                                    "description": "Start position of result set. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Attribute"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            },
            "post": {
                "tags": [
                    "attributes"
                ],
                    "description": "create Attributes\n\u003cbr\u003e",
                        "operationId": "AttributeController.Create",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Attributes content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Attribute"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Attribute"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/attributes/{id}": {
            "get": {
                "tags": [
                    "attributes"
                ],
                    "description": "get Attributes by id\n\u003cbr\u003e",
                        "operationId": "AttributeController.GetOne",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The key for staticblock",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Attribute"
                        }
                    },
                    "403": {
                        "description": ":id is empty mmmm"
                    }
                }
            },
            "put": {
                "tags": [
                    "attributes"
                ],
                    "description": "update the Attributes\n\u003cbr\u003e",
                        "operationId": "AttributeController.Put",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Attributes content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Attribute"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Attribute"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            },
            "delete": {
                "tags": [
                    "attributes"
                ],
                    "description": "delete the Attributes\n\u003cbr\u003e",
                        "operationId": "AttributeController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{string} delete success!"
                    },
                    "403": {
                        "description": "id is empty"
                    }
                }
            }
        },
        "/banners/": {
            "get": {
                "tags": [
                    "banners"
                ],
                    "description": "get Banner\n\u003cbr\u003e",
                        "operationId": "BannerController.Get All",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListBannersResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            },
            "post": {
                "tags": [
                    "banners"
                ],
                    "description": "create Banner\n\u003cbr\u003e",
                        "operationId": "BannerController.Post",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Banner content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreateBannerUpdateRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CreateBannerUpdateRequest"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/banners/campaigns/{campaignId}": {
            "get": {
                "tags": [
                    "banners"
                ],
                    "description": "get Banners\n\u003cbr\u003e",
                        "operationId": "BannerController.ListBannerByCampaign",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "campaignId",
                                    "description": "campaignId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListBannersResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/banners/distributors/{distributorId}": {
            "get": {
                "tags": [
                    "banners"
                ],
                    "description": "get Banners\n\u003cbr\u003e",
                        "operationId": "BannerController.ListBannerByCampaignActive",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListBannersResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/banners/distributors/{distributorId}/type/{campaignType}": {
            "get": {
                "tags": [
                    "banners"
                ],
                    "description": "get Banners\n\u003cbr\u003e",
                        "operationId": "BannerController.ListBannersByActiveCampaignAndCampaignType",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "path",
                                    "name": "campaignType",
                                    "description": "campaignType",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListBannersResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/banners/multi/": {
            "post": {
                "tags": [
                    "banners"
                ],
                    "description": "create Banner\n\u003cbr\u003e",
                        "operationId": "BannerController.CreateMulti",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Banner content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.BannerMultiRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/banners/{id}": {
            "get": {
                "tags": [
                    "banners"
                ],
                    "description": "get Banner by id\n\u003cbr\u003e",
                        "operationId": "BannerController.Get One",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The key for staticblock",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Banner"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                }
            },
            "put": {
                "tags": [
                    "banners"
                ],
                    "description": "update the Banner\n\u003cbr\u003e",
                        "operationId": "BannerController.Put",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Banner content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreateBannerUpdateRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CreateBannerUpdateRequest"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            },
            "delete": {
                "tags": [
                    "banners"
                ],
                    "description": "delete the Banner\n\u003cbr\u003e",
                        "operationId": "BannerController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{string} delete success!"
                    },
                    "403": {
                        "description": "id is empty"
                    }
                }
            }
        },
        "/campaign-setting/": {
            "get": {
                "tags": [
                    "campaign-setting"
                ],
                    "description": "get list campaign setting\n\u003cbr\u003e",
                        "operationId": "CampaignSettingController.GetAll",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListCampaignSetting"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            },
            "post": {
                "tags": [
                    "campaign-setting"
                ],
                    "description": "create Campaign\n\u003cbr\u003e",
                        "operationId": "CampaignSettingController.Post",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for CampaignSetting content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CampaignSetting"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CampaignSetting"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/campaign-setting/distributor/{id}": {
            "get": {
                "tags": [
                    "campaign-setting"
                ],
                    "description": "get list campaign setting by distributor_id\n\u003cbr\u003e",
                        "operationId": "CampaignSettingController.GetAllByDistributor",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListCampaignSetting"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/campaign-setting/{id}": {
            "get": {
                "tags": [
                    "campaign-setting"
                ],
                    "description": "get campaign setting by id\n\u003cbr\u003e",
                        "operationId": "CampaignSettingController.GetOne",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CampaignSetting"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            },
            "put": {
                "tags": [
                    "campaign-setting"
                ],
                    "description": "update the Campaign setting\n\u003cbr\u003e",
                        "operationId": "CampaignSettingController.Put",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Campaign Setting content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CampaignSetting"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CampaignSetting"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            },
            "delete": {
                "tags": [
                    "campaign-setting"
                ],
                    "description": "delete the Campaign\n\u003cbr\u003e",
                        "operationId": "CampaignSettingController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{string} delete success!"
                    },
                    "403": {
                        "description": "id is empty"
                    }
                }
            }
        },
        "/campaigns/": {
            "post": {
                "tags": [
                    "campaigns"
                ],
                    "description": "create Campaign\n\u003cbr\u003e",
                        "operationId": "CampaignController.Post",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Campaign content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Campaign"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.Campaign"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/campaigns/distributors/{distributorId}": {
            "get": {
                "tags": [
                    "campaigns"
                ],
                    "description": "get Campaign by Distributor\n\u003cbr\u003e",
                        "operationId": "CampaignController.Get All By Distributor",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "campaign status (default 1). active: 1; inactive: 0",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "campaignTypes",
                                    "description": "campaign type (default empty: get all type). campaignType=1,2,3",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "YYYY-MM-DD",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "YYYY-MM-DD",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListCampaignsResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/campaigns/distributors/{distributorId}/bo-topup-promo": {
            "get": {
                "tags": [
                    "campaigns"
                ],
                    "description": "Get available TopUp campaign\n\u003cbr\u003e",
                        "operationId": "CampaignController.GetAvailableTopUpCampaignForBo",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "customerId",
                                    "description": "customer id (or user id)",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Campaign"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/campaigns/distributors/{distributorId}/products/{productId}": {
            "get": {
                "tags": [
                    "campaigns"
                ],
                    "description": "get Campaign by Distributor\n\u003cbr\u003e",
                        "operationId": "CampaignController.ListAvailableCampaignForProducts",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "path",
                                    "name": "productId",
                                    "description": "productId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "amount",
                                    "description": "Amount of all products to be add to cart",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "Type 0:promotion of product 1:orthers",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListCampaignsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/campaigns/distributors/{distributorId}/topup": {
            "get": {
                "tags": [
                    "campaigns"
                ],
                    "description": "Get available TopUp campaign\n\u003cbr\u003e",
                        "operationId": "CampaignController.GetAvailableTopUpCampaign",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Campaign"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/campaigns/{id}": {
            "get": {
                "tags": [
                    "campaigns"
                ],
                    "description": "get Campaign by id\n\u003cbr\u003e",
                        "operationId": "CampaignController.Get One",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The key for staticblock",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Campaign"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                }
            },
            "put": {
                "tags": [
                    "campaigns"
                ],
                    "description": "update the Campaign\n\u003cbr\u003e",
                        "operationId": "CampaignController.Put",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Campaign content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Campaign"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Campaign"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            },
            "delete": {
                "tags": [
                    "campaigns"
                ],
                    "description": "delete the Campaign\n\u003cbr\u003e",
                        "operationId": "CampaignController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{string} delete success!"
                    },
                    "403": {
                        "description": "id is empty"
                    }
                }
            }
        },
        "/campaigns/{id}/budgets/{amount}": {
            "put": {
                "tags": [
                    "campaigns"
                ],
                    "description": "update the Campaign\n\u003cbr\u003e",
                        "operationId": "CampaignController.PutBudgets",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "path",
                                    "name": "amount",
                                    "description": "The amount you want to update",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Campaign"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            }
        },
        "/campaigns/{id}/status/{status}": {
            "put": {
                "tags": [
                    "campaigns"
                ],
                    "description": "update the Campaign\n\u003cbr\u003e",
                        "operationId": "CampaignController.PutStatus",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "path",
                                    "name": "status",
                                    "description": "The status you want to update",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Campaign"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            }
        },
        "/carts/add-promo-products": {
            "post": {
                "tags": [
                    "carts"
                ],
                    "description": "add promotion products to customer's cart\n\u003cbr\u003e",
                        "operationId": "CartController.AddPromoProducts",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "content body",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.AddPromoProductsRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.AddPromoProductsResponse"
                        }
                    },
                    "400": {
                        "description": "body is empty"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/carts/backoffice/products": {
            "post": {
                "tags": [
                    "carts"
                ],
                    "description": "add products to customer's cart from backoffice\n\u003cbr\u003e",
                        "operationId": "CartController.AddMultiToCart",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "content body",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.AddProductsToCartRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.AddProductsToCartResponse"
                        }
                    },
                    "400": {
                        "description": "body is empty"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/carts/backoffice/{prodid}": {
            "post": {
                "tags": [
                    "carts"
                ],
                    "description": "add product to customer's cart from backoffic\n\u003cbr\u003e",
                        "operationId": "CartController.BOAddToCart",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "prodid",
                                    "description": "product id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "qty",
                                    "description": "the quantity of product",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "the distributor id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "customerId",
                                    "description": "the customer id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body content",
                                    "schema": {
                                        "$ref": "#/definitions/presenter.ProductOptions"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.AddProductToCartResponse"
                        }
                    },
                    "400": {
                        "description": "body is empty"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/carts/checkout": {
            "post": {
                "tags": [
                    "carts"
                ],
                    "description": "checkout customer's cart\n\u003cbr\u003e",
                        "operationId": "CartController.Checkout",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "appTrans",
                                    "description": "app_trans_id khi thanh toan thanh cong VietQr",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CheckoutResponse"
                        }
                    },
                    "400": {
                        "description": "occured erro"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/carts/info": {
            "get": {
                "tags": [
                    "carts"
                ],
                    "description": "the quantity of items for a cart\n\u003cbr\u003e",
                        "operationId": "CartController.Info",
                            "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.BasketInfoResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/carts/invoice": {
            "put": {
                "tags": [
                    "carts"
                ],
                    "description": "add user's invoice\n\u003cbr\u003e",
                        "operationId": "CartController.AddInvoice",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "scope",
                                    "description": "invoice for personal (1 - default) or business (2)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "content body",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.AddInvoiceRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.AddInvoiceResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/carts/optional": {
            "put": {
                "tags": [
                    "carts"
                ],
                    "description": "add shipping address/payment method/ shipping method into cart\n\u003cbr\u003e",
                        "operationId": "CartController.AddOptional",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "value",
                                    "description": "value of address/payment method/shipping method/noted/voucher id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "optional type: Address = 1, Payment = 2, Shipping = 3, Noted = 4, Voucher = 5, NeoVoucher = 6",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int32"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "the distributor id (for Payment/Noted/Voucher type - required)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "paymentType",
                                    "description": "payment type of product (for Payment/Voucher type- required)",
                                    "type": "integer",
                                    "format": "int32"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.AddOptionalResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/carts/payment-methods": {
            "get": {
                "tags": [
                    "carts"
                ],
                    "description": "listing payment methods are available\n\u003cbr\u003e",
                        "operationId": "CartController.GetPaymentMethods",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "paymentType",
                                    "description": "product payment type",
                                    "type": "integer",
                                    "format": "int32"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.PaymentMethodsResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/carts/products": {
            "post": {
                "tags": [
                    "carts"
                ],
                    "description": "add products to customer's cart\n\u003cbr\u003e",
                        "operationId": "CartController.AddMultiToCart",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "customerId",
                                    "description": "the customer id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "content body",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.AddProductsToCartRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.AddProductsToCartResponse"
                        }
                    },
                    "400": {
                        "description": "body is empty"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/carts/view": {
            "get": {
                "tags": [
                    "carts"
                ],
                    "description": "listing cart items\n\u003cbr\u003e",
                        "operationId": "CartController.ViewCart",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "step",
                                    "description": "the current step: 'view', 'checkout'",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "ids",
                                    "description": "set ids cart items, seperated by commas(,)",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ViewCartResponse"
                        }
                    },
                    "400": {
                        "description": "occured erro"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/carts/{prodid}": {
            "put": {
                "tags": [
                    "carts"
                ],
                    "description": "update product information in customer's cart\n\u003cbr\u003e",
                        "operationId": "CartController.UpdateCart",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "prodid",
                                    "description": "product id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "qtt",
                                    "description": "the quantity of product (if qtt = 0, the product will be removed from the cart)",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "the distributor id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body content",
                                    "schema": {
                                        "$ref": "#/definitions/presenter.ProductOptions"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.UpdateProductToCartResponse"
                        }
                    },
                    "400": {
                        "description": "invalid params"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "carts"
                ],
                    "description": "add product to customer's cart\n\u003cbr\u003e",
                        "operationId": "CartController.AddToCart",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "prodid",
                                    "description": "product id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "qty",
                                    "description": "the quantity of product",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "the distributor id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body content",
                                    "schema": {
                                        "$ref": "#/definitions/presenter.ProductOptions"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.AddProductToCartResponse"
                        }
                    },
                    "400": {
                        "description": "body is empty"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/categories/": {
            "get": {
                "tags": [
                    "categories"
                ],
                    "description": "Get All of Categories\n\u003cbr\u003e",
                        "operationId": "CategoryController.GetCategoriesFull",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListCategoriesResponse"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "categories"
                ],
                    "description": "create Categories\n\u003cbr\u003e",
                        "operationId": "CategoryController.Create",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Categories content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreateCategoryRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Category"
                        }
                    },
                    "400": {
                        "description": "presenter.CommonErrResponse{}"
                    }
                }
            }
        },
        "/categories/_search": {
            "get": {
                "tags": [
                    "categories"
                ],
                    "description": "get list of Product by Distributor with pagination\n\u003cbr\u003e",
                        "operationId": "CategoryController.Search",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "condition",
                                    "description": "the search condition",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListCategoriesResponse"
                        }
                    }
                }
            }
        },
        "/categories/suppliers/{supplierId}": {
            "get": {
                "tags": [
                    "categories"
                ],
                    "description": "get Categories\n\u003cbr\u003e",
                        "operationId": "CategoryController.GetCategoriesBySupplier",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "supplierId",
                                    "description": "supplier id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListCategoriesResponse"
                        }
                    }
                }
            }
        },
        "/categories/suppliers/{supplierId}/products": {
            "get": {
                "tags": [
                    "categories"
                ],
                    "description": "get Categories\n\u003cbr\u003e",
                        "operationId": "CategoryController.GetCategoriesWithProductsBySupplier",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "supplierId",
                                    "description": "supplier id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListCategoriesResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/categories/{id}": {
            "get": {
                "tags": [
                    "categories"
                ],
                    "description": "get Categories by id\n\u003cbr\u003e",
                        "operationId": "CategoryController.GetCategoryByID",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The key for staticblock",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.GetCategoryResponse"
                        }
                    },
                    "400": {
                        "description": "no enough input"
                    }
                }
            },
            "put": {
                "tags": [
                    "categories"
                ],
                    "description": "update the Category\n\u003cbr\u003e",
                        "operationId": "CategoryController.UpdateCategory",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Categories content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreateCategoryRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "400": {
                        "description": "invalid input"
                    }
                }
            },
            "delete": {
                "tags": [
                    "categories"
                ],
                    "description": "delete the Categories\n\u003cbr\u003e",
                        "operationId": "CategoryController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "400": {
                        "description": "invalid input"
                    }
                }
            }
        },
        "/categories/{id}/sublist": {
            "get": {
                "tags": [
                    "categories"
                ],
                    "description": "get sublist of a Category\n\u003cbr\u003e",
                        "operationId": "CategoryController.GetSubCategories",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "limit",
                                    "description": "Limit the size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "offset",
                                    "description": "Start position of result set. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListCategoriesResponse"
                        }
                    }
                }
            }
        },
        "/cdn/images": {
            "post": {
                "tags": [
                    "cdn"
                ],
                    "description": "create Product\n\u003cbr\u003e",
                        "operationId": "CdnController.UploadImage",
                            "parameters": [
                                {
                                    "in": "formData",
                                    "name": "images",
                                    "description": "body for Product content",
                                    "required": true,
                                    "type": "file"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.GCloudStorageMedia"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/customer-groups/": {
            "get": {
                "tags": [
                    "customer-groups"
                ],
                    "description": "get CustomerGroup\n\u003cbr\u003e",
                        "operationId": "GroupCustomerController.Get All",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CustomerGroup"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            },
            "post": {
                "tags": [
                    "customer-groups"
                ],
                    "description": "Create Customer Group\n\u003cbr\u003e",
                        "operationId": "GroupCustomerController.Create",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for CustomerGroup content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreateCustomerGroupRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/customer-groups/customers/{customerId}": {
            "get": {
                "tags": [
                    "customer-groups"
                ],
                    "description": "get CustomerGroup By Customer\n\u003cbr\u003e",
                        "operationId": "GroupCustomerController.Get All",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "customerId",
                                    "description": "customerId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CustomerGroup"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/customer-groups/distributors/{distributorId}": {
            "get": {
                "tags": [
                    "customer-groups"
                ],
                    "description": "get CustomerGroup By Distributor\n\u003cbr\u003e",
                        "operationId": "GroupCustomerController.Get All",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CustomerGroup"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/customer-groups/{groupId}/customers/": {
            "post": {
                "tags": [
                    "customer-groups"
                ],
                    "description": "Add Customer To CustomerGroup\n\u003cbr\u003e",
                        "operationId": "GroupCustomerController.AddCustomerToGroup",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "groupId",
                                    "description": "The ID of customer group",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CustomerInGroupRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            },
            "delete": {
                "tags": [
                    "customer-groups"
                ],
                    "description": "Remove customer from CustomerGroup\n\u003cbr\u003e",
                        "operationId": "GroupCustomerController.RemoveCustomerFromGroup",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "groupId",
                                    "description": "The ID of group",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CustomerInGroupRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/customer-groups/{id}": {
            "get": {
                "tags": [
                    "customer-groups"
                ],
                    "description": "get CustomerGroup by id\n\u003cbr\u003e",
                        "operationId": "GroupCustomerController.Get One",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The key for staticblock",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CustomerGroup"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                }
            },
            "put": {
                "tags": [
                    "customer-groups"
                ],
                    "description": "update the Customer group\n\u003cbr\u003e",
                        "operationId": "GroupCustomerController.Update",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for CustomerGroup content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreateCustomerGroupRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            },
            "delete": {
                "tags": [
                    "customer-groups"
                ],
                    "description": "delete the CustomerGroup\n\u003cbr\u003e",
                        "operationId": "GroupCustomerController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{string} delete success!"
                    },
                    "403": {
                        "description": "id is empty"
                    }
                }
            }
        },
        "/distributors/": {
            "get": {
                "tags": [
                    "distributors"
                ],
                    "description": "get Distributor\n\u003cbr\u003e",
                        "operationId": "DistributorController.Get All",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "Status: -1 : all",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListDistributorsResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            },
            "post": {
                "tags": [
                    "distributors"
                ],
                    "description": "create Distributor\n\u003cbr\u003e",
                        "operationId": "DistributorController.Post",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Distributor content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Distributor"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.Distributor"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/distributors/_search": {
            "get": {
                "tags": [
                    "distributors"
                ],
                    "description": "get list of Distributor by Name or Phone with pagination\n\u003cbr\u003e",
                        "operationId": "DistributorController.Search",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "name",
                                    "description": "name",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "status",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListDistributorsResponse"
                        }
                    }
                }
            }
        },
        "/distributors/activated-with-location/": {
            "get": {
                "tags": [
                    "distributors"
                ],
                    "description": "get Distributor\n\u003cbr\u003e",
                        "operationId": "DistributorController.Get GetActiveDistributorForMobile",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "districts",
                                    "description": "districts is an numbers array, separate by comma. e.g `100,200,300`",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "sortBy",
                                    "description": "sortBy :: 0:default 1:hotdeal_priority",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListDistributorsResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/distributors/active/": {
            "get": {
                "tags": [
                    "distributors"
                ],
                    "description": "get Distributor\n\u003cbr\u003e",
                        "operationId": "DistributorController.Get GetAllActive",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "sortBy",
                                    "description": "sortBy :: 0:default 1:hotdeal_priority",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListDistributorsResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/distributors/hot-deal/{id}": {
            "put": {
                "tags": [
                    "distributors"
                ],
                    "description": "update the hotdeal\n\u003cbr\u003e",
                        "operationId": "DistributorController.Put hot deal",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "hotdeal_priority",
                                    "description": "hotdeal_priority for Distributor content",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            }
        },
        "/distributors/{distId}/pharmacies/": {
            "post": {
                "tags": [
                    "distributors"
                ],
                    "description": "Add Pharmacy To Distributor\n\u003cbr\u003e",
                        "operationId": "DistributorController.AddPharmaciesToDistributor",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distId",
                                    "description": "The ID of customer group",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.PharmaciesInDistributorRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            },
            "delete": {
                "tags": [
                    "distributors"
                ],
                    "description": "Remove Pharmacies from Distributor\n\u003cbr\u003e",
                        "operationId": "DistributorController.RemovePharmaciesFromDistributor",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "groupId",
                                    "description": "The ID of group",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.PharmaciesInDistributorRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/distributors/{id}": {
            "get": {
                "tags": [
                    "distributors"
                ],
                    "description": "get Distributor by id\n\u003cbr\u003e",
                        "operationId": "DistributorController.Get One",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The key for staticblock",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Distributor"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                }
            },
            "put": {
                "tags": [
                    "distributors"
                ],
                    "description": "update the Distributor\n\u003cbr\u003e",
                        "operationId": "DistributorController.Put",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Distributor content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Distributor"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            },
            "delete": {
                "tags": [
                    "distributors"
                ],
                    "description": "delete the Distributor\n\u003cbr\u003e",
                        "operationId": "DistributorController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "id is empty"
                    }
                }
            }
        },
        "/distributors/{id}/telegram": {
            "put": {
                "tags": [
                    "distributors"
                ],
                    "description": "update the Update group telegram\n\u003cbr\u003e",
                        "operationId": "DistributorController.Update group telegram",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "group_id",
                                    "description": "The group_id want to update",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            }
        },
        "/ewallet/bo-get-balances": {
            "get": {
                "tags": [
                    "ewallet"
                ],
                    "description": "GetBalancesBO\n\u003cbr\u003e",
                        "operationId": "EwalletController.GetBalancesBO",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "userId",
                                    "description": "User id. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.BalanceAccountResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/bo-topup": {
            "post": {
                "tags": [
                    "ewallet"
                ],
                    "description": "PostBOTopUpRequest\n\u003cbr\u003e",
                        "operationId": "EwalletController.PostBOTopUpRequest",
                            "consumes": [
                                "application/json"
                            ],
                                "produces": [
                                    "application/json"
                                ],
                                    "parameters": [
                                        {
                                            "in": "body",
                                            "name": "body",
                                            "description": "body for Ewallet content",
                                            "required": true,
                                            "schema": {
                                                "$ref": "#/definitions/presenter.BOTopUpRequest"
                                            }
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.BOTopUpResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.BOTopUpResponse"
                    },
                    "500": {
                        "description": "{object} presenter.BOTopUpResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/charge-fee": {
            "get": {
                "tags": [
                    "ewallet"
                ],
                    "description": "GetChargeFee\n\u003cbr\u003e",
                        "operationId": "EwalletController.GetChargeFee",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "amount",
                                    "description": "Must be an integer",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "action",
                                    "description": "Must be an integer",
                                    "type": "integer",
                                    "format": "int32"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.GetChargeFeeResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.GetChargeFeeResponse"
                    },
                    "500": {
                        "description": "{object} presenter.GetChargeFeeResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/confirm-linked-payment-account": {
            "post": {
                "tags": [
                    "ewallet"
                ],
                    "description": "create Ewallet\n\u003cbr\u003e",
                        "operationId": "EwalletController.confirm payment account",
                            "consumes": [
                                "application/json"
                            ],
                                "produces": [
                                    "application/json"
                                ],
                                    "parameters": [
                                        {
                                            "in": "body",
                                            "name": "body",
                                            "description": "body for Ewallet content",
                                            "required": true,
                                            "schema": {
                                                "$ref": "#/definitions/presenter.RegisterConfirmRequest"
                                            }
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.RegisterConfirmResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.RegisterConfirmResponse"
                    },
                    "500": {
                        "description": "{object} presenter.RegisterConfirmResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/create-loan-confirm": {
            "post": {
                "tags": [
                    "ewallet"
                ],
                    "description": "PostCreateLoanConfirm\n\u003cbr\u003e",
                        "operationId": "EwalletController.PostCreateLoanConfirm",
                            "consumes": [
                                "application/json"
                            ],
                                "produces": [
                                    "application/json"
                                ],
                                    "parameters": [
                                        {
                                            "in": "body",
                                            "name": "body",
                                            "description": "body for Loan confirm",
                                            "required": true,
                                            "schema": {
                                                "$ref": "#/definitions/presenter.LoanConfirmRequest"
                                            }
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.LoanConfirmResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.LoanConfirmResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/create-loan-request": {
            "post": {
                "tags": [
                    "ewallet"
                ],
                    "description": "PostCreateLoanRequest\n\u003cbr\u003e",
                        "operationId": "EwalletController.PostCreateLoanRequest",
                            "consumes": [
                                "application/json"
                            ],
                                "produces": [
                                    "application/json"
                                ],
                                    "parameters": [
                                        {
                                            "in": "body",
                                            "name": "body",
                                            "description": "body for Loan request",
                                            "required": true,
                                            "schema": {
                                                "$ref": "#/definitions/presenter.LoanRequestRequest"
                                            }
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.LoanRequestResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.LoanRequestResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/customer-info": {
            "get": {
                "tags": [
                    "ewallet"
                ],
                    "description": "GetCustomerInfo\n\u003cbr\u003e",
                        "operationId": "EwalletController.GetCustomerInfo current user",
                            "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.GetCustomerInfoResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.GetCustomerInfoResponse"
                    },
                    "500": {
                        "description": "{object} presenter.GetCustomerInfoResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/full-linked-payment-account": {
            "get": {
                "tags": [
                    "ewallet"
                ],
                    "description": "ListAllPaymentAccount\n\u003cbr\u003e",
                        "operationId": "EwalletController.ListAllPaymentAccount",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListPaymentAccountResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/get-balances": {
            "get": {
                "tags": [
                    "ewallet"
                ],
                    "description": "GetBalances\n\u003cbr\u003e",
                        "operationId": "EwalletController.GetBalances",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "payment",
                                    "description": "payment_enable",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.BalanceAccountResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/get-linked-payment-account": {
            "get": {
                "tags": [
                    "ewallet"
                ],
                    "description": "GetLinkedPaymentAccount\n\u003cbr\u003e",
                        "operationId": "EwalletController.GetLinkedPaymentAccount",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListPaymentAccountResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/get-trans-his": {
            "get": {
                "tags": [
                    "ewallet"
                ],
                    "description": "GetTransHistory\n\u003cbr\u003e",
                        "operationId": "EwalletController.GetTransHistory",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "history type: all, topup...",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.LogEventResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/info": {
            "get": {
                "tags": [
                    "ewallet"
                ],
                    "description": "get Ewallet\n\u003cbr\u003e",
                        "operationId": "EwalletController.GetOne",
                            "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.WalletInfoResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.WalletInfoResponse"
                    },
                    "500": {
                        "description": "{object} presenter.WalletInfoResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/link-resource-confirm": {
            "post": {
                "tags": [
                    "ewallet"
                ],
                    "description": "PostPreCloseConfirm\n\u003cbr\u003e",
                        "operationId": "EwalletController.PostLinkResourceConfirm",
                            "consumes": [
                                "application/json"
                            ],
                                "produces": [
                                    "application/json"
                                ],
                                    "parameters": [
                                        {
                                            "in": "body",
                                            "name": "body",
                                            "description": "body for Pre close confirm",
                                            "required": true,
                                            "schema": {
                                                "$ref": "#/definitions/presenter.LinkResourceConfirmRequest"
                                            }
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.LinkResourceConfirmResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.LinkResourceConfirmResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/link-resource-request": {
            "get": {
                "tags": [
                    "ewallet"
                ],
                    "description": "GetLinkResourceRequest\n\u003cbr\u003e",
                        "operationId": "EwalletController.GetLinkResourceRequest",
                            "consumes": [
                                "application/json"
                            ],
                                "produces": [
                                    "application/json"
                                ],
                                    "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.LinkResourceRequestResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.LinkResourceRequestResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/linked-payment-account": {
            "post": {
                "tags": [
                    "ewallet"
                ],
                    "description": "create Ewallet\n\u003cbr\u003e",
                        "operationId": "EwalletController.Create payment account",
                            "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.RegisterRequestResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.RegisterRequestResponse"
                    },
                    "409": {
                        "description": "{object} presenter.RegisterRequestResponse"
                    },
                    "500": {
                        "description": "{object} presenter.RegisterRequestResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/loan-check": {
            "get": {
                "tags": [
                    "ewallet"
                ],
                    "description": "GetCheckLoan\n\u003cbr\u003e",
                        "operationId": "EwalletController.GetCheckLoan",
                            "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CheckLoanResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.CheckLoanResponse"
                    },
                    "500": {
                        "description": "{object} presenter.CheckLoanResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/loan-info": {
            "get": {
                "tags": [
                    "ewallet"
                ],
                    "description": "GetLoanInfo\n\u003cbr\u003e",
                        "operationId": "EwalletController.GetLoanInfo current user",
                            "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.GetLoanInfoResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.GetLoanInfoResponse"
                    },
                    "500": {
                        "description": "{object} presenter.GetLoanInfoResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/pre-close-confirm": {
            "post": {
                "tags": [
                    "ewallet"
                ],
                    "description": "PostPreCloseConfirm\n\u003cbr\u003e",
                        "operationId": "EwalletController.PostPreCloseConfirm",
                            "consumes": [
                                "application/json"
                            ],
                                "produces": [
                                    "application/json"
                                ],
                                    "parameters": [
                                        {
                                            "in": "body",
                                            "name": "body",
                                            "description": "body for Pre close confirm",
                                            "required": true,
                                            "schema": {
                                                "$ref": "#/definitions/presenter.PreCloseConfirmRequest"
                                            }
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.PreCloseConfirmResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.PreCloseConfirmResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/pre-close-request": {
            "get": {
                "tags": [
                    "ewallet"
                ],
                    "description": "GetPreCloseRequest\n\u003cbr\u003e",
                        "operationId": "EwalletController.GetPreCloseRequest",
                            "consumes": [
                                "application/json"
                            ],
                                "produces": [
                                    "application/json"
                                ],
                                    "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.PreCloseRequestResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.PreCloseRequestResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/proposals": {
            "get": {
                "tags": [
                    "ewallet"
                ],
                    "description": "GetProposals\n\u003cbr\u003e",
                        "operationId": "EwalletController.GetProposals",
                            "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.GetProposalsResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.GetProposalsResponse"
                    },
                    "500": {
                        "description": "{object} presenter.GetProposalsResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/topup-confirm": {
            "post": {
                "tags": [
                    "ewallet"
                ],
                    "description": "PostTopUpConfirm\n\u003cbr\u003e",
                        "operationId": "EwalletController.PostTopUpConfirm",
                            "consumes": [
                                "application/json"
                            ],
                                "produces": [
                                    "application/json"
                                ],
                                    "parameters": [
                                        {
                                            "in": "body",
                                            "name": "body",
                                            "description": "body for Ewallet content",
                                            "required": true,
                                            "schema": {
                                                "$ref": "#/definitions/presenter.TopUpConfirmRequest"
                                            }
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.TopUpConfirmResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.TopUpConfirmResponse"
                    },
                    "500": {
                        "description": "{object} presenter.TopUpConfirmResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/topup-request": {
            "post": {
                "tags": [
                    "ewallet"
                ],
                    "description": "PostPaymentConfirm\n\u003cbr\u003e",
                        "operationId": "EwalletController.PostTopUpConfirm",
                            "consumes": [
                                "application/json"
                            ],
                                "produces": [
                                    "application/json"
                                ],
                                    "parameters": [
                                        {
                                            "in": "body",
                                            "name": "body",
                                            "description": "body for Ewallet content",
                                            "required": true,
                                            "schema": {
                                                "$ref": "#/definitions/presenter.TopUpRequest"
                                            }
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.TopUpRequestResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.TopUpRequestResponse"
                    },
                    "500": {
                        "description": "{object} presenter.TopUpRequestResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/unlink-payment-account": {
            "delete": {
                "tags": [
                    "ewallet"
                ],
                    "description": "UnlinkPaymentAccount\n\u003cbr\u003e",
                        "operationId": "EwalletController.UnlinkPaymentAccount",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Pre close confirm",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.UnlinkPaymentAccountReq"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{string} success"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/ewallet/unlink-resource": {
            "post": {
                "tags": [
                    "ewallet"
                ],
                    "description": "PostUnlinkResource\n\u003cbr\u003e",
                        "operationId": "EwalletController.PostUnlinkResource",
                            "consumes": [
                                "application/json"
                            ],
                                "produces": [
                                    "application/json"
                                ],
                                    "parameters": [
                                        {
                                            "in": "body",
                                            "name": "body",
                                            "description": "body for Ewallet content",
                                            "required": true,
                                            "schema": {
                                                "$ref": "#/definitions/presenter.UnlinkResourceRequest"
                                            }
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.UnlinkResourceResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.UnlinkResourceResponse"
                    },
                    "500": {
                        "description": "{object} presenter.UnlinkResourceResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/gov/mic/report": {
            "get": {
                "tags": [
                    "gov"
                ],
                    "description": "get Options\n\u003cbr\u003e",
                        "operationId": "GovController.GetMicReport",
                            "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Price"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/noti-schedulers/": {
            "get": {
                "tags": [
                    "noti-schedulers"
                ],
                    "description": "get list voucher\n\u003cbr\u003e",
                        "operationId": "NotiSchedulerController.GetAll",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "campaignId",
                                    "description": "campaignId",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "status",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListNotiSschedulerResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            },
            "post": {
                "tags": [
                    "noti-schedulers"
                ],
                    "description": "create Voucher\n\u003cbr\u003e",
                        "operationId": "NotiSchedulerController.Post",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for NotiScheduler , format Exect_time : dd/MM/yyyy hh:mm:ss",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.ListNotiScheduler"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.ListNotiScheduler"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/noti-schedulers/{id}": {
            "put": {
                "tags": [
                    "noti-schedulers"
                ],
                    "description": "update the NotiScheduler\n\u003cbr\u003e",
                        "operationId": "NotiSchedulerController.Put",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for NotiScheduler, format Exect_time : dd/MM/yyyy hh:mm:ss",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.NotiSchedulerRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            },
            "delete": {
                "tags": [
                    "noti-schedulers"
                ],
                    "description": "delete the NotiScheduler\n\u003cbr\u003e",
                        "operationId": "NotiSchedulerController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{string} delete success!"
                    },
                    "403": {
                        "description": "id is empty"
                    }
                }
            }
        },
        "/noti-schedulers/{notiSchedulerId}": {
            "get": {
                "tags": [
                    "noti-schedulers"
                ],
                    "description": "get notischeduler by id\n\u003cbr\u003e",
                        "operationId": "NotiSchedulerController.GetOne",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "notiSchedulerId",
                                    "description": "notiSchedulerId",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.NotiScheduler"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/noti/list": {
            "get": {
                "tags": [
                    "noti"
                ],
                    "description": "get list noti\n\u003cbr\u003e",
                        "operationId": "NotiController.GetListNoti",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "isRead",
                                    "description": "isRead type int :: 0 = non-read ; 1 = read",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "platform",
                                    "description": "platform  int :: 0 = app ; 1 = BO",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "userId",
                                    "description": "userId",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListNotiResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/noti/register": {
            "post": {
                "tags": [
                    "noti"
                ],
                    "description": "register fcm token\n\u003cbr\u003e",
                        "operationId": "NotiController.RegisterToken",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "token",
                                    "description": "fcm token",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.RegisterTokenResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/noti/telegram/list": {
            "get": {
                "tags": [
                    "noti"
                ],
                    "description": "get list groupId telegram\n\u003cbr\u003e",
                        "operationId": "NotiController.GetListGroupId",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListGroupIdRespone"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/noti/unregister": {
            "post": {
                "tags": [
                    "noti"
                ],
                    "description": "unregister fcm token\n\u003cbr\u003e",
                        "operationId": "NotiController.UnregisterToken",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "token",
                                    "description": "fcm token",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.RegisterTokenResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/noti/{id}": {
            "put": {
                "tags": [
                    "noti"
                ],
                    "description": "Update is_read\n\u003cbr\u003e",
                        "operationId": "NotiController.Update is_read",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "status =\u003e 0:all (update isRead by user)  ;  1 : one (update isRead by notiId)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "is_read",
                                    "description": "is_read",
                                    "type": "boolean"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": ""
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/options/": {
            "get": {
                "tags": [
                    "options"
                ],
                    "description": "get Options\n\u003cbr\u003e",
                        "operationId": "OptionController.GetAll",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "query",
                                    "description": "Filter. e.g. col1:v1,col2:v2 ...",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "fields",
                                    "description": "Fields returned. e.g. col1,col2 ...",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "sortby",
                                    "description": "Sorted-by fields. e.g. col1,col2 ...",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "order",
                                    "description": "Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "limit",
                                    "description": "Limit the size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "offset",
                                    "description": "Start position of result set. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Option"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            },
            "post": {
                "tags": [
                    "options"
                ],
                    "description": "create Options\n\u003cbr\u003e",
                        "operationId": "OptionController.Create",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Options content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Option"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Option"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/options/products/{productId}": {
            "get": {
                "tags": [
                    "options"
                ],
                    "description": "get Options\n\u003cbr\u003e",
                        "operationId": "OptionController.GetOptionsByProduct",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "productId",
                                    "description": "productId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Option"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/options/{id}": {
            "get": {
                "tags": [
                    "options"
                ],
                    "description": "get Options by id\n\u003cbr\u003e",
                        "operationId": "OptionController.GetOne",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The key for staticblock",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Option"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                }
            },
            "put": {
                "tags": [
                    "options"
                ],
                    "description": "update the Options\n\u003cbr\u003e",
                        "operationId": "OptionController.Update",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Options content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Option"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Option"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            },
            "delete": {
                "tags": [
                    "options"
                ],
                    "description": "delete the Options\n\u003cbr\u003e",
                        "operationId": "OptionController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{string} delete success!"
                    },
                    "403": {
                        "description": "id is empty"
                    }
                }
            }
        },
        "/orders/": {
            "get": {
                "tags": [
                    "orders"
                ],
                    "description": "get Orders\n\u003cbr\u003e",
                        "operationId": "OrderController.GetAll",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Limit the size of result set. Must be an integer",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "next",
                                    "description": "next cursor",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "order status (if negative value, it's mean exclude). Array status will use comma separated(example: 1,2))",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "paymentStatus",
                                    "description": "payment status (if negative value, it's mean exclude. Array status will use comma separated(example: 1,2))",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "pmc",
                                    "description": "payment method code (cod)",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.GetListOrderResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/back-offices": {
            "get": {
                "tags": [
                    "orders"
                ],
                    "description": "get Orders\n\u003cbr\u003e",
                        "operationId": "OrderController.GetAllBackOffice",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Limit the size of result set. Must be an integer (default = 50)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Offset of result",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "Order status",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "subStatus",
                                    "description": "Fulfillment status",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "begin time to statistics (format time: dd-MM-yyyy)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time to statistics (format time: dd-MM-yyyy)",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListOrdersBackOfficeResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/back-offices/change-status/": {
            "post": {
                "tags": [
                    "orders"
                ],
                    "description": "pay order transaction\n\u003cbr\u003e",
                        "operationId": "OrderController.ChangeOrderStatus",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for request content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.ChangeOrderStatus"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{}"
                    },
                    "400": {
                        "description": "{}"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/back-offices/counting-orders": {
            "get": {
                "tags": [
                    "orders"
                ],
                    "description": "aggregation with countype (distributor,...) and status order\n\u003cbr\u003e",
                        "operationId": "OrderController.CountOrdersByStatus",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "ctype",
                                    "description": "type of counting: 0 - distributor (default)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "a string order's status was separated by commas (example: status=1,2,3)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "subStatus",
                                    "description": "a string fulfillment status was separated by commas (example: status=1,2,3)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "begin time to count (format time: dd-MM-yyyy)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time to count (format time: dd-MM-yyyy)",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CountOrdersByStatusResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/back-offices/listing-status": {
            "get": {
                "tags": [
                    "orders"
                ],
                    "description": "aggregation by status (order or payment)\n\u003cbr\u003e",
                        "operationId": "OrderController.ListingStatus",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "ts",
                                    "description": "type of status: 0 - order (default), 1 - payment",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "begin time to count (format time: dd-MM-yyyy)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time to count (format time: dd-MM-yyyy)",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListingStatusResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/back-offices/migrate-elastic": {
            "get": {
                "tags": [
                    "orders"
                ],
                    "description": "migrate all orders into elastic\n\u003cbr\u003e",
                        "operationId": "OrderController.MigrateToElastic",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "checksum",
                                    "description": "checksum to validate",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "from At: dd-MM-yyyy",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "to At: dd-MM-yyyy",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "orderIds",
                                    "description": "orderids sepparate by commas",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "int64"
                    },
                    "400": {
                        "description": ""
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/back-offices/status/{orderId}": {
            "get": {
                "tags": [
                    "orders"
                ],
                    "description": "query next fulfillment status\n\u003cbr\u003e",
                        "operationId": "OrderController.QueryNextStatus",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "orderId",
                                    "description": "order id",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.GetStateHistoryResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "orders"
                ],
                    "description": "pay order transaction\n\u003cbr\u003e",
                        "operationId": "OrderController.UpdateStatus",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "orderId",
                                    "description": "order id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "newStatus",
                                    "description": "new status updated",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "newPaymentStatus",
                                    "description": "new payment status updated",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "paymentAt",
                                    "description": "payment time (unix timestamp)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "extData",
                                    "description": "ext data",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.UpdateStatusResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/buy_again/{orderId}": {
            "post": {
                "tags": [
                    "orders"
                ],
                    "description": "buy again with exist order\n\u003cbr\u003e",
                        "operationId": "OrderController.BuyAgain",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "orderId",
                                    "description": "order id",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.BuyAgainResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/cancel": {
            "post": {
                "tags": [
                    "orders"
                ],
                    "description": "cancel exist order\n\u003cbr\u003e",
                        "operationId": "OrderController.CancelOrder",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for request content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CancelOrderRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CancelOrderResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/distributors/create": {
            "post": {
                "tags": [
                    "orders"
                ],
                    "description": "create multi order from operator's distributor for customer\n\u003cbr\u003e",
                        "operationId": "OrderController.DistributorCreateMultiOrders",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for request content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.DistributorCreateMultiOrdersRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.DistributorCreateMultiOrdersResponse"
                        }
                    },
                    "400": {
                        "description": "occured erro"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/invoice": {
            "post": {
                "tags": [
                    "orders"
                ],
                    "description": "add user's invoice\n\u003cbr\u003e",
                        "operationId": "OrderController.AddInvoice",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "orderId",
                                    "description": "order id",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "scope",
                                    "description": "invoice for personal (1 - default) or business (2)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "content body",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.InvoiceInfo"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.AddOrderInvoiceResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/items/history/{orderId}": {
            "get": {
                "tags": [
                    "orders"
                ],
                    "description": "get order items changed history\n\u003cbr\u003e",
                        "operationId": "OrderController.GetItemsChangedHistory",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "orderId",
                                    "description": "order id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "cursor",
                                    "description": "next cursor",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "latest",
                                    "description": "only get latest changed item",
                                    "type": "boolean"
                                },
                                {
                                    "in": "query",
                                    "name": "isConfirmed",
                                    "description": "only state confirmed",
                                    "type": "boolean"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.GetOrderItemChangeHistoryResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/items/{orderId}": {
            "put": {
                "tags": [
                    "orders"
                ],
                    "description": "update order item\n\u003cbr\u003e",
                        "operationId": "OrderController.UpdateOrderItem",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "orderId",
                                    "description": "order id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "backOffice",
                                    "description": "whether is backoffice account",
                                    "type": "boolean"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "content body",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.UpdateOrderItemRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.UpdateOrderItemResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/manual-topup-accum": {
            "post": {
                "tags": [
                    "orders"
                ],
                    "description": "manual topup accumulated\n\u003cbr\u003e",
                        "operationId": "OrderController.ManualTopUpAccumulated",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "orderId",
                                    "description": "order id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "orderUid",
                                    "description": "id user own order",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ManualTopUpAccumulatedResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/payment-confirm": {
            "post": {
                "tags": [
                    "orders"
                ],
                    "description": "PaymentConfirm\n\u003cbr\u003e",
                        "operationId": "OrderController.PaymentConfirm",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Ewallet content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.PaymentConfirmRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.PaymentConfirmResponseV2"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/payment-request": {
            "post": {
                "tags": [
                    "orders"
                ],
                    "description": "PaymentRequest\n\u003cbr\u003e",
                        "operationId": "OrderController.PaymentRequest",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for request content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.PaymentRequestRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.PaymentRequestResponseV2"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/payment-request-biz": {
            "post": {
                "tags": [
                    "orders"
                ],
                    "description": "PaymentRequestBiz\n\u003cbr\u003e",
                        "operationId": "OrderController.PaymentRequestBiz",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for request content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.PaymentRequestBizRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.PaymentRequestBizResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/payment/{orderId}": {
            "post": {
                "tags": [
                    "orders"
                ],
                    "description": "pay order transaction\n\u003cbr\u003e",
                        "operationId": "OrderController.Payment",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "orderId",
                                    "description": "order id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "path",
                                    "name": "pmCode",
                                    "description": "payment method cod",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.PayOrderResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/payments": {
            "post": {
                "tags": [
                    "orders"
                ],
                    "description": "pay order transaction\n\u003cbr\u003e",
                        "operationId": "OrderController.Payments",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "listing orders pay",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.PayOrdersRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.PayOrderResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/state-histories/{orderId}": {
            "get": {
                "tags": [
                    "orders"
                ],
                    "description": "get Order by id\n\u003cbr\u003e",
                        "operationId": "OrderController.GetStateHistory",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "orderId",
                                    "description": "order id",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.GetStateHistoryResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/user-confirm/{orderId}": {
            "post": {
                "tags": [
                    "orders"
                ],
                    "description": "user confirm with changed order by CS\n\u003cbr\u003e",
                        "operationId": "OrderController.UserConfirmed",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "orderId",
                                    "description": "order id is confirmed",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.UserConfirmedResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/{id}": {
            "get": {
                "tags": [
                    "orders"
                ],
                    "description": "get Order by id\n\u003cbr\u003e",
                        "operationId": "OrderController.GetOne",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "order id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "backOffice",
                                    "description": "from back-office or normal user",
                                    "type": "boolean"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.GetOneOrderResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/orders/{orderId}": {
            "put": {
                "tags": [
                    "orders"
                ],
                    "description": "update order\n\u003cbr\u003e",
                        "operationId": "OrderController.UpdateOrder",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "orderId",
                                    "description": "order id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "backOffice",
                                    "description": "whether is backoffice account",
                                    "type": "boolean"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "content body",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.UpdateOrderRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.UpdateOrderResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/payment/access-token": {
            "get": {
                "tags": [
                    "payment"
                ],
                    "description": "payment for the order\n\u003cbr\u003e",
                        "operationId": "PaymentController.Payment Order",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "corpId",
                                    "description": "corp id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "username",
                                    "description": "username",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "password",
                                    "description": "password",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "transType",
                                    "description": "transType",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.AccessTokenResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.AccessTokenResponse"
                    },
                    "500": {
                        "description": "{object} presenter.AccessTokenResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/payment/non-saving-account": {
            "get": {
                "tags": [
                    "payment"
                ]
            }
        },
        "/payment/payment-order": {
            "post": {
                "tags": [
                    "payment"
                ],
                    "description": "payment for the order\n\u003cbr\u003e",
                        "operationId": "PaymentController.Payment Order",
                            "consumes": [
                                "application/json"
                            ],
                                "produces": [
                                    "application/json"
                                ],
                                    "parameters": [
                                        {
                                            "in": "body",
                                            "name": "body",
                                            "description": "body for Order Payment request",
                                            "required": true,
                                            "schema": {
                                                "$ref": "#/definitions/presenter.OrderPaymentRequest"
                                            }
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.OrderPaymentResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.OrderPaymentResponse"
                    },
                    "500": {
                        "description": "{object} presenter.OrderPaymentResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/": {
            "get": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "get Pharmacy\n\u003cbr\u003e",
                        "operationId": "PharmacityController.Get All",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "Status of pharmacy. Must be an string",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from_last_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to_last_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from_approved",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to_approved",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from_first_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to_first_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListPharmaciesResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "create Pharmacy\n\u003cbr\u003e",
                        "operationId": "PharmacityController.Post",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Pharmacy content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreatePharmacyUpdateRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/_search": {
            "get": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "get list of Pharmacy by Name or Phone with pagination\n\u003cbr\u003e",
                        "operationId": "PharmacityController.Search",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "disId",
                                    "description": "disId",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "name",
                                    "description": "name",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from_last_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to_last_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from_approved",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to_approved",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from_first_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to_first_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListPharmaciesResponse"
                        }
                    }
                }
            }
        },
        "/pharmacies/accredit": {
            "post": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "Add or Remove accredit for pharmacy\n\u003cbr\u003e",
                        "operationId": "PharmacityController.Add or Remove Accredit",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body- type:[1]:Add [2]Remove distributors: a lot of distributor_ids",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.AccreditRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/accredit/{distributor_id}": {
            "get": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "GetAllAccredit\n\u003cbr\u003e",
                        "operationId": "PharmacityController.Get All Accredit",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributor_id",
                                    "description": "The distributor_id you want to get pharmacy",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "path",
                                    "name": "login",
                                    "description": "true:have accredit false: haven't logged in for the first time.. default:true",
                                    "type": "boolean"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListPharmaciesResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/distributors/{distId}": {
            "get": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "GetAllInDistributor\n\u003cbr\u003e",
                        "operationId": "PharmacityController.GetAllInDistributor",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distId",
                                    "description": "The key for static block",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "Status of pharmacy. Status =\u003e initial approved",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "0:Phar not in customer group 1:Phar in customer group",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from_last_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to_last_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from_approved",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to_approved",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from_first_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to_first_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListPharmaciesResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/distributors/{distId}/non-relation": {
            "get": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "GetAllNotInDistributor\n\u003cbr\u003e",
                        "operationId": "PharmacityController.GetAllNotInDistributor",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distId",
                                    "description": "The key for static block",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "Status",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "customerId",
                                    "description": "customerId of pharmacy. Must be an integer",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from_last_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to_last_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from_approved",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to_approved",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from_first_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to_first_login",
                                    "description": "format yyyy-MM-ddT00:00:00Z",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListPharmaciesResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/import": {
            "post": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "add Pharmacy from file import\n\u003cbr\u003e",
                        "operationId": "PharmacityController.PharmacyImport",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for PharmacyImport content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.PharmacyImports"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/noti": {
            "post": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "Send mess for Phar\n\u003cbr\u003e",
                        "operationId": "PharmacityController.Send mess for Phar",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "Ids: customer_group_id or user_id || obj_type: 1.customer_group 2.User || send_type: 1.Now 2.Schedule || exec_time: format dd/MM/yyyy hh:mm:ss",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.SendMessForPhar"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/online": {
            "post": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "Pharmacy online\n\u003cbr\u003e",
                        "operationId": "PharmacityController.Pharmacy online",
                            "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Pharmacy"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/phone/{phoneNumber}": {
            "get": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "get Pharmacy by phone number\n\u003cbr\u003e",
                        "operationId": "PharmacityController.GetByPhone",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "phoneNumber",
                                    "description": "The key for static block",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Pharmacy"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/{pharId}": {
            "get": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "get Pharmacy by id\n\u003cbr\u003e",
                        "operationId": "PharmacityController.Get One",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "pharId",
                                    "description": "The key for static block",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Pharmacy"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "update the Pharmacy\n\u003cbr\u003e",
                        "operationId": "PharmacityController.Put",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "pharId",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Pharmacy content , format approved_at : dd/MM/yyyy hh:mm:ss",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreatePharmacyUpdateRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/{pharId}/favourite/distributor/{disId}": {
            "put": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "update the UpdateFavouriteDis of Pharmacy\n\u003cbr\u003e",
                        "operationId": "PharmacityController.UpdateFavouriteDis",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "pharId",
                                    "description": "The pharId you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "path",
                                    "name": "disId",
                                    "description": "The disId you want to update",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/{pharId}/section": {
            "put": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "update section the Pharmacy\n\u003cbr\u003e",
                        "operationId": "PharmacityController.UpdateSection",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "pharId",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "0:General Infomation 1:Legal information 2:Billing infomation",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Pharmacy content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreatePharmacyUpdateRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/{pharId}/status": {
            "put": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "update status the Pharmacy\n\u003cbr\u003e",
                        "operationId": "PharmacityController.UpdateStatus",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "pharId",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Pharmacy status",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.UpdatePharmacyStatusRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pharmacies/{pharId}/type": {
            "put": {
                "tags": [
                    "pharmacies"
                ],
                    "description": "update status the Pharmacy\n\u003cbr\u003e",
                        "operationId": "PharmacityController.UpdateType",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "pharId",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Pharmacy type",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.UpdatePharmacyRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/price-policies/": {
            "get": {
                "tags": [
                    "price-policies"
                ],
                    "description": "List price policies\n\u003cbr\u003e",
                        "operationId": "PricePolicyController.List",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "distributor_id",
                                    "description": "Distributor ID",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "customer_gid",
                                    "description": "Customer Group ID",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "Policy type",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of page",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListPricePolicyResponse"
                        }
                    },
                    "403": {
                        "description": "presenter.CommonErrResponse"
                    }
                }
            },
            "post": {
                "tags": [
                    "price-policies"
                ],
                    "description": "create Options\n\u003cbr\u003e",
                        "operationId": "PricePolicyController.Create",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Options content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreatePricePolicyRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.PricePolicy"
                        }
                    },
                    "403": {
                        "description": "presenter.CommonErrResponse"
                    }
                }
            }
        },
        "/price-policies/{id}": {
            "get": {
                "tags": [
                    "price-policies"
                ],
                    "description": "get PricePolicy by id\n\u003cbr\u003e",
                        "operationId": "PricePolicyController.GetOne",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The ID of PricePolicy",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.PricePolicy"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                }
            },
            "put": {
                "tags": [
                    "price-policies"
                ],
                    "description": "update the Options\n\u003cbr\u003e",
                        "operationId": "PricePolicyController.Update",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Options content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.UpdatePricePolicyRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "presenter.CommonErrResponse"
                    }
                }
            },
            "delete": {
                "tags": [
                    "price-policies"
                ],
                    "description": "delete the Options\n\u003cbr\u003e",
                        "operationId": "PricePolicyController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "presenter.CommonErrResponse"
                    }
                }
            }
        },
        "/price-policies/{id}/items": {
            "get": {
                "tags": [
                    "price-policies"
                ],
                    "description": "List price items in a policy\n\u003cbr\u003e",
                        "operationId": "PricePolicyController.ListItems",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "search_text",
                                    "description": "Search text e.g 'product name'",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "category_id_lv1",
                                    "description": "Category ID level 1",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "category_id_lv2",
                                    "description": "Category ID level 2",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "product_status",
                                    "description": "Product status",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of page",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListPricePolicyResponse"
                        }
                    },
                    "403": {
                        "description": "presenter.CommonErrResponse"
                    }
                }
            },
            "post": {
                "tags": [
                    "price-policies"
                ],
                    "description": "Add price's items to policy\n\u003cbr\u003e",
                        "operationId": "PricePolicyController.AddItems",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "ID chính sách giá",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "Danh sách ID sản phẩm cần được thêm vào chính sách",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.AddItemsPricePolicyRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "presenter.CommonErrResponse"
                    }
                }
            }
        },
        "/prices/products/{productId}": {
            "get": {
                "tags": [
                    "prices"
                ],
                    "description": "get Options\n\u003cbr\u003e",
                        "operationId": "PriceController.GetPricesByProduct",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "productId",
                                    "description": "productId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "query",
                                    "description": "Filter. e.g. col1:v1,col2:v2 ...",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "fields",
                                    "description": "Fields returned. e.g. col1,col2 ...",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "sortby",
                                    "description": "Sorted-by fields. e.g. col1,col2 ...",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "order",
                                    "description": "Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "limit",
                                    "description": "Limit the size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "offset",
                                    "description": "Start position of result set. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Price"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/prices/{id}": {
            "put": {
                "tags": [
                    "prices"
                ],
                    "description": "update the Options\n\u003cbr\u003e",
                        "operationId": "PriceController.Update",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Options content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.UpdatePriceRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Price"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            },
            "delete": {
                "tags": [
                    "prices"
                ],
                    "description": "delete a price item in the policy\n\u003cbr\u003e",
                        "operationId": "PriceController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The price's Id",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "presenter.CommonErrResponse"
                    }
                }
            }
        },
        "/products/": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.GetProducts",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "create Product\n\u003cbr\u003e",
                        "operationId": "ProductController.Create",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Product content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreateProductRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Product"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/advertisement": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Type (0: NotShow , 1: best_seller , 2: hot_deal) with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.ListProductByType",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "type (0: NotShow , 1: best_seller , 2: hot_deal)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/autocomplete": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Distributor with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.Search",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "name",
                                    "description": "the search condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributor_id",
                                    "description": "default -1:all",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "hashtag",
                                    "description": "the hashtag condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "is_mapping",
                                    "description": "the search condition",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.AutoCompleteSearchProducts"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/base": {
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "AddBaseProduct\n\u003cbr\u003e",
                        "operationId": "ProductController.AddBaseProduct",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for BaseProduct content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.BaseProduct"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/base/": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "SearchBaseProduct\n\u003cbr\u003e",
                        "operationId": "ProductController.SearchBaseProduct",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "keyword",
                                    "description": "distributor_id",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListBaseProduct"
                        }
                    }
                }
            }
        },
        "/products/base/{id}": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "GetBaseProduct\n\u003cbr\u003e",
                        "operationId": "ProductController.GetBaseProduct",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.BaseProduct"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "products"
                ],
                    "description": "UpdatePropose\n\u003cbr\u003e",
                        "operationId": "ProductController.UpdatePropose",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id for update",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for BaseProduct content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.BaseProduct"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "products"
                ],
                    "description": "DeleteBaseProduct\n\u003cbr\u003e",
                        "operationId": "ProductController.DeleteBaseProduct",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id delete",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/base/{productId}/categories/": {
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "Link a Product with a Category\n\u003cbr\u003e",
                        "operationId": "ProductController.LinkBaseProductCategories",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "productId",
                                    "description": "The ID of product",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.LinkProductCategoriesRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "products"
                ],
                    "description": "Unlink a Product with a Category\n\u003cbr\u003e",
                        "operationId": "ProductController.UnlinkBaseProductCategories",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "productId",
                                    "description": "The ID of product",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.LinkProductCategoriesRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/bestseller": {
            "put": {
                "tags": [
                    "products"
                ],
                    "description": "update the Product best seller\n\u003cbr\u003e",
                        "operationId": "ProductController.UpdateProductBestSeller",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Product(best_seller) content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreateProductBestSellerRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Product"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/categories/{categoryId}": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Category with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.GetProductsByCategory",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "categoryId",
                                    "description": "categoryId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "isBackoffice",
                                    "description": "Flag for backoffice request",
                                    "type": "boolean"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/commission": {
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "CreateCommission\n\u003cbr\u003e",
                        "operationId": "ProductController.CreateCommission",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Commission content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Commission"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/commission/": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "ListCommission\n\u003cbr\u003e",
                        "operationId": "ProductController.ListCommission",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListCommissionResponse"
                        }
                    }
                }
            }
        },
        "/products/commission/{id}": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "GetCommission\n\u003cbr\u003e",
                        "operationId": "ProductController.GetCommission",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.BaseProduct"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "products"
                ],
                    "description": "UpdateCommission\n\u003cbr\u003e",
                        "operationId": "ProductController.UpdateCommission",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for ProductsGroup content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.ProductsGroup"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "products"
                ],
                    "description": "DeleteCommission\n\u003cbr\u003e",
                        "operationId": "ProductController.DeleteCommission",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id delete",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/distributor/{distributorId}": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Distributor with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.GetProductsByDistributor",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "status",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "productType",
                                    "description": "productType: AllType = 0; Normal = 1; Combo = 2; AddOn = 3",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "saleType",
                                    "description": "saleType",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "paymentType",
                                    "description": "paymentType",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "exclusiveType",
                                    "description": "exclusiveType",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "exclude",
                                    "description": "exclude=1,2,3. A list product_id don't want to show.",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/distributor/{distributorId}/exclusive": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Distributor and PaymentType with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.ListExclusiveProducts",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/distributor/{distributorId}/payment/{paymentType}": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Distributor and PaymentType with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.ListProductsByPayment",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "path",
                                    "name": "paymentType",
                                    "description": "paymentType",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/group": {
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "CreateProductsGroup\n\u003cbr\u003e",
                        "operationId": "ProductController.CreateProductsGroup",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for ProductsGroup content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.ProductsGroup"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/group/": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "ListProductsGroup\n\u003cbr\u003e",
                        "operationId": "ProductController.ListProductsGroup",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "-1: all 0:inactive 1:active 2:delete",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsGroupResponse"
                        }
                    }
                }
            }
        },
        "/products/group/import": {
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "Import products\n\u003cbr\u003e",
                        "operationId": "ProductController.ImportProducts",
                            "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/group/{code}": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "GetProductsGroup\n\u003cbr\u003e",
                        "operationId": "ProductController.GetProductsGroup",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "code",
                                    "description": "code",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.BaseProduct"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "products"
                ],
                    "description": "UpdateProductsGroup\n\u003cbr\u003e",
                        "operationId": "ProductController.UpdateProductsGroup",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "code",
                                    "description": "code",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for ProductsGroup content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.ProductsGroup"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "products"
                ],
                    "description": "DeleteProductsGroup\n\u003cbr\u003e",
                        "operationId": "ProductController.DeleteProductsGroup",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "code",
                                    "description": "code delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/hotdeal": {
            "put": {
                "tags": [
                    "products"
                ],
                    "description": "update the Product hot deal\n\u003cbr\u003e",
                        "operationId": "ProductController.UpdateProductHotDeal",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Product(hot_deal) content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreateProductHotDealRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Product"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/import": {
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "Import products\n\u003cbr\u003e",
                        "operationId": "ProductController.ImportProducts",
                            "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/import/resources": {
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "add Resources Product from file import\n\u003cbr\u003e",
                        "operationId": "ProductController.ImportResourcesProduct",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "1: Si 2:DV",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for ImportResourcesProduct content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.ImportResourcesProduct"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/import/resources/search": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product In Import Resources with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.SearchProductInImportResources",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "name",
                                    "description": "the search condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "1: Si 2:DuocVuong 3:Poc",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "registered_code",
                                    "description": "the search condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from",
                                    "description": "dd/MM/yyyy",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to",
                                    "description": "dd/MM/yyyy",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListImportResourcesProduct"
                        }
                    }
                }
            }
        },
        "/products/imports/": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product of resource product\n\u003cbr\u003e",
                        "operationId": "ProductController.ListImport",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "1:Si 2:DV 3:Poc",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListImportResourcesProduct"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/mapping": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "ListMappingResources\n\u003cbr\u003e",
                        "operationId": "ProductController.ListMappingResources",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListMappingResourcesProduct"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "AddMappingResources\n\u003cbr\u003e",
                        "operationId": "ProductController.AddMappingResources",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for ImportResourcesProduct content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.RequestMappingResources"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/mapping/search": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "SearchMappingResources\n\u003cbr\u003e",
                        "operationId": "ProductController.SearchMappingResources",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "name",
                                    "description": "the search condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributor_id",
                                    "description": "the search condition",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "1: Si 2:DV 3:Poc",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "compare_type",
                                    "description": "1: Expensive 2:Cheap 3:Equal",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "sort",
                                    "description": "asc or desc , default asc",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "from_at",
                                    "description": "dd/MM/yyyy",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "to_at",
                                    "description": "dd/MM/yyyy",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListMappingResourcesProduct"
                        }
                    }
                }
            }
        },
        "/products/mapping/{id}": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "GetMappingResources\n\u003cbr\u003e",
                        "operationId": "ProductController.GetMappingResources",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.MappingResources"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "products"
                ],
                    "description": "AddMappingResources\n\u003cbr\u003e",
                        "operationId": "ProductController.AddMappingResources",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id delete",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/propose": {
            "put": {
                "tags": [
                    "products"
                ],
                    "description": "UpdatePropose\n\u003cbr\u003e",
                        "operationId": "ProductController.UpdatePropose",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Propose content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.ProposeRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "AddPropose\n\u003cbr\u003e",
                        "operationId": "ProductController.AddPropose",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "1:low_price",
                                    "schema": {
                                        "$ref": "#/definitions/presenter.ProposeRequest"
                                    },
                                    "default": "true"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/propose/": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "ListPropose\n\u003cbr\u003e",
                        "operationId": "ProductController.ListPropose",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "kw",
                                    "description": "keyword",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "product_type",
                                    "description": "product_type 1:Individually 2:General 3:Recommend",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "distributor_id",
                                    "description": "distributor_id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "show_up",
                                    "description": "show up for cart or tab(low price) , default is cart",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "product_id",
                                    "description": "product_id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/propose/{id}": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "GetPropose\n\u003cbr\u003e",
                        "operationId": "ProductController.GetPropose",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListReponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "products"
                ],
                    "description": "DeletePropose\n\u003cbr\u003e",
                        "operationId": "ProductController.DeletePropose",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id delete",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "true",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "product_popose_id",
                                    "description": "product_popose_id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/recently-viewed": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Category with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.ListRecentlyViewed",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/reference/": {
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "AddProductFromBaseProduct\n\u003cbr\u003e",
                        "operationId": "ProductController.AddProductFromBaseProduct",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.AddProductFromBaseProductRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/reserve": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by reserver with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.SearchByReserve",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "reserve",
                                    "description": "the search condition",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "product_status",
                                    "description": "the search condition",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "distributor_id",
                                    "description": "the search condition",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/search": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Distributor with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.Search",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "name",
                                    "description": "the search condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "hashtag",
                                    "description": "the hashtag condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributor_id",
                                    "description": "the search condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "is_mapping",
                                    "description": "the search condition",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/searchBO": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Distributor with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.SearchBO",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "name",
                                    "description": "the search condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributor_id",
                                    "description": "the search condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "reserve",
                                    "description": "the search condition",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "hashtag",
                                    "description": "the hashtag condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "product_status",
                                    "description": "the search condition",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "product_type",
                                    "description": "the search condition",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "is_mapping",
                                    "description": "the search condition",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                }
            }
        },
        "/products/status/": {
            "put": {
                "tags": [
                    "products"
                ],
                    "description": "UpdateProductsStatus\n\u003cbr\u003e",
                        "operationId": "ProductController.UpdateProductsStatus",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.UpdateProductsStatus"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    },
                    "403": {
                        "description": "{object} presenter.CommonErrResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/supplier/{supplierId}": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Supplier with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.GetProductsBySupplier",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "supplierId",
                                    "description": "supplierId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/trademark/{trademarkId}": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Distributor with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.GetProductsByTrademark",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "trademarkId",
                                    "description": "trademarkId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/wishlist": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Category with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.GetWishlistProduct",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/{id}": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "get Product by id bo\n\u003cbr\u003e",
                        "operationId": "ProductController.GetProductById",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The ID of product",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "customerId",
                                    "description": "false",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "quantity",
                                    "description": "false",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Product"
                        }
                    },
                    "403": {
                        "description": "{object} presenter.CommonErrResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "products"
                ],
                    "description": "update the Product\n\u003cbr\u003e",
                        "operationId": "ProductController.UpdateProduct",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Product content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreateProductRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Product"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "products"
                ],
                    "description": "delete the Product\n\u003cbr\u003e",
                        "operationId": "ProductController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{string} delete success!"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/{id}/backoffice": {
            "get": {
                "tags": [
                    "products"
                ],
                    "description": "Get Product by ID from Backoffice\n\u003cbr\u003e",
                        "operationId": "ProductController.GetProductByIdFromBO",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The ID of product",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Product"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "{object} presenter.CommonErrResponse"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/{id}/price/": {
            "put": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Distributor with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.UpdatePriceProduct",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "product id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "price",
                                    "description": "true",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "sale_price",
                                    "description": "true",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/{id}/quantity": {
            "put": {
                "tags": [
                    "products"
                ],
                    "description": "update the Product quantity\n\u003cbr\u003e",
                        "operationId": "ProductController.UpdateProductQuantity",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Product content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Product"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Product"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/{id}/receipt-status/{status}": {
            "put": {
                "tags": [
                    "products"
                ],
                    "description": "get list of Product by Distributor with pagination\n\u003cbr\u003e",
                        "operationId": "ProductController.UpdateReceiptStatus",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "product id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "path",
                                    "name": "status",
                                    "description": "Update receipt status 0:false 1:true",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListProductsResponse"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/{productId}/categories/": {
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "Link a Product with a Category\n\u003cbr\u003e",
                        "operationId": "ProductController.LinkProductCategories",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "productId",
                                    "description": "The ID of product",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.LinkProductCategoriesRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "products"
                ],
                    "description": "Unlink a Product with a Category\n\u003cbr\u003e",
                        "operationId": "ProductController.UnlinkProductCategories",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "productId",
                                    "description": "The ID of product",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.LinkProductCategoriesRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/{productId}/combo/": {
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "AddComboItems\n\u003cbr\u003e",
                        "operationId": "ProductController.AddComboItems",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "productId",
                                    "description": "The ID of product",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.AddComboItemsRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ComboItemsResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "products"
                ],
                    "description": "RemoveComboItems\n\u003cbr\u003e",
                        "operationId": "ProductController.RemoveComboItems",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "productId",
                                    "description": "The ID of product",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.RemoveComboItemsRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ComboItemsResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/{productId}/distributors/": {
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "Link a Product with a Category\n\u003cbr\u003e",
                        "operationId": "ProductController.LinkProductDistributors",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "productId",
                                    "description": "The ID of product",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.LinkProductDistributorsRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/products/{productId}/suppliers/": {
            "post": {
                "tags": [
                    "products"
                ],
                    "description": "Link a Product with a Category\n\u003cbr\u003e",
                        "operationId": "ProductController.LinkProductSuppliers",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "productId",
                                    "description": "The ID of product",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.LinkProductSuppliersRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "products"
                ],
                    "description": "Link a Product with a Category\n\u003cbr\u003e",
                        "operationId": "ProductController.UnlinkProductSuppliers",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "productId",
                                    "description": "The ID of product",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body of category to be link with",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.LinkProductSuppliersRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/referral/apply": {
            "get": {
                "tags": [
                    "referral"
                ],
                    "description": "apply referral code\n\u003cbr\u003e",
                        "operationId": "ReferralController.ApplyRefCode",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "ref",
                                    "description": "ref code",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "et",
                                    "description": "referral event type (default = 1)",
                                    "type": "integer",
                                    "format": "int32"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "referrer type: S - sale (default), P - pharmacy",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ApplyRefCodeResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/referral/backoffice/apply": {
            "get": {
                "tags": [
                    "referral"
                ],
                    "description": "apply referral code\n\u003cbr\u003e",
                        "operationId": "ReferralController.ApplyRefCode",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "ref",
                                    "description": "ref code with prefix S (sale) or P (pharmacy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "userId",
                                    "description": "referred user id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "userPhone",
                                    "description": "referred user phone",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "et",
                                    "description": "referral event type (default = 1)",
                                    "type": "integer",
                                    "format": "int32"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ApplyRefCodeResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/referral/change": {
            "put": {
                "tags": [
                    "referral"
                ],
                    "description": "changed referrer\n\u003cbr\u003e",
                        "operationId": "ReferralController.ChangeRef",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "newRefId",
                                    "description": "new referrer's id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "newRefCode",
                                    "description": "new referrer's code",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "oldRefId",
                                    "description": "old referrer's code",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "referrer type: S - sale (default), P - pharmacy",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ChangeRefResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/referral/check": {
            "get": {
                "tags": [
                    "referral"
                ],
                    "description": "check whether user has applied refcode or not\n\u003cbr\u003e",
                        "operationId": "ReferralController.CheckEvent",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "et",
                                    "description": "referral event type (default = 1)",
                                    "type": "integer",
                                    "format": "int32"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CheckEventResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/referral/listing-referee": {
            "post": {
                "tags": [
                    "referral"
                ],
                    "description": "listing referee\n\u003cbr\u003e",
                        "operationId": "ReferralController.ListingReferee",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "content body",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.ListingRefereeRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListingRefereeResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/referral/profiles": {
            "get": {
                "tags": [
                    "referral"
                ],
                    "description": "get referral profile\n\u003cbr\u003e",
                        "operationId": "ReferralController.GetProfile",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "uid",
                                    "description": "uid profile",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "refCode",
                                    "description": "refCode profile",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.GetReferralProfileResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "referral"
                ],
                    "description": "update referral profile\n\u003cbr\u003e",
                        "operationId": "ReferralController.UpdateProfile",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "content body",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.UpdateReferralProfileRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.UpdateReferralProfileResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "referral"
                ],
                    "description": "add new profiles allow to refer\n\u003cbr\u003e",
                        "operationId": "ReferralController.AddProfiles",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "content body",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.AddReferralProfilesRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.AddReferralProfilesResponse"
                        }
                    },
                    "400": {
                        "description": "occured error"
                    },
                    "401": {
                        "description": "unauthorized"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/customers/export-tx": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "support export data from api StatisticCustomer\n\u003cbr\u003e",
                        "operationId": "ReportController.ExportDataByUsers",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "start time, format (dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time, format (dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "customerId",
                                    "description": "customer id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Limit the size of result set. Must be an integer (default = 50)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Offset of result",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "paymentGt",
                                    "description": "greater or equal payment amount",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "paymentLt",
                                    "description": "lesser or equal payment amount",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "topupGt",
                                    "description": "greater or equal topup amount",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "topupLt",
                                    "description": "lesser or equal topup amount",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ExportDataByUsersResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/customers/tx": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "statistic customer's transaction (topup and payment)\n\u003cbr\u003e",
                        "operationId": "ReportController.StatisticCustomer",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "start time, format (dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time, format (dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "customerId",
                                    "description": "customer id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Limit the size of result set. Must be an integer (default = 50)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Offset of result",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "paymentGt",
                                    "description": "greater or equal payment amount",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "paymentLt",
                                    "description": "lesser or equal payment amount",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "topupGt",
                                    "description": "greater or equal topup amount",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "topupLt",
                                    "description": "lesser or equal topup amount",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.StatisticCustomerResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/orders": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "report orders with conditions\n\u003cbr\u003e",
                        "operationId": "ReportController.ReportOrders",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Limit the size of result set. Must be an integer (default = 50)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Offset of result",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "orderId",
                                    "description": "order id",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "Order status. Include multi status separated by comma (example: 1,2,3)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "subStatus",
                                    "description": "Fulfillment status. Include multi status separated by comma (example: 1,2,3)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "paymentStatus",
                                    "description": "Payment status. Include multi status separated by comma (example: 1,2,3)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "orderby",
                                    "description": "Orderby by fields (created_at,distributor,product_name,total_sale). Include multi separated by comma. Desc by signed '-' before field",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "start time, format (dd-MM-yyyy)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time, format (dd-MM-yyyy)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "productName",
                                    "description": "product name",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "productId",
                                    "description": "product id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "customerId",
                                    "description": "customer id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "keyword",
                                    "description": "keyword: customer name, a part of order id [5 - 12 digits]",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "paymentType",
                                    "description": "payment type: 0 - all, 1 - cash, 1 - point",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ReportOrdersResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/orders/revenues/histogram": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "sales revenue chart over time\n\u003cbr\u003e",
                        "operationId": "ReportController.HistogramRevenue",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "revenueType",
                                    "description": "type of revenue: 1 - revenue all, 2 - revenue by distributor, 3 - revenue by product",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "begin time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "type: 0 - actual revenue (default), 1 - expected revenue, 2 - new order",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.HistogramRevenueResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/orders/revenues/statistic": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "sales revenue statistics, includes : total transaction, total income, total net income (exclude fee charge)\n\u003cbr\u003e",
                        "operationId": "ReportController.StatisticRevenue",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "revenueType",
                                    "description": "type of revenue: 1 - revenue all, 2 - revenue by distributor, 3 - revenue by product",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "begin time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "page elements",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "size elements",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "type: 0 - actual revenue (default), 1 - expected revenue, 2 - new order",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.StatisticRevenueResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/orders/status/histogram": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "statistic the quatity of order by status chart over time\n\u003cbr\u003e",
                        "operationId": "ReportController.HistogramStatus",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "byPayment",
                                    "description": "default: by order status",
                                    "type": "boolean"
                                },
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "begin time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.HistogramStatusResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/orders/status/statistic": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "statistic the quantity of order by status (order status or payment status)\n\u003cbr\u003e",
                        "operationId": "ReportController.StatisticStatus",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "byPayment",
                                    "description": "default: by order status",
                                    "type": "boolean"
                                },
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "begin time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.StatisticStatusResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/pharmacies": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "report on pharmacy activities\n\u003cbr\u003e",
                        "operationId": "ReportController.ReportPharmacy",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "begin time to (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "the offset of results (default: 1)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Limit the size of result set. Must be an integer (default = 50)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "type report: 1 - no created order, 2 - no topup, 3 - no online. (default = 1)",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ReportPharmacyResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/pharmacies/histogram": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "histogram user daily operation\n\u003cbr\u003e",
                        "operationId": "ReportController.HistogramDailyTracking",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "begin time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.HistogramDailyTrackingResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/pharmacies/statistic": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "statistic user daily operation\n\u003cbr\u003e",
                        "operationId": "ReportController.StatisticDailyTracking",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "begin time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "pharmacyId",
                                    "description": "pharmacy id (options)",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.StatisticDailyTrackingResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/sales/performance": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "report sale performance\n\u003cbr\u003e",
                        "operationId": "ReportController.ReportSalePerformance",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "sellerId",
                                    "description": "seller id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "start time, format (dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time, format (dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "userName",
                                    "description": "Here is a phone number . For example +840111223332",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "filters",
                                    "description": "conditions (order, linked, topup) seperated by commas and add '-' prefix in case is pending (example: filters=order,linked,-topup). Default: all completed",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Limit the size of result set. Must be an integer (default = 50)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Offset of result",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ReportSalePerformanceResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/sales/performance-purchasing": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "report sale performance by customer's purchasing\n\u003cbr\u003e",
                        "operationId": "ReportController.ReportSalePerformanceByPurchasing",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "salerId",
                                    "description": "salerId id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "start time, format (dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time, format (dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "ufromAt",
                                    "description": "start time uncompleted order, format (dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "utoAt",
                                    "description": "end time uncompleted order, format (dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "orderDistributorId",
                                    "description": "list order's distributor ids (seperated by commas)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Limit the size of result set. Must be an integer (default = 50)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Offset of result",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "timeline",
                                    "description": "statistic day timelines (default: timeline=30,60). If param is [timeline=30,60], it means statistic from 0-30days, 30days-60days, more 60days",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ReportSalePerformanceByPurchasingResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/vouchers": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "report voucher with conditions\n\u003cbr\u003e",
                        "operationId": "ReportController.ReportVoucher",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "start time, format (dd-MM-yyyy)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time, format (dd-MM-yyyy)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "appliedDistId",
                                    "description": "order's distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "customerId",
                                    "description": "customer id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "voucher's status: assigned, claimed, expired",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Limit the size of result set. Must be an integer (default = 50)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Offset of result",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "campaignId",
                                    "description": "Campaign id (default: 0 - search all)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "amountFrom",
                                    "description": "Voucher's amount from",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "amountTo",
                                    "description": "Voucher's amount to",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "orderId",
                                    "description": "Order Id",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ReportVoucherResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/vouchers/histogram": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "status's voucher chart over time\n\u003cbr\u003e",
                        "operationId": "ReportController.HistogramVoucher",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "begin time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "appliedDistId",
                                    "description": "order's distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "campaignId",
                                    "description": "campaign id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "voucher's status: assigned, claimed, expired",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.HistogramVoucherResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/vouchers/sync": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "SyncAppliedDistributor\n\u003cbr\u003e",
                        "operationId": "ReportController.SyncAppliedDistributor",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "voucher's status (default: claimed)",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "page (default: 1)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "size (default: 100)",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.SyncAppliedDistributorResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/wallets/balance": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "report balance with conditions\n\u003cbr\u003e",
                        "operationId": "ReportController.ReportBalance",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ReportBalanceResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/wallets/cashin": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "report cashin with conditions\n\u003cbr\u003e",
                        "operationId": "ReportController.ReportCashin",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "start time, format (dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time, format (dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "customerId",
                                    "description": "customer id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "cashinType",
                                    "description": "cashin type:1 - Topup, 2 - MB Bank. (default = 1)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Limit the size of result set. Must be an integer (default = 50)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Offset of result",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ReportCashinResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/report/wallets/cashin/histogram": {
            "get": {
                "tags": [
                    "report"
                ],
                    "description": "cashin revenue chart over time\n\u003cbr\u003e",
                        "operationId": "ReportController.HistogramCashin",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "cashinType",
                                    "description": "cashin type: 1 - Topup, 2 - MB Bank. (default = 1)",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "fromAt",
                                    "description": "begin time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "toAt",
                                    "description": "end time to statistics (format time: dd-MM-yyyy)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributor id",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.HistogramCashinResponse"
                        }
                    },
                    "400": {
                        "description": "{object} presenter.APIResponseBase"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/sale/": {
            "get": {
                "tags": [
                    "sale"
                ],
                    "description": "get Sale\n\u003cbr\u003e",
                        "operationId": "SaleController.Get All",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListSalesResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "sale"
                ],
                    "description": "create Sale\n\u003cbr\u003e",
                        "operationId": "SaleController.Post",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Sale content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Sale"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/sale/_search": {
            "get": {
                "tags": [
                    "sale"
                ],
                    "description": "get list of Sale by Name or Phone with pagination\n\u003cbr\u003e",
                        "operationId": "SaleController.Search",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "disId",
                                    "description": "disId",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "name",
                                    "description": "name",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListSalesResponse"
                        }
                    }
                }
            }
        },
        "/sale/distributor/{distributorId}": {
            "get": {
                "tags": [
                    "sale"
                ],
                    "description": "get Sale\n\u003cbr\u003e",
                        "operationId": "SaleController.Get All By Distributor",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributorId",
                                    "description": "List sale by DistributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "status",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListSalesResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/sale/group": {
            "post": {
                "tags": [
                    "sale"
                ],
                    "description": "CreateSalesGroup\n\u003cbr\u003e",
                        "operationId": "SaleController.CreateSalesGroup",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for SalesGroup content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.SalesGroup"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/sale/group/": {
            "get": {
                "tags": [
                    "sale"
                ],
                    "description": "ListSalesGroup\n\u003cbr\u003e",
                        "operationId": "SaleController.ListSalesGroup",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "-1: all 0:inactive 1:active 2:delete",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListSalesGroupResponse"
                        }
                    }
                }
            }
        },
        "/sale/group/import": {
            "post": {
                "tags": [
                    "sale"
                ],
                    "description": "Import sale\n\u003cbr\u003e",
                        "operationId": "SaleController.AddOrRemoveSalesInGroup",
                            "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/sale/group/{code}": {
            "get": {
                "tags": [
                    "sale"
                ],
                    "description": "GetSalesGroup\n\u003cbr\u003e",
                        "operationId": "SaleController.GetSalesGroup",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "code",
                                    "description": "code",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.BaseProduct"
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "sale"
                ],
                    "description": "UpdateSalesGroup\n\u003cbr\u003e",
                        "operationId": "SaleController.UpdateSalesGroup",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "code",
                                    "description": "code",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for SalesGroup content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.SalesGroup"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "sale"
                ],
                    "description": "DeleteSalesGroup\n\u003cbr\u003e",
                        "operationId": "SaleController.DeleteSalesGroup",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "code",
                                    "description": "code delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/sale/{saleId}": {
            "get": {
                "tags": [
                    "sale"
                ],
                    "description": "get Sale by id\n\u003cbr\u003e",
                        "operationId": "SaleController.Get One",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "saleId",
                                    "description": "The key for static block",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Sale"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "sale"
                ],
                    "description": "update the Sale\n\u003cbr\u003e",
                        "operationId": "SaleController.Put Sale",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "saleId",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Pharmacy content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Sale"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "sale"
                ],
                    "description": "update the Sale\n\u003cbr\u003e",
                        "operationId": "SaleController.Put",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "saleId",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/searching/products": {
            "get": {
                "tags": [
                    "searching"
                ],
                    "description": "get list of Product by Distributor with pagination\n\u003cbr\u003e",
                        "operationId": "SearchingController.Search",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "name",
                                    "description": "the search condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributor_id",
                                    "description": "the search condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "product_type",
                                    "description": "the search condition",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "autocomplete",
                                    "description": "Return auto complete suggestion for search query. default false",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.SearchProductsResult"
                        }
                    }
                }
            }
        },
        "/searching/products/index": {
            "post": {
                "tags": [
                    "searching"
                ],
                    "description": "get list of Product by Distributor with pagination\n\u003cbr\u003e",
                        "operationId": "SearchingController.SearchCreateIndex",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "secret",
                                    "description": "the search condition",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "success"
                    }
                }
            }
        },
        "/suppliers/": {
            "get": {
                "tags": [
                    "suppliers"
                ],
                    "description": "get Supplier\n\u003cbr\u003e",
                        "operationId": "SupplierController.Get All",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListSuppliersResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            },
            "post": {
                "tags": [
                    "suppliers"
                ],
                    "description": "create Supplier\n\u003cbr\u003e",
                        "operationId": "SupplierController.Post",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Supplier content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Supplier"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.Supplier"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/suppliers/_search": {
            "get": {
                "tags": [
                    "suppliers"
                ],
                    "description": "get list of Product by Distributor with pagination\n\u003cbr\u003e",
                        "operationId": "SupplierController.Search",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "condition",
                                    "description": "the search condition",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListSuppliersResponse"
                        }
                    }
                }
            }
        },
        "/suppliers/distributors/{id}": {
            "get": {
                "tags": [
                    "suppliers"
                ],
                    "description": "get Supplier\n\u003cbr\u003e",
                        "operationId": "SupplierController.Get Supplier By Distributor",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The distributor id you want to get",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "type: 0= ALL 1=Active",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListSuppliersResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/suppliers/{id}": {
            "get": {
                "tags": [
                    "suppliers"
                ],
                    "description": "get Supplier by id\n\u003cbr\u003e",
                        "operationId": "SupplierController.Get One",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The key for staticblock",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Supplier"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                }
            },
            "put": {
                "tags": [
                    "suppliers"
                ],
                    "description": "update the Supplier\n\u003cbr\u003e",
                        "operationId": "SupplierController.Put",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Supplier content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Supplier"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Supplier"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            },
            "delete": {
                "tags": [
                    "suppliers"
                ],
                    "description": "delete the Supplier\n\u003cbr\u003e",
                        "operationId": "SupplierController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "id is empty"
                    }
                }
            }
        },
        "/trademarks/": {
            "post": {
                "tags": [
                    "trademarks"
                ],
                    "description": "create Trademark\n\u003cbr\u003e",
                        "operationId": "TrademarkController.Create",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Trademark content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Trademark"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Trademark"
                        }
                    },
                    "403": {
                        "description": "body is empty"
                    }
                }
            }
        },
        "/trademarks/advertisement": {
            "get": {
                "tags": [
                    "trademarks"
                ],
                    "description": "get list trademark show home\n\u003cbr\u003e",
                        "operationId": "TrademarkController.ListTrademarkShowHome",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "type (0: NotShowHome , 1: ShowHome)",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListTrademarksResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            },
            "put": {
                "tags": [
                    "trademarks"
                ],
                    "description": "update advertise trademark\n\u003cbr\u003e",
                        "operationId": "TrademarkController.UpdateAdvertiseTrademark",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Trademark(advertise) content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.CreateTrademarkAdvertiseRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Trademark"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            }
        },
        "/trademarks/distributors/{distributorId}": {
            "get": {
                "tags": [
                    "trademarks"
                ],
                    "description": "get Trademark\n\u003cbr\u003e",
                        "operationId": "TrademarkController.ListTrademarkByDistributor",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "Status of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListTrademarksResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/trademarks/{id}": {
            "get": {
                "tags": [
                    "trademarks"
                ],
                    "description": "get Trademark by id\n\u003cbr\u003e",
                        "operationId": "TrademarkController.GetOne",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The key for staticblock",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Trademark"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                }
            },
            "put": {
                "tags": [
                    "trademarks"
                ],
                    "description": "update the Trademark\n\u003cbr\u003e",
                        "operationId": "TrademarkController.Update",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Trademark content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.Trademark"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Trademark"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                }
            },
            "delete": {
                "tags": [
                    "trademarks"
                ],
                    "description": "delete the Trademark\n\u003cbr\u003e",
                        "operationId": "TrademarkController.Delete",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{string} delete success!"
                    },
                    "403": {
                        "description": "id is empty"
                    }
                }
            }
        },
        "/users/whoami": {
            "get": {
                "tags": [
                    "users"
                ],
                    "description": "check user by token\n\u003cbr\u003e",
                        "operationId": "UserController.Check token",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The key for staticblock",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/models.Supplier"
                        }
                    },
                    "403": {
                        "description": ":id is empty"
                    }
                }
            }
        },
        "/version/": {
            "get": {
                "tags": [
                    "version"
                ],
                    "description": "get version\n\u003cbr\u003e",
                        "operationId": "VersionController.GetVersion",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "os",
                                    "description": "Mobile OS e.g. android, ios",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "version",
                                    "description": "App current version",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Version"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/version/all": {
            "get": {
                "tags": [
                    "version"
                ],
                    "description": "get version\n\u003cbr\u003e",
                        "operationId": "VersionController.GetVersion",
                            "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListVersion"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/version/create": {
            "post": {
                "tags": [
                    "version"
                ],
                    "description": "create Version\n\u003cbr\u003e",
                        "operationId": "VersionController.Post",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Version content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.VersionRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "201": {
                        "description": "{int} presenter.CommonErrResponse"
                    },
                    "403": {
                        "description": "body is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/version/delete/{id}": {
            "delete": {
                "tags": [
                    "version"
                ],
                    "description": "get version\n\u003cbr\u003e",
                        "operationId": "VersionController.GetVersion",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "id version",
                                    "required": true,
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.VersionRequest"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/version/update/{id}": {
            "put": {
                "tags": [
                    "version"
                ],
                    "description": "update the Version\n\u003cbr\u003e",
                        "operationId": "VersionController.Put",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "id",
                                    "description": "The id you want to update",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Version content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.VersionRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ":id is not int"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/vouchers/": {
            "get": {
                "tags": [
                    "vouchers"
                ],
                    "description": "get list voucher\n\u003cbr\u003e",
                        "operationId": "VoucherController.GetAll",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListVouchersResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/vouchers/assign/campaign/{campaign_id}/": {
            "post": {
                "tags": [
                    "vouchers"
                ],
                    "description": "assign voucher to customer\n\u003cbr\u003e",
                        "operationId": "VoucherController.AssignVoucherToCustomer",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "campaign_id",
                                    "description": "campaign_id",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "customer_id",
                                    "description": "customer_id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "type",
                                    "description": "0: Assign to user belong to Customer group 1:Assign to User",
                                    "type": "integer",
                                    "format": "int64"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "{string} assign success !"
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/vouchers/customer": {
            "get": {
                "tags": [
                    "vouchers"
                ],
                    "description": "get list voucher by customerId\n\u003cbr\u003e",
                        "operationId": "VoucherController.ListVoucherByCustomer",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "status",
                                    "description": "status",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "distributor_id",
                                    "description": "distributor_id",
                                    "type": "integer",
                                    "format": "int64"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListVouchersResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/vouchers/customer/valid": {
            "get": {
                "tags": [
                    "vouchers"
                ],
                    "description": "get list voucher valid by customerId\n\u003cbr\u003e",
                        "operationId": "VoucherController.ListVoucherValidByCustomer",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "distributorId",
                                    "description": "distributorId",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "orderAmount",
                                    "description": "orderAmount",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "paymentMethod",
                                    "description": "COD NEOW",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "size",
                                    "description": "Size of result set. Must be an integer",
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "page",
                                    "description": "Page number of view. Must be an integer",
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.ListVouchersResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/vouchers/{voucherId}": {
            "get": {
                "tags": [
                    "vouchers"
                ],
                    "description": "get vouchers by id\n\u003cbr\u003e",
                        "operationId": "VoucherController.GetOne",
                            "parameters": [
                                {
                                    "in": "path",
                                    "name": "voucherId",
                                    "description": "voucherId",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.Voucher"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                }
            }
        },
        "/wishlist/": {
            "post": {
                "tags": [
                    "wishlist"
                ],
                    "description": "AddWishlistProduct\n\u003cbr\u003e",
                        "operationId": "WishlistController.AddWishlistProduct",
                            "parameters": [
                                {
                                    "in": "body",
                                    "name": "body",
                                    "description": "body for Wishlist content",
                                    "required": true,
                                    "schema": {
                                        "$ref": "#/definitions/presenter.WishlistProductRequest"
                                    }
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": ""
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "wishlist"
                ],
                    "description": "RemoveWishlist\n\u003cbr\u003e",
                        "operationId": "WishlistController.RemoveWishlist",
                            "parameters": [
                                {
                                    "in": "query",
                                    "name": "customerId",
                                    "description": "The customerId you want to delete",
                                    "required": true,
                                    "type": "string"
                                },
                                {
                                    "in": "query",
                                    "name": "productId",
                                    "description": "The productId you want to delete",
                                    "required": true,
                                    "type": "string"
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "",
                            "schema": {
                            "$ref": "#/definitions/presenter.CommonErrResponse"
                        }
                    },
                    "403": {
                        "description": "id is empty"
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        }
    },
    "definitions": {
        "127583.0xc000e93860.false": {
            "title": "false",
                "type": "object"
        },
        "127750.0xc000e938f0.false": {
            "title": "false",
                "type": "object"
        },
        "127914.0xc000e93980.false": {
            "title": "false",
                "type": "object"
        },
        "51186.0xc000dcbbc0.false": {
            "title": "false",
                "type": "object"
        },
        "51501.0xc000dcbc50.false": {
            "title": "false",
                "type": "object"
        },
        "entity.Error": {
            "title": "Error",
                "type": "object",
                    "properties": {
                "code": {
                    "type": "string"
                },
                "detail": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            }
        },
        "models.Supplier": {
            "title": "Supplier",
                "type": "object",
                    "properties": {
                "Address": {
                    "type": "string"
                },
                "CreatedAt": {
                    "type": "string",
                        "format": "datetime"
                },
                "Email": {
                    "type": "string"
                },
                "Id": {
                    "type": "integer",
                        "format": "int64"
                },
                "Name": {
                    "type": "string"
                },
                "Phone": {
                    "type": "string"
                },
                "UpdatedAt": {
                    "type": "string",
                        "format": "datetime"
                }
            }
        },
        "presenter.APIResponseBase": {
            "title": "APIResponseBase",
                "type": "object",
                    "properties": {
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.AccessToken": {
            "title": "AccessToken",
                "type": "object",
                    "properties": {
                "accessToken": {
                    "type": "string"
                }
            }
        },
        "presenter.AccessTokenResponse": {
            "title": "AccessTokenResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.AccessToken"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.AccreditRequest": {
            "title": "AccreditRequest",
                "type": "object",
                    "properties": {
                "add_distributors": {
                    "type": "array",
                        "items": {
                        "type": "integer",
                            "format": "int64"
                    }
                },
                "pharmacy_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "remove_distributors": {
                    "type": "array",
                        "items": {
                        "type": "integer",
                            "format": "int64"
                    }
                }
            }
        },
        "presenter.AccumulationOrderMeta": {
            "title": "AccumulationOrderMeta",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.AccumulationOrderMetaItem"
                    }
                }
            }
        },
        "presenter.AccumulationOrderMetaItem": {
            "title": "AccumulationOrderMetaItem",
                "type": "object",
                    "properties": {
                "accumulation_limit": {
                    "type": "integer",
                        "format": "int32"
                },
                "accumulation_rate": {
                    "type": "integer",
                        "format": "int32"
                },
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "is_order_valid": {
                    "type": "boolean"
                },
                "order_limit": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.AddComboItemsRequest": {
            "title": "AddComboItemsRequest",
                "type": "object",
                    "properties": {
                "combo": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/51186.0xc000dcbbc0.false"
                    }
                }
            }
        },
        "presenter.AddInvoiceRequest": {
            "title": "AddInvoiceRequest",
                "type": "object",
                    "properties": {
                "company_address": {
                    "type": "string"
                },
                "company_name": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "fullname": {
                    "type": "string"
                },
                "mail": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "send_address": {
                    "type": "string"
                },
                "tax_number": {
                    "type": "string"
                }
            }
        },
        "presenter.AddInvoiceResponse": {
            "title": "AddInvoiceResponse",
                "type": "object",
                    "properties": {
                "accumulation": {
                    "type": "integer",
                        "format": "int64"
                },
                "customer_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "customer_reward": {
                    "$ref": "#/definitions/presenter.CustomerReward"
                },
                "discount_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "discount_point": {
                    "type": "integer",
                        "format": "int64"
                },
                "fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "grand_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "handling_fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "invoice": {
                    "$ref": "#/definitions/presenter.InvoiceInfo"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.CVDistributor"
                    }
                },
                "saving": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "shipping_address": {
                    "$ref": "#/definitions/presenter.AddressBook"
                },
                "sub_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "taxes": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_accumulation": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.AddItemsPricePolicyRequest": {
            "title": "AddItemsPricePolicyRequest",
                "type": "object",
                    "properties": {
                "products_applied": {
                    "type": "array",
                        "items": {
                        "type": "integer",
                            "format": "int64"
                    }
                }
            }
        },
        "presenter.AddOnProduct": {
            "title": "AddOnProduct",
                "type": "object",
                    "properties": {
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "name": {
                    "type": "string"
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.AddOptionalResponse": {
            "title": "AddOptionalResponse",
                "type": "object",
                    "properties": {
                "accumulation": {
                    "type": "integer",
                        "format": "int64"
                },
                "customer_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "customer_reward": {
                    "$ref": "#/definitions/presenter.CustomerReward"
                },
                "discount_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "discount_point": {
                    "type": "integer",
                        "format": "int64"
                },
                "fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "grand_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "handling_fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "invoice": {
                    "$ref": "#/definitions/presenter.InvoiceInfo"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.CVDistributor"
                    }
                },
                "saving": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "shipping_address": {
                    "$ref": "#/definitions/presenter.AddressBook"
                },
                "sub_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "taxes": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_accumulation": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.AddOrderInvoiceResponse": {
            "title": "AddOrderInvoiceResponse",
                "type": "object",
                    "properties": {
                "order_id": {
                    "type": "string"
                }
            }
        },
        "presenter.AddProductFromBaseProductRequest": {
            "title": "AddProductFromBaseProductRequest",
                "type": "object",
                    "properties": {
                "base_product_ids": {
                    "type": "string"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.AddProductToCartResponse": {
            "title": "AddProductToCartResponse",
                "type": "object",
                    "properties": {
                "grand_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "items_count": {
                    "type": "integer",
                        "format": "int32"
                },
                "items_qty": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.AddProductsToCartCustomerResponse": {
            "title": "AddProductsToCartCustomerResponse",
                "type": "object",
                    "properties": {
                "customer_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.NewProductError"
                    }
                },
                "grand_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "items_count": {
                    "type": "integer",
                        "format": "int32"
                },
                "items_qty": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.AddProductsToCartRequest": {
            "title": "AddProductsToCartRequest",
                "type": "object",
                    "properties": {
                "customer_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "customer_ids": {
                    "type": "array",
                        "items": {
                        "type": "integer",
                            "format": "int64"
                    }
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "operator_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.NewProduct"
                    }
                },
                "store_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.AddProductsToCartResponse": {
            "title": "AddProductsToCartResponse",
                "type": "object",
                    "properties": {
                "customer_error_ids": {
                    "type": "array",
                        "items": {
                        "type": "integer",
                            "format": "int64"
                    }
                },
                "data": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.AddProductsToCartCustomerResponse"
                    }
                }
            }
        },
        "presenter.AddPromoProductsRequest": {
            "title": "AddPromoProductsRequest",
                "type": "object",
                    "properties": {
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "payment_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "promo_products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.PromoProduct"
                    }
                }
            }
        },
        "presenter.AddPromoProductsResponse": {
            "title": "AddPromoProductsResponse",
                "type": "object",
                    "properties": {
                "accumulation": {
                    "type": "integer",
                        "format": "int64"
                },
                "customer_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "customer_reward": {
                    "$ref": "#/definitions/presenter.CustomerReward"
                },
                "discount_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "discount_point": {
                    "type": "integer",
                        "format": "int64"
                },
                "fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "grand_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "handling_fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "invoice": {
                    "$ref": "#/definitions/presenter.InvoiceInfo"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.CVDistributor"
                    }
                },
                "saving": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "shipping_address": {
                    "$ref": "#/definitions/presenter.AddressBook"
                },
                "sub_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "taxes": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_accumulation": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.AddReferralProfilesRequest": {
            "title": "AddReferralProfilesRequest",
                "type": "object",
                    "properties": {
                "profiles": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ReferralProfile"
                    }
                }
            }
        },
        "presenter.AddReferralProfilesResponse": {
            "title": "AddReferralProfilesResponse",
                "type": "object",
                    "properties": {
                "success": {
                    "type": "boolean"
                }
            }
        },
        "presenter.Addon": {
            "title": "Addon",
                "type": "object",
                    "properties": {
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "name": {
                    "type": "string"
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.AddressBook": {
            "title": "AddressBook",
                "type": "object",
                    "properties": {
                "country_id": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "customer_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "delivery_address_type": {
                    "type": "string"
                },
                "district": {
                    "$ref": "#/definitions/presenter.District"
                },
                "full_name": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "is_default": {
                    "type": "boolean"
                },
                "province": {
                    "$ref": "#/definitions/presenter.Province"
                },
                "street": {
                    "type": "string"
                },
                "telephone": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                },
                "ward": {
                    "$ref": "#/definitions/presenter.Ward"
                }
            }
        },
        "presenter.AddressBookRequest": {
            "title": "AddressBookRequest",
                "type": "object",
                    "properties": {
                "country_id": {
                    "type": "string"
                },
                "customer_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "delivery_address_type": {
                    "type": "string"
                },
                "district_id": {
                    "type": "string"
                },
                "full_name": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "is_default": {
                    "type": "boolean"
                },
                "province_id": {
                    "type": "string"
                },
                "street": {
                    "type": "string"
                },
                "telephone": {
                    "type": "string"
                },
                "ward_id": {
                    "type": "string"
                }
            }
        },
        "presenter.AddressInvoice": {
            "title": "AddressInvoice",
                "type": "object",
                    "properties": {
                "country_id": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "district": {
                    "$ref": "#/definitions/presenter.District"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "province": {
                    "$ref": "#/definitions/presenter.Province"
                },
                "street": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                },
                "ward": {
                    "$ref": "#/definitions/presenter.Ward"
                }
            }
        },
        "presenter.AddressInvoiceRequest": {
            "title": "AddressInvoiceRequest",
                "type": "object",
                    "properties": {
                "country_id": {
                    "type": "string"
                },
                "district_id": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "province_id": {
                    "type": "string"
                },
                "street": {
                    "type": "string"
                },
                "ward_id": {
                    "type": "string"
                }
            }
        },
        "presenter.AddressRequest": {
            "title": "AddressRequest",
                "type": "object",
                    "properties": {
                "country_id": {
                    "type": "string"
                },
                "district_id": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "lat": {
                    "type": "number",
                        "format": "float"
                },
                "lng": {
                    "type": "number",
                        "format": "float"
                },
                "province_id": {
                    "type": "string"
                },
                "street": {
                    "type": "string"
                },
                "ward_id": {
                    "type": "string"
                }
            }
        },
        "presenter.Addresss": {
            "title": "Addresss",
                "type": "object",
                    "properties": {
                "country_id": {
                    "type": "string"
                },
                "district": {
                    "$ref": "#/definitions/presenter.District"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "lat": {
                    "type": "number",
                        "format": "float"
                },
                "lng": {
                    "type": "number",
                        "format": "float"
                },
                "province": {
                    "$ref": "#/definitions/presenter.Province"
                },
                "street": {
                    "type": "string"
                },
                "ward": {
                    "$ref": "#/definitions/presenter.Ward"
                }
            }
        },
        "presenter.AdsBanner": {
            "title": "AdsBanner",
                "type": "object",
                    "properties": {
                "create_at": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "images": {
                    "type": "string"
                },
                "is_advertise": {
                    "type": "integer",
                        "format": "int32"
                },
                "name": {
                    "type": "string"
                },
                "position": {
                    "type": "integer",
                        "format": "int32"
                },
                "priority": {
                    "type": "integer",
                        "format": "int32"
                },
                "status": {
                    "$ref": "#/definitions/presenter.AdsBannerStatus"
                },
                "type": {
                    "type": "integer",
                        "format": "int32"
                },
                "update_at": {
                    "type": "string"
                }
            }
        },
        "presenter.AdsBannerAdvertise": {
            "title": "AdsBannerAdvertise",
                "type": "object",
                    "properties": {
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "is_advertise": {
                    "type": "integer",
                        "format": "int32"
                },
                "priority": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.AdsBannerStatus": {
            "title": "AdsBannerStatus",
                "format": "int32",
                    "type": "integer"
        },
        "presenter.AmountAndTx": {
            "title": "AmountAndTx",
                "type": "object",
                    "properties": {
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "tx": {
                    "type": "integer",
                        "format": "int64"
                },
                "un_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "un_tx": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.ApplyRefCodeResponse": {
            "title": "ApplyRefCodeResponse",
                "type": "object",
                    "properties": {
                "result": {
                    "type": "string"
                }
            }
        },
        "presenter.Attribute": {
            "title": "Attribute",
                "type": "object",
                    "properties": {
                "attribute_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "created_at": {
                    "type": "string",
                        "format": "datetime"
                },
                "key": {
                    "type": "string"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "sorting": {
                    "type": "integer",
                        "format": "int32"
                },
                "status": {
                    "type": "integer",
                        "format": "int32"
                },
                "updated_at": {
                    "type": "string",
                        "format": "datetime"
                },
                "value": {
                    "type": "string"
                }
            }
        },
        "presenter.AttributeP": {
            "title": "AttributeP",
                "type": "object",
                    "properties": {
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "key": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                }
            }
        },
        "presenter.AutoCompleteKey": {
            "title": "AutoCompleteKey",
                "type": "object",
                    "properties": {
                "key": {
                    "type": "string"
                }
            }
        },
        "presenter.AutoCompleteSearchProducts": {
            "title": "AutoCompleteSearchProducts",
                "type": "object",
                    "properties": {
                "autocomplete": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.AutoCompleteKey"
                    }
                }
            }
        },
        "presenter.BOTopUpRequest": {
            "title": "BOTopUpRequest",
                "type": "object",
                    "properties": {
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "apply_promotion": {
                    "type": "boolean"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "user_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.BOTopUpResponse": {
            "title": "BOTopUpResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.BOTopUpResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.BOTopUpResponseData": {
            "title": "BOTopUpResponseData",
                "type": "object",
                    "properties": {
                "transaction_id": {
                    "type": "string"
                }
            }
        },
        "presenter.BalanceAccount": {
            "title": "BalanceAccount",
                "type": "object",
                    "properties": {
                "accountId": {
                    "type": "integer",
                        "format": "int64"
                },
                "accountIdStr": {
                    "type": "string"
                },
                "accountType": {
                    "type": "string"
                },
                "balance": {
                    "type": "integer",
                        "format": "int64"
                },
                "refId": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.BalanceAccountResponse": {
            "title": "BalanceAccountResponse",
                "type": "object",
                    "properties": {
                "balances": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.DistributorBalance"
                    }
                }
            }
        },
        "presenter.Banner": {
            "title": "Banner",
                "type": "object",
                    "properties": {
                "banner_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "campaign": {
                    "$ref": "#/definitions/presenter.Campaign"
                },
                "created_at": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "images": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "ref_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "status": {
                    "$ref": "#/definitions/presenter.BannerStatus"
                },
                "updated_at": {
                    "type": "string"
                }
            }
        },
        "presenter.BannerMultiRequest": {
            "title": "BannerMultiRequest",
                "type": "object",
                    "properties": {
                "banners": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.CreateBannerUpdateRequest"
                    }
                }
            }
        },
        "presenter.BannerStatus": {
            "title": "BannerStatus",
                "format": "int32",
                    "type": "integer"
        },
        "presenter.BaseProduct": {
            "title": "BaseProduct",
                "type": "object",
                    "properties": {
                "categories": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Category"
                    }
                },
                "created_at": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "distribution_unit": {
                    "type": "string"
                },
                "dosage_forms": {
                    "type": "string"
                },
                "expire_date": {
                    "type": "string"
                },
                "images": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "main_ingredient": {
                    "type": "string"
                },
                "manufacture": {
                    "type": "string"
                },
                "medicinal_props": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "origin": {
                    "type": "string"
                },
                "packing_specs": {
                    "type": "string"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "registered_code": {
                    "type": "string"
                },
                "sale_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "short_description": {
                    "type": "string"
                },
                "unit": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                }
            }
        },
        "presenter.BasketInfoResponse": {
            "title": "BasketInfoResponse",
                "type": "object",
                    "properties": {
                "grand_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "items_count": {
                    "type": "integer",
                        "format": "int32"
                },
                "items_qty": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.BuyAgainResponse": {
            "title": "BuyAgainResponse",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Product"
                    }
                },
                "items_err": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ProductError"
                    }
                }
            }
        },
        "presenter.CVDistributor": {
            "title": "CVDistributor",
                "type": "object",
                    "properties": {
                "available": {
                    "type": "boolean"
                },
                "distributor": {
                    "$ref": "#/definitions/presenter.Distributor"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.CVPaymentType"
                    }
                },
                "shipping_handling": {
                    "type": "integer",
                        "format": "int64"
                },
                "shipping_method": {
                    "$ref": "#/definitions/presenter.ShippingMethod"
                },
                "shipping_noted": {
                    "type": "string"
                },
                "total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                }
            }
        },
        "presenter.CVPaymentType": {
            "title": "CVPaymentType",
                "type": "object",
                    "properties": {
                "accumulation": {
                    "type": "integer",
                        "format": "int64"
                },
                "discount": {
                    "type": "integer",
                        "format": "int64"
                },
                "fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.CartItemView"
                    }
                },
                "neo_voucher": {
                    "type": "string"
                },
                "neo_voucher_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "payment_method": {
                    "$ref": "#/definitions/presenter.PaymentMethod"
                },
                "payment_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "promo_infos": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Campaign"
                    }
                },
                "promo_products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.PromoProduct"
                    }
                },
                "saving": {
                    "type": "integer",
                        "format": "int64"
                },
                "selected_at": {
                    "type": "integer",
                        "format": "int64"
                },
                "sys_discount": {
                    "type": "integer",
                        "format": "int64"
                },
                "taxes": {
                    "type": "integer",
                        "format": "int64"
                },
                "total": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_original_price": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_price": {
                    "type": "integer",
                        "format": "int64"
                },
                "voucher": {
                    "type": "string"
                },
                "voucher_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.Campaign": {
            "title": "Campaign",
                "type": "object",
                    "properties": {
                "accumulation_order_meta": {
                    "$ref": "#/definitions/presenter.AccumulationOrderMeta"
                },
                "campaign_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "combo_advance_meta": {
                    "$ref": "#/definitions/presenter.ComboAdvanceMeta"
                },
                "combo_meta": {
                    "$ref": "#/definitions/presenter.ComboMeta"
                },
                "created_at": {
                    "type": "string"
                },
                "customer_group": {
                    "type": "integer",
                        "format": "int64"
                },
                "days_in_week": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "discount_buying_products_meta": {
                    "$ref": "#/definitions/presenter.DiscountBuyingProductsMeta"
                },
                "discount_order_meta": {
                    "$ref": "#/definitions/presenter.DiscountOrderMeta"
                },
                "distributor": {
                    "$ref": "#/definitions/presenter.DistributorCampaign"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "end_date": {
                    "type": "string"
                },
                "end_time": {
                    "type": "string"
                },
                "gift_buying_products_meta": {
                    "$ref": "#/definitions/presenter.GiftBuyingProductsMeta"
                },
                "gift_order_meta": {
                    "$ref": "#/definitions/presenter.GiftOrderMeta"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "images": {
                    "type": "string"
                },
                "is_order_valid": {
                    "type": "boolean"
                },
                "meta_data": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "promo_wallet_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "promotion_fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "short_description": {
                    "type": "string"
                },
                "spent_budget": {
                    "type": "integer",
                        "format": "int64"
                },
                "start_date": {
                    "type": "string"
                },
                "start_time": {
                    "type": "string"
                },
                "status": {
                    "type": "integer",
                        "format": "int32"
                },
                "top_up_meta": {
                    "$ref": "#/definitions/presenter.TopUpMeta"
                },
                "total_promotion_budget": {
                    "type": "integer",
                        "format": "int64"
                },
                "updated_at": {
                    "type": "string"
                },
                "voucher_meta": {
                    "$ref": "#/definitions/presenter.VoucherMeta"
                }
            }
        },
        "presenter.CampaignSetting": {
            "title": "CampaignSetting",
                "type": "object",
                    "properties": {
                "campaign_type": {
                    "type": "integer",
                        "format": "int64"
                },
                "campaign_type_not_apply": {
                    "type": "string"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "max_campaign": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.CampaignVoucher": {
            "title": "CampaignVoucher",
                "type": "object",
                    "properties": {
                "description": {
                    "type": "string"
                },
                "end_date": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "name": {
                    "type": "string"
                },
                "start_date": {
                    "type": "string"
                }
            }
        },
        "presenter.CancelOrderRequest": {
            "title": "CancelOrderRequest",
                "type": "object",
                    "properties": {
                "order_id": {
                    "type": "string"
                },
                "reason": {
                    "type": "string"
                },
                "user_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.CancelOrderResponse": {
            "title": "CancelOrderResponse",
                "type": "object",
                    "properties": {
                "order": {
                    "$ref": "#/definitions/presenter.Order"
                }
            }
        },
        "presenter.CartItemView": {
            "title": "CartItemView",
                "type": "object",
                    "properties": {
                "addons": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Addon"
                    }
                },
                "attributes": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.AttributeP"
                    }
                },
                "combo": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ComboItem"
                    }
                },
                "desc": {
                    "type": "string"
                },
                "discount_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "id": {
                    "type": "integer",
                        "format": "int32"
                },
                "images": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "is_vat": {
                    "type": "boolean"
                },
                "origin_price": {
                    "type": "integer",
                        "format": "int64"
                },
                "packing_specs": {
                    "type": "string"
                },
                "payment_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_name": {
                    "type": "string"
                },
                "product_status": {
                    "type": "integer",
                        "format": "int32"
                },
                "product_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "qty": {
                    "type": "integer",
                        "format": "int32"
                },
                "range_prices": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.RangePrice"
                    }
                },
                "selected_at": {
                    "type": "integer",
                        "format": "int64"
                },
                "sub_total": {
                    "type": "integer",
                        "format": "int64"
                },
                "supplier_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "vat": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.Category": {
            "title": "Category",
                "type": "object",
                    "properties": {
                "category_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "created_at": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "image": {
                    "type": "string"
                },
                "key": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "priority": {
                    "type": "integer",
                        "format": "int32"
                },
                "products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Product"
                    }
                },
                "show_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "status": {
                    "type": "integer",
                        "format": "int32"
                },
                "supplier": {
                    "$ref": "#/definitions/presenter.Supplier"
                },
                "updated_at": {
                    "type": "string"
                }
            }
        },
        "presenter.ChangeOrderStatus": {
            "title": "ChangeOrderStatus",
                "type": "object",
                    "properties": {
                "order_ids": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "status": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.ChangeRefResponse": {
            "title": "ChangeRefResponse",
                "type": "object",
                    "properties": {
                "referrer_id": {
                    "type": "string"
                },
                "total_applied": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.CheckEventResponse": {
            "title": "CheckEventResponse",
                "type": "object",
                    "properties": {
                "is_used": {
                    "type": "boolean"
                },
                "ref_code": {
                    "type": "string"
                }
            }
        },
        "presenter.CheckLoanResponse": {
            "title": "CheckLoanResponse",
                "type": "object",
                    "properties": {
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.CheckoutResponse": {
            "title": "CheckoutResponse",
                "type": "object",
                    "properties": {
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.OrderError"
                    }
                },
                "orders": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.OrderSuccess"
                    }
                }
            }
        },
        "presenter.ComboAdvanceMeta": {
            "title": "ComboAdvanceMeta",
                "type": "object",
                    "properties": {
                "is_gift_selection": {
                    "type": "boolean"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ComboAdvanceMetaItem"
                    }
                }
            }
        },
        "presenter.ComboAdvanceMetaItem": {
            "title": "ComboAdvanceMetaItem",
                "type": "object",
                    "properties": {
                "applied_products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.GiftItem"
                    }
                },
                "gift_selection_limit": {
                    "type": "integer",
                        "format": "int32"
                },
                "gifts": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.GiftItem"
                    }
                },
                "is_order_valid": {
                    "type": "boolean"
                }
            }
        },
        "presenter.ComboItem": {
            "title": "ComboItem",
                "type": "object",
                    "properties": {
                "created_at": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "is_promo": {
                    "type": "boolean"
                },
                "quantity": {
                    "type": "integer",
                        "format": "int32"
                },
                "ref_product": {
                    "$ref": "#/definitions/presenter.RefProduct"
                },
                "sale_price": {
                    "type": "integer",
                        "format": "int64"
                },
                "updated_at": {
                    "type": "string"
                }
            }
        },
        "presenter.ComboItemsResponse": {
            "title": "ComboItemsResponse",
                "type": "object",
                    "properties": {
                "combo": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ComboItem"
                    }
                }
            }
        },
        "presenter.ComboMeta": {
            "title": "ComboMeta",
                "type": "object",
                    "properties": {
                "products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ProductSnapCamp"
                    }
                }
            }
        },
        "presenter.Commission": {
            "title": "Commission",
                "type": "object",
                    "properties": {
                "code_products_group": {
                    "type": "string"
                },
                "code_sales_group": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "products_group_name": {
                    "type": "string"
                },
                "rate": {
                    "type": "integer",
                        "format": "int32"
                },
                "sales_group_name": {
                    "type": "string"
                }
            }
        },
        "presenter.CommonErrResponse": {
            "title": "CommonErrResponse",
                "type": "object",
                    "properties": {
                "details": {
                    "type": "string"
                },
                "error": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            }
        },
        "presenter.CountOrdersByStatusItem": {
            "title": "CountOrdersByStatusItem",
                "type": "object",
                    "properties": {
                "count": {
                    "type": "integer",
                        "format": "int64"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.CountOrdersByStatusResponse": {
            "title": "CountOrdersByStatusResponse",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.CountOrdersByStatusItem"
                    }
                },
                "status": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "sub_status": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "total": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.CreateAdsBannerAdvertiseRequest": {
            "title": "CreateAdsBannerAdvertiseRequest",
                "type": "object",
                    "properties": {
                "banners": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.AdsBannerAdvertise"
                    }
                }
            }
        },
        "presenter.CreateBannerUpdateRequest": {
            "title": "CreateBannerUpdateRequest",
                "type": "object",
                    "properties": {
                "banner_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "campaign_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "description": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "images": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "ref_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "status": {
                    "$ref": "#/definitions/presenter.BannerStatus"
                }
            }
        },
        "presenter.CreateCategoryRequest": {
            "title": "CreateCategoryRequest",
                "type": "object",
                    "properties": {
                "description": {
                    "type": "string"
                },
                "image": {
                    "type": "string"
                },
                "key": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "priority": {
                    "type": "integer",
                        "format": "int32"
                },
                "show_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "status": {
                    "type": "integer",
                        "format": "int32"
                },
                "supplier_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.CreateCustomerGroupRequest": {
            "title": "CreateCustomerGroupRequest",
                "type": "object",
                    "properties": {
                "description": {
                    "type": "string"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "name": {
                    "type": "string"
                },
                "status": {
                    "$ref": "#/definitions/presenter.GroupStatus"
                }
            }
        },
        "presenter.CreateOrderInfo": {
            "title": "CreateOrderInfo",
                "type": "object",
                    "properties": {
                "accumulation": {
                    "type": "integer",
                        "format": "int64"
                },
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "discount": {
                    "type": "integer",
                        "format": "int64"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.OrderItem"
                    }
                },
                "neo_voucher": {
                    "type": "string"
                },
                "payment_method": {
                    "type": "string"
                },
                "product_payment_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "promo_products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.PromoProduct"
                    }
                },
                "promotions": {
                    "type": "string"
                },
                "shipping_method": {
                    "type": "string"
                },
                "shipping_noted": {
                    "type": "string"
                },
                "sys_discount": {
                    "type": "integer",
                        "format": "int64"
                },
                "taxes": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_sale": {
                    "type": "integer",
                        "format": "int64"
                },
                "transaction": {
                    "type": "string"
                },
                "voucher": {
                    "type": "string"
                }
            }
        },
        "presenter.CreatePharmacyUpdateRequest": {
            "title": "CreatePharmacyUpdateRequest",
                "type": "object",
                    "properties": {
                "address": {
                    "$ref": "#/definitions/presenter.AddressRequest"
                },
                "address_invoice": {
                    "type": "string"
                },
                "business_registration_cert_images": {
                    "type": "string"
                },
                "code": {
                    "type": "string"
                },
                "favourite_distributor": {
                    "$ref": "#/definitions/presenter.Distributor"
                },
                "general_verify_images": {
                    "type": "string"
                },
                "gpp_certificate_images": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "invoice_info": {
                    "$ref": "#/definitions/presenter.PhInvoiceInfoRequest"
                },
                "name": {
                    "type": "string"
                },
                "name_invoice": {
                    "type": "string"
                },
                "note": {
                    "type": "string"
                },
                "owner_birthday": {
                    "type": "string"
                },
                "owner_email": {
                    "type": "string"
                },
                "owner_full_name": {
                    "type": "string"
                },
                "owner_id_card_number": {
                    "type": "string"
                },
                "owner_phone": {
                    "type": "string"
                },
                "practicing_cert_images": {
                    "type": "string"
                },
                "practicing_eligible_cert_images": {
                    "type": "string"
                },
                "referrer": {
                    "$ref": "#/definitions/presenter.Sale"
                },
                "registered_number": {
                    "type": "string"
                },
                "status": {
                    "type": "string"
                },
                "tax_code": {
                    "type": "string"
                },
                "tax_number": {
                    "type": "string"
                }
            }
        },
        "presenter.CreatePricePolicyRequest": {
            "title": "CreatePricePolicyRequest",
                "type": "object",
                    "properties": {
                "policy": {
                    "$ref": "#/definitions/presenter.PricePolicy"
                },
                "products_applied": {
                    "type": "array",
                        "items": {
                        "type": "integer",
                            "format": "int64"
                    }
                }
            }
        },
        "presenter.CreateProductBestSellerRequest": {
            "title": "CreateProductBestSellerRequest",
                "type": "object",
                    "properties": {
                "products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ProductBestSeller"
                    }
                }
            }
        },
        "presenter.CreateProductHotDealRequest": {
            "title": "CreateProductHotDealRequest",
                "type": "object",
                    "properties": {
                "products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ProductHotDeal"
                    }
                }
            }
        },
        "presenter.CreateProductRequest": {
            "title": "CreateProductRequest",
                "type": "object",
                    "properties": {
                "add_on": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.AddOnProduct"
                    }
                },
                "advertisement_priority": {
                    "type": "integer",
                        "format": "int32"
                },
                "attributes": {
                    "type": "string"
                },
                "base_product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "description": {
                    "type": "string"
                },
                "distribution_unit": {
                    "type": "string"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "dosage_forms": {
                    "type": "string"
                },
                "exclusive_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "expire_date": {
                    "type": "string"
                },
                "hashtags": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "images": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "main_ingredient": {
                    "type": "string"
                },
                "manufacture": {
                    "type": "string"
                },
                "medicinal_props": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "origin": {
                    "type": "string"
                },
                "packing_specs": {
                    "type": "string"
                },
                "payment_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_code": {
                    "type": "string"
                },
                "product_status": {
                    "type": "integer",
                        "format": "int32"
                },
                "product_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "receipt_status": {
                    "type": "boolean"
                },
                "registered_code": {
                    "type": "string"
                },
                "reserve": {
                    "type": "integer",
                        "format": "int32"
                },
                "sale_price": {
                    "type": "integer",
                        "format": "int64"
                },
                "sale_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "short_description": {
                    "type": "string"
                },
                "thumbnail": {
                    "type": "string"
                },
                "trademark": {
                    "type": "integer",
                        "format": "int64"
                },
                "unit": {
                    "type": "string"
                },
                "vat_applied": {
                    "type": "boolean"
                },
                "vat_value": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.CreateTrademarkAdvertiseRequest": {
            "title": "CreateTrademarkAdvertiseRequest",
                "type": "object",
                    "properties": {
                "trademarks": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.TrademarkAdvertise"
                    }
                }
            }
        },
        "presenter.Customer": {
            "title": "Customer",
                "type": "object",
                    "properties": {
                "id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.CustomerCart": {
            "title": "CustomerCart",
                "type": "object",
                    "properties": {
                "accumulation": {
                    "type": "integer",
                        "format": "int64"
                },
                "customer_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "customer_reward": {
                    "$ref": "#/definitions/presenter.CustomerReward"
                },
                "discount_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "discount_point": {
                    "type": "integer",
                        "format": "int64"
                },
                "fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "grand_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "handling_fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "invoice": {
                    "$ref": "#/definitions/presenter.InvoiceInfo"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.CVDistributor"
                    }
                },
                "saving": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "shipping_address": {
                    "$ref": "#/definitions/presenter.AddressBook"
                },
                "sub_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "taxes": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_accumulation": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.CustomerGroup": {
            "title": "CustomerGroup",
                "type": "object",
                    "properties": {
                "created_at": {
                    "type": "string"
                },
                "customers": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Pharmacy"
                    }
                },
                "description": {
                    "type": "string"
                },
                "distributor": {
                    "$ref": "#/definitions/presenter.Distributor"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "name": {
                    "type": "string"
                },
                "status": {
                    "$ref": "#/definitions/presenter.GroupStatus"
                },
                "updated_at": {
                    "type": "string"
                }
            }
        },
        "presenter.CustomerInGroupRequest": {
            "title": "CustomerInGroupRequest",
                "type": "object",
                    "properties": {
                "customers": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Customer"
                    }
                }
            }
        },
        "presenter.CustomerPurchasing": {
            "title": "CustomerPurchasing",
                "type": "object",
                    "properties": {
                "approved_at": {
                    "type": "string"
                },
                "at_timelines": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.AmountAndTx"
                    }
                },
                "oldest_order_created_at": {
                    "type": "string"
                },
                "oldest_order_id": {
                    "type": "string"
                },
                "total_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_txs": {
                    "type": "integer",
                        "format": "int64"
                },
                "un_total_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "un_total_txs": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.CustomerReward": {
            "title": "CustomerReward",
                "type": "object",
                    "properties": {
                "applicable": {
                    "type": "integer",
                        "format": "int64"
                },
                "total": {
                    "type": "integer",
                        "format": "int64"
                },
                "used": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.DiffEls": {
            "title": "DiffEls",
                "type": "object",
                    "properties": {
                "diff": {
                    "type": "integer",
                        "format": "int64"
                },
                "percent": {
                    "type": "string"
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                },
                "resources": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.DiffPrice": {
            "title": "DiffPrice",
                "type": "object",
                    "properties": {
                "date": {
                    "type": "string"
                },
                "diff": {
                    "type": "integer",
                        "format": "int64"
                },
                "percent": {
                    "type": "string"
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.DiffPriceEls": {
            "title": "DiffPriceEls",
                "type": "object",
                    "properties": {
                "date": {
                    "type": "string"
                },
                "diff": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.DiffEls"
                    }
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                },
                "sale_price": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.DiffPriceResources": {
            "title": "DiffPriceResources",
                "type": "object",
                    "properties": {
                "diff_price": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.DiffPrice"
                    }
                },
                "manufacture": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "packing_specs": {
                    "type": "string"
                },
                "product_group": {
                    "type": "string"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "registered_code": {
                    "type": "string"
                },
                "resource": {
                    "type": "string"
                },
                "type": {
                    "type": "string"
                },
                "unit": {
                    "type": "string"
                }
            }
        },
        "presenter.DiscountBuyingProductsMeta": {
            "title": "DiscountBuyingProductsMeta",
                "type": "object",
                    "properties": {
                "applied_products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ProductSnapCamp"
                    }
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.DiscountBuyingProductsMetaItem"
                    }
                }
            }
        },
        "presenter.DiscountBuyingProductsMetaItem": {
            "title": "DiscountBuyingProductsMetaItem",
                "type": "object",
                    "properties": {
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "discount_limit": {
                    "type": "integer",
                        "format": "int32"
                },
                "discount_rate": {
                    "type": "integer",
                        "format": "int32"
                },
                "is_order_valid": {
                    "type": "boolean"
                },
                "min_applied_qty": {
                    "type": "integer",
                        "format": "int32"
                },
                "order_limit": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.DiscountOrderMeta": {
            "title": "DiscountOrderMeta",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.DiscountOrderMetaItem"
                    }
                }
            }
        },
        "presenter.DiscountOrderMetaItem": {
            "title": "DiscountOrderMetaItem",
                "type": "object",
                    "properties": {
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "discount_limit": {
                    "type": "integer",
                        "format": "int32"
                },
                "discount_rate": {
                    "type": "integer",
                        "format": "int32"
                },
                "is_order_valid": {
                    "type": "boolean"
                },
                "order_limit": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.Distributor": {
            "title": "Distributor",
                "type": "object",
                    "properties": {
                "address": {
                    "type": "string"
                },
                "authorized_person": {
                    "description": "corresponding with the AuthorizedPerson field of Phamacy",
                        "type": "array",
                            "items": {
                        "$ref": "#/definitions/presenter.Pharmacy"
                    }
                },
                "bank_account": {
                    "type": "string"
                },
                "business_registration_cert_images": {
                    "type": "string"
                },
                "create_at": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "group_telegram": {
                    "type": "string"
                },
                "hotdeal_priority": {
                    "type": "integer",
                        "format": "int32"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "logo": {
                    "type": "string"
                },
                "merchant_id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "name_en": {
                    "type": "string"
                },
                "nick_name": {
                    "type": "string"
                },
                "note": {
                    "type": "string"
                },
                "order_limit": {
                    "type": "integer",
                        "format": "int64"
                },
                "payment_enabled": {
                    "type": "boolean"
                },
                "phone": {
                    "type": "string"
                },
                "product_display_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "registered_business_address": {
                    "type": "string"
                },
                "representative": {
                    "type": "string"
                },
                "sort": {
                    "type": "integer",
                        "format": "int32"
                },
                "status": {
                    "type": "integer",
                        "format": "int32"
                },
                "tax_number": {
                    "type": "string"
                },
                "type": {
                    "$ref": "#/definitions/presenter.DistributorType"
                },
                "update_at": {
                    "type": "string"
                },
                "upload_file": {
                    "type": "string"
                }
            }
        },
        "presenter.DistributorBalance": {
            "title": "DistributorBalance",
                "type": "object",
                    "properties": {
                "accounts": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.BalanceAccount"
                    }
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "logo": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                }
            }
        },
        "presenter.DistributorCampaign": {
            "title": "DistributorCampaign",
                "type": "object",
                    "properties": {
                "business_registration_cert_images": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "logo": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "name_en": {
                    "type": "string"
                },
                "nick_name": {
                    "type": "string"
                },
                "registered_business_address": {
                    "type": "string"
                },
                "upload_file": {
                    "type": "string"
                }
            }
        },
        "presenter.DistributorCreateMultiOrdersRequest": {
            "title": "DistributorCreateMultiOrdersRequest",
                "type": "object",
                    "properties": {
                "address": {
                    "type": "string"
                },
                "customer_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "invoice": {
                    "type": "string"
                },
                "orders": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.CreateOrderInfo"
                    }
                },
                "saler_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.DistributorCreateMultiOrdersResponse": {
            "title": "DistributorCreateMultiOrdersResponse",
                "type": "object",
                    "properties": {
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.OrderError"
                    }
                },
                "orders": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.OrderSuccess"
                    }
                }
            }
        },
        "presenter.DistributorRef": {
            "title": "DistributorRef",
                "type": "object",
                    "properties": {
                "address": {
                    "type": "string"
                },
                "bank_account": {
                    "type": "string"
                },
                "business_registration_cert_images": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "group_telegram": {
                    "type": "string"
                },
                "hotdeal_priority": {
                    "type": "integer",
                        "format": "int32"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "logo": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "name_en": {
                    "type": "string"
                },
                "nick_name": {
                    "type": "string"
                },
                "note": {
                    "type": "string"
                },
                "payment_enabled": {
                    "type": "boolean"
                },
                "phone": {
                    "type": "string"
                },
                "product_display_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "registered_business_address": {
                    "type": "string"
                },
                "representative": {
                    "type": "string"
                },
                "sort": {
                    "type": "integer",
                        "format": "int32"
                },
                "status": {
                    "type": "integer",
                        "format": "int32"
                },
                "tax_number": {
                    "type": "string"
                },
                "type": {
                    "type": "integer",
                        "format": "int32"
                },
                "upload_file": {
                    "type": "string"
                }
            }
        },
        "presenter.DistributorType": {
            "title": "DistributorType",
                "format": "int32",
                    "type": "integer"
        },
        "presenter.District": {
            "title": "District",
                "type": "object",
                    "properties": {
                "district_type": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "province_id": {
                    "type": "string"
                }
            }
        },
        "presenter.ElasticProductDoc": {
            "title": "ElasticProductDoc",
                "type": "object",
                    "properties": {
                "acronyms_name": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "distribution_unit": {
                    "type": "string"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "dosage_forms": {
                    "type": "string"
                },
                "images": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "main_ingredient": {
                    "type": "string"
                },
                "manufacture": {
                    "type": "string"
                },
                "medicinal_props": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "origin": {
                    "type": "string"
                },
                "packing_specs": {
                    "type": "string"
                },
                "payment_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_status": {
                    "type": "integer",
                        "format": "int32"
                },
                "product_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "registered_code": {
                    "type": "string"
                },
                "sale_price": {
                    "type": "integer",
                        "format": "int64"
                },
                "short_description": {
                    "type": "string"
                },
                "trademark": {
                    "type": "integer",
                        "format": "int64"
                },
                "transform_name": {
                    "type": "string"
                },
                "unit": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                },
                "vat_applied": {
                    "type": "boolean"
                },
                "vat_value": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.ErrorResponse": {
            "title": "ErrorResponse",
                "type": "object",
                    "properties": {
                "error": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            }
        },
        "presenter.ExportDataByUser": {
            "title": "ExportDataByUser",
                "type": "object",
                    "properties": {
                "payment_txs": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ExportPaymentTx"
                    }
                },
                "point_txs": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ExportPaymentTx"
                    }
                },
                "topup_txs": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ExportTopupTx"
                    }
                },
                "total_payment_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_payment_txs": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_point_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_point_txs": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_topup_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_topup_txs": {
                    "type": "integer",
                        "format": "int64"
                },
                "user": {
                    "$ref": "#/definitions/presenter.UserReport"
                }
            }
        },
        "presenter.ExportDataByUsersResponse": {
            "title": "ExportDataByUsersResponse",
                "type": "object",
                    "properties": {
                "distributors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Distributor"
                    }
                },
                "records": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ExportDataByUser"
                    }
                },
                "total_payment_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_payment_txs": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_point_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_point_txs": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_topup_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_topup_txs": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.ExportPaymentTx": {
            "title": "ExportPaymentTx",
                "type": "object",
                    "properties": {
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "created_at": {
                    "type": "string"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "order_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "payment_at": {
                    "type": "string"
                },
                "payment_method": {
                    "type": "string"
                }
            }
        },
        "presenter.ExportTopupTx": {
            "title": "ExportTopupTx",
                "type": "object",
                    "properties": {
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "created_at": {
                    "type": "string"
                },
                "source": {
                    "type": "string"
                },
                "tx_id": {
                    "type": "string"
                }
            }
        },
        "presenter.GCloudStorageMedia": {
            "title": "GCloudStorageMedia",
                "type": "object",
                    "properties": {
                "file_name": {
                    "type": "string"
                },
                "gcs_media_link": {
                    "type": "string"
                },
                "media_link": {
                    "type": "string"
                }
            }
        },
        "presenter.GetAccessTokenRequest": {
            "title": "GetAccessTokenRequest",
                "type": "object",
                    "properties": {
                "CorporationID": {
                    "type": "string"
                },
                "Password": {
                    "type": "string"
                },
                "TransactionType": {
                    "type": "string"
                },
                "Username": {
                    "type": "string"
                }
            }
        },
        "presenter.GetCategoryResponse": {
            "title": "GetCategoryResponse",
                "type": "object",
                    "properties": {
                "category": {
                    "$ref": "#/definitions/presenter.Category"
                }
            }
        },
        "presenter.GetChargeFeeResponse": {
            "title": "GetChargeFeeResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.GetChargeFeeResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.GetChargeFeeResponseData": {
            "title": "GetChargeFeeResponseData",
                "type": "object",
                    "properties": {
                "fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "vat": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.GetCustomerInfoResponse": {
            "title": "GetCustomerInfoResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.GetCustomerInfoResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.GetCustomerInfoResponseData": {
            "title": "GetCustomerInfoResponseData",
                "type": "object",
                    "properties": {
                "customerName": {
                    "type": "string"
                },
                "dateOfBirth": {
                    "type": "string",
                        "format": "datetime"
                },
                "email": {
                    "type": "string"
                },
                "identifyType": {
                    "type": "string"
                },
                "identityCardNumber": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                }
            }
        },
        "presenter.GetListOrderResponse": {
            "title": "GetListOrderResponse",
                "type": "object",
                    "properties": {
                "next": {
                    "type": "string"
                },
                "orders": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Order"
                    }
                }
            }
        },
        "presenter.GetLoanInfoResponse": {
            "title": "GetLoanInfoResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.GetLoanInfoResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.GetLoanInfoResponseData": {
            "title": "GetLoanInfoResponseData",
                "type": "object",
                    "properties": {
                "Info": {
                    "$ref": "#/definitions/presenter.LoanInfo"
                },
                "Status": {
                    "type": "string"
                }
            }
        },
        "presenter.GetOneOrderResponse": {
            "title": "GetOneOrderResponse",
                "type": "object",
                    "properties": {
                "order": {
                    "$ref": "#/definitions/presenter.Order"
                }
            }
        },
        "presenter.GetOrderItemChangeHistoryResponse": {
            "title": "GetOrderItemChangeHistoryResponse",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.OrderItemChange"
                    }
                },
                "next_cursor": {
                    "type": "string"
                },
                "order_id": {
                    "type": "string"
                }
            }
        },
        "presenter.GetProposalsResponse": {
            "title": "GetProposalsResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.GetProposalsResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.GetProposalsResponseData": {
            "title": "GetProposalsResponseData",
                "type": "object",
                    "properties": {
                "interestRate": {
                    "type": "string"
                },
                "loanTerm": {
                    "type": "string"
                },
                "maxLimit": {
                    "type": "integer",
                        "format": "int64"
                },
                "minLimit": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.GetReferralProfileResponse": {
            "title": "GetReferralProfileResponse",
                "type": "object",
                    "properties": {
                "profile": {
                    "$ref": "#/definitions/presenter.ReferralProfile"
                }
            }
        },
        "presenter.GetStateHistoryResponse": {
            "title": "GetStateHistoryResponse",
                "type": "object",
                    "properties": {
                "order_id": {
                    "type": "string"
                },
                "state_histories": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.StateHistory"
                    }
                }
            }
        },
        "presenter.GiftBuyingProductsMeta": {
            "title": "GiftBuyingProductsMeta",
                "type": "object",
                    "properties": {
                "applied_products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ProductSnapCamp"
                    }
                },
                "is_gift_selection": {
                    "type": "boolean"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.GiftBuyingProductsMetaItem"
                    }
                }
            }
        },
        "presenter.GiftBuyingProductsMetaItem": {
            "title": "GiftBuyingProductsMetaItem",
                "type": "object",
                    "properties": {
                "gift_selection_limit": {
                    "type": "integer",
                        "format": "int32"
                },
                "gifts": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.GiftItem"
                    }
                },
                "is_order_valid": {
                    "type": "boolean"
                },
                "min_applied_qty": {
                    "type": "integer",
                        "format": "int32"
                },
                "order_limit": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.GiftItem": {
            "title": "GiftItem",
                "type": "object",
                    "properties": {
                "product": {
                    "$ref": "#/definitions/presenter.ProductSnapCamp"
                },
                "quantity": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.GiftOrderMeta": {
            "title": "GiftOrderMeta",
                "type": "object",
                    "properties": {
                "is_gift_selection": {
                    "type": "boolean"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.GiftOrderMetaItem"
                    }
                }
            }
        },
        "presenter.GiftOrderMetaItem": {
            "title": "GiftOrderMetaItem",
                "type": "object",
                    "properties": {
                "gift_selection_limit": {
                    "type": "integer",
                        "format": "int32"
                },
                "gifts": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.GiftItem"
                    }
                },
                "is_order_valid": {
                    "type": "boolean"
                },
                "order_limit": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.GroupIdOfTelegram": {
            "title": "GroupIdOfTelegram",
                "type": "object",
                    "properties": {
                "bot_name": {
                    "type": "string"
                },
                "group_id": {
                    "type": "string"
                },
                "group_name": {
                    "type": "string"
                }
            }
        },
        "presenter.GroupStatus": {
            "title": "GroupStatus",
                "format": "int32",
                    "type": "integer"
        },
        "presenter.HistogramCashinResponse": {
            "title": "HistogramCashinResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.RevenueTimePoint"
                    }
                },
                "total_income": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_net_income": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_tx": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.HistogramDailyTrackingItem": {
            "title": "HistogramDailyTrackingItem",
                "type": "object",
                    "properties": {
                "date": {
                    "type": "string"
                },
                "new_users": {
                    "type": "integer",
                        "format": "int64"
                },
                "new_verified_users": {
                    "type": "integer",
                        "format": "int64"
                },
                "online_users": {
                    "type": "integer",
                        "format": "int64"
                },
                "ordered_users": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.HistogramDailyTrackingResponse": {
            "title": "HistogramDailyTrackingResponse",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.HistogramDailyTrackingItem"
                    }
                },
                "new_users": {
                    "type": "integer",
                        "format": "int64"
                },
                "new_verified_users": {
                    "type": "integer",
                        "format": "int64"
                },
                "online_users": {
                    "type": "integer",
                        "format": "int64"
                },
                "ordered_users": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.HistogramQuantityData": {
            "title": "HistogramQuantityData",
                "type": "object",
                    "properties": {
                "count": {
                    "type": "integer",
                        "format": "int64"
                },
                "data": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.StatsQuantity"
                    }
                },
                "time_point": {
                    "type": "string"
                }
            }
        },
        "presenter.HistogramRevenueResponse": {
            "title": "HistogramRevenueResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.RevenueTimePoint"
                    }
                },
                "total_income": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_net_income": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_tx": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_users": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.HistogramStatusResponse": {
            "title": "HistogramStatusResponse",
                "type": "object",
                    "properties": {
                "count": {
                    "type": "integer",
                        "format": "int64"
                },
                "data": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.HistogramQuantityData"
                    }
                }
            }
        },
        "presenter.HistogramVoucher": {
            "title": "HistogramVoucher",
                "type": "object",
                    "properties": {
                "stats": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.StatsAmountData"
                    }
                },
                "time_point": {
                    "type": "string"
                }
            }
        },
        "presenter.HistogramVoucherResponse": {
            "title": "HistogramVoucherResponse",
                "type": "object",
                    "properties": {
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.HistogramVoucher"
                    }
                },
                "stats": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.StatsAmountData"
                    }
                }
            }
        },
        "presenter.ImportResourcesProduct": {
            "title": "ImportResourcesProduct",
                "type": "object",
                    "properties": {
                "imports": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ResourcesProduct"
                    }
                }
            }
        },
        "presenter.InfoChange": {
            "title": "InfoChange",
                "type": "object",
                    "properties": {
                "changed_by": {
                    "type": "string"
                },
                "changed_time": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "from": {
                    "$ref": "#/definitions/presenter.OrderItem"
                },
                "noted": {
                    "type": "string"
                },
                "to": {
                    "$ref": "#/definitions/presenter.OrderItem"
                },
                "type": {
                    "type": "string"
                }
            }
        },
        "presenter.InvoiceInfo": {
            "title": "InvoiceInfo",
                "type": "object",
                    "properties": {
                "company_address": {
                    "type": "string"
                },
                "company_name": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "fullname": {
                    "type": "string"
                },
                "mail": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "send_address": {
                    "type": "string"
                },
                "tax_number": {
                    "type": "string"
                }
            }
        },
        "presenter.LinkProductCategoriesRequest": {
            "title": "LinkProductCategoriesRequest",
                "type": "object",
                    "properties": {
                "categories": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/127583.0xc000e93860.false"
                    }
                }
            }
        },
        "presenter.LinkProductDistributorsRequest": {
            "title": "LinkProductDistributorsRequest",
                "type": "object",
                    "properties": {
                "distributors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/127914.0xc000e93980.false"
                    }
                }
            }
        },
        "presenter.LinkProductSuppliersRequest": {
            "title": "LinkProductSuppliersRequest",
                "type": "object",
                    "properties": {
                "suppliers": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/127750.0xc000e938f0.false"
                    }
                }
            }
        },
        "presenter.LinkResourceConfirmRequest": {
            "title": "LinkResourceConfirmRequest",
                "type": "object",
                    "properties": {
                "otp": {
                    "type": "string"
                },
                "request_id": {
                    "type": "string"
                }
            }
        },
        "presenter.LinkResourceConfirmResponse": {
            "title": "LinkResourceConfirmResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.LinkResourceConfirmResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.LinkResourceConfirmResponseData": {
            "title": "LinkResourceConfirmResponseData",
                "type": "object",
                    "properties": {
                "phone": {
                    "type": "string"
                },
                "resource_id": {
                    "type": "string"
                }
            }
        },
        "presenter.LinkResourceRequestResponse": {
            "title": "LinkResourceRequestResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.LinkResourceRequestResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.LinkResourceRequestResponseData": {
            "title": "LinkResourceRequestResponseData",
                "type": "object",
                    "properties": {
                "request_id": {
                    "type": "string"
                }
            }
        },
        "presenter.ListAddressBooksResponse": {
            "title": "ListAddressBooksResponse",
                "type": "object",
                    "properties": {
                "addresses": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.AddressBook"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListAdsBannersResponse": {
            "title": "ListAdsBannersResponse",
                "type": "object",
                    "properties": {
                "ads_banners": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.AdsBanner"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListBannersResponse": {
            "title": "ListBannersResponse",
                "type": "object",
                    "properties": {
                "banners": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Banner"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListBaseProduct": {
            "title": "ListBaseProduct",
                "type": "object"
        },
        "presenter.ListCampaignSetting": {
            "title": "ListCampaignSetting",
                "type": "object",
                    "properties": {
                "campaign_settings": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.CampaignSetting"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListCampaignsResponse": {
            "title": "ListCampaignsResponse",
                "type": "object",
                    "properties": {
                "campaigns": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Campaign"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListCategoriesResponse": {
            "title": "ListCategoriesResponse",
                "type": "object",
                    "properties": {
                "categories": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Category"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListCommissionResponse": {
            "title": "ListCommissionResponse",
                "type": "object",
                    "properties": {
                "commissions": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Commission"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListDistributorsResponse": {
            "title": "ListDistributorsResponse",
                "type": "object",
                    "properties": {
                "distributors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Distributor"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListDistrict": {
            "title": "ListDistrict",
                "type": "object",
                    "properties": {
                "districts": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.District"
                    }
                }
            }
        },
        "presenter.ListGroupIdRespone": {
            "title": "ListGroupIdRespone",
                "type": "object",
                    "properties": {
                "data": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.GroupIdOfTelegram"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListImportResourcesProduct": {
            "title": "ListImportResourcesProduct",
                "type": "object",
                    "properties": {
                "imports": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.DiffPriceResources"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListMappingResourcesProduct": {
            "title": "ListMappingResourcesProduct",
                "type": "object",
                    "properties": {
                "mappings": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.MappingResources"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListNotiResponse": {
            "title": "ListNotiResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Notification"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListNotiScheduler": {
            "title": "ListNotiScheduler",
                "type": "object",
                    "properties": {
                "noti_schedulers": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.NotiSchedulerRequest"
                    }
                }
            }
        },
        "presenter.ListNotiSschedulerResponse": {
            "title": "ListNotiSschedulerResponse",
                "type": "object",
                    "properties": {
                "noti_schedulers": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.NotiScheduler"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListOrdersBackOfficeResponse": {
            "title": "ListOrdersBackOfficeResponse",
                "type": "object",
                    "properties": {
                "orders": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Order"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ListPaymentAccountResponse": {
            "title": "ListPaymentAccountResponse",
                "type": "object",
                    "properties": {
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "payment_accounts": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.PaymentAccount"
                    }
                }
            }
        },
        "presenter.ListPharmaciesResponse": {
            "title": "ListPharmaciesResponse",
                "type": "object",
                    "properties": {
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "pharmacies": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Pharmacy"
                    }
                }
            }
        },
        "presenter.ListPricePolicyResponse": {
            "title": "ListPricePolicyResponse",
                "type": "object",
                    "properties": {
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "policies": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.PricePolicy"
                    }
                }
            }
        },
        "presenter.ListProductsGroupResponse": {
            "title": "ListProductsGroupResponse",
                "type": "object",
                    "properties": {
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "products_group": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ProductsGroup"
                    }
                }
            }
        },
        "presenter.ListProductsResponse": {
            "title": "ListProductsResponse",
                "type": "object",
                    "properties": {
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Product"
                    }
                }
            }
        },
        "presenter.ListProvince": {
            "title": "ListProvince",
                "type": "object",
                    "properties": {
                "provinces": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Province"
                    }
                }
            }
        },
        "presenter.ListReponse": {
            "title": "ListReponse",
                "type": "object"
        },
        "presenter.ListResponse": {
            "title": "ListResponse",
                "type": "object",
                    "properties": {
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "propose": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Propose"
                    }
                }
            }
        },
        "presenter.ListSalesGroupResponse": {
            "title": "ListSalesGroupResponse",
                "type": "object",
                    "properties": {
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "sales_group": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.SalesGroup"
                    }
                }
            }
        },
        "presenter.ListSalesResponse": {
            "title": "ListSalesResponse",
                "type": "object",
                    "properties": {
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "sales": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Sale"
                    }
                }
            }
        },
        "presenter.ListSuppliersResponse": {
            "title": "ListSuppliersResponse",
                "type": "object",
                    "properties": {
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "suppliers": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Supplier"
                    }
                }
            }
        },
        "presenter.ListTrademarksResponse": {
            "title": "ListTrademarksResponse",
                "type": "object",
                    "properties": {
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "trademarks": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Trademark"
                    }
                }
            }
        },
        "presenter.ListVersion": {
            "title": "ListVersion",
                "type": "object",
                    "properties": {
                "versions": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.VersionRequest"
                    }
                }
            }
        },
        "presenter.ListVouchersResponse": {
            "title": "ListVouchersResponse",
                "type": "object",
                    "properties": {
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "vouchers": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Voucher"
                    }
                }
            }
        },
        "presenter.ListWard": {
            "title": "ListWard",
                "type": "object",
                    "properties": {
                "wards": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Ward"
                    }
                }
            }
        },
        "presenter.ListingRefereeRequest": {
            "title": "ListingRefereeRequest",
                "type": "object",
                    "properties": {
                "uids": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                }
            }
        },
        "presenter.ListingRefereeResponse": {
            "title": "ListingRefereeResponse",
                "type": "object",
                    "properties": {
                "item": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.RefereeInfo"
                    }
                }
            }
        },
        "presenter.ListingStatusItem": {
            "title": "ListingStatusItem",
                "type": "object",
                    "properties": {
                "status": {
                    "type": "integer",
                        "format": "int32"
                },
                "text": {
                    "type": "string"
                },
                "total": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.ListingStatusResponse": {
            "title": "ListingStatusResponse",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ListingStatusItem"
                    }
                },
                "total": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.LoanConfirmRequest": {
            "title": "LoanConfirmRequest",
                "type": "object",
                    "properties": {
                "otp": {
                    "type": "string"
                },
                "request_id": {
                    "type": "string"
                }
            }
        },
        "presenter.LoanConfirmResponse": {
            "title": "LoanConfirmResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.LoanConfirmResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.LoanConfirmResponseData": {
            "title": "LoanConfirmResponseData",
                "type": "object",
                    "properties": {
                "accountNumber": {
                    "type": "string"
                },
                "contractdId": {
                    "type": "string"
                },
                "error": {
                    "$ref": "#/definitions/entity.Error"
                },
                "interestRate": {
                    "type": "string"
                },
                "loanTerm": {
                    "type": "string"
                },
                "startDate": {
                    "type": "string",
                        "format": "datetime"
                }
            }
        },
        "presenter.LoanInfo": {
            "title": "LoanInfo",
                "type": "object",
                    "properties": {
                "chargeAccount": {
                    "type": "string"
                },
                "endDate": {
                    "type": "string",
                        "format": "datetime"
                },
                "feeOverdue": {
                    "type": "integer",
                        "format": "int64"
                },
                "interestAccount": {
                    "type": "string"
                },
                "interestAmount": {
                    "type": "integer",
                        "format": "int64"
                },
                "interestOverdue": {
                    "type": "integer",
                        "format": "int64"
                },
                "interestRate": {
                    "type": "string"
                },
                "limitAmount": {
                    "type": "integer",
                        "format": "int64"
                },
                "loanAmount": {
                    "type": "integer",
                        "format": "int64"
                },
                "loanId": {
                    "type": "string"
                },
                "loanTerm": {
                    "type": "string"
                },
                "principalAccount": {
                    "type": "string"
                },
                "principalOverdue": {
                    "type": "integer",
                        "format": "int64"
                },
                "startDate": {
                    "type": "string",
                        "format": "datetime"
                },
                "totalOverdueAmount": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.LoanRequestRequest": {
            "title": "LoanRequestRequest",
                "type": "object",
                    "properties": {
                "loan_amount": {
                    "type": "integer",
                        "format": "int32"
                },
                "loan_term": {
                    "type": "string"
                },
                "relationship_infos": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.RelationshipInfo"
                    }
                }
            }
        },
        "presenter.LoanRequestResponse": {
            "title": "LoanRequestResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.LoanRequestResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.LoanRequestResponseData": {
            "title": "LoanRequestResponseData",
                "type": "object",
                    "properties": {
                "request_id": {
                    "type": "string"
                }
            }
        },
        "presenter.LogEventResponse": {
            "title": "LogEventResponse",
                "type": "object",
                    "properties": {
                "count": {
                    "type": "integer",
                        "format": "int32"
                },
                "data": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.LogInfo"
                    }
                }
            }
        },
        "presenter.LogInfo": {
            "title": "LogInfo",
                "type": "object",
                    "properties": {
                "created_date": {
                    "type": "string"
                },
                "data": {
                    "type": "string"
                },
                "ref_id": {
                    "type": "string"
                },
                "type": {
                    "type": "string"
                },
                "user_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.ManualTopUpAccumulatedResponse": {
            "title": "ManualTopUpAccumulatedResponse",
                "type": "object",
                    "properties": {
                "message": {
                    "type": "string"
                }
            }
        },
        "presenter.MappingResources": {
            "title": "MappingResources",
                "type": "object",
                    "properties": {
                "diff_price": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.DiffPriceEls"
                    }
                },
                "duoc_vuong": {
                    "$ref": "#/definitions/presenter.ResourcesInfo"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "neo": {
                    "$ref": "#/definitions/presenter.Neo"
                },
                "poc": {
                    "$ref": "#/definitions/presenter.ResourcesInfo"
                },
                "si": {
                    "$ref": "#/definitions/presenter.ResourcesInfo"
                }
            }
        },
        "presenter.Neo": {
            "title": "Neo",
                "type": "object",
                    "properties": {
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "distributor_name": {
                    "type": "string"
                },
                "manufacture": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "packing_specs": {
                    "type": "string"
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "registered_code": {
                    "type": "string"
                },
                "sale_price": {
                    "type": "integer",
                        "format": "int64"
                },
                "unit": {
                    "type": "string"
                }
            }
        },
        "presenter.NewProduct": {
            "title": "NewProduct",
                "type": "object",
                    "properties": {
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_options": {
                    "$ref": "#/definitions/presenter.ProductOptions"
                },
                "qty": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.NewProductError": {
            "title": "NewProductError",
                "type": "object",
                    "properties": {
                "msg": {
                    "type": "string"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.NotiScheduler": {
            "title": "NotiScheduler",
                "type": "object",
                    "properties": {
                "campaign": {
                    "$ref": "#/definitions/presenter.Campaign"
                },
                "create_at": {
                    "type": "string"
                },
                "exec_time": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "message": {
                    "type": "string"
                },
                "status": {
                    "$ref": "#/definitions/presenter.NotiStatus"
                },
                "tittle": {
                    "type": "string"
                },
                "update_at": {
                    "type": "string"
                }
            }
        },
        "presenter.NotiSchedulerRequest": {
            "title": "NotiSchedulerRequest",
                "type": "object",
                    "properties": {
                "campaign_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "exec_time": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "message": {
                    "type": "string"
                },
                "status": {
                    "$ref": "#/definitions/presenter.NotiStatus"
                },
                "tittle": {
                    "type": "string"
                }
            }
        },
        "presenter.NotiStatus": {
            "title": "NotiStatus",
                "format": "int32",
                    "type": "integer"
        },
        "presenter.Notification": {
            "title": "Notification",
                "type": "object",
                    "properties": {
                "action": {
                    "type": "string"
                },
                "category": {
                    "type": "string"
                },
                "created_date": {
                    "type": "string",
                        "format": "datetime"
                },
                "data": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "is_read": {
                    "type": "boolean"
                },
                "message": {
                    "type": "string"
                },
                "read_time": {
                    "type": "string"
                },
                "title": {
                    "type": "string"
                },
                "user_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.Option": {
            "title": "Option",
                "type": "object"
        },
        "presenter.Order": {
            "title": "Order",
                "type": "object",
                    "properties": {
                "address": {
                    "type": "string"
                },
                "cancelled_reason": {
                    "type": "string"
                },
                "cancelled_time": {
                    "type": "string"
                },
                "completed_time": {
                    "type": "string"
                },
                "created_time": {
                    "type": "string"
                },
                "discount": {
                    "type": "integer",
                        "format": "int64"
                },
                "distributor": {
                    "$ref": "#/definitions/presenter.Distributor"
                },
                "fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "fulfillment_status": {
                    "type": "integer",
                        "format": "int64"
                },
                "invoice": {
                    "type": "string"
                },
                "is_cancelable": {
                    "type": "boolean"
                },
                "is_paymentable": {
                    "type": "boolean"
                },
                "items": {
                    "type": "string"
                },
                "metadata": {
                    "$ref": "#/definitions/presenter.OrderMetaData"
                },
                "next_status": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.PairStatus"
                    }
                },
                "order_id": {
                    "type": "string"
                },
                "order_status": {
                    "type": "integer",
                        "format": "int64"
                },
                "paid_time": {
                    "type": "string"
                },
                "payment_status": {
                    "type": "integer",
                        "format": "int64"
                },
                "payment_type": {
                    "type": "string"
                },
                "payment_type_name": {
                    "type": "string"
                },
                "product_payment_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "promotion": {
                    "type": "string"
                },
                "ref": {
                    "$ref": "#/definitions/presenter.RefInfo"
                },
                "shipped_time": {
                    "type": "string"
                },
                "shipping_method": {
                    "type": "string"
                },
                "state_histories": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.StateHistory"
                    }
                },
                "supplier": {
                    "type": "integer",
                        "format": "int64"
                },
                "surcharge": {
                    "type": "integer",
                        "format": "int64"
                },
                "sys_discount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_sale": {
                    "type": "integer",
                        "format": "int64"
                },
                "tracking_info": {
                    "$ref": "#/definitions/presenter.TrackingInfo"
                },
                "trans_id": {
                    "type": "string"
                },
                "updated_time": {
                    "type": "string"
                },
                "user": {
                    "$ref": "#/definitions/presenter.OrderCustomer"
                },
                "user_id": {
                    "type": "string"
                }
            }
        },
        "presenter.OrderCustomer": {
            "title": "OrderCustomer",
                "type": "object",
                    "properties": {
                "balance": {
                    "type": "integer",
                        "format": "int64"
                },
                "bank_acc": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "full_name": {
                    "type": "string"
                },
                "gender": {
                    "type": "string"
                },
                "national_id": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "user_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "user_name": {
                    "type": "string"
                }
            }
        },
        "presenter.OrderError": {
            "title": "OrderError",
                "type": "object",
                    "properties": {
                "code": {
                    "type": "string"
                },
                "distributor": {
                    "$ref": "#/definitions/presenter.Distributor"
                },
                "info": {
                    "$ref": "#/definitions/presenter.CreateOrderInfo"
                },
                "msg": {
                    "type": "string"
                },
                "payment_method": {
                    "$ref": "#/definitions/presenter.PaymentMethod"
                }
            }
        },
        "presenter.OrderItem": {
            "title": "OrderItem",
                "type": "object",
                    "properties": {
                "addons": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Addon"
                    }
                },
                "attributes": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.AttributeP"
                    }
                },
                "combo": {
                    "type": "string"
                },
                "desc": {
                    "type": "string"
                },
                "discount_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "id": {
                    "type": "string"
                },
                "image": {
                    "type": "string"
                },
                "is_vat": {
                    "type": "boolean"
                },
                "origin_price": {
                    "type": "integer",
                        "format": "int64"
                },
                "payment_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_name": {
                    "type": "string"
                },
                "product_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "qty": {
                    "type": "integer",
                        "format": "int32"
                },
                "selected_at": {
                    "type": "integer",
                        "format": "int64"
                },
                "sub_total": {
                    "type": "integer",
                        "format": "int64"
                },
                "supplier_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "vat": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.OrderItemChange": {
            "title": "OrderItemChange",
                "type": "object",
                    "properties": {
                "is_removed": {
                    "type": "boolean"
                },
                "item_id": {
                    "type": "string"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.InfoChange"
                    }
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.OrderMetaData": {
            "title": "OrderMetaData",
                "type": "object",
                    "properties": {
                "accumulation": {
                    "type": "integer",
                        "format": "int64"
                },
                "neo_voucher": {
                    "type": "string"
                },
                "noted": {
                    "type": "string"
                },
                "promo_products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.PromoProduct"
                    }
                },
                "promotions": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Campaign"
                    }
                },
                "sys_discount": {
                    "type": "integer",
                        "format": "int64"
                },
                "voucher": {
                    "type": "string"
                }
            }
        },
        "presenter.OrderPaymentRequest": {
            "title": "OrderPaymentRequest",
                "type": "object",
                    "properties": {
                "order_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "payment_method_code": {
                    "type": "string"
                }
            }
        },
        "presenter.OrderPaymentResponse": {
            "title": "OrderPaymentResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.OrderPaymentResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.OrderPaymentResponseData": {
            "title": "OrderPaymentResponseData",
                "type": "object",
                    "properties": {
                "trans_id": {
                    "type": "string"
                }
            }
        },
        "presenter.OrderProduct": {
            "title": "OrderProduct",
                "type": "object",
                    "properties": {
                "desc": {
                    "type": "string"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "images": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                }
            }
        },
        "presenter.OrderSuccess": {
            "title": "OrderSuccess",
                "type": "object",
                    "properties": {
                "distributor": {
                    "$ref": "#/definitions/presenter.Distributor"
                },
                "order_id": {
                    "type": "string"
                }
            }
        },
        "presenter.OrderUpdated": {
            "title": "OrderUpdated",
                "type": "object",
                    "properties": {
                "address": {
                    "type": "string"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "order_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "payment_method": {
                    "type": "string"
                },
                "payment_status": {
                    "type": "integer",
                        "format": "int32"
                },
                "product_payment_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "promotion": {
                    "type": "string"
                },
                "shipping_method": {
                    "type": "string"
                },
                "status": {
                    "type": "integer",
                        "format": "int32"
                },
                "supplier_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "surcharge": {
                    "type": "integer",
                        "format": "int64"
                },
                "total": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_sale": {
                    "type": "integer",
                        "format": "int64"
                },
                "transaction": {
                    "type": "string"
                },
                "user_approved": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.Pagination": {
            "title": "Pagination",
                "type": "object",
                    "properties": {
                "count": {
                    "type": "integer",
                        "format": "int64"
                },
                "page": {
                    "type": "integer",
                        "format": "int64"
                },
                "size": {
                    "type": "integer",
                        "format": "int64"
                },
                "total": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.PairStatus": {
            "title": "PairStatus",
                "type": "object",
                    "properties": {
                "status": {
                    "type": "integer",
                        "format": "int64"
                },
                "sub_status": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.PayOrderResponse": {
            "title": "PayOrderResponse",
                "type": "object",
                    "properties": {
                "multi_results;omitempty": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.PayOrderResult"
                    }
                },
                "order_id": {
                    "type": "string"
                },
                "payment_status": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.PayOrderResult": {
            "title": "PayOrderResult",
                "type": "object",
                    "properties": {
                "order_id": {
                    "type": "string"
                },
                "payment_status": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.PayOrdersRequest": {
            "title": "PayOrdersRequest",
                "type": "object",
                    "properties": {
                "order_ids": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "pm_code": {
                    "type": "string"
                },
                "pm_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.PaymentAccount": {
            "title": "PaymentAccount",
                "type": "object",
                    "properties": {
                "account_number": {
                    "type": "string"
                },
                "bank_code": {
                    "type": "string"
                },
                "user_full_name": {
                    "type": "string"
                },
                "user_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "user_phone_number": {
                    "type": "string"
                },
                "wallet_id": {
                    "type": "string"
                }
            }
        },
        "presenter.PaymentConfirmRequest": {
            "title": "PaymentConfirmRequest",
                "type": "object",
                    "properties": {
                "otp": {
                    "type": "string"
                },
                "request_id": {
                    "type": "string"
                }
            }
        },
        "presenter.PaymentConfirmResponseV2": {
            "title": "PaymentConfirmResponseV2",
                "type": "object",
                    "properties": {
                "is_require_confirm": {
                    "type": "boolean"
                },
                "require_id": {
                    "type": "string"
                }
            }
        },
        "presenter.PaymentMethod": {
            "title": "PaymentMethod",
                "type": "object",
                    "properties": {
                "code": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "icon": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "name": {
                    "type": "string"
                },
                "sub_title": {
                    "type": "string"
                },
                "title": {
                    "type": "string"
                }
            }
        },
        "presenter.PaymentMethodsResponse": {
            "title": "PaymentMethodsResponse",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.PaymentMethod"
                    }
                }
            }
        },
        "presenter.PaymentRequestBizRequest": {
            "title": "PaymentRequestBizRequest",
                "type": "object",
                    "properties": {
                "access_token": {
                    "$ref": "#/definitions/presenter.GetAccessTokenRequest"
                },
                "debit_account": {
                    "type": "string"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "order_ids": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "payment_code": {
                    "type": "string"
                }
            }
        },
        "presenter.PaymentRequestBizResponse": {
            "title": "PaymentRequestBizResponse",
                "type": "object"
        },
        "presenter.PaymentRequestRequest": {
            "title": "PaymentRequestRequest",
                "type": "object",
                    "properties": {
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "order_ids": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "payment_code": {
                    "type": "string"
                }
            }
        },
        "presenter.PaymentRequestResponseV2": {
            "title": "PaymentRequestResponseV2",
                "type": "object",
                    "properties": {
                "is_require_confirm": {
                    "type": "boolean"
                },
                "require_id": {
                    "type": "string"
                }
            }
        },
        "presenter.PhInvoiceInfo": {
            "title": "PhInvoiceInfo",
                "type": "object",
                    "properties": {
                "address": {
                    "type": "string"
                },
                "address_invoice": {
                    "$ref": "#/definitions/presenter.AddressInvoice"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "name_invoice": {
                    "type": "string"
                }
            }
        },
        "presenter.PhInvoiceInfoRequest": {
            "title": "PhInvoiceInfoRequest",
                "type": "object",
                    "properties": {
                "address": {
                    "type": "string"
                },
                "address_invoice": {
                    "$ref": "#/definitions/presenter.AddressInvoiceRequest"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "name_invoice": {
                    "type": "string"
                }
            }
        },
        "presenter.PharmaciesInDistributorRequest": {
            "title": "PharmaciesInDistributorRequest",
                "type": "object",
                    "properties": {
                "pharmacies": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.PharmacyRequest"
                    }
                }
            }
        },
        "presenter.Pharmacy": {
            "title": "Pharmacy",
                "type": "object",
                    "properties": {
                "accredit": {
                    "description": "corresponding with the AuthorizedPerson field of Distributor",
                        "type": "array",
                            "items": {
                        "$ref": "#/definitions/presenter.Distributor"
                    }
                },
                "address": {
                    "$ref": "#/definitions/presenter.Addresss"
                },
                "address_invoice": {
                    "type": "string"
                },
                "approved_at": {
                    "type": "string"
                },
                "business_registration_cert_images": {
                    "type": "string"
                },
                "code": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "distributors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Distributor"
                    }
                },
                "favourite_distributor": {
                    "$ref": "#/definitions/presenter.Distributor"
                },
                "general_verify_images": {
                    "type": "string"
                },
                "gpp_certificate_images": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "invoice_info": {
                    "$ref": "#/definitions/presenter.PhInvoiceInfo"
                },
                "last_login_at": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "name_invoice": {
                    "type": "string"
                },
                "note": {
                    "type": "string"
                },
                "note_info": {
                    "type": "string"
                },
                "owner_birthday": {
                    "type": "string"
                },
                "owner_email": {
                    "type": "string"
                },
                "owner_full_name": {
                    "type": "string"
                },
                "owner_id_card_number": {
                    "type": "string"
                },
                "owner_phone": {
                    "type": "string"
                },
                "pharmacy_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "practicing_cert_images": {
                    "type": "string"
                },
                "practicing_eligible_cert_images": {
                    "type": "string"
                },
                "referrer": {
                    "$ref": "#/definitions/presenter.Sale"
                },
                "registered_number": {
                    "type": "string"
                },
                "status": {
                    "type": "string"
                },
                "tax_code": {
                    "type": "string"
                },
                "tax_number": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                }
            }
        },
        "presenter.PharmacyImport": {
            "title": "PharmacyImport",
                "type": "object",
                    "properties": {
                "customer_group_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "owner_email": {
                    "type": "string"
                },
                "owner_fullname": {
                    "type": "string"
                },
                "owner_phone": {
                    "type": "string"
                }
            }
        },
        "presenter.PharmacyImports": {
            "title": "PharmacyImports",
                "type": "object",
                    "properties": {
                "pharmacy_imports": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.PharmacyImport"
                    }
                }
            }
        },
        "presenter.PharmacyRequest": {
            "title": "PharmacyRequest",
                "type": "object",
                    "properties": {
                "id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.PreCloseConfirmRequest": {
            "title": "PreCloseConfirmRequest",
                "type": "object",
                    "properties": {
                "otp": {
                    "type": "string"
                },
                "request_id": {
                    "type": "string"
                }
            }
        },
        "presenter.PreCloseConfirmResponse": {
            "title": "PreCloseConfirmResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.PreCloseConfirmResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.PreCloseConfirmResponseData": {
            "title": "PreCloseConfirmResponseData",
                "type": "object"
        },
        "presenter.PreCloseRequestResponse": {
            "title": "PreCloseRequestResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.PreCloseRequestResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.PreCloseRequestResponseData": {
            "title": "PreCloseRequestResponseData",
                "type": "object",
                    "properties": {
                "request_id": {
                    "type": "string"
                }
            }
        },
        "presenter.Price": {
            "title": "Price",
                "type": "object",
                    "properties": {
                "created_at": {
                    "type": "string"
                },
                "customer_gid": {
                    "type": "integer",
                        "format": "int64"
                },
                "finished_at": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "policy": {
                    "$ref": "#/definitions/presenter.PricePolicy"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "sale_price": {
                    "type": "integer",
                        "format": "int64"
                },
                "started_at": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                }
            }
        },
        "presenter.PricePolicy": {
            "title": "PricePolicy",
                "type": "object",
                    "properties": {
                "created_at": {
                    "type": "string"
                },
                "customer_gid": {
                    "type": "integer",
                        "format": "int64"
                },
                "description": {
                    "type": "string"
                },
                "discount": {
                    "type": "integer",
                        "format": "int64"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "finished_at": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "name": {
                    "type": "string"
                },
                "started_at": {
                    "type": "string"
                },
                "type": {
                    "type": "integer",
                        "format": "int32"
                },
                "updated_at": {
                    "type": "string"
                }
            }
        },
        "presenter.Product": {
            "title": "Product",
                "type": "object",
                    "properties": {
                "add_on": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.AddOnProduct"
                    }
                },
                "advertisement_priority": {
                    "type": "integer",
                        "format": "int32"
                },
                "attributes": {
                    "type": "string"
                },
                "base_product": {
                    "$ref": "#/definitions/presenter.BaseProduct"
                },
                "bestseller_priority": {
                    "type": "integer",
                        "format": "int64"
                },
                "categories": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Category"
                    }
                },
                "combo": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ComboItem"
                    }
                },
                "created_at": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "distribution_unit": {
                    "type": "string"
                },
                "distributor": {
                    "$ref": "#/definitions/presenter.DistributorRef"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "distributor_name": {
                    "type": "string"
                },
                "dosage_forms": {
                    "type": "string"
                },
                "exclusive_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "expire_date": {
                    "type": "string"
                },
                "hashtags": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "hotdeal_priority": {
                    "type": "integer",
                        "format": "int64"
                },
                "images": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "is_base_product": {
                    "type": "boolean"
                },
                "is_bestseller": {
                    "type": "boolean"
                },
                "is_goodprice": {
                    "type": "boolean"
                },
                "is_hotdeal": {
                    "type": "boolean"
                },
                "is_wishlist": {
                    "type": "boolean"
                },
                "main_ingredient": {
                    "type": "string"
                },
                "manufacture": {
                    "type": "string"
                },
                "medicinal_props": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "on_sale": {
                    "type": "boolean"
                },
                "origin": {
                    "type": "string"
                },
                "packing_specs": {
                    "type": "string"
                },
                "payment_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_code": {
                    "type": "string"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_status": {
                    "type": "integer",
                        "format": "int32"
                },
                "product_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "range_prices": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.RangePrice"
                    }
                },
                "rating_average": {
                    "type": "number",
                        "format": "double"
                },
                "rating_count": {
                    "type": "integer",
                        "format": "int64"
                },
                "receipt_status": {
                    "type": "boolean"
                },
                "registered_code": {
                    "type": "string"
                },
                "reserve": {
                    "type": "integer",
                        "format": "int32"
                },
                "sale_price": {
                    "type": "integer",
                        "format": "int64"
                },
                "sale_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "short_description": {
                    "type": "string"
                },
                "sku": {
                    "type": "string"
                },
                "stock_quantity": {
                    "type": "integer",
                        "format": "int64"
                },
                "stock_status": {
                    "type": "integer",
                        "format": "int32"
                },
                "suppliers": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Supplier"
                    }
                },
                "thumbnail": {
                    "type": "string"
                },
                "trademark": {
                    "$ref": "#/definitions/presenter.Trademark"
                },
                "unit": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                },
                "vat_applied": {
                    "type": "boolean"
                },
                "vat_value": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.ProductBestSeller": {
            "title": "ProductBestSeller",
                "type": "object",
                    "properties": {
                "bestseller_priority": {
                    "type": "integer",
                        "format": "int64"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "is_bestseller": {
                    "type": "boolean"
                }
            }
        },
        "presenter.ProductError": {
            "title": "ProductError",
                "type": "object",
                    "properties": {
                "error": {
                    "type": "string"
                },
                "item": {
                    "$ref": "#/definitions/presenter.Product"
                }
            }
        },
        "presenter.ProductHotDeal": {
            "title": "ProductHotDeal",
                "type": "object",
                    "properties": {
                "hotdeal_priority": {
                    "type": "integer",
                        "format": "int64"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "is_hotdeal": {
                    "type": "boolean"
                }
            }
        },
        "presenter.ProductOptions": {
            "title": "ProductOptions",
                "type": "object",
                    "properties": {
                "addons": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Addon"
                    }
                },
                "attributes": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.AttributeP"
                    }
                }
            }
        },
        "presenter.ProductSnapCamp": {
            "title": "ProductSnapCamp",
                "type": "object",
                    "properties": {
                "images": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "name": {
                    "type": "string"
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "sale_price": {
                    "type": "integer",
                        "format": "int64"
                },
                "thumbnail": {
                    "type": "string"
                }
            }
        },
        "presenter.ProductsGroup": {
            "title": "ProductsGroup",
                "type": "object",
                    "properties": {
                "code": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "status": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.ProductsStatus": {
            "title": "ProductsStatus",
                "type": "object",
                    "properties": {
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_status": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.PromoProduct": {
            "title": "PromoProduct",
                "type": "object",
                    "properties": {
                "campaign_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_ids": {
                    "type": "array",
                        "items": {
                        "type": "integer",
                            "format": "int64"
                    }
                }
            }
        },
        "presenter.Propose": {
            "title": "Propose",
                "type": "object",
                    "properties": {
                "created_at": {
                    "type": "string"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "number": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_id": {
                    "description": "id = 0 or product_id",
                        "type": "integer",
                            "format": "int64"
                },
                "product_type": {
                    "description": "1: Individual 2: General",
                        "type": "integer",
                            "format": "int32"
                },
                "products": {
                    "description": "array product propose",
                        "type": "array",
                            "items": {
                        "$ref": "#/definitions/presenter.Product"
                    }
                },
                "show_up": {
                    "type": "integer",
                        "format": "int32"
                },
                "updated_at": {
                    "type": "string"
                }
            }
        },
        "presenter.ProposeRequest": {
            "title": "ProposeRequest",
                "type": "object",
                    "properties": {
                "propose": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Propose"
                    }
                }
            }
        },
        "presenter.Province": {
            "title": "Province",
                "type": "object",
                    "properties": {
                "country_id": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "priority": {
                    "type": "integer",
                        "format": "int64"
                },
                "province_type": {
                    "type": "string"
                }
            }
        },
        "presenter.RangePrice": {
            "title": "RangePrice",
                "type": "object",
                    "properties": {
                "discount": {
                    "type": "integer",
                        "format": "int32"
                },
                "min_quantity": {
                    "type": "integer",
                        "format": "int64"
                },
                "sale_price": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.RefInfo": {
            "title": "RefInfo",
                "type": "object",
                    "properties": {
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "fullname": {
                    "type": "string"
                },
                "id_card_number": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "uid": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.RefProduct": {
            "title": "RefProduct",
                "type": "object",
                    "properties": {
                "created_at": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "distribution_unit": {
                    "type": "string"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "dosage_forms": {
                    "type": "string"
                },
                "exclusive_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "expire_date": {
                    "type": "string"
                },
                "images": {
                    "type": "array",
                        "items": {
                        "type": "string"
                    }
                },
                "is_wishlist": {
                    "type": "boolean"
                },
                "main_ingredient": {
                    "type": "string"
                },
                "manufacture": {
                    "type": "string"
                },
                "medicinal_props": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "origin": {
                    "type": "string"
                },
                "packing_specs": {
                    "type": "string"
                },
                "payment_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_code": {
                    "type": "string"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_status": {
                    "type": "integer",
                        "format": "int32"
                },
                "product_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "registered_code": {
                    "type": "string"
                },
                "sale_price": {
                    "type": "integer",
                        "format": "int64"
                },
                "sale_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "short_description": {
                    "type": "string"
                },
                "thumbnail": {
                    "type": "string"
                },
                "trademark": {
                    "type": "integer",
                        "format": "int64"
                },
                "unit": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                },
                "vat_applied": {
                    "type": "boolean"
                },
                "vat_value": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.RefereeInfo": {
            "title": "RefereeInfo",
                "type": "object",
                    "properties": {
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "ref_at": {
                    "type": "integer",
                        "format": "int64"
                },
                "referer_uid": {
                    "type": "string"
                },
                "register_bank": {
                    "$ref": "#/definitions/presenter.RegisterBank"
                },
                "uid": {
                    "type": "string"
                }
            }
        },
        "presenter.ReferralProfile": {
            "title": "ReferralProfile",
                "type": "object",
                    "properties": {
                "metadata": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "ref_code": {
                    "type": "string"
                },
                "state": {
                    "type": "integer",
                        "format": "int32"
                },
                "uid": {
                    "type": "string"
                }
            }
        },
        "presenter.RegisterBank": {
            "title": "RegisterBank",
                "type": "object",
                    "properties": {
                "account_number": {
                    "type": "string"
                },
                "bank_code": {
                    "type": "string"
                },
                "register_at": {
                    "type": "integer",
                        "format": "int64"
                },
                "wallet_id": {
                    "type": "string"
                }
            }
        },
        "presenter.RegisterConfirmRequest": {
            "title": "RegisterConfirmRequest",
                "type": "object",
                    "properties": {
                "otp": {
                    "type": "string"
                },
                "requestId": {
                    "type": "string"
                }
            }
        },
        "presenter.RegisterConfirmResponse": {
            "title": "RegisterConfirmResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.RegisterConfirmResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.RegisterConfirmResponseData": {
            "title": "RegisterConfirmResponseData",
                "type": "object",
                    "properties": {
                "account_number": {
                    "type": "string"
                },
                "customer_id": {
                    "type": "string"
                }
            }
        },
        "presenter.RegisterRequestResponse": {
            "title": "RegisterRequestResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.RegisterRequestResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.RegisterRequestResponseData": {
            "title": "RegisterRequestResponseData",
                "type": "object",
                    "properties": {
                "mobile": {
                    "type": "string"
                },
                "request_id": {
                    "type": "string"
                }
            }
        },
        "presenter.RegisterTokenResponse": {
            "title": "RegisterTokenResponse",
                "type": "object",
                    "properties": {
                "message": {
                    "type": "string"
                }
            }
        },
        "presenter.RelationshipInfo": {
            "title": "RelationshipInfo",
                "type": "object",
                    "properties": {
                "email": {
                    "type": "string"
                },
                "identityCardNumber": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "type": {
                    "type": "string"
                }
            }
        },
        "presenter.RemoveComboItemsRequest": {
            "title": "RemoveComboItemsRequest",
                "type": "object",
                    "properties": {
                "combo": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/51501.0xc000dcbc50.false"
                    }
                }
            }
        },
        "presenter.ReportBalanceResponse": {
            "title": "ReportBalanceResponse",
                "type": "object",
                    "properties": {
                "balance": {
                    "type": "integer",
                        "format": "int64"
                },
                "distributor": {
                    "$ref": "#/definitions/presenter.Distributor"
                },
                "payment": {
                    "type": "integer",
                        "format": "int64"
                },
                "topup": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.ReportCashinResponse": {
            "title": "ReportCashinResponse",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ReportCashinTx"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "total_amount": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.ReportCashinTx": {
            "title": "ReportCashinTx",
                "type": "object",
                    "properties": {
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "source": {
                    "type": "string"
                },
                "tid": {
                    "type": "string"
                },
                "time": {
                    "type": "string"
                },
                "user": {
                    "$ref": "#/definitions/presenter.UserReport"
                }
            }
        },
        "presenter.ReportOrdersResponse": {
            "title": "ReportOrdersResponse",
                "type": "object",
                    "properties": {
                "orders": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.Order"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ReportPharmacyEntity": {
            "title": "ReportPharmacyEntity",
                "type": "object",
                    "properties": {
                "approved_at": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "fullname": {
                    "type": "string"
                },
                "id_card_number": {
                    "type": "string"
                },
                "last_login_at": {
                    "type": "string"
                },
                "latest_created_order_at": {
                    "type": "string"
                },
                "latest_online_at": {
                    "type": "string"
                },
                "latest_topup_at": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "pid": {
                    "type": "integer",
                        "format": "int64"
                },
                "status": {
                    "type": "string"
                }
            }
        },
        "presenter.ReportPharmacyResponse": {
            "title": "ReportPharmacyResponse",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ReportPharmacyEntity"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ReportSalePerformanceByPurchasingResponse": {
            "title": "ReportSalePerformanceByPurchasingResponse",
                "type": "object",
                    "properties": {
                "customers": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.SellerCustomerInfo"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "seller": {
                    "$ref": "#/definitions/presenter.SellerInfo"
                },
                "total_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_txs": {
                    "type": "integer",
                        "format": "int64"
                },
                "un_total_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "un_total_txs": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.ReportSalePerformanceData": {
            "title": "ReportSalePerformanceData",
                "type": "object",
                    "properties": {
                "customers": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.SellerCustomerInfo"
                    }
                },
                "seller": {
                    "$ref": "#/definitions/presenter.SellerInfo"
                }
            }
        },
        "presenter.ReportSalePerformanceResponse": {
            "title": "ReportSalePerformanceResponse",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ReportSalePerformanceData"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                }
            }
        },
        "presenter.ReportVoucherResponse": {
            "title": "ReportVoucherResponse",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ReportVoucherTx"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "total_amount": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.ReportVoucherTx": {
            "title": "ReportVoucherTx",
                "type": "object",
                    "properties": {
                "campaign": {
                    "$ref": "#/definitions/presenter.CampaignVoucher"
                },
                "claimed_at": {
                    "type": "string"
                },
                "code": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "customer": {
                    "$ref": "#/definitions/presenter.UserReport"
                },
                "customer_group_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "description": {
                    "type": "string"
                },
                "discount": {
                    "type": "integer",
                        "format": "int64"
                },
                "discount_type": {
                    "type": "string"
                },
                "distributor": {
                    "$ref": "#/definitions/presenter.Distributor"
                },
                "distributor_applied": {
                    "$ref": "#/definitions/presenter.Distributor"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "name": {
                    "type": "string"
                },
                "order_id": {
                    "type": "string"
                },
                "status": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                }
            }
        },
        "presenter.RequestMapping": {
            "title": "RequestMapping",
                "type": "object",
                    "properties": {
                "dv_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "neo_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "poc_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "si_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.RequestMappingResources": {
            "title": "RequestMappingResources",
                "type": "object",
                    "properties": {
                "mappings": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.RequestMapping"
                    }
                }
            }
        },
        "presenter.ResourcesInfo": {
            "title": "ResourcesInfo",
                "type": "object",
                    "properties": {
                "manufacture": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "packing_specs": {
                    "type": "string"
                },
                "product_group": {
                    "type": "string"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "registered_code": {
                    "type": "string"
                },
                "type": {
                    "type": "string"
                },
                "unit": {
                    "type": "string"
                }
            }
        },
        "presenter.ResourcesProduct": {
            "title": "ResourcesProduct",
                "type": "object",
                    "properties": {
                "manufacture": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "packing_specs": {
                    "type": "string"
                },
                "price": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_group": {
                    "type": "string"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "registered_code": {
                    "type": "string"
                },
                "type": {
                    "type": "string"
                },
                "unit": {
                    "type": "string"
                }
            }
        },
        "presenter.RevenueData": {
            "title": "RevenueData",
                "type": "object",
                    "properties": {
                "distributor": {
                    "$ref": "#/definitions/presenter.Distributor"
                },
                "product": {
                    "$ref": "#/definitions/presenter.OrderProduct"
                },
                "total_income": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_net_income": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_tx": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.RevenueTimePoint": {
            "title": "RevenueTimePoint",
                "type": "object",
                    "properties": {
                "data": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.RevenueData"
                    }
                },
                "time_point": {
                    "type": "string"
                },
                "total_income": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_net_income": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_tx": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.Sale": {
            "title": "Sale",
                "type": "object",
                    "properties": {
                "bank_account": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "distributor_name": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "id_card_number": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "ref_code": {
                    "type": "string"
                },
                "status": {
                    "type": "integer",
                        "format": "int64"
                },
                "updated_at": {
                    "type": "string"
                }
            }
        },
        "presenter.SalesGroup": {
            "title": "SalesGroup",
                "type": "object",
                    "properties": {
                "code": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "status": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.SearchProductsResult": {
            "title": "SearchProductsResult",
                "type": "object",
                    "properties": {
                "autocomplete": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.AutoCompleteKey"
                    }
                },
                "products": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ElasticProductDoc"
                    }
                }
            }
        },
        "presenter.SellerCustomerAction": {
            "title": "SellerCustomerAction",
                "type": "object",
                    "properties": {
                "apply_referral_at": {
                    "type": "string"
                },
                "completed_task": {
                    "type": "boolean"
                },
                "first_order_completed_at": {
                    "type": "string"
                },
                "first_order_created_at": {
                    "type": "string"
                },
                "first_order_id": {
                    "type": "string"
                },
                "latest_order_completed_at": {
                    "type": "string"
                },
                "latest_order_id": {
                    "type": "string"
                },
                "register_mb_at": {
                    "type": "string"
                },
                "topup_first_at": {
                    "type": "string"
                }
            }
        },
        "presenter.SellerCustomerInfo": {
            "title": "SellerCustomerInfo",
                "type": "object",
                    "properties": {
                "action": {
                    "$ref": "#/definitions/presenter.SellerCustomerAction"
                },
                "birthday": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "fullname": {
                    "type": "string"
                },
                "id_card_number": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "point_reward": {
                    "type": "integer",
                        "format": "int64"
                },
                "purchasing": {
                    "$ref": "#/definitions/presenter.CustomerPurchasing"
                },
                "reason": {
                    "type": "string"
                },
                "user_id": {
                    "type": "string"
                }
            }
        },
        "presenter.SellerInfo": {
            "title": "SellerInfo",
                "type": "object",
                    "properties": {
                "distributor": {
                    "$ref": "#/definitions/presenter.Distributor"
                },
                "id_card_number": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "user_id": {
                    "type": "string"
                }
            }
        },
        "presenter.SendMessForPhar": {
            "title": "SendMessForPhar",
                "type": "object",
                    "properties": {
                "exec_time": {
                    "type": "string"
                },
                "ids": {
                    "type": "array",
                        "items": {
                        "type": "integer",
                            "format": "int64"
                    }
                },
                "message": {
                    "type": "string"
                },
                "obj_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "send_type": {
                    "type": "integer",
                        "format": "int32"
                },
                "title": {
                    "type": "string"
                }
            }
        },
        "presenter.ShippingMethod": {
            "title": "ShippingMethod",
                "type": "object",
                    "properties": {
                "code": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "estimation_text": {
                    "type": "string"
                },
                "fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "name": {
                    "type": "string"
                }
            }
        },
        "presenter.StateHistory": {
            "title": "StateHistory",
                "type": "object",
                    "properties": {
                "state": {
                    "type": "integer",
                        "format": "int64"
                },
                "state_text": {
                    "type": "string"
                },
                "sub_state": {
                    "type": "integer",
                        "format": "int64"
                },
                "sub_state_text": {
                    "type": "string"
                },
                "time": {
                    "type": "string"
                }
            }
        },
        "presenter.StatisticCustomerResponse": {
            "title": "StatisticCustomerResponse",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.StatsCustomerDetail"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "total_payment_tx": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_point_tx": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_topup_tx": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_users": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.StatisticDailyTrackingDO": {
            "title": "StatisticDailyTrackingDO",
                "type": "object",
                    "properties": {
                "date": {
                    "type": "string"
                },
                "orders": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.StatisticDailyTrackingItem": {
            "title": "StatisticDailyTrackingItem",
                "type": "object",
                    "properties": {
                "pharmacy": {
                    "$ref": "#/definitions/presenter.UserReport"
                },
                "saler_fullname": {
                    "type": "string"
                },
                "saler_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "saler_name": {
                    "type": "string"
                },
                "tracking": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.StatisticDailyTrackingDO"
                    }
                }
            }
        },
        "presenter.StatisticDailyTrackingResponse": {
            "title": "StatisticDailyTrackingResponse",
                "type": "object",
                    "properties": {
                "online_users": {
                    "type": "integer",
                        "format": "int64"
                },
                "pharmacies": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.StatisticDailyTrackingItem"
                    }
                },
                "total_orders": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.StatisticRevenueResponse": {
            "title": "StatisticRevenueResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.RevenueData"
                    }
                },
                "pagination": {
                    "$ref": "#/definitions/presenter.Pagination"
                },
                "total_income": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_net_income": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_tx": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_users": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.StatisticStatusResponse": {
            "title": "StatisticStatusResponse",
                "type": "object",
                    "properties": {
                "count": {
                    "type": "integer",
                        "format": "int64"
                },
                "data": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.StatsQuantity"
                    }
                }
            }
        },
        "presenter.StatsAmountData": {
            "title": "StatsAmountData",
                "type": "object",
                    "properties": {
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "key": {
                    "type": "string"
                }
            }
        },
        "presenter.StatsCustomerDetail": {
            "title": "StatsCustomerDetail",
                "type": "object",
                    "properties": {
                "total_original_payment_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_original_point_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_payment_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_payment_tx": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_point_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_point_tx": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_topup_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_topup_tx": {
                    "type": "integer",
                        "format": "int64"
                },
                "user": {
                    "$ref": "#/definitions/presenter.UserReport"
                }
            }
        },
        "presenter.StatsQuantity": {
            "title": "StatsQuantity",
                "type": "object",
                    "properties": {
                "count": {
                    "type": "integer",
                        "format": "int64"
                },
                "key": {
                    "type": "string"
                }
            }
        },
        "presenter.StatsRevenue": {
            "title": "StatsRevenue",
                "type": "object",
                    "properties": {
                "total_income": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_net_income": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_tx": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.Supplier": {
            "title": "Supplier",
                "type": "object",
                    "properties": {
                "address": {
                    "type": "string"
                },
                "create_at": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "display_name": {
                    "type": "string"
                },
                "distributor": {
                    "$ref": "#/definitions/presenter.Distributor"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "logo": {
                    "type": "string"
                },
                "mail": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "priority": {
                    "type": "integer",
                        "format": "int32"
                },
                "representative": {
                    "type": "string"
                },
                "status": {
                    "$ref": "#/definitions/presenter.SupplierStatus"
                },
                "type": {
                    "$ref": "#/definitions/presenter.SupplierType"
                },
                "update_at": {
                    "type": "string"
                }
            }
        },
        "presenter.SupplierStatus": {
            "title": "SupplierStatus",
                "format": "int32",
                    "type": "integer"
        },
        "presenter.SupplierType": {
            "title": "SupplierType",
                "format": "int32",
                    "type": "integer"
        },
        "presenter.SyncAppliedDistributorResponse": {
            "title": "SyncAppliedDistributorResponse",
                "type": "object",
                    "properties": {
                "Success": {
                    "type": "boolean"
                }
            }
        },
        "presenter.TopUpConfirmRequest": {
            "title": "TopUpConfirmRequest",
                "type": "object",
                    "properties": {
                "otp": {
                    "type": "string"
                },
                "request_id": {
                    "type": "string"
                }
            }
        },
        "presenter.TopUpConfirmResponse": {
            "title": "TopUpConfirmResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.TopUpConfirmResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.TopUpConfirmResponseData": {
            "title": "TopUpConfirmResponseData",
                "type": "object",
                    "properties": {
                "transaction_id": {
                    "type": "string"
                }
            }
        },
        "presenter.TopUpMeta": {
            "title": "TopUpMeta",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.TopUpMetaItem"
                    }
                }
            }
        },
        "presenter.TopUpMetaItem": {
            "title": "TopUpMetaItem",
                "type": "object",
                    "properties": {
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "amount_limit": {
                    "type": "integer",
                        "format": "int64"
                },
                "is_valid": {
                    "type": "boolean"
                },
                "promo_limit": {
                    "type": "integer",
                        "format": "int64"
                },
                "promo_rate": {
                    "type": "number",
                        "format": "double"
                }
            }
        },
        "presenter.TopUpRequest": {
            "title": "TopUpRequest",
                "type": "object",
                    "properties": {
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "apply_promotion": {
                    "type": "boolean"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "payment_code": {
                    "type": "string"
                }
            }
        },
        "presenter.TopUpRequestResponse": {
            "title": "TopUpRequestResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.TopUpRequestResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.TopUpRequestResponseData": {
            "title": "TopUpRequestResponseData",
                "type": "object",
                    "properties": {
                "mobile": {
                    "type": "string"
                },
                "request_id": {
                    "type": "string"
                }
            }
        },
        "presenter.TotalCost": {
            "title": "TotalCost",
                "type": "object",
                    "properties": {
                "amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "point": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.TrackingInfo": {
            "title": "TrackingInfo",
                "type": "object",
                    "properties": {
                "current_status": {
                    "type": "integer",
                        "format": "int64"
                },
                "status_text": {
                    "type": "string"
                },
                "time": {
                    "type": "string"
                }
            }
        },
        "presenter.Trademark": {
            "title": "Trademark",
                "type": "object",
                    "properties": {
                "advertise_priority": {
                    "type": "integer",
                        "format": "int64"
                },
                "created_at": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "distributor": {
                    "$ref": "#/definitions/presenter.DistributorRef"
                },
                "distributor_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "images": {
                    "type": "string"
                },
                "is_advertise": {
                    "type": "boolean"
                },
                "name": {
                    "type": "string"
                },
                "status": {
                    "type": "integer",
                        "format": "int32"
                },
                "updated_at": {
                    "type": "string"
                }
            }
        },
        "presenter.TrademarkAdvertise": {
            "title": "TrademarkAdvertise",
                "type": "object",
                    "properties": {
                "advertise_priority": {
                    "type": "integer",
                        "format": "int64"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "is_advertise": {
                    "type": "boolean"
                }
            }
        },
        "presenter.UnlinkPaymentAccountReq": {
            "title": "UnlinkPaymentAccountReq",
                "type": "object",
                    "properties": {
                "bank_code": {
                    "type": "string"
                },
                "user_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.UnlinkResourceRequest": {
            "title": "UnlinkResourceRequest",
                "type": "object",
                    "properties": {
                "resource_id": {
                    "type": "string"
                }
            }
        },
        "presenter.UnlinkResourceResponse": {
            "title": "UnlinkResourceResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.UnlinkResourceResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.UnlinkResourceResponseData": {
            "title": "UnlinkResourceResponseData",
                "type": "object",
                    "properties": {
                "customer_name": {
                    "type": "string"
                }
            }
        },
        "presenter.UpdateOrderItemRequest": {
            "title": "UpdateOrderItemRequest",
                "type": "object",
                    "properties": {
                "changed_by": {
                    "type": "string"
                },
                "noted": {
                    "type": "string"
                },
                "order_items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.OrderItem"
                    }
                }
            }
        },
        "presenter.UpdateOrderItemResponse": {
            "title": "UpdateOrderItemResponse",
                "type": "object",
                    "properties": {
                "order": {
                    "$ref": "#/definitions/presenter.Order"
                },
                "success": {
                    "type": "boolean"
                }
            }
        },
        "presenter.UpdateOrderRequest": {
            "title": "UpdateOrderRequest",
                "type": "object",
                    "properties": {
                "changed_by": {
                    "type": "string"
                },
                "noted": {
                    "type": "string"
                },
                "order": {
                    "$ref": "#/definitions/presenter.OrderUpdated"
                }
            }
        },
        "presenter.UpdateOrderResponse": {
            "title": "UpdateOrderResponse",
                "type": "object",
                    "properties": {
                "order": {
                    "$ref": "#/definitions/presenter.Order"
                },
                "success": {
                    "type": "boolean"
                }
            }
        },
        "presenter.UpdatePharmacyRequest": {
            "title": "UpdatePharmacyRequest",
                "type": "object",
                    "properties": {
                "pharmacy_type": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        },
        "presenter.UpdatePharmacyStatusRequest": {
            "title": "UpdatePharmacyStatusRequest",
                "type": "object",
                    "properties": {
                "note_info": {
                    "type": "string"
                },
                "status": {
                    "type": "string"
                }
            }
        },
        "presenter.UpdatePricePolicyRequest": {
            "title": "UpdatePricePolicyRequest",
                "type": "object",
                    "properties": {
                "policy": {
                    "$ref": "#/definitions/presenter.PricePolicy"
                },
                "products_excluded": {
                    "type": "array",
                        "items": {
                        "type": "integer",
                            "format": "int64"
                    }
                }
            }
        },
        "presenter.UpdatePriceRequest": {
            "title": "UpdatePriceRequest",
                "type": "object",
                    "properties": {
                "sale_price": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.UpdateProductToCartResponse": {
            "title": "UpdateProductToCartResponse",
                "type": "object",
                    "properties": {
                "accumulation": {
                    "type": "integer",
                        "format": "int64"
                },
                "customer_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "customer_reward": {
                    "$ref": "#/definitions/presenter.CustomerReward"
                },
                "discount_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "discount_point": {
                    "type": "integer",
                        "format": "int64"
                },
                "fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "grand_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "handling_fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "invoice": {
                    "$ref": "#/definitions/presenter.InvoiceInfo"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.CVDistributor"
                    }
                },
                "saving": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "shipping_address": {
                    "$ref": "#/definitions/presenter.AddressBook"
                },
                "sub_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "taxes": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_accumulation": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.UpdateProductsStatus": {
            "title": "UpdateProductsStatus",
                "type": "object",
                    "properties": {
                "products_status": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ProductsStatus"
                    }
                }
            }
        },
        "presenter.UpdateReferralProfileRequest": {
            "title": "UpdateReferralProfileRequest",
                "type": "object",
                    "properties": {
                "profile": {
                    "$ref": "#/definitions/presenter.ReferralProfile"
                },
                "updated_fields": {
                    "type": "string"
                }
            }
        },
        "presenter.UpdateReferralProfileResponse": {
            "title": "UpdateReferralProfileResponse",
                "type": "object",
                    "properties": {
                "profile": {
                    "$ref": "#/definitions/presenter.ReferralProfile"
                }
            }
        },
        "presenter.UpdateStatusResponse": {
            "title": "UpdateStatusResponse",
                "type": "object",
                    "properties": {
                "next_status": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.PairStatus"
                    }
                },
                "order_id": {
                    "type": "string"
                }
            }
        },
        "presenter.UserConfirmedResponse": {
            "title": "UserConfirmedResponse",
                "type": "object",
                    "properties": {
                "success": {
                    "type": "boolean"
                }
            }
        },
        "presenter.UserReport": {
            "title": "UserReport",
                "type": "object",
                    "properties": {
                "balance": {
                    "type": "integer",
                        "format": "int64"
                },
                "email": {
                    "type": "string"
                },
                "full_name": {
                    "type": "string"
                },
                "name_invoice": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "tax_code": {
                    "type": "string"
                },
                "topup_at": {
                    "type": "string"
                },
                "user_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "username": {
                    "type": "string"
                }
            }
        },
        "presenter.Version": {
            "title": "Version",
                "type": "object",
                    "properties": {
                "force": {
                    "type": "boolean"
                },
                "update": {
                    "type": "boolean"
                },
                "version": {
                    "type": "string"
                }
            }
        },
        "presenter.VersionRequest": {
            "title": "VersionRequest",
                "type": "object",
                    "properties": {
                "created_at": {
                    "type": "string",
                        "format": "datetime"
                },
                "force_version": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "min_version": {
                    "type": "string"
                },
                "os": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string",
                        "format": "datetime"
                },
                "version_lastest": {
                    "type": "string"
                }
            }
        },
        "presenter.ViewCartResponse": {
            "title": "ViewCartResponse",
                "type": "object",
                    "properties": {
                "accumulation": {
                    "type": "integer",
                        "format": "int64"
                },
                "customer_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "customer_reward": {
                    "$ref": "#/definitions/presenter.CustomerReward"
                },
                "discount_amount": {
                    "type": "integer",
                        "format": "int64"
                },
                "discount_point": {
                    "type": "integer",
                        "format": "int64"
                },
                "fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "grand_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "handling_fee": {
                    "type": "integer",
                        "format": "int64"
                },
                "invoice": {
                    "$ref": "#/definitions/presenter.InvoiceInfo"
                },
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.CVDistributor"
                    }
                },
                "saving": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "shipping_address": {
                    "$ref": "#/definitions/presenter.AddressBook"
                },
                "sub_total": {
                    "$ref": "#/definitions/presenter.TotalCost"
                },
                "taxes": {
                    "type": "integer",
                        "format": "int64"
                },
                "total_accumulation": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        },
        "presenter.Voucher": {
            "title": "Voucher",
                "type": "object",
                    "properties": {
                "campaign": {
                    "$ref": "#/definitions/presenter.Campaign"
                },
                "code": {
                    "type": "string"
                },
                "create_at": {
                    "type": "string"
                },
                "customer_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "description": {
                    "type": "string"
                },
                "discount": {
                    "type": "integer",
                        "format": "int64"
                },
                "discount_type": {
                    "type": "string"
                },
                "end_date": {
                    "type": "string"
                },
                "end_time": {
                    "type": "string"
                },
                "id": {
                    "type": "integer",
                        "format": "int64"
                },
                "is_valid": {
                    "type": "boolean"
                },
                "name": {
                    "type": "string"
                },
                "order_id": {
                    "type": "string"
                },
                "order_limit": {
                    "type": "integer",
                        "format": "int64"
                },
                "payment_method": {
                    "type": "string"
                },
                "status": {
                    "type": "string"
                },
                "update_at": {
                    "type": "string"
                }
            }
        },
        "presenter.VoucherMeta": {
            "title": "VoucherMeta",
                "type": "object",
                    "properties": {
                "items": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.VoucherMetaItem"
                    }
                }
            }
        },
        "presenter.VoucherMetaItem": {
            "title": "VoucherMetaItem",
                "type": "object",
                    "properties": {
                "description": {
                    "type": "string"
                },
                "discount": {
                    "type": "integer",
                        "format": "int64"
                },
                "name": {
                    "type": "string"
                },
                "order_limit": {
                    "type": "integer",
                        "format": "int64"
                },
                "payment_method": {
                    "type": "string"
                }
            }
        },
        "presenter.WalletInfoResponse": {
            "title": "WalletInfoResponse",
                "type": "object",
                    "properties": {
                "data": {
                    "$ref": "#/definitions/presenter.WalletInfoResponseData"
                },
                "errors": {
                    "type": "array",
                        "items": {
                        "$ref": "#/definitions/presenter.ErrorResponse"
                    }
                }
            }
        },
        "presenter.WalletInfoResponseData": {
            "title": "WalletInfoResponseData",
                "type": "object",
                    "properties": {
                "accountNumber": {
                    "type": "string"
                },
                "balanceWallet": {
                    "type": "string"
                },
                "customerID": {
                    "type": "string"
                },
                "customerName": {
                    "type": "string"
                },
                "mobile": {
                    "type": "string"
                },
                "walletID": {
                    "type": "string"
                }
            }
        },
        "presenter.Ward": {
            "title": "Ward",
                "type": "object",
                    "properties": {
                "district_id": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "ward_type": {
                    "type": "string"
                }
            }
        },
        "presenter.WishlistProductRequest": {
            "title": "WishlistProductRequest",
                "type": "object",
                    "properties": {
                "customer_id": {
                    "type": "integer",
                        "format": "int64"
                },
                "product_id": {
                    "type": "integer",
                        "format": "int64"
                }
            }
        }
    },
    "securityDefinitions": {
        "Bearer": {
            "type": "apiKey",
                "name": "Authorization",
                    "in": "header"
        }
    },
    "tags": [
        {
            "name": "products",
            "description": "ProductController operations for Product\n"
        },
        {
            "name": "categories",
            "description": "CategoryController operations for Categories\n"
        },
        {
            "name": "options",
            "description": "OptionController operations for Options\n"
        },
        {
            "name": "prices",
            "description": "PriceController operations for Options\n"
        },
        {
            "name": "price-policies",
            "description": "PricePolicyController operations\n"
        },
        {
            "name": "attributes",
            "description": "AttributeController operations for Attributes\n"
        },
        {
            "name": "trademarks",
            "description": "TrademarkController operations for Options\n"
        },
        {
            "name": "carts",
            "description": "CartController operations for Cart\n"
        },
        {
            "name": "distributors",
            "description": "DistributorController operations for Distributor\n"
        },
        {
            "name": "suppliers",
            "description": "SupplierController operations for Supplier\n"
        },
        {
            "name": "pharmacies",
            "description": "PharmacityController operations for Pharmacy\n"
        },
        {
            "name": "sale",
            "description": "SaleController operations for Sale\n"
        },
        {
            "name": "customer-groups",
            "description": "GroupCustomerController operations for CustomerGroup\n"
        },
        {
            "name": "ewallet",
            "description": "EwalletController operations for Ewallet\n"
        },
        {
            "name": "campaigns",
            "description": "CampaignController operations for Campaign\n"
        },
        {
            "name": "referral",
            "description": "ReferralController operations for Referral\n"
        },
        {
            "name": "report",
            "description": "ReportController ...\n"
        },
        {
            "name": "gov",
            "description": "GovController operations for Options\n"
        }
    ]
}