import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personajes } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  @Input() nuevo: Personajes = {
    nombre: '',
    poder: 0
  };

  @Output() onNuevo: EventEmitter<Personajes> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.onNuevo.emit( this.nuevo );
    console.log("Nuevo", this.nuevo);
    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }

}
