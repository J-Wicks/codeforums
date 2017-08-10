const db = require('../db');
const Sequelize = require('sequelize');

const Posts = db.define('Posts', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE
    // defaultValue: new Date() // This may not work
  }
})

module.exports = Posts;