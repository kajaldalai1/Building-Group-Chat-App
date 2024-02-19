const { Sequelize } = require("sequelize");
// const dotenv=require('dotenv');
// dotenv.config();

const sequelize=new Sequelize('chatsapp','root','Littletwinkle@1',{
    dialect:'mysql',
    host: 'localhost'
});

module.exports=sequelize;