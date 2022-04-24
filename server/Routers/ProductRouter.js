import express from "express";
import Product from "../models/Product.js";
import ProductImg from "../models/ProductImg.js";
import Favorite from "../models/Favorite.js";
import Category from "../models/Category.js";
import Common from "../models/Common.js";
import { Op } from "sequelize";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  console.log(req.query.page);
  const page = (req.query.page - 1) * 4;
  const data = await Product.findAll({
    include: [
      {
        model: ProductImg,
        attributes: ["imgUrl"],
        required: true,
      },
    ],
    limit: 4,
    offset: page,
    order: [["updatedAt", "ASC"]],
  });

  res.json(data);
});

productRouter.get(
  "/detail/:id",
  async (req, res, next) => {
    const { id } = req.params;
    const data = await Product.findOne({
      attributes: [
        "title",
        "price",
        "locationX",
        "locationY",
        "content",
        "productStatus",
        "exchange",
        "shippingincluded",
        "address",
      ],
      include: [
        {
          model: ProductImg,
          attributes: ["imgUrl"],
          required: true,
        },
        {
          model: Category,
          attributes: ["name"],
          required: true,
        },
        {
          model: Favorite,
          required: false,
        },
      ],
      where: { idx: id },
    });
    console.log(data);
    req.data = data;
    next();
  },
  async (req, res) => {
    const detailValue = req.data;
    const data = await Common.findAll({
      attributes: ["Column", "prod_sort"],
      where: { prod_sort: { [Op.lte]: 4 } },
      order: [["prod_sort", "ASC"]],
    });
    console.log(data);
    res.send([data, detailValue]);
  }
);

productRouter.post("/detail/postid", async (req, res) => {
  console.log(req.body.idx);
  const id = req.body.idx;
  res.send(await createOrDelete(id, 1));
});

async function createOrDelete(pid, uid) {
  const isExist = await Favorite.findOne({ where: { productId: pid } });
  if (!isExist) {
    Favorite.create({
      productId: pid,
      userId: uid,
    });
    return "danger";
  } else {
    Favorite.destroy({ where: { productId: pid } });
    return "secondary";
  }
}

/*productRouter.post("/detail/qna/id", async(req, res) => {
  const 
})*/

productRouter.get(
  "/pay/:id",
  async (req, res, next) => {
    //항목 리스트 부르기
    //회원정보 부르기
    //상품정보 부르기
    const data = await Common.findAll({
      where: {
        paysort: { [Op.lte]: 5 },
      },
      order: [["paysort", "ASC"]],
    });
    req.data = data;
    next();
  },
  async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const prodInfo = await Product.findOne({
      attributes: [
        "title",
        "price",
        "locationX",
        "locationY",
        "content",
        "productStatus",
        "exchange",
        "shippingincluded",
        "address",
      ],
      include: [
        {
          model: ProductImg,
          attributes: ["imgUrl"],
          required: true,
        },
      ],
      where: { idx: id },
    });
    console.log("+++++", prodInfo, "+++++");
    req.prodInfo = prodInfo;
    res.send([data, prodInfo]);
  }
  // async (req, res, next) => {
  //   const data = req.data;
  //   const prodInfo = req.prodInfo;
  //   const email = req.cookies;
  //   console.log(email);
  //   const member = await User.findOne({
  //     where: { email: email },
  //   });
  //   res.send([data, prodInfo, member]);
  // }
);

export default productRouter;
