import { Request, Response, NextFunction } from 'express';
import pool from '../database';


class ProductosController {

// ==================================================
// Lista los productos dada una marca y una categoria
// ==================================================

public async dameProductosCategoriaMarca(req: Request, res: Response): Promise<void> {

    var idCategoria = req.params.idCategoria;
    var idMarca = req.params.idMarca;

    const productos = await pool.query('call bsp_dame_productos_marca_categoria(?,?)',[idMarca,idCategoria]);

    res.json(productos);
}

// ==================================================
// Obtiene un producto de la BD
// ==================================================

public async dameProducto(req: Request, res: Response): Promise<void> {

    var idProducto = req.params.idProducto;

    const producto = await pool.query('call bsp_dame_producto(?)',idProducto);

    res.json(producto);
}
}


const productosController = new ProductosController;
export default productosController;