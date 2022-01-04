import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
const routes = [
    {
        path: 'home',
        component: HomeComponent
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], HomePageRoutingModule);
export { HomePageRoutingModule };
//# sourceMappingURL=home-routing.module.js.map