import { SliderSwiperModule } from './../sliderSwiper/sliderSwiper.module';
import { BreadcrumbsModule } from './../breadcrumbs/breadcrumbs.module';
import { GalleryService } from './gallery.service';
import { MenuModule } from './../home/menu/menu.module';
import { MaterialModule } from '@angular/material';
import { GalleryRoutes } from './gallery.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  imports: [
    CommonModule,
    GalleryRoutes,
    MaterialModule,
    MenuModule,
    BreadcrumbsModule,
    SliderSwiperModule
  ],
  declarations: [
    GalleryComponent,
    ListComponent,
    DetailComponent
  ],
  providers: [
    GalleryService
  ]
})
export class GalleryModule { }
