import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TestreactiveComponent } from './testreactive/testreactive.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module'; 
import { PokemonsModule } from './pokemons/pokemons.module'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptTokenService } from './auth/intercept-token.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TestreactiveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    PokemonsModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptTokenService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
