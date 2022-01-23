import { Component, OnInit, EventEmitter } from '@angular/core';
import { Personajes } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personajes: Personajes [] = [
    {
      nombre: "Gokú",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 13000
    },
    {
      nombre: "Bulma",
      poder: 6
    }
  ]

  nuevo: Personajes = {
    nombre: "",
    poder: 0
  }

  agregarNuevo(nuevo: Personajes){
    this.personajes.push(nuevo);
  }
}
