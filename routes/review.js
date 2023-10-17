const express = require('express')
const Review = require('../models/review')
const Product = require('../models/product')
const router = express.Router()
const {validatereviews} = require('../middleware')


router.post('/products/:productId/reviews',validatereviews,async(req,res)=>{


    const {productId} = req.params
  
    const  newReview = new Review(req.body)
    await newReview.save()
    const product = await Product.findById(productId)
    
    
    
    const newAvgRating = ((Product.avgRating * product.review.length) + parseInt(req.body.rating)) / (product.review.length + 1);
    Product.avgRating = parseFloat(newAvgRating.toFixed(1));
    
    
    
    
    product.review.push(newReview)
    
    await product.save()
    await newReview.save()
    
    //console.log(req.body)
      res.redirect('back')
    
  
 
})


router.delete('/products/:reviewId',async(req,res)=>{

  try {
    const{reviewId} = req.params
  
 
    await Review.findByIdAndDelete(reviewId)  
  
  res.send('working reviews')
    
  } catch (e) {
    res.render('error', { err: e.message });
  }
})







module.exports = router