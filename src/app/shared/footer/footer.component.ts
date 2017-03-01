import { Component, OnInit, SimpleChanges, ElementRef, ViewChild } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  selector: 'sd-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})

export class FooterComponent implements OnInit {

  // @ViewChild('nav') nav: ElementRef;
  // private menuBackShrink = false;

  public ngOnInit() {
    // this.addEventListenerScroll();
  }

}
