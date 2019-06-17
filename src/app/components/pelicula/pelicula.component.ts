import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula:any={}
  constructor(private _ps:PeliculasService, private router:ActivatedRoute ) {

    this.router.params.subscribe(params=>{
      this.verPelicula(params.id)
    })

   }

   verPelicula(id){
    this._ps.getMovie(id).subscribe((resp:any)=>{
      console.log(resp)
      this.pelicula=resp
    })}


  
  

  ngOnInit() {
  }

}
