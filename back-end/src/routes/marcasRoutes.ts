import { Router } from 'express';
import marcasController from '../controllers/marcasController';


class MarcasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // Listar
        this.router.get('/categoria/:idCategoria', marcasController.dame_marcas_categorias);
    }

}

const marcasRoutes = new MarcasRoutes();
export default marcasRoutes.router;