import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/home/home.component'; 

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent }, // Ruta para login
  { path: 'auth/register', component: RegisterComponent }, // Ruta para registro
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
