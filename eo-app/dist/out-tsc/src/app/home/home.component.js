import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(categoriasService) {
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
            this.categorias = resp;
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