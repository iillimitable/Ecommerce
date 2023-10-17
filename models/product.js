const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        require:true,
    },
    img:{
        type:String,
        trim:true,
        default:'../images/product.jpg'

    },
    price:{
        type:Number,
        min:0,
        default:0

    },
    desc:{
        type:String,
        trim:true
    },
    rating:{
        type:Number,
        default:0,
    },
    review:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'

        }
    ]
})

const Product = mongoose.model('Product',productSchema)
module.exports = Product