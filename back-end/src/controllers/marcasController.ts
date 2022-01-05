import { Request, Response, NextFunction } from 'express';
import pool from '../database';


class MarcasController {

// ==================================================
//        Lista las marcas por categoria
// ==================================================

    public async dame_marcas_categorias(req: Request, res: Response): Promise<void> {

        console.log("req es ; ",req.params);

        var pIdCategoria:any = req.params.idCategoria;

        console.log("pIdCategoria es ; ",pIdCategoria);

        const marcas = await pool.query('call bsp_listar_marcas_categoria(?)',pIdCategoria);

        console.log("marcas es ; ",marcas);

        res.json(marcas);
    }
    
}

const marcasController = new MarcasController;
export default marcasController;