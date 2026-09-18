export interface Libro {
  id?: string | number;
  titulo: string;
  autor: string;
  anio: number | string;
  genero: string;
  portada?: string;
}

export interface LibroApi {
  key?: string;
  title?: string;
  author_name?: string[];
  first_publish_year?: number;
  subject?: string[];
  cover_i?: number;
}

export interface OpenLibraryResponse {
  docs: LibroApi[];
}