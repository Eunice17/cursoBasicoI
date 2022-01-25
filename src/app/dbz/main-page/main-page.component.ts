import { Component, OnInit, EventEmitter } from '@angular/core';
import { Personajes } from '../interfaces/personajes.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  private personajes: Personajes[] = [];

  constructor(private bdzService: dbzService) { }

  ngOnInit(): void {
  }

  nuevo: Personajes = {
    nombre: "",
    poder: 0
  }
}
