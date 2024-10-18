import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { Router } from '@angular/router';
import { Usuario } from '../../../services/usuario.service'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, InputTextModule, ButtonModule, ReactiveFormsModule] // Agrega ReactiveFormsModule
})
export class LoginComponent {
  loginForm: FormGroup; // Declara el FormGroup
  isPasswordVisible = false;

  constructor(private fb: FormBuilder, private router: Router, private usuarioService: Usuario) { // Inyecta FormBuilder y Usuario
    // Inicializa el formulario de inicio de sesión
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  navigateToRegister() {
    this.router.navigate(['/auth/register']);
  }

  onSubmit() {
    if (this.loginForm.valid) {
           console.log('ebntro');
      this.router.navigate(['/home']); // Redirige a Home después de iniciar sesión
            
    }
  }
}
