import express from "express";
import Product from '../models/Product.js';
import ProductImg from '../models/ProductImg.js';

const productFormRouter = express.Router();

//await는 async안에서 사용할수 있다
//await를 사용해야 동기적으로 보낼수 있다
productFormRouter.post("/", async (req, res) => {
    console.log(req.body);
    const title = req.body.title;
    const category = req.body.category;
    const address = req.body.address;
    const productStatus = req.body.productStatus;
    const exchange = req.body.exchange;
    const price = req.body.price;
    const shippingIncluded = req.body.shippingIncluded;
    const content = req.body.content;
    const imgs = req.body.imgs;
    
    //Product.create를 사용해서 서버에서 db로 데이터 전송
     await Product.create({
         title: title,
         categoryId: category,
         address: address,
         productStatus: productStatus,
         exchange: exchange,
         price: price,
         shippingIncluded: shippingIncluded,
         content: content
     });

    //imgs = [ Img, img ]
    //img = { id, imageData }
    for(let i=0; i<imgs.length; i++){
        ProductImg.create({
            imgUrl : imgs[i].ImgData
        });
    }
    /*
    imgs.forEach(element => {
         ProductImg.create({
             imgUrl : element.imageData
         });
     });
    */
    //res.send를 사용해서 클라이언트로 db에서 받은 데이터를 전송
    //res.send(await createOrDelete(id, 1)); 상품수정시 클라이언트에 전송

    res.redirect(process.env.CLIENT_URL_PORT);

});

export default productFormRouter;