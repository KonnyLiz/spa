import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  // no podemos igualar un heroe a la imterfaz Heroe porque 
  // todos los parametros de la interfaz son obligatorios
  
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    // estamos escuchamdo los cambios de la ruta
    // es un observador, que nos debemos de suscrbir a el para obtener los parms
    // los datos recibidos siempre son string
    this.activatedRoute.params.subscribe(params => {

      // el dato tiene el nombre del link
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);

      // para la casa
      if(this.heroe['casa'] == 'DC'){
        this.heroe['casa'] = 'assets/img/dc.png';
      } else {
        this.heroe['casa'] = 'assets/img/marvel.png';
      };
    });
  }

  // el init es las funciones que se hacen cuando se renderiza la vista
  ngOnInit(): void {
  }

}
