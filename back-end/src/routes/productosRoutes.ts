import express, { Router } from 'express';

var mdAutenticacion = require('../middlewares/autenticacion');

import productosController from '../controllers/productosController';

class ProductosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // Listar
        this.router.get('/productos/listar/', productosController.dameProductos);
    }

}

const productosRoutes = new ProductosRoutes();
export default productosRoutes.router;