import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(_ps:PeliculasService) {  

    _ps.getNewReleases().subscribe(resp=>{

      console.log(resp)

    })

   }

  ngOnInit() {
  }

}
