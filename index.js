const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const PORT = 5000



app.engine('ejs',ejsMate)

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))


app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/E-commerce')
.then(()=>{ console.log('DB is connected')})
.catch(e => console.log(e))


const productsRoutes = require('./routes/products')


app.use(productsRoutes)

app.get('/',(req,res)=>{
    

   res.send('working fine!!')
}) 

app.listen(PORT,()=>{
    console.log('server is up at port',PORT)
})