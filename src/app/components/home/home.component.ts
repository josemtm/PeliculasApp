import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  //declara un arreglo vacio de peliculas para que lo use el html luego de instaciar
  //con la peticion http
  peliculas:any[]=[];

  constructor(_ps:PeliculasService) {  


    //Toma la respuesta del servicio y la instancia en el arreglo vacio de peliculas
    _ps.getNewReleases().subscribe((resp:any)=>{

       this.peliculas= resp
      console.log(this.peliculas);

    })

   }

  ngOnInit() {
  }

}
