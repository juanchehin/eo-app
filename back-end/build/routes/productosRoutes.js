"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var mdAutenticacion = require('../middlewares/autenticacion');
var productosController_1 = __importDefault(require("../controllers/productosController"));
var ProductosRoutes = /** @class */ (function () {
    function ProductosRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ProductosRoutes.prototype.config = function () {
        // Listar
        this.router.get('/productos/listar/', productosController_1["default"].dameProductos);
    };
    return ProductosRoutes;
}());
var productosRoutes = new ProductosRoutes();
exports["default"] = productosRoutes.router;
