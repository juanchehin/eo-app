import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html'
})

export class ProductosComponent implements OnInit {

  productos: any;
  infoProducto;
  IdCategoria;
  IdMarca;


  constructor(
    public productosService: ProductosService,
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController
    ) { }

  ngOnInit() {
    this.dame_productos_marca_categoria();
  }

// ==================================================
// Carga de productos dado su id de marca y categoria
// ==================================================
dame_productos_marca_categoria() {

  this.IdCategoria = this.activatedRoute.snapshot.paramMap.get('idCategoria');
  this.IdMarca = this.activatedRoute.snapshot.paramMap.get('idMarca');

  this.productosService.dame_productos_marca_categoria( this.IdMarca, this.IdCategoria)
             .subscribe( (resp: any) => {


              this.productos = resp[0][0];

              console.log("productos : ",this.productos);

            });
}

// ==================================================
// Abre un modal para mostrar la informacion de un producto
// ==================================================
infoProductoModal(IdProducto) {
  console.log("infoProductoModal",IdProducto);

  this.productosService.dame_producto(IdProducto)
    .subscribe((resp: any) => {

      console.log("subscribe : ");

      this.infoProducto = resp[0][0][0];

      console.log("infoProducto es : ", this.infoProducto);

      this.modal(this.infoProducto);
    });


}

// ==================================================
// Abre un modal para mostrar la informacion de un producto
// ==================================================
async modal(infoProducto: any) {
  console.log("modal",infoProducto);

    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'Producto': infoProducto.Producto,
        'Deposito': infoProducto.Deposito,
        'Descripcion': infoProducto.Descripcion,
        'Talle': infoProducto.Talle,
        'Articulo': infoProducto.Articulo
      }
    });

    return await modal.present();
}

}
