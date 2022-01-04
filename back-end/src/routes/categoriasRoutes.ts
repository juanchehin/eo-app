import express, { Router } from 'express';
import categoriasController from '../controllers/categoriasController';

class CategoriasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // Listar
        this.router.get('/listar', categoriasController.listar_categorias);
    }

}

const categoriasRoutes = new CategoriasRoutes();
export default categoriasRoutes.router;