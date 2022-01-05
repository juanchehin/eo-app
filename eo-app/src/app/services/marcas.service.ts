import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const URL_SERVICIOS = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

cuerpo: any;

  constructor(
    public http: HttpClient,
    public router: Router
    ) {
  }


// ==================================================
//   Carga todas las categorias desde la BD
// ==================================================
dame_marcas_categorias(IdCategoria ) {

  let url = URL_SERVICIOS + '/marcas/categoria/' + IdCategoria;

  console.log("url es : ", url);

  return this.http.get( url );

}

}
