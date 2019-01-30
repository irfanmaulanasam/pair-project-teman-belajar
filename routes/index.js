const express = require('express')
const routes = express()
const register = require('./register')
const login = require('./login')
const edit = require('./edit')

routes.use('/register',register)
routes.use('/login',login)
routes.use('/edit',edit)
routes.use('/*',(req,res)=>{
res.render('404')
})

module.exports = routes