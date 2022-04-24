import sequelize from "./sq.js";
import Product from "./Product.js";
import User from "./User.js";
import ProductImg from "./ProductImg.js";
import {DataTypes} from "sequelize";

const Favorite = sequelize.define(
  "Favorite",
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },

  //Model 옵션 정의
  {
    charset: "utf8",
    collate: "utf8_general_ci",
    tableName: "Favorite",
    timestamps: false,
    paranoid: true,
  }
);

Favorite.associate = () => {
  Favorite.belongsTo(Product, { foreignKey: "productId", sourceKey: "idx" });
  Favorite.hasMany(ProductImg, { foreignKey: "favoriteId", sourceKey: "idx" });
  Favorite.belongsTo(User, {foreignKey:"userId", sourceKey:"idx"});
};

export default Favorite;
