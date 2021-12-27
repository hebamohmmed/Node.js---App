const jwt = require('jsonwebtoken')
const User = require('../models/user')
//const bcrypt = require('bcryptjs')
const create=(user)=>User.create(user);
const login = async({userName,password}) =>{
const user = await User.findOne({userName}).exec()
 const isValid = await user.comparePassword(password)
 if(!isValid){
   throw new Error('UN_AUTH')
 }
 //const {SECRET} = process.env
 const token = jwt.sign({
     userName,_id: user._id,
     maxAge: 'id'
},'erertytyuiuiioioi3445565767878789899899fgghhjjjjnnvv')
return token 
}
module.exports = {
    login
}
