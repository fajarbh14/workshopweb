const { DataTypes } = require("sequelize");
const db = require("../database");

const Contact = db.define("Contact", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: DataTypes.STRING(80),
  nohp: {
    type: DataTypes.STRING(13),
  },
});

module.exports = Contact;
