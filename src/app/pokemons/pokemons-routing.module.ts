import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { ListPokemonComponent }    from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent }  from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent }    from './edit-pokemon/edit-pokemon.component';
import { CreatePokemonComponent }  from './create-pokemon/create-pokemon.component';
 
// les routes du module Pokémon
const pokemonsRoutes: Routes = [
    { 
        path: 'pokemon',
        canActivate: [AuthGuard],
        children : [            
            { path: 'list', component: ListPokemonComponent },
            { path: 'create', component: CreatePokemonComponent },            
            { path: 'edit/:id', component: EditPokemonComponent },
            { path: ':id', component: DetailPokemonComponent },
        ]
    }
];
  
@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }