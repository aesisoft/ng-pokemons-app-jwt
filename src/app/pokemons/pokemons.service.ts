import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  // API pokemon : 
  private urlApi: string = 'http://localhost:8080/cours/pokemons/public/api/pokemon';

  //déclaration de HttpClient par injection de dépendance
  constructor(private http: HttpClient) { }

  // Retourne tous les pokémons
  // le .json est nécessaire avec ApiPlatform qui a servit à l'API Web
  getPokemons() {
    return this.http.get(this.urlApi + '.json');    
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number) {
    return this.http.get<Pokemon>(this.urlApi + '/' + id + '.json');
  }

  //Pour modifier le pokémon
  putPokemon(pokemon: Pokemon) {
    return this.http.put(this.urlApi + '/' + pokemon.id, pokemon);
  }

  //Pour créer le pokémon
  postPokemon(pokemon: Pokemon) {
    return this.http.post(this.urlApi + '/' + pokemon.id, pokemon);
  }

  //créer ou modifier le pokemon
  savepokemon(pokemon: Pokemon) {
    if(pokemon.id==0) {
      return this.postPokemon(pokemon);
    }
    else {
      return this.putPokemon(pokemon);
    }  
  }

   //Pour supprimer le pokémon
   deletePokemon(pokemon: Pokemon) {
    this.http.delete(this.urlApi + '/' + pokemon.id)
      .subscribe(
        data => {
          console.log("DELETE Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );
  }

}