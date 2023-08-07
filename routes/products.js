const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.get('/products', async (req, res) => {
  const products = await Product.find({});

 // res.render(product)
  res.render('products/index' , { products });
});

router.get('/products/new',(req,res)=>{
  res.render('products/new')
})

router.get('/products/about',(req,res)=>{
  res.render('products/about')
})

router.get('/home',(req,res)=>{
  res.render('products/home')
  

})

router.get('/products/:id/edit',async(req,res)=>{
  const{id}=req.params
  const product = await Product.findById(id)

  res.render('products/productsedit',{product}) 
  //res.send('edit krlo')
})

router.patch('/products/:id', async(req,res)=>{
  const {id} = req.params
  await Product.findByIdAndUpdate(id,req.body)
  res.redirect(`/products/${id}`)
})

router.get('/products/:id',async (req,res)=>{
  const {id} = req.params
  const product = await Product.findById(id)
  res.render('products/show',{product})
})





  


router.get('/products', async (req,res)=>{
  await Product.create(req.body)
  res.redirect('/products')
})

router.get('/products/:id',(req,res)=>{
  res.render('/products/show')
})

module.exports = router;
