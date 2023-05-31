const express = require('express')
const router = express.Router()
const main = require('../controllers/MainController')
const persona = require('../controllers/PersonaController')
const loginFunctions = require('../controllers/LoginController')
const loginSuccessful = require('../controllers/LoginSuccessController')

router.get('/test',main.test)
router.post('/postData',main.postData)
router.get('/index',main.index)
router.post('/enviarDatos',main.enviarDatos)

router.get('/ejercicio',main.ejercicio)
router.post('/recibeDataEjercicio',main.recibeDataEjercicio)
///PARA PERSONA
router.get('/addpersona', persona.formulario)
router.post('/agregarPersona', persona.agregarPersona)

//para login
router.get('/login',loginFunctions.loginForm)
router.post('/doLogin', loginFunctions.doLogin)
router.get('/loginSuccess',loginSuccessful.loginSuccess)


module.exports = router