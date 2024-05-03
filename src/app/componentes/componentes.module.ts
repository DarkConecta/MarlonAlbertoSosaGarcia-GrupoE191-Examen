import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { IonicModule } from '@ionic/angular';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListaPokemonComponent } from './listapokemon/lista-pokemon.component';

@NgModule({
  declarations: [
    SearchComponent,
    ListaPokemonComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    SearchComponent,
    ListaPokemonComponent,
    PokemonComponent
  ],
})
export class ComponentesModule { }