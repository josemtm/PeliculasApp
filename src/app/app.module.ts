import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    TarjetasComponent,
    PeliculaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, HttpClientJsonpModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
