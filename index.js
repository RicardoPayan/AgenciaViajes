import express from "express";
import router from "./routes/index.js";

const app = express();

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar pug
app.set('view engine','pug');

//Agrega router
//use soporta todos los tipos de peticiones como POST, GET, DELETE, etc.
app.use('/',router);


app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})