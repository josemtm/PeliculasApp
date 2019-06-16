import { Injectable } from '@angular/core';
import { HttpClient,   } from '@angular/common/http';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "c6e231c8092b663a9734acb5118d1ab0";
  private urlMovie:string = "https://api.themoviedb.org/3"

  constructor(private http: HttpClient) {

    
  }

  

  getNewReleases(){

    let url = `${this.urlMovie}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`

    return this.http.get(url).pipe(map((resp:any)=>{

      return resp.results

    }))
    //jsonp(url, "JSONP_CALLBACK") &callback=JSONP_CALLBACK
  }

  





}

//&callback=JSONP_CALLBACK