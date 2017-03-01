import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
// google-maps
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule
    ],
    declarations: [ContactsComponent],
    exports: [ContactsComponent]
})

export class ContactsModule {
}
