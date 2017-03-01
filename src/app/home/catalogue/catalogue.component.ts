import { Component, OnInit, ElementRef } from '@angular/core';
// import { NameListService } from '../shared/index';
import { trigger, state, style, transition, animate } from '@angular/core';
/**
 * This class represents the lazy loaded catalogueComponent.
 */

console.log('`Catalogue` component loaded asynchronously');

@Component({
  selector: 'sd-catalogue',
  templateUrl: 'catalogue.component.html',
  styleUrls: ['catalogue.component.css'],
})

export class CatalogueComponent implements OnInit {

  public items: number[] = [];
  public heightWindow: string;
  public widthWindow: string;
  public widthWindow05: string;
  public timer: boolean;
  public newName: string = '';
  public errorMessage: string;
  public names: any[] = [];


  public ngOnInit() {
    this.resize();

    for (let i = 1; i < 100; i++) {
      this.items.push(i);
    }
  }


  public resize() {
    let el = document.documentElement;
    this.heightWindow = el.clientHeight + 'px';
    this.widthWindow = el.clientWidth + 'px';
    this.widthWindow05 = parseFloat(this.widthWindow) / 2 + 'px';
  }

  public scrolling(e: any, el: HTMLElement) {
    let rect = el.getBoundingClientRect();
    let mL = rect.left;
    let mT = rect.top;  //- 190;
    let dif: number;
    let html = document.getElementsByTagName('body')[0];
    e = e.target.parentElement;

    if (this.timer) { return; }

    html.classList.remove('animate');
    html.style.marginTop = mT + 'px';
    scrollBy(0, mT);
    el.classList.add('animate');

    setTimeout(() => {
      html.classList.add('animate');
      html.style.marginTop = '';
    }, 0);

    // отмена првторного нажатия 1500мс
    this.timer = true;
    setTimeout(() => {
      this.timer = false;
    }, 1500);

    // скрол вправо
    if (e.classList.contains('scroll-right')) {
      dif = parseInt(this.widthWindow, 10) - el.lastElementChild.getBoundingClientRect().right;
      if (e.nextElementSibling) {
        el.style.marginLeft = mL - parseFloat(this.widthWindow) + 'px';
      } else if (dif > 0) {
        el.style.marginLeft = mL + dif + 'px';
      }
    }

    // скрол влево
    if (e.classList.contains('scroll-left')) {
      if ((mL + parseFloat(this.widthWindow)) > 0) {
        el.style.marginLeft = '0px';
      } else {
        el.style.marginLeft = mL + parseFloat(this.widthWindow) + 'px';
      }
    }
  }

}
