import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor() { 
    this.pokemon = new Pokemon();
  }

  ngOnInit(): void {
  }
}
