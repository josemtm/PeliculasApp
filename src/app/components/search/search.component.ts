import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private _ps:PeliculasService, private router: Router) { }

  //declara un arreglo vacio de peliculas para pasar informacion al html
  //luego de hacer la peticion http
  peliculas:any[] = [];

  ngOnInit() {
  }

  //obtiene informacion del termino tecleado en el html y hacer una peticion
  //http con el termino tecleado y luego lo instancia en el arreglo vacio
  buscar(termino){
    
  this._ps.getSearch(termino).subscribe((resp:any)=>{
    this.peliculas = resp
  })

  }
  
  //pasa la id de la pelicula para ver una pelicula individual de la busqueda
  verPelicula(peliculaId){

    let artistaId="peliculaId";    
    this.router.navigate(['/pelicula', peliculaId]);
    
  
    }

}
