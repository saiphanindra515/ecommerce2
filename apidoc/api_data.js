define({ "api": [
  {
    "type": "post",
    "url": "/ecommerce/api/v1/create",
    "title": "create product in list",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>Name of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brandName",
            "description": "<p>Name of the Brand</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>enter category of product for example mobiles belongs to electronics</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subCategory",
            "description": "<p>category includes subcategories ex: electronics include mobiles,Tvs,players etc</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modal",
            "description": "<p>modal name</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "cost",
            "description": "<p>cost of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productDescription",
            "description": "<p>Description about product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>picture of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>enter colors of products available ex: Red,blue,green</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "seller",
            "description": "<p>enter sellers information available ex:bigc,celekt,Lot</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "highlight",
            "description": "<p>enter highlights of product ex: 3gbram,snapdragon processor,7th generation</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"product created successfully\",\n    \"data\": {\n        \"avgRating\": 0,\n        \"colors\": [\n            \n        \n        ],\n        \"sellers\": [\n            \n        ],\n        \"stockAvailb le\": \"yes\",\n        \"highlights\": [],\n        \"_id\": \"string\",\n        \"productId\": \"string\",\n        \"productDescription\": \"string\",\n        \"productName\": \"string\",\n        \"category\": \"string\",\n        \"subCategory\": \"string\",\n        \"modal\": \"string\",\n        \"picture\": \"string\",\n        \"cost\": number,\n        \"created\": \"2018-08-14T06:32:54.856Z\",\n        \"lastModified\": \"2018-08-14T06:32:54.856Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routers.js",
    "groupTitle": "create",
    "name": "PostEcommerceApiV1Create"
  },
  {
    "type": "post",
    "url": "/ecommerce/api/v1/:productId/addToCart",
    "title": "Add product to cart",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>select color of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quantity",
            "description": "<p>mention how many products you want to buy</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n          \"error\": false,\n         \"status\": 200,\n           \"message\": \"product added to cart successfully\",\n            \"data\": {\n                  \"_id\": \"5b6fdb3a6ef7af46f04a3773\",\n                  \"productName\": \"one plus 6\",\n                  \"productId\": \"V50Av41xW\",\n                   \"color\": \"black\",\n                    \"quantity\": 3,\n                   \"Amountpayable\": 108,\n                    \"__v\": 0\n         }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routers.js",
    "groupTitle": "create",
    "name": "PostEcommerceApiV1ProductidAddtocart"
  },
  {
    "type": "put",
    "url": "/ecommerce/api/v1/:productId/addrating",
    "title": "add rating to product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId should be passed in url,productId is unique key to identify a record</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ratings",
            "description": "<p>rate your product</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"error\": false,\n    \"status\": 200,\n    \"message\": \"product created successfully\",\n    \"data\": {\n        \"avgRating\": 0,\n        \"colors\": [\n            \n        \n        ],\n        \"sellers\": [\n            \n        ],\n        \"stockAvailb le\": \"yes\",\n        \"highlights\": [],\n        \"_id\": \"string\",\n        \"productId\": \"string\",\n        \"productDescription\": \"string\",\n        \"productName\": \"string\",\n        \"category\": \"string\",\n        \"subCategory\": \"string\",\n        \"modal\": \"string\",\n        \"picture\": \"string\",\n        \"cost\": number,\n        \"created\": \"2018-08-14T06:32:54.856Z\",\n        \"lastModified\": \"2018-08-14T06:32:54.856Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routers.js",
    "groupTitle": "create",
    "name": "PutEcommerceApiV1ProductidAddrating"
  },
  {
    "type": "post",
    "url": "/ecommerce/api/v1/:productId/removeFromCart",
    "title": "delete productsFromCart",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId should be passed in url,productId is unique key to identify a record</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"status\": 200,\n            \"message\": \"product removed from cart successfully\",\n\t\t\t\"data\": \n\t\t\t{\n                \"_id\": \"string\",\n\t    \t\"__v\": number,\n\t\t\t\"productId\": \"string\",\n\t\t\t\"productName\": \"string\",\n\t\t\t\"picture\": \"string\",\n\t\t\t\"offersAvailable\": \"string\",\n\t\t\t\"cost\": number,\n\t\t    \"color\": object(type = array),\n\t\t\t\"sellerName\":\"string\",\n\t\t\t\"quantity\":number,\n\t\t\t\"Amountpayable\": number,\n\t\t\t\"deliveryday\":\"string\"\t\t    \n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routers.js",
    "groupTitle": "delete",
    "name": "PostEcommerceApiV1ProductidRemovefromcart"
  },
  {
    "type": "post",
    "url": "/ecommerce/api/v1/remove/:productId",
    "title": "Delete products from list",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId should be passed in url,productId is unique key to identify a record</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"product removed successfully\",\n    \"data\": {\n        \"avgRating\": 0,\n        \"colors\": [],\n        \"sellers\": [],\n        \"stockAvailble\": \"\",\n        \"highlights\": [],\n        \"_id\": \"\",\n        \"productId\": \"\",\n        \"productDescription\": \"\",\n        \"productName\": \"\",\n        \"modal\": \"\",\n        \"picture\": \"\",\n        \"cost\": ,\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"status\": \"product not found\",\n    \"message\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routers.js",
    "groupTitle": "delete",
    "name": "PostEcommerceApiV1RemoveProductid"
  },
  {
    "type": "put",
    "url": "/ecommerce/api/v1/edit/:productId",
    "title": "edit product in list",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId should be passed in url,productId is unique key to identify a record</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>send attributes you want to edit example productName</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n          \"error\": false,\n          \"status\": 200,\n          \"message\": \"product updated successfully\",\n\t\t  \"data\": \n\t\t   {\n            \"n\": 1,\n            \"nModified\": 0,\n            \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routers.js",
    "groupTitle": "edit",
    "name": "PutEcommerceApiV1EditProductid"
  },
  {
    "type": "get",
    "url": "/ecommerce/api/v1/all",
    "title": "Get allProducts",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \" product data retreived Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {    \n\t\t\t        \"colors\": \"object(type = array)\",\n\t\t\t\t\t\"sellers\": \"object(type=array)\", \n\t\t\t\t\t\"ratings\":\"array\",\n\t\t\t\t\t\"highlights\": \"object(type=array)\",\n\t    \t\t\t\"_id\": \"string\",\n\t    \t\t\t\"__v\": number,\n\t\t\t\t\t\"productId\": \"string\",\n\t\t\t\t\t\"productName\": \"string\",\n\t\t\t\t\t\"productDescription\": \"string\",\n\t\t\t\t\t\"brandName\": \"string\",\n\t\t\t\t\t\"picture\": \"string\",\n\t\t\t\t\t\"stockAvailable\": \"string\",\n\t\t\t\t\t\"cost\": \"number\",\n\t\t\t\t\t\"author\": \"string\",\n\t\t\t\t\t\"created\": \"date\",\n\t\t\t\t\t\"lastModified\": \"date\"\n\t\t\t\t}\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routers.js",
    "groupTitle": "read",
    "name": "GetEcommerceApiV1All"
  },
  {
    "type": "get",
    "url": "/ecommerce/api/v1/cart/all",
    "title": "Get allproducts in cart",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \" product data retreived Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {    \n\t\t\t         \n\t        \"_id\": \"string\",\n\t    \t\"__v\": number,\n\t\t\t\"productId\": \"string\",\n\t\t\t\"productName\": \"string\",\n\t\t\t\"picture\": \"string\",\n\t\t\t\"offersAvailable\": \"string\",\n\t\t\t\"cost\": number,\n\t\t    \"color\": object(type = array),\n\t\t\t\"sellerName\":\"string\",\n\t\t\t\"quantity\":number,\n\t\t\t\"Amountpayable\": number,\n\t\t\t\"deliveryday\":\"string\"\t\t\t  \n\t\t\t\t\n\t    \t\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n \"error\": true,\n \t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routers.js",
    "groupTitle": "read",
    "name": "GetEcommerceApiV1CartAll"
  },
  {
    "type": "get",
    "url": "/ecommerce/api/v1/single/:productId",
    "title": "Get singleproduct by Id",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId should be passed in url,productId is unique key to identify a record</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"successfull\",\n\t    \"status\": 200,\n\t\t\"data\": \n\t\t{  \n\t\t\n            \"category\": \"string\",\n            \"subCategory\": \"string\",\n            \"modal\": \"string\",\n            \"picture\": \"string\",\n            \"cost\": number,\n            \"created\": \"2018-08-14T06:32:54.856Z\",\n            \"lastModified\": \"2018-08-14T06:32:54.856Z\",\n            \"__v\": 0\t    \t\t\n\t\t\tavgRating\": 0,\n\t\t\t\"ratings\":[],\n            \"colors\": [\n            \n        \n                   ],\n            \"sellers\": [\n            \n                       ],\n            \"stockAvailble\": \"yes\",\n            \"highlights\": [],\n            \"_id\": \"string\",\n            \"productId\": \"string\",\n            \"productDescription\": \"string\",\n\t\t\t\"productName\": \"string\",\n\t\t}\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routers.js",
    "groupTitle": "read",
    "name": "GetEcommerceApiV1SingleProductid"
  }
] });
