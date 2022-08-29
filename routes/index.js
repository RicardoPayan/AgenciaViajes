import express from 'express';
import {
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje
} from '../controllers/paginasControllers.js'


const router = express.Router();

//req - lo que enviamos: res = lo que express nos responde
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);

//Creando comodin para tener que crear una ruta diferente para cada pagina de viajes
router.get('/viajes/:slug', paginaDetalleViaje );
router.get('/testimoniales', paginaTestimoniales);


export default router;