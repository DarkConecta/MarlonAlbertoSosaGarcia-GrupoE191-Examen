import { Component, Input, OnInit } from '@angular/core';
import { DataPage } from 'src/app/paginas/data/data.page';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {

  @Input() pokemon!: any;
  pagePokemon = DataPage;

  constructor() { }



  capitalize(cad: string) {
    return cad.charAt(0).toUpperCase() + cad.slice(1, cad.length);
  }

  getId(cad: string) {
    const cadSliced = cad.split("/");
    return cadSliced[6];
  }

}