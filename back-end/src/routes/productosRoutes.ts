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
        this.router.get('/calles/listar/', mdAutenticacion.verificaToken , productosController.dameProductos);
    }

}

const productosRoutes = new ProductosRoutes();
export default productosRoutes.router;