import express from 'express';


const router = express.Router();

//req - lo que enviamos: res = lo que express nos responde
router.get('/',(req,res)=>{ 
    res.send('inicio');
})

router.get('/nosotros',(req,res)=>{ 
    res.render('nosotros')
})

export default router;