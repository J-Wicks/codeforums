const db = require('../db');
const Sequelize = require('sequelize');

const Threads = db.define('Threads', {
  topic: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Threads;