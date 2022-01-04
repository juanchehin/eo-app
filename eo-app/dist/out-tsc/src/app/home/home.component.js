import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(activatedRoute, categoriasService) {
        this.activatedRoute = activatedRoute;
        this.categoriasService = categoriasService;
    }
    ngOnInit() {
        this.dame_categorias();
    }
    // ==================================================
    // Carga de categorias del sistema
    // ==================================================
    dame_categorias() {
        this.categoriasService.dame_categorias()
            .subscribe((resp) => {
            console.log('resp en dame_categorias es : ', resp);
            this.categorias = resp[0];
        });
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.page.html'
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map