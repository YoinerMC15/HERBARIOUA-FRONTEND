import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../auth/login/login.component';  // Asegúrate de la ruta

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  imports: [CommonModule, LoginComponent]  // Aquí importas el LoginComponent
})
export class LandingComponent { }
