import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  title = 'Pokémons';
  pokemons: Pokemon[] = [];  

  constructor(private router: Router, private pokemonsService: PokemonsService) { }  

  ngOnInit(): void {
    //init et abonnement à l'observable
    this.pokemonsService.getPokemons()
    .subscribe(data => {
      console.log('Liste Pokemons ');
      this.pokemons = data as Array<Pokemon>;
    });
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez selectionné ' + pokemon.nom);
    let link = ['pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
