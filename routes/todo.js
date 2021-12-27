const express = require('express')
const Todo = require('../models/todo')
const {find , create , deleteone,findByIdAndUpdate,login}= require('../controllers/user')
const router = express.Router()
   

    router.get('/', async (req,res,next)=>{
    const todos = await Todo.find().populate('user')
    res.json(todos)
})

    router.post('/',async (req,res,next)=>{
    const todo = req.body
    try{
    const doc = await Todo.create(todo)
    res.json(doc)
    }catch(err){
        next(err)
    }
})

router.patch('/:id', async (req,res,next)=>{
    const {id} = req.params
    const { title,status , tages} = req.body
    const newUser = await User.findByIdAndUpdate(id,{title,status,tages}).exces()
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