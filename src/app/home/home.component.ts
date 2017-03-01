import { Component, OnInit } from '@angular/core';

console.log('`Home` component loaded asynchronously');

@Component({
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  public ngOnInit() {}

}
