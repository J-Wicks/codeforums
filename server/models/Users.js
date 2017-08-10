const db = require('../db');
const Sequelize = require('sequelize');

const Users = db.define('Users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {isEmail: true},
    unique: true
  }
})

module.exports = Users;