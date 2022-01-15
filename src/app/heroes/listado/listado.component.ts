import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent  {

  heroes : string[] = ['Lux', 'Eunice', 'Rolandx', 'Isa', 'José', 'Esther', 'Imran', 'María'];
  eliminado: string = '';
  eliminados: string[] = [];

  borrarHeroe() {
    this.eliminado = this.heroes.shift() || '';
    this.eliminados.push(this.eliminado);
  }
}
