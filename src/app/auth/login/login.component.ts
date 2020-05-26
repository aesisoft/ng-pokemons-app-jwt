import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //formulaire et message d'infos
  loginForm: FormGroup;
  message: string = 'Vous êtes déconnecté.';

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    // Déconnecte l'utilisateur
    this.authService.logout();
  }

  // Connecte l'utilisateur auprès du Guard
  login(): void {
    this.message = 'Tentative de connexion en cours ...';
    let username = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;
    this.authService.login(username, password).subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Redirige l'utilisateur vers la liste des pokemons
        this.router.navigate(['/pokemon/list']);
      } else {
        this.message = 'Identifiant ou mot de passe incorrect.';
      }
    },
      (error) => {
        this.message = 'Identifiant ou mot de passe incorrect.';
      }
    );
  }
}
