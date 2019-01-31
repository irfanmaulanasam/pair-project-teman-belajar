const express = require('express')
const routes = express()
const teacher = require('./teacher')
const student = require('./student')

routes.get('/',(req,res)=>{
    res.render('./index.ejs')
})
routes.get('/login',(req,res)=>{
    let login = {
        username:'',
        password:'',
        role:['teacher','student']
    }
    res.render('./login',{data:login})
})
routes.post('/login/:role',(req,res)=>{
    
})
routes.get('/register',(req,res)=>{
    res.render('./register')
})

routes.get('/*',(req,res)=>{
res.render('404')
})

module.exports = routes