const myConnnection = require('../databases/config')

const agregarPersona = (request,response) => {
    myConnnection.query(
        `insert into persona(nombre, apellido, direccion) 
        values(?,?,?)returning id, nombre, apellido, direccion`,
        [
            request.body.nombre,
            request.body.pellido,
            request.body. direccion
        ],
        [
            function(err, results) {
                console.log(results)
            }
        ]
    )
}

const formulario = (request,response) => {
    response.render('persona/addpersona')
}
module.exports = {
    agregarPersona,
    formulario
}