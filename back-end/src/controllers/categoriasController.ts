import { Request, Response, NextFunction } from 'express';
import pool from '../database';


class CategoriasController {

// ==================================================
//        Lista las categorias desde la BD
// ==================================================
    public async listar_categorias(req: Request, res: Response): Promise<void> {

        const categorias = await pool.query('call bsp_listar_categorias()');
        console.log("categorias es : " , categorias);

        res.json(categorias);
    }
}


const categoriasController = new CategoriasController;
export default categoriasController;