import {DataTypes} from "sequelize";
import sequelize from "./sq.js";
import User from "./User.js";
import ProductImg from "./ProductImg.js";
import ChatRoom from "./ChatRoom.js";
import Category from "./Category.js";
import Favorite from "./Favorite.js";
import Comment from "./Comment.js";
import QnA from "./QnA.js";

const Product = sequelize.define(
  "Product",
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING(1),
      defaultValue: "N",
    },
    title: {
      type: DataTypes.STRING(20),
    },
    price: {
      type: DataTypes.INTEGER,
    },
    content: {
      type: DataTypes.STRING(2000),
    },
    locationX: {
      type: DataTypes.STRING,
    },
    locationY: {
      type: DataTypes.STRING,
    },
    productStatus: {
      type: DataTypes.STRING(4),
    },
    shippingIncluded: {
      type: DataTypes.STRING(4),
    },
    exchange: {
      type: DataTypes.STRING(4),
    },
    address: {
      type: DataTypes.STRING(64),
    },
  },

  //Model 옵션 정의
  {
    charset: "utf8",
    collate: "utf8_general_ci",
    tableName: "Product",
    timestamp: true,
    paranoid: true,
  }
);

Product.associate = () => {
  Product.belongsTo(User, { foreignKey: "seller", sourceKey: "idx" });
  Product.belongsTo(Category, { foreignKey: "categoryId", sourceKey: "idx" });
  Product.hasMany(ProductImg, { foreignKey: "productId", sourceKey: "idx" });
  Product.hasOne(Favorite, { foreignKey: "productId", sourceKey: "idx" });
  Product.hasOne(ChatRoom, { foreignKey: "productId", sourceKey: "idx" });
  Product.hasOne(Comment, { foreignKey: "productId", sourceKey: "idx" });
  Product.hasMany(QnA, {foreignKey:"productId", sourceKey:"idx"});
};

export default Product;
