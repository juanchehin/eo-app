import { Request, Response, NextFunction } from 'express';
import pool from '../database';


class CategoriasController {

// ==================================================
//        Lista las categorias desde la BD
// ==================================================
    public async listar_categorias( res: Response): Promise<void> {
        console.log("listar_categorias en back");
        const categorias = await pool.query('call bsp_listar_categorias()');

        res.json(categorias);
    }
    
}

const categoriasController = new CategoriasController;
export default categoriasController;