var sanitizer = require('sanitizer');

const validaOpenai = async (tipo,expresion) =>{
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    pregunta = `contiene lenguaje 
     ${tipo} en la siguiente expresion?
    "${expresion}". Responde true o false en minusculas`
    console.log(pregunta);
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: pregunta
      });
      respuesta = completion.data.choices[0].text.trim();
      console.log("Respuesta : "+respuesta)
      if(respuesta == "false"){
        return expresion
      }else{
        return "     "
      }
    
}
const validaOpenaiSql =  async (expresion)=>{
   return (await validaOpenai('sql',expresion))
}
const validaOpenaiJS =  async (expresion)=>{
    return (await validaOpenai('javascript',expresion))
   
}
const validaInput = (expresion) =>{
    const validadores = ["<script>","#"]
    for(var i = 0 ; i< validadores.length;++i){
       if(expresion.includes(validadores[i])){
            return "true"
        }
    }
    return expresion

}
const validaSanitizer = (expresion) => {
    expresion = sanitizer.escape(expresion); 
    // expresion = sanitizer.normalizeRCData(expresion); 
    // expresion = sanitizer.sanitize(expresion); 
    // expresion = sanitizer.unescapeEntities(expresion); //no sirve
    console.log(expresion)
    return(expresion)
}

module.exports ={
    validaOpenai,
    validaOpenaiJS,
    validaOpenaiSql,
    validaInput,
    validaSanitizer,
}
