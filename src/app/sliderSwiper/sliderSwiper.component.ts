import { Component, OnInit, ViewChild, ElementRef, Renderer, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'sliderSwiper',
  templateUrl: './sliderSwiper.component.html',
  styleUrls: ['./sliderSwiper.component.css']
})

export class SliderSwiperComponent implements OnInit, AfterViewChecked, AfterViewInit {
  @ViewChild('swiper') public swiper: ElementRef;

  public config: {};
  public images: string[];

  private rect: any;
  private bottom: number;

  constructor(private rd: Renderer) { }

  public ngOnInit() {
    this.initSwiper();
  }

  public ngAfterViewChecked() {
    this.resize();
    // this.setSize();
  }

  public ngAfterViewInit() {
    //  this.setSize();
  }

  public resize() {
    this.getSize();
    this.setSize();
  }

  private getSize() {
    let screenHeight = document.documentElement.clientHeight;
    this.rect = this.swiper.nativeElement.getBoundingClientRect();
    // the distance to the bottom of the screen plus padding
    this.bottom = screenHeight - this.rect.bottom - screenHeight * 0.05;
  }

  private setSize() {
    let relation = this.rect.width / this.rect.height;
    let newWidth = this.rect.width + this.bottom * relation;


    this.rd.setElementStyle(
      this.swiper.nativeElement, 'width', newWidth + 'px'
    );

  }

  private initSwiper() {
    this.config = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30
    };
    this.images = [
      '/assets/img/1.jpg',
      '/assets/img/2.jpg',
      '/assets/img/3.jpg',
      '/assets/img/4.jpg',
    ];
  }

}