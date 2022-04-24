import {DataTypes} from 'sequelize';
import sequelize from './sq.js';

const Common = sequelize.define("Common", {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Column: {
            type: DataTypes.STRING(16)
        },
        paysort: {
            type: DataTypes.INTEGER
        },
        prod_sort: {
            type: DataTypes.INTEGER,
        }
    },

    //Model 옵션 정의
    {
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "Common",
        timestamps:false
    });

export default Common;