const myConnnection = require('../databases/config')

const agregarPersona = (request,response) => {
    console.log(request.body)
    myConnnection.query(
        `insert into persona(nombre, apellido, direccion) 
        values("${request.body.nombre}","${request.body.apellido}","${request.body.direccion}")`,
        function (err, result) {
            console.log(result);
            console.log(err);
        }
    )
}

const formulario = (request,response) => {
    response.render('persona/addpersona')
}
module.exports = {
    agregarPersona,
    formulario
}