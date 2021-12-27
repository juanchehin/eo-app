import { Request, Response, NextFunction } from 'express';
import pool from '../database';


class ProductosController {

// ==================================================
//        Lista los productos desde cierto valor
// ==================================================

    public async list(req: Request, res: Response): Promise<void> {

        var desde = req.params.desde || 0;
        desde  = Number(desde);

        const padron = await pool.query('call bsp_listar_padron(?)',[desde]);

        res.json(padron);
    }
    
// ==================================================
//        Busqueda por Apellido o Nombre o DNI
// ==================================================


public async buscarDNI(req: Request, res: Response): Promise<any> {
    const busqueda = req.params.busqueda;
    const pDesde = req.params.pDesde;
    var pfiltroTucuman = req.params.filtroTucuman || 0;

    const personas = await pool.query('call bsp_buscar_persona_dni(?,?,?)',[pDesde,busqueda,pfiltroTucuman]);

    res.json(personas);


}

// ==================================================
//        Busqueda por Apellido y/o Nombre
// ==================================================


public async buscarApellNomb(req: Request, res: Response): Promise<any> {
    const Apellido = req.params.Apellido;
    const Nombre = req.params.Nombre;
    const pDesde = req.params.pDesde;
    var pfiltroTucuman = req.params.filtroTucuman || 0;

    if((Nombre === 'null') && (Apellido === 'null')){
        const personas = await pool.query('call bsp_buscar_persona_apellNomb(?,?,?,?)',[pDesde,'','',pfiltroTucuman]);
        res.json(personas);
        return;
    }

    if(Nombre !== 'null' && Apellido !== 'null'){
        const personas = await pool.query('call bsp_buscar_persona_apellNomb(?,?,?,?)',[pDesde,Apellido,Nombre,pfiltroTucuman]);
        res.json(personas);
    }
    if(Nombre === 'null' || Nombre === ''){
        const personas = await pool.query('call bsp_buscar_persona_apellNomb(?,?,?,?)',[pDesde,Apellido,'',pfiltroTucuman]);
        res.json(personas);
    }if(Apellido === 'null' || Apellido === ''){
        const personas = await pool.query('call bsp_buscar_persona_apellNomb(?,?,?,?)',[pDesde,'',Nombre,pfiltroTucuman]);
        res.json(personas);
    }


}

// ==================================================
// Devuelve el SocioEconomico de una persona junto con su ap y nombre
// ==================================================

public async dameSocioEconomico(req: Request, res: Response){
    const pIdPersona = req.params.pIdPersona;
    const pIdSocioeconomico = req.params.pIdSocioeconomico;
    const SE = await pool.query('call bsp_dameSocioEconomico(?,?)',[pIdPersona,pIdSocioeconomico]);
    res.json(SE);
}

// ==================================================
// Devuelve los datos de una persona por id
// ==================================================

public async damePersonaPadron(req: Request, res: Response): Promise<any> {
    const id = req.params.id;
    const persona = await pool.query('call bsp_dame_persona_padron(?)',id);
    res.json(persona);
}
// ==================================================
//        Inserta una nueva persona
// ==================================================


public async crearPersona(req: Request, res: Response) {

    var Apellidos = req.body.persona.Apellidos;
    var Nombres = req.body.persona.Nombres;
    var DNI = req.body.persona.DNI;
    var Domicilio = req.body.persona.Domicilio;
    var Localidad = req.body.persona.Localidad;
    var Departamento = req.body.persona.Departamento;
    // Datos adicionales SIGEPE
    var pIdCalle = req.body.persona.IdCalleActual;
    var pIdLocalidad = req.body.persona.IdLocalidad;
    var pNroCalleActual = req.body.persona.NroCalleActual;
    var pTelefono = req.body.persona.Telefono;
    var pEmpresaTel = req.body.persona.EmpresaTel;
    var pManzana = req.body.persona.Manzana;
    var pCasa = req.body.persona.Casa;
    var pLote = req.body.persona.Lote;
    var pIdBarrio = req.body.persona.IdBarrio;
    var pObservaciones = req.body.persona.Observaciones;
    var pIdGrupoFamiliar = req.body.idGrupoFamiliar;
   
    const result = await pool.query('CALL bsp_alta_persona(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [DNI,Apellidos,Nombres,Domicilio,Localidad,Departamento,pIdCalle,pIdLocalidad,pNroCalleActual,pTelefono,pEmpresaTel,pManzana,pCasa,pLote,pIdBarrio,pObservaciones,pIdGrupoFamiliar]);

    if(result[0][0].Mensaje !== 'Ok'){
        return res.json({
            ok: false,
            mensaje: result[0][0].Mensaje
        });
    }

    return res.json({ mensaje: 'Ok' });

}


// ==================================================
//        Edita un SocioEconomico
// ==================================================


public async actualizaSocioEconomico(req: Request, res: Response) {

    var IdBarrio = req.body.IdBarrio;
    var IdCalle = req.body.IdCalle;
    var NroCalle = req.body.NroCalle;
    var IdLocalidad = req.body.IdLocalidad;
    var Vinculo = req.body.Vinculo;
    // var Password = bcrypt.hashSync(req.body.Password,10);         // Encriptacion de una sola via
    var FechaNac = req.body.FechaNac;
    var EstudiosCursados = req.body.EstudiosCursados;
    var IdEscuela = req.body.IdEscuela;
    var Profesion = req.body.Profesion;
    var SituacionLaboral = req.body.SituacionLaboral;
    var ObraSocial = req.body.ObraSocial;
    var IdProblSocial = req.body.IdProblSocial;
    var TipoDiscapacidad = req.body.TipoDiscapacidad;
    var IdVivienda = req.body.IdVivienda;
    var IdModulo = req.body.IdModulo;
    var Habitaciones = req.body.Habitaciones;
    var IdTecho = req.body.IdTecho;
    var IdPiso = req.body.IdPiso;
    var IdBano = req.body.IdBano;
    var AguaCte = req.body.AguaCte;
    var GasNatural = req.body.GasNatural;
    var RedCloacal = req.body.RedCloacal;
    var ContratoGas = req.body.ContratoGas;
    var IdSituacionInmueble = req.body.IdSituacionInmueble;
    var IdTipoVivienda = req.body.IdTipoVivienda;
    var IdLocalComercial = req.body.IdLocalComercial;
    var IdConstruccion = req.body.IdConstruccion;
    var GasNatural = req.body.GasNatural;
    var Observaciones = req.body.Observaciones;
    var IdPersona = req.body.IdPersona;
    var MetrosConstruccion = req.body.MetrosConstruccion;
    var TipoRubro = req.body.TipoRubro;
    var NombreLocalComercial = req.body.NombreLocalComercial;
    var NroLote = req.body.NroLote;
    var NroPadron = req.body.NroPadron;
    

    const result = await pool.query('CALL bsp_actualiza_SocioEconomico(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [IdPersona,IdBarrio,IdCalle,NroCalle,IdLocalidad,Vinculo,FechaNac,EstudiosCursados,IdEscuela,IdTipoVivienda,Profesion,SituacionLaboral,ObraSocial,IdProblSocial,TipoDiscapacidad,IdVivienda,IdModulo,Habitaciones,IdTecho,IdPiso,IdBano,AguaCte,GasNatural,RedCloacal,ContratoGas,IdSituacionInmueble,IdLocalComercial,IdConstruccion,MetrosConstruccion,TipoRubro,NombreLocalComercial,NroLote,NroPadron,Observaciones]);
    

    if(result[0][0].Mensaje !== 'Ok'){
        return res.json({
            ok: false,
            mensaje: result[0][0].Mensaje
        });
    }

    res.json({ message: 'Ok' });

}


// ==================================================
//   Lista el historial SocioEconomico de una persona
// ==================================================

public async dameHistorialSocioeconomico(req: Request, res: Response): Promise<void> {
    
     var pDesde = req.params.pDesde || 0;
     pDesde  = Number(pDesde);

     var pIdPersona = req.params.pIdPersona || 0;


     const historial = await pool.query('call bsp_listar_historialSocioEconomico(?,?)',[pDesde,pIdPersona]);
    
     res.json(historial);
 }
 

// ==================================================
// Devuelve el localidades,barrios,calles, etc de la BD
// ==================================================

public async dameDatosFormulario(req: Request, res: Response): Promise<any> {
    const datos = await pool.query('call bsp_dame_datosFormulario()');
    console.log("datos es : ",datos);

    res.json(datos);


}

// ==================================================
// Devuelve el listado de localidades
// ==================================================

public async dameLocalidades(req: Request, res: Response): Promise<any> {
    const id = req.params.id;
    const localidades = await pool.query('call bsp_dame_localidades()');
    res.json(localidades);
}

// ==================================================
// Devuelve el listado de las calles
// ==================================================

public async dameCalles(req: Request, res: Response): Promise<any> {
    const id = req.params.id;
    const calles = await pool.query('call bsp_dame_calles()');
    res.json(calles);
}

}



const personasController = new PersonasController;
export default personasController;