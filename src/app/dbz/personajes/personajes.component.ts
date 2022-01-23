import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  @Input('sendPersonajes')personajes: Personajes[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
