import DataTypes from 'sequelize';
import sequelize from './sq.js';
import User from './User.js';
import Product from './Product.js';
import ChatMessage from './ChatMessage.js';

const ChatRoom = sequelize.define("ChatRoom", {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    }, 
    
    //Model 옵션 정의
    {
        charset: "utf8", 
        collate: "utf8_general_ci", 
        tableName: "ChatRoom", 
        timestamps: true, 
        paranoid: true, 
    });

    ChatRoom.associate = () => {
        ChatRoom.belongsTo(User, {foreignKey: "seller", sourceKey:"idx"});
        ChatRoom.belongsTo(User, {foreignKey:"buyer", sourceKey:"idx"});
        ChatRoom.belongsTo(Product, {foreignKey:"prodcutId", sourceKey:"idx"});
        ChatRoom.hasMany(ChatMessage, {foreignKey:"roomId", sourceKey:"idx"});
    }

export default ChatRoom;