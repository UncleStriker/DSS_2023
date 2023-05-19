const express = require('express')
const router = express.Router()
const main = require('../controllers/MainController')
const persona = require('../controllers/PersonaController')
const loginFunctions = require('../controllers/LoginController')

router.get('/test',main.test)
router.post('/postData',main.postData)

router.get('/index',main.index)
router.post('/enviarDatos',main.enviarDatos)

router.get('/ejercicio',main.ejercicio)
router.post('/recibeDataEjercicio',main.recibeDataEjercicio)

router.get('/ejercicio2',main.ejercicio2)
router.post('/respEjerc2',main.respEjerc2)
router.get('/ejercicio3',main.ejercicio3)
router.post('/respEjerc3',main.respEjerc3)
router.get('/ejercicio4',main.ejercicio4)
router.post('/respEjerc4',main.respEjerc4)

router.get('/addpersona', persona.formulario)
router.post('/agregarPersona', persona.agregarPersona)

//para login
router.get('/login',loginFunctions.loginForm)
router.post('/doLogin', loginFunctions.doLogin)

module.exports = router