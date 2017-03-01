import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';
import { CatalogueComponent } from './catalogue.component';
// import { NameListService } from '../shared/name-list/index';

@NgModule({
  imports: [CommonModule],
  declarations: [CatalogueComponent],
  exports: [CatalogueComponent]
  // providers: [NameListService]
})
export class CatalogueModule { }
