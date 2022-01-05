import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarcasService } from '../services/marcas.service';


@Component({
  selector: 'app-home',
  templateUrl: './marcas.page.html'
})

export class MarcasComponent implements OnInit {

  categorias: any;
  IdCategoria;


  constructor(
    public marcasService: MarcasService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.dame_marcas_categorias();
  }

// ==================================================
// Carga de marcas dado su id de categorias
// ==================================================
dame_marcas_categorias() {

  this.IdCategoria = this.activatedRoute.snapshot.paramMap.get('idCategoria');

  this.marcasService.dame_marcas_categorias( this.IdCategoria)
             .subscribe( (resp: any) => {

              this.categorias = resp;
            });
}

}
