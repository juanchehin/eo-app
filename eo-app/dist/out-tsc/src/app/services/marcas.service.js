import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const URL_SERVICIOS = environment.base_url;
let MarcasService = class MarcasService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    // ==================================================
    //   Carga todas las categorias desde la BD
    // ==================================================
    dame_marcas_categorias(IdCategoria) {
        let url = URL_SERVICIOS + '/marcas/categoria';
        return this.http.get(url, IdCategoria);
    }
};
MarcasService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MarcasService);
export { MarcasService };
//# sourceMappingURL=marcas.service.js.map