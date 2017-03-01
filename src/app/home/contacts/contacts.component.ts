import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sd-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']

})
export class ContactsComponent implements OnInit {
    public lat: number = 49.9805674;
    public lng: number = 36.2449371;
    public zoom: number = 14;
    public scrollwheel: boolean = false;

  constructor() { }

  ngOnInit() {

  }

}