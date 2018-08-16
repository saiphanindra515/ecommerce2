 const mongoose = require('mongoose');
const schema = mongoose.Schema;

let cart = new schema({
    productName:{
        type:String
    },
    productId :{
        type:String
    },
    color:{
        type:String
    },
    picture:{
        type:String
    },
    Amountpayable:{
        type:Number
    },
    quantity:{
        type:Number
    },
    sellerName:{
        type:String
    },
    deliveryday :{
        type:String
    },
    offersAvailable:{
        type:Number
    }
})

mongoose.model('cart',cart);