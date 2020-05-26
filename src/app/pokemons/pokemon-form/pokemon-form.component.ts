import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnChanges {

  pokemonForm: FormGroup; //le formulaire 

  @Input() pokemon: Pokemon; // propriété d'entrée du composant obligatoire
                               // disponible dans le module Input d'Angular
  
  // types disponibles pour un pokémon 
  pokeTypes: Array<any> = [
    { value: 'Acier' },
    { value: 'Combat' },
    { value: 'Dragon' },
    { value: 'Eau' },
    { value: 'Electrik' },
    { value: 'Fée' },
    { value: 'Feu' },
    { value: 'Glace' },
    { value: 'Insecte' },
    { value: 'Normal' },
    { value: 'Obscur' },
    { value: 'Plante' },
    { value: 'Poison' },
    { value: 'Psy' },
    { value: 'Roche' },
    { value: 'Sol' },
    { value: 'Spectre' },
    { value: 'Ténèbres' },
    { value: 'Vol' }
  ];

  //injection dela dépendance du FormBuilder
  constructor(private router: Router, private fb: FormBuilder,
              private pokemonsService: PokemonsService) { }

  //création du formulaire grâce au FormBuilder
  //tous les champs de la classe sont obligatoire, avec le même nom
  //afin de pouvoir lier automatiquement l'objet !
  createFormGroup(): FormGroup {   
    return this.fb.group({      
      nom: ['', Validators.required],
      ptvie: [0, Validators.required],
      ptdegat: [0, Validators.required],
      image: ['', Validators.required],
      id: [0],
      created: [new Date()],
      types: new FormArray([])
     });
  }

  // Détermine si le type passé en paramètres appartient 
  // ou non au pokémon en cours d'édition
  hasType(type: string): boolean {
    let index = this.pokemon.types.indexOf(type);
    if (index > -1) return true;
    return false;
  }

  // pour mettre à jour la propriété types du formulaire
  // à partir de la liste pokemonTypes affichés, non liée au formulaire !
  onCheckboxChange(e) {
    const typesArray: FormArray = this.pokemonForm.get('poktypes') as FormArray;
  
    if (e.target.checked) {
      typesArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      typesArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          typesArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  

  // ATTENTION !
  // On utilise OnChanges plutot que OnInit
  // car le paramètre @Input sera récupéré en asynchrone
  // et ne sera pas défini sur onInit !!! 
  ngOnChanges(): void {
    this.pokemonForm = this.createFormGroup();
    if(this.pokemon!=null) {
      this.pokemonForm.patchValue( this.pokemon );
    }    
  }

  onSubmit(){   
    //recupère les valeurs du formulaire
    this.pokemon = this.pokemonForm.value as Pokemon;
    this.pokemonsService.savepokemon(this.pokemon)
    .subscribe(
      data => {
        console.log("Pokémon enregistré", data);
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  goBack(): void {
    //pour revenir à la liste
    this.router.navigate(['/pokemon/list']);
  }
}