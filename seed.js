const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/E-commerce')
.then(()=>{ console.log('DB is connected')})
.catch(e => console.log(e))



const dummy_products = [
    {
        name:'Gooogle pixal 6a',
        img:'https://media.istockphoto.com/id/1410448101/photo/mobile-phone-mockup-image-screen-as-empty-hand-levitating-a-blank-display-smartphone-clean.webp?b=1&s=170667a&w=0&k=20&c=WWU-yIAW9MzVMlDuQzKSAi8dPTtg5U60JzV8cGIvTcU=',
        price:'27000',
        desc:'The Pixel 6a is an Android smartphone designed, developed, and marketed by Google as part of the Google Pixel product line. It serves as a mid-range variant of the Pixel 6 and Pixel 6 Pro. The device was announced on May 11, 2022 as part of Google I/O'
    },
    {
        name:'Gooogle pixal 6a',
        img:'https://media.istockphoto.com/id/1410448101/photo/mobile-phone-mockup-image-screen-as-empty-hand-levitating-a-blank-display-smartphone-clean.webp?b=1&s=170667a&w=0&k=20&c=WWU-yIAW9MzVMlDuQzKSAi8dPTtg5U60JzV8cGIvTcU=',
        price:'27000',
        desc:'The Pixel 6a is an Android smartphone designed, developed, and marketed by Google as part of the Google Pixel product line. It serves as a mid-range variant of the Pixel 6 and Pixel 6 Pro. The device was announced on May 11, 2022 as part of Google I/O'
    },
    {
        name:'Gooogle pixal 6a',
        img:'https://media.istockphoto.com/id/1410448101/photo/mobile-phone-mockup-image-screen-as-empty-hand-levitating-a-blank-display-smartphone-clean.webp?b=1&s=170667a&w=0&k=20&c=WWU-yIAW9MzVMlDuQzKSAi8dPTtg5U60JzV8cGIvTcU=',
        price:'27000',
        desc:'The Pixel 6a is an Android smartphone designed, developed, and marketed by Google as part of the Google Pixel product line. It serves as a mid-range variant of the Pixel 6 and Pixel 6 Pro. The device was announced on May 11, 2022 as part of Google I/O'
    },
    {
        name:'Gooogle pixal 6a',
        img:'https://media.istockphoto.com/id/1410448101/photo/mobile-phone-mockup-image-screen-as-empty-hand-levitating-a-blank-display-smartphone-clean.webp?b=1&s=170667a&w=0&k=20&c=WWU-yIAW9MzVMlDuQzKSAi8dPTtg5U60JzV8cGIvTcU=',
        price:'27000',
        desc:'The Pixel 6a is an Android smartphone designed, developed, and marketed by Google as part of the Google Pixel product line. It serves as a mid-range variant of the Pixel 6 and Pixel 6 Pro. The device was announced on May 11, 2022 as part of Google I/O'
    },
    {
        name:'Gooogle pixal 6a',
        img:'https://media.istockphoto.com/id/1410448101/photo/mobile-phone-mockup-image-screen-as-empty-hand-levitating-a-blank-display-smartphone-clean.webp?b=1&s=170667a&w=0&k=20&c=WWU-yIAW9MzVMlDuQzKSAi8dPTtg5U60JzV8cGIvTcU=',
        price:'27000',
        desc:'The Pixel 6a is an Android smartphone designed, developed, and marketed by Google as part of the Google Pixel product line. It serves as a mid-range variant of the Pixel 6 and Pixel 6 Pro. The device was announced on May 11, 2022 as part of Google I/O'
    },
    {
        name:'Gooogle pixal 6a',
        img:'https://media.istockphoto.com/id/1410448101/photo/mobile-phone-mockup-image-screen-as-empty-hand-levitating-a-blank-display-smartphone-clean.webp?b=1&s=170667a&w=0&k=20&c=WWU-yIAW9MzVMlDuQzKSAi8dPTtg5U60JzV8cGIvTcU=',
        price:'27000',
        desc:'The Pixel 6a is an Android smartphone designed, developed, and marketed by Google as part of the Google Pixel product line. It serves as a mid-range variant of the Pixel 6 and Pixel 6 Pro. The device was announced on May 11, 2022 as part of Google I/O'
    },
    {
        name:'Gooogle pixal 6a',
        img:'https://media.istockphoto.com/id/1410448101/photo/mobile-phone-mockup-image-screen-as-empty-hand-levitating-a-blank-display-smartphone-clean.webp?b=1&s=170667a&w=0&k=20&c=WWU-yIAW9MzVMlDuQzKSAi8dPTtg5U60JzV8cGIvTcU=',
        price:'27000',
        desc:'The Pixel 6a is an Android smartphone designed, developed, and marketed by Google as part of the Google Pixel product line. It serves as a mid-range variant of the Pixel 6 and Pixel 6 Pro. The device was announced on May 11, 2022 as part of Google I/O'
    },
    {
        name:'Gooogle pixal 6a',
        img:'https://media.istockphoto.com/id/1410448101/photo/mobile-phone-mockup-image-screen-as-empty-hand-levitating-a-blank-display-smartphone-clean.webp?b=1&s=170667a&w=0&k=20&c=WWU-yIAW9MzVMlDuQzKSAi8dPTtg5U60JzV8cGIvTcU=',
        price:'27000',
        desc:'The Pixel 6a is an Android smartphone designed, developed, and marketed by Google as part of the Google Pixel product line. It serves as a mid-range variant of the Pixel 6 and Pixel 6 Pro. The device was announced on May 11, 2022 as part of Google I/O'
    }
]

async function seedDB(){
    await Product.deleteMany()
    await Product.insertMany(dummy_products)
    console.log('DB seeded')
}

seedDB()