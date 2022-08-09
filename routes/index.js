import express from 'express';


const router = express.Router();

//req - lo que enviamos: res = lo que express nos responde
router.get('/',(req,res)=>{ 

    const mensaje = 'Mensaje desde inicio';
    res.render('inicio',{
        mensaje
    });
})

router.get('/nosotros',(req,res)=>{ 
    const viajes = 'Viaje a enpalme';

    res.render('nosotros',{
        viajes
    })
})

export default router;