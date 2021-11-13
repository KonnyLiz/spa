import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html'
})
export class HeroesCardComponent implements OnInit {

  // input permite recibir parametros desde afuera
  // si esta vacio, se ejecutara lo del constructor
  @Input() h: any = {};
  @Input() i?: number = 0;

  // output y eventemmiter van juntas
  // le dice al padre que haga una accion
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(
    private router: Router
  ) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  // navegando desde una funcion en las rutas con parametros

  // llamaremos a la funcion del padre
  ver() {
    this.heroeSeleccionado.emit(this.i);
  }

}
