const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/code_forums', {
  logging: false
})

module.exports = db;