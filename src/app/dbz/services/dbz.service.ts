import { Injectable } from "@angular/core";
import { Personajes } from "../interfaces/personajes.interface";


@Injectable()

export class dbzService {

    constructor() {
        console.log("YO NO SE MAÑANA")
    }

   private _personajes: Personajes [] = [
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

      get personajes(): Personajes[] {
        return [...this._personajes];
      }

      public agregarNuevo(nuevo : Personajes) {
        this._personajes.push(nuevo);
      }
}