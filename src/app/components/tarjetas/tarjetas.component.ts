import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input() items:any = [];

  

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verPelicula(peliculaId){

  let artistaId="peliculaId"

  console.log(peliculaId)
  
  this.router.navigate(['/pelicula', peliculaId])
  

  }

}
