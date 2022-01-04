import { Request, Response, NextFunction } from 'express';
import pool from '../database';

class CategoriasController {

// ==================================================
//        Lista las categorias desde la BD
// ==================================================
public async listar_categorias(req: Request, res: Response): Promise<void> {

    const categorias: any = await pool.query('call bsp_listar_categorias()');

    res.json(categorias[0][0]);        
}

}


const categoriasController = new CategoriasController;
export default categoriasController;