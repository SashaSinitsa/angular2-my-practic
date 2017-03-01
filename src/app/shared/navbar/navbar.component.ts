import { Component, OnInit, SimpleChanges, ElementRef, ViewChild } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  // @ViewChild('nav') nav: ElementRef;
  public menuBackShrink = false;

  public ngOnInit() {
    // this.addEventListenerScroll();
  }

  // плавный скрол по якорям
  public goTo(anchor?: string) {

    setTimeout(() => {
      let element: Element;
      let body: HTMLElement;
      let oldScroll: number;
      let newScroll: number;
      let dif: number;

      body = <HTMLElement>document.getElementsByTagName('sd-home')[0];
      body.classList.remove('animate');
      element = document.querySelector('#' + anchor);
      oldScroll = window.pageYOffset;
      if (element) {
        element.scrollIntoView();
        scrollBy(0, -70);
      } else {
        scrollTo(0, 0);
      }
      newScroll = window.pageYOffset;
      dif = newScroll - oldScroll;
      body.style.marginTop = dif + 'px';

      setTimeout(() => {
        // element.classList.add('animate');
        body.classList.add('animate');
        body.style.marginTop = '0';
      }, 100);
    }, 0);
  }

  // при прокрутке сокращет верхнюю панель навигации
  public handler() {
    if (window.pageYOffset > 50) {
      this.menuBackShrink = true;
    } else {
      this.menuBackShrink = false;
    }
  }
}
