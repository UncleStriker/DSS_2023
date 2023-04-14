const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
es6Renderer = require('express-es6-template-engine'),
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);


app.get('/test',(request,response)=>{
    response.send('testeando')
})

app.post('/postData',(request,response) =>{
    console.log(request.body)
    response.send(`Los datos enviados fueron ${request.body.email} ${request.body.password}`)
})

app.get('/index',(request,response) =>{
    response.render('index')
})
app.post('/enviarDatos',async (request,response) =>{
    pregunta = `existe algun lenguaje de programacion en las siguientes lineas?
    "${request.body.buscar}". Responde true o false en minusculas`
    console.log(pregunta);
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: pregunta
      });
      console.log(completion.data.choices[0].text);
    if(completion.data.choices[0].text.trim() == "true"){
        response.render('recibe_datos',{locals: {busqueda : "Busqueda invalida"}})
    }else{
        response.render('recibe_datos',{locals: {busqueda : request.body.buscar}})
    }  
})

app.listen(3000,()=>{
    console.log('Escuchando en el puerto 3000')
})