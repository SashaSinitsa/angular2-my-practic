import { HomeComponent } from './home.component';
// import { CatalogueComponent } from './catalogue/index';

export const routes = [
  { path: '', children: [
    { path: '', component: HomeComponent },
    // { path: 'catalogue', loadChildren: './catalogue#CatalogueComponent' }
  ]},
];
