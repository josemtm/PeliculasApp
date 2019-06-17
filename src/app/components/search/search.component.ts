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

  peliculas:any[] = [];

  ngOnInit() {
  }

  buscar(termino){
    
  this._ps.getSearch(termino).subscribe((resp:any)=>{
    this.peliculas = resp
  })

  }

  verPelicula(peliculaId){

    let artistaId="peliculaId"
  
    console.log(peliculaId)
    
    this.router.navigate(['/pelicula', peliculaId])
    
  
    }

}
