import {DataTypes} from 'sequelize';
import sequelize from './sq.js';
import Product from './Product.js';

const Category = sequelize.define("Category", {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING(16),
            allowNull : false
        }
    }, 
    
    //Model 옵션 정의
    {
        charset: "utf8", 
        collate: "utf8_general_ci", 
        tableName: "Category", 
        timestamps: false, 
        paranoid: true, 
    }
);

    Category.associate = () => {
        Category.hasOne(Product, {foreignKey: "categoryId", sourceKey:"idx"});
    }

export default Category;