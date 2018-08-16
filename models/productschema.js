const mongoose = require('mongoose');
Schema = mongoose.Schema;

let product = new Schema({
     
    productId:{
        type:String
        
    },
    productName:{
        type:String
    },
     brandName :{
         type:String
     }, 
     modal:{
         type:String
     },
     
   ratings:[],
   cost:{
       type:Number
   },
     picture:{
         type:String
     },
     colors: [],
     sellers:[],
     stockAvailble:{
         type:String,
         default:'yes'
     },
  productDescription:{
      type:String
  },
  highlights:[],
  
  category:{
    type:String
    },
   subCategory:{
    type:String
    },
   created:{
    type:Date
   },
   lastModified:{
       type:Date
    }
  


})

mongoose.model('productSchema',product);  