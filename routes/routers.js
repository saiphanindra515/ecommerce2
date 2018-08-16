const express = require('express');
const appConfig = require('./../Config/appConfig');
const controllers = require('./../Controllers/controllers')

let allRoutes = (app)=>{
let BaseUrl = appConfig.apiVersion;


app.get(BaseUrl+'/all',controllers.alldata);
 /**
	 * @api {get} /ecommerce/api/v1/all Get allProducts
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": " product data retreived Successfully.",
	    "status": 200,
	    "data": {    
			        "colors": "object(type = array)",
					"sellers": "object(type=array)", 
					"ratings":"array",
					"highlights": "object(type=array)",
	    			"_id": "string",
	    			"__v": number,
					"productId": "string",
					"productName": "string",
					"productDescription": "string",
					"brandName": "string",
					"picture": "string",
					"stockAvailable": "string",
					"cost": "number",
					"author": "string",
					"created": "date",
					"lastModified": "date"
				}
	    }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	 *  "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */




app.get(BaseUrl+'/single/:productId',controllers.singleData);

 /**
	 * @api {get} /ecommerce/api/v1/single/:productId Get singleproduct by Id
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 * @apiParam {String} productId productId should be passed in url,productId is unique key to identify a record
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "successfull",
	    "status": 200,
		"data": 
		{  
		
            "category": "string",
            "subCategory": "string",
            "modal": "string",
            "picture": "string",
            "cost": number,
            "created": "2018-08-14T06:32:54.856Z",
            "lastModified": "2018-08-14T06:32:54.856Z",
            "__v": 0	    		
			avgRating": 0,
			"ratings":[],
            "colors": [
            
        
                   ],
            "sellers": [
            
                       ],
            "stockAvailble": "yes",
            "highlights": [],
            "_id": "string",
            "productId": "string",
            "productDescription": "string",
			"productName": "string",
		}
   }		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	 *  "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */







app.get(BaseUrl+'/cart/all',controllers.allCart);
/**
	 * @api {get} /ecommerce/api/v1/cart/all Get allproducts in cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
 	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": " product data retreived Successfully.",
	    "status": 200,
	    "data": {    
			         
	        "_id": "string",
	    	"__v": number,
			"productId": "string",
			"productName": "string",
			"picture": "string",
			"offersAvailable": "string",
			"cost": number,
		    "color": object(type = array),
			"sellerName":"string",
			"quantity":number,
			"Amountpayable": number,
			"deliveryday":"string"			  
				
	    	
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	 *  "error": true,
 	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

app.post(BaseUrl+'/:productId/removeFromCart',controllers.RemoveFromCart);
/**
	 * @api {post} /ecommerce/api/v1/:productId/removeFromCart delete productsFromCart
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 * @apiParam {String} productId productId should be passed in url,productId is unique key to identify a record
	 *  @apiSuccessExample {json} Success-Response:
	 * {
            "error": false,
            "status": 200,
            "message": "product removed from cart successfully",
			"data": 
			{
                "_id": "string",
	    	"__v": number,
			"productId": "string",
			"productName": "string",
			"picture": "string",
			"offersAvailable": "string",
			"cost": number,
		    "color": object(type = array),
			"sellerName":"string",
			"quantity":number,
			"Amountpayable": number,
			"deliveryday":"string"		    
            }
        }
				
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	 *  "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

app.post(BaseUrl+'/remove/:productId',controllers.removeData);
/**
	 * @api {post} /ecommerce/api/v1/remove/:productId Delete products from list
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 * @apiParam {String} productId productId should be passed in url,productId is unique key to identify a record
	 *  @apiSuccessExample {json} Success-Response:
	 *   {
    "error": false,
    "status": 200,
    "message": "product removed successfully",
    "data": {
        "avgRating": 0,
        "colors": [],
        "sellers": [],
        "stockAvailble": "",
        "highlights": [],
        "_id": "",
        "productId": "",
        "productDescription": "",
        "productName": "",
        "modal": "",
        "picture": "",
        "cost": ,
        "__v": 0
    }
}		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
    "error": true,
    "status": "product not found",
    "message": 404,
    "data": null
}
	 */

app.post(BaseUrl+'/create', controllers.create );
/**
	 * @api {post} /ecommerce/api/v1/create create product in list
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *  @apiParam {String} productName Name of the product 
     *  @apiParam {String} brandName Name of the Brand
	 *  @apiParam {String} category enter category of product for example mobiles belongs to electronics
	 *  @apiParam {String} subCategory category includes subcategories ex: electronics include mobiles,Tvs,players etc
	 *  @apiParam {String} modal modal name 
	 *  @apiParam {number} cost cost of the product
	 *  @apiParam {String} productDescription Description about product
	 *  @apiParam {String} picture picture of the product  
	 *  @apiParam {String} color enter colors of products available ex: Red,blue,green
	 *  @apiParam {String} seller enter sellers information available ex:bigc,celekt,Lot
	 *  @apiParam {String} highlight enter highlights of product ex: 3gbram,snapdragon processor,7th generation
	 * 
	 *  @apiSuccessExample {json} Success-Response:
	*  {
    "error": false,
    "status": 200,
    "message": "product created successfully",
    "data": {
        "avgRating": 0,
        "colors": [
            
        
        ],
        "sellers": [
            
        ],
        "stockAvailb le": "yes",
        "highlights": [],
        "_id": "string",
        "productId": "string",
        "productDescription": "string",
        "productName": "string",
        "category": "string",
        "subCategory": "string",
        "modal": "string",
        "picture": "string",
        "cost": number,
        "created": "2018-08-14T06:32:54.856Z",
        "lastModified": "2018-08-14T06:32:54.856Z",
        "__v": 0
    }
} 
			         
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	 *  "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

app.post(BaseUrl+'/:productId/addToCart',controllers.addToCart);
/**
	 * @api {post} /ecommerce/api/v1/:productId/addToCart Add product to cart
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *  @apiParam {String} color select color of the product
	 *  @apiParam {String} quantity mention how many products you want to buy 
	 *  @apiSuccessExample {json} Success-Response:
	 * {
          "error": false,
         "status": 200,
           "message": "product added to cart successfully",
            "data": {
                  "_id": "5b6fdb3a6ef7af46f04a3773",
                  "productName": "one plus 6",
                  "productId": "V50Av41xW",
                   "color": "black",
                    "quantity": 3,
                   "Amountpayable": 108,
                    "__v": 0
         }
   * }
	 *  
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	 *  "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */


app.put(BaseUrl+'/edit/:productId',controllers.updatedata);
/**
	 * @api {put} /ecommerce/api/v1/edit/:productId edit product in list
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 * @apiParam {String} productId productId should be passed in url,productId is unique key to identify a record
	     @apiParam {String} productName send attributes you want to edit example productName
	 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
          "error": false,
          "status": 200,
          "message": "product updated successfully",
		  "data": 
		   {
            "n": 1,
            "nModified": 0,
            "ok": 1
           }
       }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	 *  "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */
app.post (BaseUrl+'/:productId/addrating',controllers.addrating);
/**
	 * @api {put} /ecommerce/api/v1/:productId/addrating add rating to product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 * @apiParam {String} productId productId should be passed in url,productId is unique key to identify a record
	     @apiParam {String} ratings rate your product
	 
	 *  @apiSuccessExample {json} Success-Response:
	 * "error": false,
    "status": 200,
    "message": "product created successfully",
    "data": {
        "avgRating": 0,
        "colors": [
            
        
        ],
        "sellers": [
            
        ],
        "stockAvailb le": "yes",
        "highlights": [],
        "_id": "string",
        "productId": "string",
        "productDescription": "string",
        "productName": "string",
        "category": "string",
        "subCategory": "string",
        "modal": "string",
        "picture": "string",
        "cost": number,
        "created": "2018-08-14T06:32:54.856Z",
        "lastModified": "2018-08-14T06:32:54.856Z",
        "__v": 0
    }
} 	  
	 *  
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	 *  "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

}
module.exports = {
    allRoutes:allRoutes
}