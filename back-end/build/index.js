"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
const categoriasRoutes_1 = __importDefault(require("./routes/categoriasRoutes"));
const marcasRoutes_1 = __importDefault(require("./routes/marcasRoutes"));
const app = express_1.default();
app.use(express_1.default.json());
// CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// Rutas
app.use('/', indexRoutes_1.default);
app.use('/api/productos', productosRoutes_1.default);
app.use('/api/categorias', categoriasRoutes_1.default);
app.use('/api/marcas', marcasRoutes_1.default);
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Corriendo en puerto', app.get('port'));
});
