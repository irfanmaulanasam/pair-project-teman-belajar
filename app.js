const express =  require('express')
const app = express()
const routes = require('./routes/index')
const port = 3000

app.set('view engine', 'ejs')
app.use('/',routes)

app.listen(port)
console.log(`app running on port ${port}`)