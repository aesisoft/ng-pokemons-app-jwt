import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  public pokemon: Pokemon = null;
  
  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService) {}
  
  ngOnInit(): void {
    //recup de l'id dans l'url (la route)
    let id = +this.route.snapshot.paramMap.get('id');

    //chargement du Pokemon
    this.pokemonsService.getPokemon(id)
    .subscribe(data => {
      console.log("pokemon " + id);
      this.pokemon = data;      
    });
  }
}
