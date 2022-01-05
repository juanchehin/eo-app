import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal-page',
  templateUrl: './modal.page.html'
})

export class ModalPage implements OnInit {

  // Data passed in by componentProps
  @Input() Producto: string;
  @Input() Deposito: string;
  @Input() Descripcion: string;
  @Input() Talle: string;
  @Input() Articulo: string;

  constructor(
    ) { }

  ngOnInit() {
    console.log("Producto : ",this.Producto);
    console.log("Deposito : ",this.Deposito);
    console.log("Descripcion : ",this.Descripcion);
  }

}
