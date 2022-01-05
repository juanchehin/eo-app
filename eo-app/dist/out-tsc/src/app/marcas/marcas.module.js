import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
// import { HomePageRoutingModule } from './home-routing.module';
import { MarcasComponent } from './marcas.component';
const routes = [
    {
        path: '',
        component: MarcasComponent
    }
];
let MarcasPageModule = class MarcasPageModule {
};
MarcasPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            // HomePageRoutingModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MarcasComponent]
    })
], MarcasPageModule);
export { MarcasPageModule };
//# sourceMappingURL=marcas.module.js.map