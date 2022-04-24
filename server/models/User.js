import {DataTypes} from "sequelize";
import sequelize from "./sq.js";
import Product from "./Product.js";
import Comment from "./Comment.js";
import Favorite from "./Favorite.js";
import ChatRoom from "./ChatRoom.js";
import ChatMessage from "./ChatMessage.js";
import QnA from "./QnA.js";

const User = sequelize.define(
  "User",
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nickName: {
      type: DataTypes.STRING(15),
    },
    email: {
      type: DataTypes.STRING(64),
    },
    img: {
      type: DataTypes.STRING(10000),
    },
    rate: {
      type: DataTypes.FLOAT(2, 1),
      defaultValue: 0.0,
    },
    point: {
      type: DataTypes.INTEGER,
    },
    zipCode: {
      type: DataTypes.CHAR(5),
    },
    address: {
        type : DataTypes.STRING(64),
        defaultValue: "주소를 설정해놓지 않았습니다"
    }
  },

  //Model 옵션 정의
  {
    charset: "utf8",
    collate: "utf8_general_ci",
    tableName: "User",
    timestamps: false,
    paranoid: true,
    freezeTableName: true,
  }
);

User.associate = () => {
  User.hasMany(Product, { foreignKey: "seller", sourceKey: "idx" });
  User.hasMany(Comment, { foreignKey: "receiver", sourceKey: "idx" });
  User.hasMany(Comment, { foreignKey: "writer", sourceKey: "idx" });
  User.hasMany(Favorite, { foreignKey: "userId", sourceKey: "idx" });
  User.hasMany(ChatRoom, { foreignKey: "seller", sourceKey: "idx" });
  User.hasMany(ChatRoom, { foreignKey: "buyer", sourceKey: "idx" });
  User.hasMany(ChatMessage, { foreignKey: "sender", sourceKey: "idx" });
  User.hasMany(QnA, {foreignKey:"writer", sourceKey:"idx"});
  User.hasMany(QnA, {foreignKey:"reader", sourceKey:"idx"});
};

export default User;
