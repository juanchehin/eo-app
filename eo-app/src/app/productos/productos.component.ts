import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html'
})

export class ProductosComponent implements OnInit {

  productos: any;
  IdCategoria;
  IdMarca;


  constructor(
    public productosService: ProductosService,
    private activatedRoute: ActivatedRoute
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

              console.log("resp es : ",resp);

              this.productos = resp[0][0];
            });
}

}
