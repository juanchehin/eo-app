"use strict";
exports.__esModule = true;
var express_1 = require("express");
var ProductosRoutes = /** @class */ (function () {
    function ProductosRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ProductosRoutes.prototype.config = function () {
        // Listar
        // this.router.get('/productos/listar/', productosController.dameProductos);
    };
    return ProductosRoutes;
}());
var productosRoutes = new ProductosRoutes();
exports["default"] = productosRoutes.router;
