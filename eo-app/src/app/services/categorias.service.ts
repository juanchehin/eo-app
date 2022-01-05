import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const URL_SERVICIOS = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

cuerpo: any;


  constructor(
    public http: HttpClient,
    public router: Router
    ) {
  }


// ==================================================
//   Carga todas las categorias desde la BD
// ==================================================
dame_categorias( ) {

  let url = URL_SERVICIOS + '/categorias/listar';

  return this.http.get( url );

}

}
