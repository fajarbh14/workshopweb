const { DataTypes } = require('sequelize');
const db = require('../database');

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama: DataTypes.STRING(80),
  password: {
    type: DataTypes.STRING(255),
  },
});

module.exports = User;
