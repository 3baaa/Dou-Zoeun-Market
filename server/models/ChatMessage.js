import DataTypes from 'sequelize';
import sequelize from './sq.js';
import ChatRoom from './ChatRoom.js';
import User from './User.js';

const ChatMessage = sequelize.define("ChatMessage", {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        message:{
            type: DataTypes.TEXT
        },
        status:{
            type: DataTypes.STRING(1),
            defaultValue: "N"
        }

    }, 
    
    //Model 옵션 정의
    {
        charset: "utf8", 
        collate: "utf8_general_ci", 
        tableName: "ChatMessage", 
        timestamps: true, 
        createdAt: true,
        updatedAt: false,
        paranoid: true, 
    });

    ChatMessage.associate = () => {
        ChatMessage.belongsTo(ChatRoom, {foreignKey: "roomId", sourceKey:"idx"});
        ChatMessage.belongsTo(User, {foreignKey:"sender", sourceKey:"idx"});
    }

export default ChatMessage;