import { Request, Response, NextFunction } from 'express';
import pool from '../database';


class MarcasController {

// ==================================================
//        Lista las marcas por categoria
// ==================================================

    public async dame_marcas_categorias(req: Request, res: Response): Promise<void> {

        var pIdCategoria = req.params.idCategoria;

        const marcas = await pool.query('call bsp_listar_marcas_categoria(?)',pIdCategoria);

        res.json(marcas);
    }
    
}

const marcasController = new MarcasController;
export default marcasController;