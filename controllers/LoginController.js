const myConnnection = require('../databases/config')
const utils = require('../resources/utils')

const loginForm = (request,response) => {
    response.render('login')
}


const doLogin =  async (request,response)=>{
     const sql = `select * from users where username = "${await utils.validaOpenaiSql(request.body.username)}" and password = "${await utils.validaOpenaiSql(request.body.password)}"`  
     console.log(sql)
     const res =  myConnnection.query(sql,
        function(err, results) {
            console.log(results)
            console.log(err)
            if(results[0]){
                response.redirect('/loginSuccess')
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
