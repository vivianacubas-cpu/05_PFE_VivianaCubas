import { Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto.component';
import { HabilidadesComponent } from './pages/habilidades.component';
import { InicioComponent } from './pages/inicio.component';
import { ProyectosComponent } from './pages/proyectos.component';
import { SobreMiComponent } from './pages/sobre-mi.component';

export const routes: Routes = [
	{ path: '', component: InicioComponent, title: 'Viviana Cubas Rufasto | Inicio' },
	{ path: 'sobre-mi', component: SobreMiComponent, title: 'Sobre Mí | Viviana Cubas Rufasto' },
	{ path: 'habilidades', component: HabilidadesComponent, title: 'Habilidades | Viviana Cubas Rufasto' },
	{ path: 'proyectos', component: ProyectosComponent, title: 'Proyectos | Viviana Cubas Rufasto' },
	{ path: 'contacto', component: ContactoComponent, title: 'Contacto | Viviana Cubas Rufasto' },
	{ path: '**', redirectTo: '' }
];
