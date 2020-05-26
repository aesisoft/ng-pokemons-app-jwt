import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

@NgModule({
  declarations: [
    ListPokemonComponent, 
    DetailPokemonComponent, 
    EditPokemonComponent, 
    CreatePokemonComponent, 
    BorderCardDirective, PokemonTypeColorPipe, PokemonFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PokemonRoutingModule
  ]
})
export class PokemonsModule { }
