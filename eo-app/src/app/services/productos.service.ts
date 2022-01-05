import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const URL_SERVICIOS = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    public http: HttpClient,
    public router: Router
    ) {
  }


// ==================================================
//   Carga todas las categorias desde la BD
// ==================================================
dame_productos_marca_categoria(IdMarca,IdCategoria ) {

  let url = URL_SERVICIOS + '/productos/' + IdMarca + '/' + IdCategoria;

  console.log("url es : ", url);

  return this.http.get( url );

}

}
