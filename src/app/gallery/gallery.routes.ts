import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { GalleryComponent } from './gallery.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '',
        component: GalleryComponent,
        children: [

          {
            path: '',
            component: ListComponent,
            data: {
              breadcrumb: ''
            }
          },
          {
            path: ':id',
            component: DetailComponent,
            data: {
              breadcrumb: 'Фото'
            }
          }
        ]
      },
    ],
    data: {
      breadcrumb: ''
    }
  }];

export const GalleryRoutes = RouterModule.forChild(routes);
