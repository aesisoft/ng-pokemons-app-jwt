import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(value:string): string {  
    //transformer le type en badge de couleur du type
    return 'chip type' + value; 
  }

}
