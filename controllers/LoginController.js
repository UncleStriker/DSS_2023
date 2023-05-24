const myConnnection = require('../databases/config')
const pool = require('../databases/config')
const utils = require('../resources/utils')

const loginForm = (request,response) => {
    response.render('login')
}


const doLogin =  (request,response)=>{
     const sql = `select * from users where username = "${utils.validaInput(request.body.username)}" and password = "${utils.validaInput(request.body.password)}"`  
     console.log(sql)
     const res =  myConnection.query(sql,
        function(err, results) {
            console.log(results)
            console.log(err)
            if(results[0]){
                response.json({message:"Login Exitoso"})
            }else{
                response.json({message:"Usuario no conocido"})
            }
        }
      );

}

module.exports = {
    loginForm,
    doLogin
}