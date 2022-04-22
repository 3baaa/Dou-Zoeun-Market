import DataTypes from 'sequelize';
import sequelize from './sq.js';
import Product from './Product.js';
import Comment from './Comment.js';
import Favorite from './Favorite.js';
import ChatRoom from './ChatRoom.js';
import ChatMessage from './ChatMessage.js';

const User = sequelize.define("User", {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nickName: {
            type: DataTypes.STRING(15),
        },
        phoneNUm: {
            type: DataTypes.STRING(13),
        },
        img : {
            type: DataTypes.STRING(2000)
        },
        rate : {
            type: DataTypes.FLOAT(2,1),
            defaultValue: 0.0
        },
        point : {
            type: DataTypes.INTEGER
        },
        zipCode: {
            type: DataTypes.CHAR(5)
        },
        address : DataTypes.STRING(30)

    }, 
    
    //Model 옵션 정의
    {
        charset: "utf8", 
        collate: "utf8_general_ci", 
        tableName: "User", 
        timestamps: false, 
        paranoid: true, 
        freezeTableName : true
    });

    User.associate = () => {
        User.hasOne(Product, {foreignKey:"seller", sourceKey:"idx"});
        User.hasOne(Comment, {foreignKey:"reciever", sourceKey:"idx"});
        User.hasOne(Comment, {foreignKey:"writer", sourceKey:"idx"});
        User.hasOne(Favorite, {foreignKey:"userId", sourceKey:"idx"});
        User.hasOne(ChatRoom, {foreignKey:"seller", sourceKey:"idx"});
        User.hasOne(ChatRoom, {foreignKey:"buyer", sourceKey:"idx"});
        User.hasOne(ChatMessage, {foreignKey:"sender", sourceKey:"idx"});
    }

export default User;