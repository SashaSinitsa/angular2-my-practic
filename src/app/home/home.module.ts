import { ContactsModule } from './contacts/contacts.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
// import { NameListService } from '../shared/name-list/index';

import { routes } from './home.routes';
import { CatalogueModule } from './catalogue/catalogue.module';
import { HomeAboutModule } from './about/home.about.module';
import { MenuModule } from './menu/menu.module';
import { SliderModule } from './slider/slider.module';

console.log('`Home` bundle loaded asynchronously');

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CatalogueModule,
    HomeAboutModule,
    MenuModule,
    SliderModule,
    ContactsModule,
    RouterModule.forChild(routes)],

  // exports: [HomeComponent],
  // providers: [NameListService]
})
export class HomeModule {
  public static routes = routes;
}
