import { BasePolishingComponent } from './polishing/basePolishing/basePolishing.component';
import { BasePaintingComponent } from './painting/basePainting/basePainting.component';
import { MenuModule } from './../home/menu/menu.module';
import { BaseDetailingComponent } from './detailing/baseDetailing/baseDetailing.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsModule } from './../breadcrumbs/breadcrumbs.module';
import { GoldComponent } from './detailing/gold/gold.component';
import { PagesRoutes } from './pages.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DetailingComponent } from './detailing/detailing.component';
import { PaintingComponent } from './painting/painting.component';
import { PolishingComponent } from './polishing/polishing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutes,
    BreadcrumbsModule,
    MenuModule
  ],
  declarations: [
    PagesComponent,
    DetailingComponent,
    BaseDetailingComponent,
    GoldComponent,
    PaintingComponent,
    BasePaintingComponent,
    PolishingComponent,
    BasePolishingComponent
],
// exports: [BaseDetailingComponent]
})
export class PagesModule { }