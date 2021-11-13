import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {

  // variables globales de clase
  heroes: Heroe[] = [];
  txt: string = '';

  // creamos la instancia del servicio
  constructor(
    private actRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
  ) { }

  // se usa cuando la pagina ya esta renderizada
  // primero se ejecuta el contructor y luego el init
  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.txt = params['txt'];

      if(this.txt == ''){
        this.router.navigate(['/lista']);
      } else {
        this.heroes = this._heroesService.buscarHeroes(params['txt']);
      }
    });
  }

  // navegando desde una funcion en las rutas con parametros
  verMas(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
