const { response, request } = require("express")
const utils = require("../resources/utils")


const test = (request,response) =>{
    response.send('testeando')
}
const postData = (request,response) =>{
    console.log(request.body)
    response.send(`Los datos enviados fueron ${request.body.email} ${request.body.password}`)
}
const index = (request,response) =>{
    response.render('index')
}
const enviarDatos = (request,response) =>{
    //const respuesta = await utils.validaOpenai(request.body.buscar)
    // respuesta = await utils.validaInput(request.body.buscar);
    // console.log(respuesta)
    // if(respuesta == "true"){
    //     response.render('recibe_datos',{locals: {busqueda : "Busqueda invalida"}})
    // }else{
    //     response.render('recibe_datos',{locals: {busqueda : request.body.buscar}})
    // }  
    response.render('recibe_datos',{locals: {busqueda : utils.validaSanitizer(request.body.buscar)}})
}
const ejercicio = (request,response) =>{
    response.render('vista_ejercicio')
}
const recibeDataEjercicio = (request,response) =>{
    response.render('recibe_ejercicio',{locals:{datos:request.body}})
}
module.exports = {
    test,
    postData,
    index,
    enviarDatos,
    ejercicio,
    recibeDataEjercicio,
}