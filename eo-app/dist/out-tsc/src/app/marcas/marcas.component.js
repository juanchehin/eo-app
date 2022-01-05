import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MarcasComponent = class MarcasComponent {
    constructor(marcasService, activatedRoute) {
        this.marcasService = marcasService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.dame_marcas_categorias();
    }
    // ==================================================
    // Carga de marcas dado su id de categorias
    // ==================================================
    dame_marcas_categorias() {
        this.IdCategoria = this.activatedRoute.snapshot.paramMap.get('idCategoria');
        this.marcasService.dame_marcas_categorias(this.IdCategoria)
            .subscribe((resp) => {
            this.categorias = resp;
        });
    }
};
MarcasComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './marcas.page.html'
    })
], MarcasComponent);
export { MarcasComponent };
//# sourceMappingURL=marcas.component.js.map