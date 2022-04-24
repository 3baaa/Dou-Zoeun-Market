import express from "express";
import User from "../models/User.js";
import Product from "../models/Product.js";
import ProductImg from "../models/ProductImg.js";
import Favorite from "../models/Favorite.js";

const MyPageRouter = express.Router();

MyPageRouter.get("/product", async (req, res) => {
  const page = (req.query.page - 1) * 4;
  const data = await Product.findAll({
    include: [
      {
        model: User,
        required: true,
      },
      {
        model: ProductImg,
        attributes: ["imgUrl"],
        required: true,
      },
    ],
    limit: 4,
    offset: page,
  });
  res.json(data);
});

MyPageRouter.get("/favorite", async (req, res) => {
  const page = (req.query.page - 1) * 4;
  const data = await Favorite.findAll({
    include: [
      {
        model: User,
        required: true,
      },
      {
        model: Product,
        attributes: ["title", "price"],
        required: true,
      },
      {
        model: ProductImg,
        attributes: ["imgUrl"],
        required: true,
      },
    ],
    limit: 4,
    offset: page,
  });
  res.json(data);
});

MyPageRouter.post("/img", async (req, res) => {
    await User.update(
        {img:req.body.img},
        {where:{idx:1}}
        );
    res.send(req.body.img);
});

MyPageRouter.get("/currentImg", async (req, res) => {
    const data2 = await User.findOne({
        attributes:["img"],
        where:{idx : 1}
    });
    res.send(data2);
});

MyPageRouter.get("/num",
    async (req, res, next) => {
        const pNum = await Product.findAndCountAll({
            include: [{
                model: User,
                required: true,
                where: {idx: 1}
            }]
        });

        req.data = pNum.count;
        next();
    },
    async (req, res, next)=> {
        const tmp = req.data
        const fNum = await Favorite.findAndCountAll({
            include: [{
                model: User,
                required: true,
                where:{idx:1}
            }]
        });
        console.log(fNum);

        res.send([tmp, fNum.count]);
    }
)

MyPageRouter.post("/img", async (rea, res) => {
  User.update({ img: req.body.img }, { where: { idx: 1 } });
});


export default MyPageRouter;
