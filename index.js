const express = require('express')
const mongoose = require('mongoose')
const { param } = require('express/lib/request');
const authMiddleware = require('./middlewares/auth')
mongoose.connect('mongodb+srv://minia:mongod@cluster0.di8jq.mongodb.net/test')
const todoRoutes = require('./routes/todo')
const userRoutes = require('./routes/user')

const app = express()
app.use(express.json())

app.use(express.json())


app.use('/users', userRoutes)
app.use('authMiddleware')
app.use('/todos', todoRoutes)





app.use('*',(req, res, next)=>{
    res.status(404).end()
})

app.use((err,req, res, next)=>{
    res.json(err)
})

app.listen(3000,()=>{
    console.log('App is running on port : 3000');
})