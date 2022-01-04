import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
const routes = [
    {
        path: '',
        component: HomeComponent
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            // HomePageRoutingModule,
            RouterModule.forChild(routes)
        ],
        declarations: [HomeComponent]
    })
], HomePageModule);
export { HomePageModule };
//# sourceMappingURL=home.module.js.map