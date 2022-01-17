import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personajes: Personaje[] = [
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

  nuevo: Personaje = {
    nombre: " ",
    poder: 0
  }

  public agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }
}
