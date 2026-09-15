# 🎬 Gestor de Películas

Proyecto Angular adaptado para practicar **Servicios en Angular**.

## Tecnologías
- Angular
- TypeScript
- HTML
- CSS
- JavaScript

## Concepto principal
`PeliculaService` funciona como **fuente única de verdad**. El servicio mantiene la lista de películas y centraliza las operaciones de obtener, agregar, editar y eliminar.

`PeliculaListaComponent` consume el servicio y se encarga de la interfaz.

## Funcionalidades
- Listar películas
- Buscar películas
- Agregar películas
- Editar películas
- Eliminar películas
- Género, año y calificación
- Animaciones
- Diseño morado responsive

## Comandos de la sesión
```bash
ng generate component componentes/pelicula-lista
ng generate service services/pelicula
```

## Ejecutar
```bash
npm install
ng serve -o
```
