var jwt = require('jsonwebtoken');
var SEED = require('../config/config').SEED;

import { Request, Response, NextFunction } from 'express';

// ==================================================
//        TOKEN - importa el orden
// ==================================================

exports.verificaToken = function(req: Request,res:Response,next: NextFunction){

var token = req.query.token;

// Verifica el TOKEN que envio el FRONT
jwt.verify(token , SEED, (err: any,decoded: any) =>{

    if(err){
        return res.status(401).json({
            ok:false,
            mensaje: 'false',
            errors: err
        });
    }
    next();
});

}

// ==================================================
//        Verifica si es ADMIN
// ==================================================
exports.verificaAdmin = function(req: Request,res:Response,next: NextFunction){

    var IdRol = req.query.IdRol;
    if(IdRol === '2'){
        next();
        // return;
    } else {
        // No es un ADMIN
        // Manejar errores aqui, por que en el navegador se ese error en rojo
        return res.status(401).json({
                ok:false,
                mensaje: 'false',
                errors: { messaje : 'false'}
        });
    }
}


// ==================================================
//        Verifica si es ADMIN o Mismo usuario
// ==================================================

// Usado para  cuando una persona quiere actualizar su perfil , creo que para nuestra app no sera necesario

exports.verificaAdmin_o_MismoUsuario = function(req: Request,res:Response,next: NextFunction){

    var persona = req.body.persona;
    var id = req.params.IdPersona;

    if(persona.Rol === 'Profesional' || persona.IdPersona === id){
        // Es un ADMIN y todo esta bien
        next();
    } else {
        return res.status(401).json({
                ok:false,
                mensaje: 'false',
                errors: { messaje : 'false'}
            });
    }

}