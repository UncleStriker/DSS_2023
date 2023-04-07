const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/test',(request,response)=>{
    response.send('testeando')
})

app.post('/postData',(request,response) =>{
    console.log(request.body)
    response.send(`Los datos enviados fueron:  ${request.body.email} ${request.body.password}`)
})

app.listen(3000,()=>{
    console.log('Escuchando en el puerto 3000')
})
