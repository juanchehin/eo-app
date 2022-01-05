import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const URL_SERVICIOS = environment.base_url;
let CategoriasService = class CategoriasService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    // ==================================================
    //   Carga todas las categorias desde la BD
    // ==================================================
    dame_categorias() {
        let url = URL_SERVICIOS + '/categorias/listar';
        return this.http.get(url);
    }
};
CategoriasService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CategoriasService);
export { CategoriasService };
//# sourceMappingURL=categorias.service.js.map