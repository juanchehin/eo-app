"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Listar
        // this.router.get('/productos/listar/', productosController.dameProductos);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
