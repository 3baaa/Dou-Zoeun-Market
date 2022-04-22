import express from "express";
import Product from "../models/Product.js";
import ProductImg from "../models/ProductImg.js";
import Favorite from "../models/Favorite.js";
import Category from "../models/Category.js";
import Common from "../models/Common.js";
import Op from "sequelize";

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
  });
  res.json(data);
});

productRouter.get("/pay", async (req, res, next) => {
  const payData = await Common.findAll({
    attributes: ["paysort", "Column"],
    where: {
      paysort: { [Op.lte]: 5 },
    },
    order: [["paysort", "ASC"]],
  });
  res.send(payData);
});

productRouter.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Product.findOne({
    attributes: ["title", "price", "locationX", "locationY", "content"],
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
  res.send(data);
});

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
      imgId: pid,
    });
    return "danger";
  } else {
    Favorite.destroy({ where: { productId: pid } });
    return "secondary";
  }
}

export default productRouter;
