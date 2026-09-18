import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Libro, OpenLibraryResponse } from '../models/libro.model';

export interface RegistroResponse {
  id: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private readonly http = inject(HttpClient);

  // GET: consulta libros reales en Open Library.
  private readonly GET_URL = 'https://openlibrary.org/search.json';

  // POST: endpoint de demostración para el reto.
  private readonly POST_URL = 'https://jsonplaceholder.typicode.com/posts';

  obtenerLibros(termino = 'don quijote'): Observable<Libro[]> {
    const params = new HttpParams()
      .set('q', termino)
      .set('limit', '18')
      .set('fields', 'key,title,author_name,first_publish_year,subject,cover_i');

    return this.http.get<OpenLibraryResponse>(this.GET_URL, { params }).pipe(
      map(response =>
        response.docs.map(libro => ({
          id: libro.key ?? crypto.randomUUID(),
          titulo: libro.title ?? 'Sin título',
          autor: libro.author_name?.[0] ?? 'Autor desconocido',
          anio: libro.first_publish_year ?? '—',
          genero: libro.subject?.[0] ?? 'Literatura',
          portada: libro.cover_i
            ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`
            : undefined
        }))
      )
    );
  }

  registrarLibro(libro: Libro): Observable<RegistroResponse> {
    return this.http.post<RegistroResponse>(this.POST_URL, {
      title: libro.titulo,
      data: libro
    });
  }
}