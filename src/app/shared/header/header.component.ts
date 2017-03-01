import { Component, OnInit, SimpleChanges, ElementRef, ViewChild } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  selector: 'sd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})

export class HeaderComponent implements OnInit {
  // @ViewChild('nav') nav: ElementRef;
  // private menuBackShrink = false;

  public ngOnInit() {
    // this.addEventListenerScroll();
  }
}
