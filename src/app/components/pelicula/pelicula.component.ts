import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {
  
  //declara un objeto vacio para que sea usado por verPeliculas() para instancia un objeto de peliculas
  //y usarlo para mandar informacion al html
  pelicula:any={}

  constructor(private _ps:PeliculasService, private router:ActivatedRoute ) {
    //obtiene de la id de la ruta para mandarla al servicio y hacer 
    //la peticion de http con la id 
    this.router.params.subscribe(params=>{
      this.verPelicula(params.id)
    })

   }

   //instancia la respuesta http en el objeto vacio peliculas
   verPelicula(id){
    this._ps.getMovie(id).subscribe((resp:any)=>{
      console.log(resp)
      this.pelicula=resp
    })}


  
  

  ngOnInit() {
  }

}
