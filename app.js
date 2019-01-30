const express =  require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use('/',(req,res)=>{
    res.send('we are online')
})

app.listen(port)
console.log(`app running on port ${port}`)