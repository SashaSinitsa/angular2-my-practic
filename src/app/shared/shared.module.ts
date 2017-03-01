import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { ToolbarComponent } from './toolbar/index';
// import { NameListService } from './name-list/index';

import { NavbarComponent } from './navbar/index';
import { HeaderComponent } from './header/index';
import { FooterComponent } from './footer/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FooterComponent,
    NavbarComponent,
    HeaderComponent
  ]
})

export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
