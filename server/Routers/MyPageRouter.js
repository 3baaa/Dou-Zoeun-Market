import express from "express";
import User from "../models/User.js"
import Product from "../models/Product.js";
import ProductImg from "../models/ProductImg.js";
import Favorite from "../models/Favorite.js";

const MyPageRouter = express.Router();

MyPageRouter.get("/product", async (req, res) => {
  const page = (req.query.page - 1) * 4;
  const data = await Product.findAll({
      include:[{
          model:User,
          required:true
        }, {
          model: ProductImg,
          attributes: ["imgUrl"],
          required: true
        }
      ],
      limit:4,
      offset:page
  });
  res.json(data);
});

MyPageRouter.get("/favorite", async (req, res) => {
    const page = (req.query.page - 1) * 4;
    const data = await Favorite.findAll({
        include:[{
            model:User,
            required:true
        }, {
            model: Product,
            attributes: ["title", "price"],
            required: true
        },{
            model:ProductImg,
            attributes: ["imgUrl"],
            required:true
        }
        ],
        limit:4,
        offset:page
    });
    res.json(data);
});

export default MyPageRouter;