import { Route } from '@angular/router';
import { HomeComponent } from './home';
import { AboutMeComponent } from './about-me';
import { ProjectsComponent } from './projects';

export const appRoutes: Route[] = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutMeComponent },
	{ path: 'projects', component: ProjectsComponent },
];
