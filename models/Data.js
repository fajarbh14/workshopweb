const { DataTypes } = require('sequelize');
const db = require('../database');

const Data = db.define('Data',{
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    nim : DataTypes.STRING(80),
    nama : DataTypes.TEXT,
})

module.exports = Data;
