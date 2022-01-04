"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductosController {
    // ==================================================
    //        Lista los productos desde cierto valor
    // ==================================================
    async list(req, res) {
        var desde = req.params.desde || 0;
        desde = Number(desde);
        const padron = await database_1.default.query('call bsp_listar_padron(?)', [desde]);
        res.json(padron);
    }
}
const productosController = new ProductosController;
exports.default = productosController;
