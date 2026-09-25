import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor';

interface AutoresResponse {
  users: Autor[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({ providedIn: 'root' })
export class AutorService {
  private readonly apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  listar(limit = 12): Observable<AutoresResponse> {
    return this.http.get<AutoresResponse>(`${this.apiUrl}?limit=${limit}`);
  }

  crear(autor: Partial<Autor>): Observable<Autor> {
    return this.http.post<Autor>(`${this.apiUrl}/add`, autor);
  }

  actualizar(id: number, autor: Partial<Autor>): Observable<Autor> {
    return this.http.put<Autor>(`${this.apiUrl}/${id}`, autor);
  }

  eliminar(id: number): Observable<Autor> {
    return this.http.delete<Autor>(`${this.apiUrl}/${id}`);
  }
}
