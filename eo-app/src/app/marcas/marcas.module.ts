import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

// import { HomePageRoutingModule } from './home-routing.module';

import { MarcasComponent } from './marcas.component';

const routes: Routes = [
  {
    path: '',
    component: MarcasComponent
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
  declarations: [MarcasComponent]
})
export class MarcasPageModule {}
