import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, createGesture } from '@ionic/angular';
import { consumirapiService } from 'src/app/services/consumirapi.service';

@Component({
  selector: 'app-listapokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss'],
})
export class ListaPokemonComponent implements OnInit {

  pokemones: any[] = [];

  constructor(public consumirapiService: consumirapiService) {
  }

  ngOnInit() {
    this.getPokemones();
  }

  getPokemones(): void {
    this.consumirapiService.getPokemons<any>().subscribe((data) => {
      this.pokemones.push(...data.results);
    });
  }
}