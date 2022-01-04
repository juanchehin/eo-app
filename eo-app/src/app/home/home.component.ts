import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})

export class HomeComponent implements OnInit {

  categorias: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    public categoriasService: CategoriasService
    ) { }

  ngOnInit() {
    this.dame_categorias();
  }

// ==================================================
// Carga de categorias del sistema
// ==================================================
dame_categorias() {
  this.categoriasService.dame_categorias( )
             .subscribe( (resp: any) => {

              console.log('resp en dame_categorias es : ', resp);

              this.categorias = resp[0];


            });
}

}
