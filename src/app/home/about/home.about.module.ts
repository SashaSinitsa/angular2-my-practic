import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAboutComponent } from './home.about.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HomeAboutComponent],
    exports: [HomeAboutComponent]
})

export class HomeAboutModule { }
