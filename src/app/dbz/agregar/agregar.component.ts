import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personajes } from '../interfaces/personajes.interface';
import { dbzService } from '../services/dbz.service';

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

  constructor(private dbzService: dbzService) { }

  ngOnInit(): void {
  }

  public agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.dbzService.agregarNuevo(this.nuevo);

    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }

}
