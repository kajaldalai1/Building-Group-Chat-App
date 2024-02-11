const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize("groupchat","root","Littletwinkle@1",{
    dialect: 'mysql',
    host: "localhost"
});

module.exports= sequelize;
