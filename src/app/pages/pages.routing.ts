import { BasePolishingComponent } from './polishing/basePolishing/basePolishing.component';
import { BasePaintingComponent } from './painting/basePainting/basePainting.component';
import { PaintingComponent } from './painting/painting.component';
import { PolishingComponent } from './polishing/polishing.component';
import { BaseDetailingComponent } from './detailing/baseDetailing/baseDetailing.component';
import { GoldComponent } from './detailing/gold/gold.component';
import { DetailingComponent } from './detailing/detailing.component';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'detailing',
        component: DetailingComponent,
        data: { breadcrumb: 'детейлинг' },
        children: [
          // here will be children
          // {
          //   path: 'example',
          //   component: ExampleComponent,
          //   data: { breadcrumb: 'example' }
          // },
          {
            path: 'gold',
            component: GoldComponent,
            data: { breadcrumb: 'gold' }
          },
          {
            path: '',
            component: BaseDetailingComponent,
            data: { breadcrumb: '' }
          },
          {
            path: '**',
            redirectTo: '/404'
          }
        ],
      },
      {
        path: 'painting',
        component: PaintingComponent,
        data: { breadcrumb: 'покраска' },
        children: [
          // here will be children
          // {
          //   path: 'example',
          //   component: ExampleComponent,
          //   data: { breadcrumb: 'example' }
          // },
          {
            path: 'gold',
            component: GoldComponent,
            data: { breadcrumb: 'gold' }
          },
          {
            path: '',
            component: BasePaintingComponent,
            data: { breadcrumb: '' }
          },
          {
            path: '**',
            redirectTo: '/404'
          }
        ],
      },
      {
        path: 'polishing',
        component: PolishingComponent,
        data: { breadcrumb: 'полировка' },
        children: [
          // here will be children
          // {
          //   path: 'example',
          //   component: ExampleComponent,
          //   data: { breadcrumb: 'example' }
          // },
          {
            path: 'gold',
            component: GoldComponent,
            data: { breadcrumb: 'gold' }
          },
          {
            path: '',
            component: BasePolishingComponent,
            data: { breadcrumb: '' }
          },
          {
            path: '**',
            redirectTo: '/404'
          }
        ],
      },
      // here will be parents
      // {
      //   path: 'example',
      //   component: ExampleComponent,
      //   data: { breadcrumb: 'example' }
      // },
      {
        path: '**',
        redirectTo: '/404'
      }
    ]
  },
];

export const PagesRoutes = RouterModule.forChild(routes);
