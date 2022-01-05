import express, { Router } from 'express';
import productosController from '../controllers/productosController';

class ProductosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // Listar
        this.router.get('/:idMarca/:idCategoria', productosController.dameProductosCategoriaMarca);
    }

}

const productosRoutes = new ProductosRoutes();
export default productosRoutes.router;