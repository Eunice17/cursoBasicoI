import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>La base es: <strong style="color: red;"> {{base}} </strong></h3>

    <button  (click)="more(base)">+ {{base}} </button>

    <span>{{ numero }}</span>

    <button (click)="less(base)">- {{base}} </button>
    
    `
})

export class appContador {

  title = 'Contador';
  numero: number = 0;
  base : number = 10;

  public more(num: number) {
    this.numero += num;
  }
  
  public less(num: number) {
    this.numero === 0 ? this.numero : this.numero -= num;

  }

}