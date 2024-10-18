import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface RegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  celular: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class Usuario {
  private apiUrl = 'http://localhost:3003/api/users'; // Cambia esto a tu URL del backend

  constructor(private http: HttpClient) { }

  register(user: RegisterUser): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }
}
