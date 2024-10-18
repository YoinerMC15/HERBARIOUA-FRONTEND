import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Usuario } from '../../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, ButtonModule, InputTextModule, ReactiveFormsModule]
})
export class RegisterComponent {
  registerForm: FormGroup;
  isPasswordVisible = false;

  constructor(private fb: FormBuilder, private usuarioService: Usuario, private router: Router) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // Alternar visibilidad de la contraseña
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  // Validador personalizado para confirmar que las contraseñas coinciden
  passwordMatchValidator(form: AbstractControl): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  // Método que se ejecuta cuando se envía el formulario
  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      this.usuarioService.register(userData).subscribe({
        next: (response) => {
          console.log('Usuario registrado:', response);
          this.router.navigate(['/auth/login']); 
        },
        error: (error) => {
          console.error('Error al registrar usuario:', error);
        }
      });
    }
  }

// Método de ayuda para mostrar el error de contraseña
hasPasswordMismatchError(): boolean {
  const form = this.registerForm;
  return form.hasError('passwordMismatch') && !!form.get('confirmPassword')?.touched;
}

}