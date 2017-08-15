const router = require('express').Router();
const Threads = require('../models').Threads;
const Users = require('../models').Users;
const Posts = require('../models').Posts;

router.get('/allthreads', (req, res, next) =>{
  Threads.findAll()
  .then((allThreads)=>{
    res.send(allThreads);
  })
})

router.get('/threads', (req, res, next) => {
  Threads.findAll({
    where: {UserId: req.query.userId},
    include:{model: Posts}
  })
  .then((foundThreads)=> {
    res.send(foundThreads)
  })
})

router.get('/thread/:threadId', (req, res, next) => {
  Threads.findOne({
    where: {id: req.params.threadId},
    include:{model: Posts}
  })
  .then((foundThread)=> {
    res.send(foundThread)
  })
})
module.exports = router