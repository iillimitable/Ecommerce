const express = require('express');
const Product = require('../models/product');
const { findByIdAndDelete } = require('../models/review');
const Review = require('../models/review');
const { validateproducts } = require('../middleware');
const router = express.Router();








router.get('/products/about', (req, res) => {
  try {
    res.render('products/about');
  } catch (e) {
    res.render('error', { err: e.message });
  }
});





router.get('/home', (req, res) => {
  try {
    res.render('products/home');
  } catch (e) {
    res.render('error', { err: e.message });
  }
});



router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});

    // res.render(product)
    res.render('products/index', { products });
  } catch (e) {
    res.render('error', { err: e.message });
  }
});



router.get('/products/new', (req, res) => {
  try {
    res.render('products/new');
  } catch (e) {
    res.render('error', { err: e.message });
  }
});


/* router.get('/products/:id', (req, res) => {
  try {
    res.render('/products/show');
  } catch (e) {
    res.render('error', { err: e.message });
  }
}); */




router.post('/products',validateproducts, async (req, res) => {
  try {
    await Product.create(req.body);
    res.redirect('/products');
  } catch (e) {
    res.render('error', { err: e.message });
  }
}); 








router.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate('review');
    res.render('products/show', { product });
  } catch (e) {
    res.render('error', { e: e.message });
  }
});



router.get('/products/:id/edit', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.render('products/productsedit', { product });
    //res.send('edit krlo')
  } catch (e) {
    res.render('error', { err: e.message });
  }
});




router.patch('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, req.body);
    res.redirect(`/products/${id}`);
  } catch (e) {
    res.render('error', { err: e.message });
  }
});





router.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;

    //console.log(id)

    const product = await Product.findById(id);
    for (let reviewId of product.review) {
      await Review.findByIdAndDelete(reviewId);
    }

    await Product.findByIdAndDelete(id);
    res.redirect('/products');
  } catch (e) {
    res.render('error', { err: e.message });
  }
});





module.exports = router;
