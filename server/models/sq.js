'use strict';


//Module 가져오기
import fs from 'fs';
import Sequelize from 'sequelize';

const data = fs.readFileSync('./config/config.json');
const data2 = JSON.parse(data);  
const config = data2['development'];


//config 파일을 이용해 Sequelize ORM 객체 생성
const sequelize = new Sequelize(`${config.dialect}://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`);


//Module 내보내기
export default sequelize;
