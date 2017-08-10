const Sequelize = require('sequelize')

const Users = require('./Users');
const Threads = require('./Threads');
const Posts = require('./Posts');

Users.hasMany(Threads);
Users.hasMany(Posts);

Threads.belongsTo(Users);
Threads.hasMany(Posts);

Threads.belongsTo(Users);

module.exports = {Users, Threads, Posts}