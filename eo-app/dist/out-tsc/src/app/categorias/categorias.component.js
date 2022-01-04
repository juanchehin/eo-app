import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CategoriasComponent = class CategoriasComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        console.log("pasa CategoriasComponent");
    }
};
CategoriasComponent = __decorate([
    Component({
        selector: 'app-categorias',
        templateUrl: './categorias.page.html'
    })
], CategoriasComponent);
export { CategoriasComponent };
//# sourceMappingURL=categorias.component.js.map