import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {

    nombre : string = "Luz"
    edad : number = 65; 


    obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`
    }

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    cambiarHeroe() {
        this.nombre = "Eunice";
    }
    cambiarEdad() {
        this.edad = 24;
    }
}