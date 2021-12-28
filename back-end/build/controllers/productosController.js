"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var database_1 = __importDefault(require("../database"));
var ProductosController = /** @class */ (function () {
    function ProductosController() {
    }
    // ==================================================
    //        Lista los productos desde cierto valor
    // ==================================================
    ProductosController.prototype.list = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var desde, padron;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        desde = req.params.desde || 0;
                        desde = Number(desde);
                        return [4 /*yield*/, database_1["default"].query('call bsp_listar_padron(?)', [desde])];
                    case 1:
                        padron = _a.sent();
                        res.json(padron);
                        return [2 /*return*/];
                }
            });
        });
    };
    // ==================================================
    //        Busqueda por Apellido o Nombre o DNI
    // ==================================================
    ProductosController.prototype.buscarDNI = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var busqueda, pDesde, pfiltroTucuman, personas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        busqueda = req.params.busqueda;
                        pDesde = req.params.pDesde;
                        pfiltroTucuman = req.params.filtroTucuman || 0;
                        return [4 /*yield*/, database_1["default"].query('call bsp_buscar_persona_dni(?,?,?)', [pDesde, busqueda, pfiltroTucuman])];
                    case 1:
                        personas = _a.sent();
                        res.json(personas);
                        return [2 /*return*/];
                }
            });
        });
    };
    // ==================================================
    //        Busqueda por Apellido y/o Nombre
    // ==================================================
    ProductosController.prototype.buscarApellNomb = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var Apellido, Nombre, pDesde, pfiltroTucuman, personas, personas, personas, personas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Apellido = req.params.Apellido;
                        Nombre = req.params.Nombre;
                        pDesde = req.params.pDesde;
                        pfiltroTucuman = req.params.filtroTucuman || 0;
                        if (!((Nombre === 'null') && (Apellido === 'null'))) return [3 /*break*/, 2];
                        return [4 /*yield*/, database_1["default"].query('call bsp_buscar_persona_apellNomb(?,?,?,?)', [pDesde, '', '', pfiltroTucuman])];
                    case 1:
                        personas = _a.sent();
                        res.json(personas);
                        return [2 /*return*/];
                    case 2:
                        if (!(Nombre !== 'null' && Apellido !== 'null')) return [3 /*break*/, 4];
                        return [4 /*yield*/, database_1["default"].query('call bsp_buscar_persona_apellNomb(?,?,?,?)', [pDesde, Apellido, Nombre, pfiltroTucuman])];
                    case 3:
                        personas = _a.sent();
                        res.json(personas);
                        _a.label = 4;
                    case 4:
                        if (!(Nombre === 'null' || Nombre === '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, database_1["default"].query('call bsp_buscar_persona_apellNomb(?,?,?,?)', [pDesde, Apellido, '', pfiltroTucuman])];
                    case 5:
                        personas = _a.sent();
                        res.json(personas);
                        _a.label = 6;
                    case 6:
                        if (!(Apellido === 'null' || Apellido === '')) return [3 /*break*/, 8];
                        return [4 /*yield*/, database_1["default"].query('call bsp_buscar_persona_apellNomb(?,?,?,?)', [pDesde, '', Nombre, pfiltroTucuman])];
                    case 7:
                        personas = _a.sent();
                        res.json(personas);
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    // ==================================================
    // Devuelve el SocioEconomico de una persona junto con su ap y nombre
    // ==================================================
    ProductosController.prototype.dameSocioEconomico = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pIdPersona, pIdSocioeconomico, SE;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pIdPersona = req.params.pIdPersona;
                        pIdSocioeconomico = req.params.pIdSocioeconomico;
                        return [4 /*yield*/, database_1["default"].query('call bsp_dameSocioEconomico(?,?)', [pIdPersona, pIdSocioeconomico])];
                    case 1:
                        SE = _a.sent();
                        res.json(SE);
                        return [2 /*return*/];
                }
            });
        });
    };
    // ==================================================
    // Devuelve los datos de una persona por id
    // ==================================================
    ProductosController.prototype.damePersonaPadron = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, persona;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1["default"].query('call bsp_dame_persona_padron(?)', id)];
                    case 1:
                        persona = _a.sent();
                        res.json(persona);
                        return [2 /*return*/];
                }
            });
        });
    };
    // ==================================================
    //        Inserta una nueva persona
    // ==================================================
    ProductosController.prototype.crearPersona = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var Apellidos, Nombres, DNI, Domicilio, Localidad, Departamento, pIdCalle, pIdLocalidad, pNroCalleActual, pTelefono, pEmpresaTel, pManzana, pCasa, pLote, pIdBarrio, pObservaciones, pIdGrupoFamiliar, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Apellidos = req.body.persona.Apellidos;
                        Nombres = req.body.persona.Nombres;
                        DNI = req.body.persona.DNI;
                        Domicilio = req.body.persona.Domicilio;
                        Localidad = req.body.persona.Localidad;
                        Departamento = req.body.persona.Departamento;
                        pIdCalle = req.body.persona.IdCalleActual;
                        pIdLocalidad = req.body.persona.IdLocalidad;
                        pNroCalleActual = req.body.persona.NroCalleActual;
                        pTelefono = req.body.persona.Telefono;
                        pEmpresaTel = req.body.persona.EmpresaTel;
                        pManzana = req.body.persona.Manzana;
                        pCasa = req.body.persona.Casa;
                        pLote = req.body.persona.Lote;
                        pIdBarrio = req.body.persona.IdBarrio;
                        pObservaciones = req.body.persona.Observaciones;
                        pIdGrupoFamiliar = req.body.idGrupoFamiliar;
                        return [4 /*yield*/, database_1["default"].query('CALL bsp_alta_persona(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [DNI, Apellidos, Nombres, Domicilio, Localidad, Departamento, pIdCalle, pIdLocalidad, pNroCalleActual, pTelefono, pEmpresaTel, pManzana, pCasa, pLote, pIdBarrio, pObservaciones, pIdGrupoFamiliar])];
                    case 1:
                        result = _a.sent();
                        if (result[0][0].Mensaje !== 'Ok') {
                            return [2 /*return*/, res.json({
                                    ok: false,
                                    mensaje: result[0][0].Mensaje
                                })];
                        }
                        return [2 /*return*/, res.json({ mensaje: 'Ok' })];
                }
            });
        });
    };
    // ==================================================
    //        Edita un SocioEconomico
    // ==================================================
    ProductosController.prototype.actualizaSocioEconomico = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var IdBarrio, IdCalle, NroCalle, IdLocalidad, Vinculo, FechaNac, EstudiosCursados, IdEscuela, Profesion, SituacionLaboral, ObraSocial, IdProblSocial, TipoDiscapacidad, IdVivienda, IdModulo, Habitaciones, IdTecho, IdPiso, IdBano, AguaCte, GasNatural, RedCloacal, ContratoGas, IdSituacionInmueble, IdTipoVivienda, IdLocalComercial, IdConstruccion, GasNatural, Observaciones, IdPersona, MetrosConstruccion, TipoRubro, NombreLocalComercial, NroLote, NroPadron, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        IdBarrio = req.body.IdBarrio;
                        IdCalle = req.body.IdCalle;
                        NroCalle = req.body.NroCalle;
                        IdLocalidad = req.body.IdLocalidad;
                        Vinculo = req.body.Vinculo;
                        FechaNac = req.body.FechaNac;
                        EstudiosCursados = req.body.EstudiosCursados;
                        IdEscuela = req.body.IdEscuela;
                        Profesion = req.body.Profesion;
                        SituacionLaboral = req.body.SituacionLaboral;
                        ObraSocial = req.body.ObraSocial;
                        IdProblSocial = req.body.IdProblSocial;
                        TipoDiscapacidad = req.body.TipoDiscapacidad;
                        IdVivienda = req.body.IdVivienda;
                        IdModulo = req.body.IdModulo;
                        Habitaciones = req.body.Habitaciones;
                        IdTecho = req.body.IdTecho;
                        IdPiso = req.body.IdPiso;
                        IdBano = req.body.IdBano;
                        AguaCte = req.body.AguaCte;
                        GasNatural = req.body.GasNatural;
                        RedCloacal = req.body.RedCloacal;
                        ContratoGas = req.body.ContratoGas;
                        IdSituacionInmueble = req.body.IdSituacionInmueble;
                        IdTipoVivienda = req.body.IdTipoVivienda;
                        IdLocalComercial = req.body.IdLocalComercial;
                        IdConstruccion = req.body.IdConstruccion;
                        GasNatural = req.body.GasNatural;
                        Observaciones = req.body.Observaciones;
                        IdPersona = req.body.IdPersona;
                        MetrosConstruccion = req.body.MetrosConstruccion;
                        TipoRubro = req.body.TipoRubro;
                        NombreLocalComercial = req.body.NombreLocalComercial;
                        NroLote = req.body.NroLote;
                        NroPadron = req.body.NroPadron;
                        return [4 /*yield*/, database_1["default"].query('CALL bsp_actualiza_SocioEconomico(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [IdPersona, IdBarrio, IdCalle, NroCalle, IdLocalidad, Vinculo, FechaNac, EstudiosCursados, IdEscuela, IdTipoVivienda, Profesion, SituacionLaboral, ObraSocial, IdProblSocial, TipoDiscapacidad, IdVivienda, IdModulo, Habitaciones, IdTecho, IdPiso, IdBano, AguaCte, GasNatural, RedCloacal, ContratoGas, IdSituacionInmueble, IdLocalComercial, IdConstruccion, MetrosConstruccion, TipoRubro, NombreLocalComercial, NroLote, NroPadron, Observaciones])];
                    case 1:
                        result = _a.sent();
                        if (result[0][0].Mensaje !== 'Ok') {
                            return [2 /*return*/, res.json({
                                    ok: false,
                                    mensaje: result[0][0].Mensaje
                                })];
                        }
                        res.json({ message: 'Ok' });
                        return [2 /*return*/];
                }
            });
        });
    };
    // ==================================================
    //   Lista el historial SocioEconomico de una persona
    // ==================================================
    ProductosController.prototype.dameHistorialSocioeconomico = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pDesde, pIdPersona, historial;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pDesde = req.params.pDesde || 0;
                        pDesde = Number(pDesde);
                        pIdPersona = req.params.pIdPersona || 0;
                        return [4 /*yield*/, database_1["default"].query('call bsp_listar_historialSocioEconomico(?,?)', [pDesde, pIdPersona])];
                    case 1:
                        historial = _a.sent();
                        res.json(historial);
                        return [2 /*return*/];
                }
            });
        });
    };
    // ==================================================
    // Devuelve el localidades,barrios,calles, etc de la BD
    // ==================================================
    ProductosController.prototype.dameDatosFormulario = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var datos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1["default"].query('call bsp_dame_datosFormulario()')];
                    case 1:
                        datos = _a.sent();
                        console.log("datos es : ", datos);
                        res.json(datos);
                        return [2 /*return*/];
                }
            });
        });
    };
    // ==================================================
    // Devuelve el listado de localidades
    // ==================================================
    ProductosController.prototype.dameLocalidades = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, localidades;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1["default"].query('call bsp_dame_localidades()')];
                    case 1:
                        localidades = _a.sent();
                        res.json(localidades);
                        return [2 /*return*/];
                }
            });
        });
    };
    // ==================================================
    // Devuelve el listado de las calles
    // ==================================================
    ProductosController.prototype.dameCalles = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, calles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1["default"].query('call bsp_dame_calles()')];
                    case 1:
                        calles = _a.sent();
                        res.json(calles);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProductosController;
}());
var personasController = new PersonasController;
exports["default"] = personasController;
