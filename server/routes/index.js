const router = require('express').Router();
const Threads = require('../models').Threads;
const Users = require('../models').Users;

router.get('/allthreads', (req, res, next) =>{
  // Users.create({
  //   name: 'Jim Dool',
  //   email: 'Dooley@Jim.edu'
  // })
  // .then((createdUser) =>{
    Threads.create({
    topic: 'Dumb Thread',
    content: 'This is inane',
    UserId: 1
    })
  // })

  .then((allThreads)=>{
    res.send(allThreads);
  })

})

module.exports = router