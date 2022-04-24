import {DataTypes} from "sequelize";
import sequelize from "./sq.js";
import User from "./User.js";
import Product from "./Product.js";

const QnA = sequelize.define(
    "QnA",
    {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        content: {
            type: DataTypes.STRING(300),
        },
    },

    //Model 옵션 정의
    {
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "QnA",
        timestamps: false,
        paranoid: true,
    }
);

QnA.associate = () => {
    QnA.belongsTo(User, { foreignKey: "writer", sourceKey: "idx" });
    QnA.belongsTo(User, { foreignKey: "reader", sourceKey: "idx" });
    QnA.belongsTo(Product, { foreignKey: "productId", sourceKey: "idx" });
};


export default QnA;
