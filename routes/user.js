const express = require('express')
const User = require('../models/user')
const {login} = require('../controllers/user')
const{route} = require('./todo')
const bcrypt = require('bcryptjs')
const {find , create , deleteone,findByIdAndUpdate,login}= require('../controllers/usersControlers')
  const router = express.Router()

    router.get('/', async (req,res,next)=>{
    const users = await Todo.find().exces()
    res.json(users)
})

    router.post('/', async (req,res,next)=>{
    const user = req.body
    const newUser = await User.create(user)
    .then(data => res.json(data))
    .catch(err => next(err))
})

router.post('/login', async (req,res,next)=>{
    const { userName ,password} = req.body
   const isValid =await login({userName,password})
   // .then(data => res.json(data))
    //.catch(err => next(err))
    res.json({ isValid })
})

router.patch('/:id', async (req,res,next)=>{
    const {id} = req.params
    const { userName ,password} = req.body
    const newUser = await User.findByIdAndUpdate(id,{userName,password}).exces()
    .then(data => res.json(data))
    .catch(err => next(err))
})

router.delete('/:id', async (req,res,next)=>{
    const {id} = req.params
    const delUser = await User.deleteOne({_id:id}).exces()
    .then(data => res.json(data))
    .catch(err => next(err))
})

module.exports = router