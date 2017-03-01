import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home';
// import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'home', loadChildren: './home/#HomeModule' },
  { path: 'gallery', loadChildren: './gallery/#GalleryModule', data: { breadcrumb: 'Галерея' } },
  { path: '404', component: NoContentComponent },
  { path: '', loadChildren: './pages/#PagesModule' },
];

// export const ROUTES: Routes = [
//   { path: '',      component: HomeComponent },
//   { path: 'home',  component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'detail', loadChildren: './+detail#DetailModule'},
//   { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
//   { path: '**',    component: NoContentComponent },
// ];
