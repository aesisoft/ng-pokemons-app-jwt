import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router, 
              private pokemonsService: PokemonsService) { }

  ngOnInit(): void {    
    //recup de l'id dans l'url (la route)
    let id = +this.route.snapshot.paramMap.get('id');

    //init et abonnement à l'observable
    this.pokemonsService.getPokemon(id)
    .subscribe(data => {
      console.log("pokemon " + id);
      this.pokemon = data;      
    });
  }

  goBack(): void {
    //pour revenir à la liste
    this.router.navigate(['/pokemon/list']);
  }

  goEdit(): void {
    this.router.navigate(['/pokemon/edit', this.pokemon.id]);
  }
}
