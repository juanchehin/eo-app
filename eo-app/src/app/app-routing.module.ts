import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'marcas/categoria/:idCategoria',
    loadChildren: () => import('./marcas/marcas.module').then( m => m.MarcasPageModule)
  },
  {
    path: 'productos/:idCategoria/:idMarca',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
