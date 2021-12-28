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
    
}



const productosController = new ProductosController;
export default productosController;