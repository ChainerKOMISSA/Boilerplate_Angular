// Ce fichier est généré automatiquement par Angular CLI. C'est le point d'entrée de l'application Angular.
// Il importe les modules nécessaires et définit le composant principal de l'application.
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html'
})
export class AppComponent {}
