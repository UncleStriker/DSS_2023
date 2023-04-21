const express = require('express')
const utils = require('../resources/utils')
const router = express.Router()

router.get('/test',(request,response)=>{
    response.send('testeando')
})

router.post('/postData',(request,response) =>{
    console.log(request.body)
    response.send(`Los datos enviados fueron ${request.body.email} ${request.body.password}`)
})

router.get('/index',(request,response) =>{
    response.render('index')
})
router.post('/enviarDatos',async (request,response) =>{
    const respuesta = await utils.validaOpenai(request.body.buscar)
    if(respuesta == "true"){
        response.render('recibe_datos',{locals: {busqueda : "Busqueda invalida"}})
    }else{
        response.render('recibe_datos',{locals: {busqueda : request.body.buscar}})
    }  
})


router.post('/ejercicio',(request,response) =>{

})
module.exports = router