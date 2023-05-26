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
const ejercicio2 = (request,response) =>{
    response.render('ejercicio2',{locals:{datos:request.body}})
}
const respEjerc2 = (request,response) =>{
    response.render('respEjerc2',{locals:{datos:request.body}})
}
const ejercicio3 = (request,response) =>{
    response.render('ejercicio3',{locals:{datos:request.body}})
}
const respEjerc3 = (request,response) =>{
    response.render('respEjerc3',{locals:{datos:request.body}})
}
const ejercicio4 = (request,response) =>{
    response.render('ejercicio4',{locals:{datos:request.body}})
}
const respEjerc4 = (request,response) =>{
    response.render('respEjerc4',{locals:{datos:request.body}})
}
const preguntaOpenai = async(request, response) =>{
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    pregunta = `${request.body.pregunta}`
    console.log(pregunta);
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: pregunta
      });
      response.json(completion.data.choices[0])
    }
module.exports = {
    test,
    postData,
    index,
    enviarDatos,
    ejercicio,
    recibeDataEjercicio,
    ejercicio2,
    respEjerc2,
    ejercicio3,
    respEjerc3,
    ejercicio4,
    respEjerc4,
    preguntaOpenai

}