const myConnnection = require('../databases/config')
// const pool = require('../databases/configpg')

const loginForm = (request,response) => {
    response.render('login')
}


const doLogin = (request,response)=>{
    
    myConnnection.query(
        `select * from users where username = "${request.body.username}"
         and password = "${request.body.password}"`,
        function(err, results) {
            if(results){
                response.json({message:"Login successful"})

            }else{
                response.json({message:"Usuario no registrado."})

            }
        }
    );
}
module.exports = {
    loginForm,
    doLogin
}