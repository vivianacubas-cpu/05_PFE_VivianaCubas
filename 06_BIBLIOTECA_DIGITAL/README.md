# T05 — Biblioteca Digital · Versión Vino

Reto: **Consumiendo una API REST: Biblioteca Digital**

## Funcionalidades

- GET real contra Open Library.
- Imágenes de portada obtenidas desde Open Library.
- Búsqueda por título, autor o tema.
- Botones de búsquedas rápidas.
- POST para registrar un libro.
- Formulario con Título, Autor, Año y Género.
- LibroService como punto central de las peticiones.
- HttpClient mediante `provideHttpClient()`.
- Diseño responsive en color vino.

## Flujo

**Componente → LibroService → HttpClient → REST API**

## Ejecutar

```bash
npm install
ng serve -o
```

## Importante sobre POST

El reto solicita demostrar el método POST. Para ello se usa JSONPlaceholder como endpoint de demostración. Este servicio responde al POST, pero no guarda los datos permanentemente en una base de datos real. El libro registrado sí aparece inmediatamente en la interfaz para demostrar el flujo completo.

Si el docente proporciona una API propia para registrar libros, cambia únicamente `POST_URL` en:

`src/app/services/libro.service.ts`
