import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  // variables globales de clase
  heroes: Heroe[] = [];

  // creamos la instancia del servicio
  constructor(
    private _heroesService: HeroesService,
    private router: Router
  ) { }

  // se usa cuando la pagina ya esta renderizada
  // primero se ejecuta el contructor y luego el init
  ngOnInit(): void {
    // cuando ya este cargada la pagina iniciaremos el servicio para llamar a los heroes

    this.heroes = this._heroesService.getHeroes();
  }

  // navegando desde una funcion en las rutas con parametros
  verMas(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
