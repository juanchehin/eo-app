"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = __importDefault(require("../controllers/productosController"));
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Listar
        this.router.get('/:idMarca/:idCategoria', productosController_1.default.dameProductosCategoriaMarca);
        this.router.get('/dame', productosController_1.default.dameProducto);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
