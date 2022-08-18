import express from 'express';


const router = express.Router();

//req - lo que enviamos: res = lo que express nos responde
router.get('/',(req,res)=>{ 
<<<<<<< HEAD
    res.render('inicio',{
        pagina: 'Inicio'    
=======
    const mensaje = 'Mensaje desde inicio';
    res.render('inicio',{
        pagina: 'Inicio'
>>>>>>> temp-branch
    });
});

router.get('/nosotros',(req,res)=>{ 
    res.render('nosotros',{
        pagina: 'Nosotros'
<<<<<<< HEAD
    });
});
=======
    })
})
>>>>>>> temp-branch

router.get('/viajes',(req,res)=>{ 
    res.render('viajes',{
        pagina: 'Viajes'
<<<<<<< HEAD
    });
});

router.get('/testimoniales',(req,res)=>{ 
    res.render('testimoniales',{
        pagina: 'Testimoniales'
    });
});
=======
    })
})

router.get('/testimoniales',(req,res)=>{ 
    res.render('testimoniales',{
        pagina:'Testimoniales'
    })
})
>>>>>>> temp-branch

export default router;