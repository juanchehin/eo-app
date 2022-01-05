import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

// import { HomePageRoutingModule } from './home-routing.module';

import { ProductosComponent } from './productos.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // HomePageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductosComponent]
})
export class ProductosPageModule {}
