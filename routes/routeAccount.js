const { Router } = require('express');
const passport = require('passport');
const multer = require('multer');
const path = require('path');

/*------------------INICIO DECLARAR RUTAS------------------------*/

const loginRoute = Router();
const registerRoute = Router();


/*------------------INICIO SET MULTER------------------------*/

const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null, path.resolve('./public/uploads'))
    },
    filename:function(req,file,cb){
        cb(null,`${file.originalname}`)
    }
})
const upload = multer({storage: storage})


/*------------------ INICIO RUTAS GET - POST - PUT - DELETE ----------------------------*/

loginRoute.post('/',passport.authenticate('login',{failureRedirect: '/failLogin'}),(req, res) => {
    req.session.email = req.body.username
    res.redirect('/')
})

registerRoute.post('/', upload.single('avatar'),passport.authenticate('registro',{failureRedirect: '/failRegistro', successRedirect: '/login'}))



/*------------------ INICIO EXPORTACIONES ----------------------------*/
module.exports = {registerRoute, loginRoute} ;