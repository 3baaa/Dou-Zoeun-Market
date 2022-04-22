import DataTypes from 'sequelize';
import sequelize from './sq.js';
import User from './User.js';
import Product from './Product.js';

const Comment = sequelize.define("Comment", {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        content:{
            type: DataTypes.STRING(255),
        }
    }, 
    
    //Model 옵션 정의
    {
        charset: "utf8", 
        collate: "utf8_general_ci", 
        tableName: "Comment", 
        timestamps: false, 
        paranoid: true, 
    });

    Comment.associate = () => {
        Comment.belongsTo(User, {foreignKey: "reciever", sourceKey:"idx"});
        Comment.belongsTo(User, {foreignKey: "writer", sourceKey:"idx"});
        Comment.belongsTo(Product, {foreignKey: "productId", sourceKey:"idx"});
    }

export default Comment;