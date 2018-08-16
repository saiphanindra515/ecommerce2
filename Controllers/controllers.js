const mongoose = require('mongoose')
const express = require('express')
const product = mongoose.model('productSchema');
const shortid = require('shortid');
const check = require('./../library/check');
const cart = mongoose.model('cart');
const logger = require('./../library/Error');
const response = require('./../library/response')

let create =(req,res)=>{
    let id = shortid.generate();
    let today = Date.now();
    let newdata = new product({
       productId : id,
       productDescription : req.body.productDescription,
       productName: req.body.productName,
       category:req.body.category,
       subCategory :req.body.subCategory,
       modal: req.body.modal,
       picture : req.body.picture,
       cost:req.body.cost,
       created:today,
       lastModified:today
        
    })
     let color = (req.body.color==undefined||req.body.color==null||req.body.color=='') ? [] : req.body.color.split(",")
     newdata.colors=color;
     let seller = (req.body.seller==undefined||req.body.seller==null||req.body.seller=='') ? [] : req.body.seller.split(",")
     newdata.sellers= seller;
     let highlights = (req.body.highlight==undefined||req.body.highlight==null||req.body.highlight=='') ? [] : req.body.highlight.split(",")
     newdata.highlights= highlights;
     
     
     newdata.save((err,result)=>{
         if(err){
             let apiresponse= response.generate(true,500,"product not created","error in creating,check backend");
             logger.error(`Error Occured : ${err}`, 'Database', 10);
            res.send(apiresponse);
         } else{
          let apiresponse = response.generate(false,200,"product created successfully",result);
            res.send(apiresponse);
         }
        
     })
}

//Get all products
let alldata = (req,res)=>{
    product.find().exec((err,result)=>{
        if(err){
            logger.error(`Error Occured : ${err}`, 'error at alldata', 8)
            let apiresponse = response.generate(true,500,"Error occured",null);
            res.send(apiresponse);
            
        }else if(check.checkif(result)){
            
            logger.error(`Error Occured : ${err}`, 'no data stored in alldata', 6)
           let apiresponse = response.generate(true,500,"Error occured",null);
            res.send(apiresponse);
            
        }else{
            let apiresponse = response.generate(false,200,"product retreived successfully",result);
            res.send(apiresponse);
        }
    })
}

//update data

let updatedata = (req,res)=>{
    let options=req.body;
    product.update({'productId':req.params.productId},options,{multi:true}).exec((err,result)=>{
        if(err){
            console.log('error occured at alldata');
            let apiresponse = response.generate(true,500,"Error occured",null);
            res.send(apiresponse);
            
            logger.error(`Error Occured : ${err}`, "error at update", 10)
        }else if(check.checkif(result)){
            logger.error(`Error Occured : ${err}`, 'error at singledata', 10)
            let apiresponse = response.generate(true,500,"Error occured",null);
            res.send(apiresponse);
            
            
        }else{
            let apiresponse = response.generate(false,200,"product updated successfully",result);
            res.send(apiresponse);
        }
    })
}

//get singleData

let singleData =(req,res)=>{
    product.findOne({'productId': req.params.productId}).exec((err,result)=>{
        if(err){
            logger.error(`Error Occured : ${err}`, 'error at singledata', 8)
            let apiresponse=response.generate(true,500,"Error occured",null)
            res.send(apiresponse)
            
            
        }else if(check.checkif(result)){
            logger.error(`Error Occured : ${err}`, 'error at singledata', 8)
            let apiresponse=response.generate(true,500,"Error occured",null)
            res.send(apiresponse)
            
        }else{
            let apiresponse = response.generate(false,200,"successfull",result);
            res.send(apiresponse);
        }
    })
}

//remove blog 

let removeData = (req,res)=>{
   
    product.findOneAndRemove({'productId': req.params.productId}).exec((err,result)=>{
        if(err){
            let apiresponse=response.generate(true,500,"Error occured",null)
            res.send(apiresponse)
            logger.error(`Error Occured : ${err}`, 'error occured at removeData', 6)
            console.log('error occured at alldata');
        }
        else if (check.checkif(result)) {
            console.log('product not found')
            let apiResponse = response.generate(true, 'product not found', 404, null)
            res.send(apiResponse)
        }
        else{
            let apiresponse = response.generate(false,200,"product removed successfully",result);
            res.send(apiresponse);
        }
    })
    }



//Add  to Cart
 
let addToCart = (req,res)=>{
    
    if(check.checkif(req.params.productId)){
        logger.error(`Error Occured : ${err}`, 'addtocart no productid found', 10)
        let apiresponse = response.generate(true,500,"Error occured",null);
        res.send(apiresponse);
        
    }else{
        product.findOne({'productId':req.params.productId},(err,result)=>{
            if(err){
                let apiresponse = response.generate(true,500,"Error occured",null);
                res.send(apiresponse);
                
                logger.error(`Error Occured : ${err}`, 'error at addTocart findone if', 10)
                console.log('error occured in addToCart');
            }else{
                let value=check.checkcolor(result,req); //checking whether user entered productcolor is available or not
               if(value){
                let costpayable=(req.body.quantity*result.cost); //variable for storing total amount user has to pay(if he order more than one)
                let newcart= new cart({
                    productName:result.productName,
                    productId:result.productId,
                    color:req.body.color,
                    quantity:req.body.quantity,
                    Amountpayable:costpayable
                })
                newcart.save((err,result)=>{
                 if(err){
                    logger.error(`Error Occured : ${err}`, 'error at addtocart', 10)
                    console.log('error occured in addToCart new cart part');
                    let apiresponse = response.generate(true,500,"Error occured",null);
                    res.send(apiresponse);
                    
                 }else{
                    let apiresponse = response.generate(false,200,"product added to cart successfully",result);
                    res.send(apiresponse);
                 }   
                })
            }
            else{
                let apiresponse = response.generate(false,200,"no color found on that product",null);
                res.send(apiresponse);
            }
            }
        })
    }
}

//products Added to cart

let allCart = (req,res)=>{
    cart.find().exec((err,result)=>{
        if(err){
            let apiresponse=response.generate(true,500,"Error occured",null)
            res.send(apiresponse)
            logger.error(`Error Occured : ${err}`, 'error at allCart if', 8)
         console.log('error occured at all cart');
        }else if(check.checkif(result)){
            let apiresponse=response.generate(true,500,"no data is entered",null)
            res.send(apiresponse)
            logger.error(`Error Occured : ${err}`, 'error at allcart', 8)
                console.log('no data found');
        } else{
            let apiresponse = response.generate(false,200,"products added to cart",result);
            res.send(apiresponse);
        }
    })
}

//removing item from cart
let RemoveFromCart = (req,res)=>{
    
    
        cart.findOneAndRemove({'productId':req.params.productId},(err,result)=>{
            if(err){
                let apiresponse = response.generate(true,500,"Error occured",null);
                res.send(apiresponse);
               logger.error(`Error Occured : ${err}`, 'error at Removefromcart', 8)
                console.log('some error occured in removefrom cart');
            }
            else if (check.checkif(result)) {
                console.log('product not found')
                let apiResponse = response.generate(true, 'product not found', 404, null)
                res.send(apiResponse)
            }
            else{
                let apiresponse = response.generate(false,200,"product removed from cart successfully",result);
            res.send(apiresponse);
            }
        })
    }
  let addrating = (req,res)=>{
      if(check.checkif(req.params.productId)){
        let apiresponse = response.generate(true,500,"product id not valid",null);
        res.send(apiresponse);
      } else{
          
            
      product.findOne({"productId":req.params.productId}).exec((err,result)=>{
          if(err){
            let apiresponse = response.generate(true,500,"Error occured",null);
            res.send(apiresponse);
          }else if(check.checkif(result)){
            let apiresponse = response.generate(true,500,"Error occured",null);
            res.send(apiresponse);
          }else{
              result.ratings.push(req.body.ratings);
              result.save((err,result)=>{
                  if(err){
                    let apiresponse = response.generate(true,500,"Error occured",null);
                    res.send(apiresponse);
                   logger.error(`Error Occured : ${err}`, 'error at Removefromcart', 8)
                    console.log('some error occured in removefrom cart');

                  }else{
                    let apiresponse = response.generate(false,200,"rating added successfully",result);
                    res.send(apiresponse);
                  }
              })
              
          }
      })
  }
}

module.exports={
    create:create,
    alldata:alldata,
    updatedata:updatedata,
    singleData:singleData,
    removeData:removeData,
    addrating:addrating,
    addToCart:addToCart,
    allCart:allCart,
    RemoveFromCart:RemoveFromCart
}