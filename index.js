import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();




//Conectar a la base de datos
db.authenticate()
  .then(() => console.log('Base de datos conectado'))
  .catch(error => console.log('error'));
  
//Definir puerto 
let port = 3000;
const portArg = process.argv[2];
 
if (portArg !== undefined && !Number.isNaN(parseInt(portArg, 10))) {
  port = parseInt(portArg, 10);
}

//Habilitar pug
app.set('view engine','pug');

//Obtener el año actual

app.use((req,res,next)=>{
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombresitio = "Agencia de Viajes";
  return next();
});

//Definir la carpeta publica
app.use(express.static('public'));

//Agrega router
//use soporta todos los tipos de peticiones como POST, GET, DELETE, etc.
app.use('/',router);


app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})