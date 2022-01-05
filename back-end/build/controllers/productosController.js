"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductosController {
    // ==================================================
    // Lista los productos dada una marca y una categoria
    // ==================================================
    async dameProductosCategoriaMarca(req, res) {
        var idCategoria = req.params.idCategoria;
        var idMarca = req.params.idMarca;
        const productos = await database_1.default.query('call bsp_dame_productos_marca_categoria(?,?)', [idMarca, idCategoria]);
        res.json(productos);
    }
}
const productosController = new ProductosController;
exports.default = productosController;
