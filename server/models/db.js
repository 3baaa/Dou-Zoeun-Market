import Category from './Category.js';
import Comment from './Comment.js';
import ChatMessage from './ChatMessage.js';
import Favorite from './Favorite.js';
import ChatRoom from './ChatRoom.js';
import Product from './Product.js';
import ProductImg from './ProductImg.js';
import Common from "./Common.js";
import sequelize from './sq.js';

const db = {};
db.Category = Category;
db.Comment = Comment;
db.Favorite = Favorite;
db.ChatMessage = ChatMessage;
db.ChatRoom = ChatRoom;
db.Product = Product;
db.ProductImg = ProductImg;
db.Common = Common;
db.sequelize = sequelize;

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });  

export default db;