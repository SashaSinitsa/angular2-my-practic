import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MWidthDirective } from './m-width';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [MenuComponent, MWidthDirective],
    exports: [MenuComponent]
})

export class MenuModule { }
