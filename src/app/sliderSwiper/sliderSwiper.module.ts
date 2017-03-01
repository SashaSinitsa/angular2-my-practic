import { SwiperModule } from 'angular2-useful-swiper';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderSwiperComponent } from './sliderSwiper.component';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [
    SliderSwiperComponent
  ],
  exports: [
    SliderSwiperComponent
  ]
})
export class SliderSwiperModule { }