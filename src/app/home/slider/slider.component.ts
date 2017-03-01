import { Component } from '@angular/core';
/**
 * This class represents the lazy loaded AboutComponent.
 */

console.log('`Slider` component loaded asynchronously');

@Component({
  selector: 'sd-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css']
})
export class SliderComponent {
  public content: any[] = [
    {
      text: [
        {
          string: 'антигравийная пленка',
          top: '7%',
          left: '22%'
        },
        // {
        //   string: 'резина насыщенно черная',
        //   top: '81%',
        //   left: '26%'
        // },
      ],
       bg: 'url(/assets/svg/slid-bg-1.svg)'
    }
    ,
    {
      text: [
        {
          string: 'диск выглядит как новый',
          top: '81%',
          left: '53%'
        },
        {
          string: 'резина насыщенно черная',
          top: '81%',
          left: '26%'
        },
      ],
       bg: 'url(/assets/svg/slid-bg-2.svg)'
    }
    , {
      text: [
        {
          string: 'двигатель обработан',
          top: '7%',
          left: '11%'
        },
        // {
        //   string: 'резина насыщенно черная',
        //   top: '73%',
        //   left: '20%'
        // },
      ],
       bg: 'url(/assets/svg/slid-bg-3.svg)'
    }
    , {
      text: [
        {
          string: 'гидрофобный эффект',
          top: '7%',
          left: '19%'
        },
        // {
        //   string: 'комфортная езда',
        //   top: '83%',
        //   left: '20%'
        // },
      ],
      bg: 'url(/assets/svg/slid-bg-4.svg)'
    }
    , {
      text: [
        {
          string: 'чистый салон',
          top: '53%',
          left: '36%'
        },
        {
          string: 'никаких пятен',
          top: '2%',
          left: '74%'
        },
      ],
       bg: 'url(/assets/svg/slid-bg-5.svg)'
    }
    , {
      text: [
        {
          string: 'зеркальный блеск',
          top: '16%',
          left: '25%'
        },
        {
          string: 'поверхность восстановлена',
          top: '81%',
          left: '25%'
        },
      ],
       bg: 'url(/assets/svg/slid-bg-6.svg)'
    }


    // { text: 'asdfasgfdgjgh   as adfgdfgad st tryw', img: '/assets/img/eng.png' },
    // { text: 'asdfasdf asdfgas as agh  ghjghj st tryw', img: '/assets/img/rul.png' },
    // { text: 'asdfasdf asdfgas as adfgdfgad st tryw', img: '/assets/img/front.png' },
    // { text: 'asdfasg gh gas as adfgdfgad st tryw', img: '/assets/img/side.png' },
    // { text: 'asdfasg gh gas as adfgdfgad st tryw', img: '/assets/img/light.png' }
  ];
  public isActive: boolean = false;
  public isHidden: boolean = false;
  public oldSlide: HTMLElement;
  public dotActive: HTMLElement;
  public timer: boolean;

  public downDot(bool: boolean, slide?: HTMLElement, dot?: HTMLElement) {
    if (this.timer) { return; }
    if (dot) { this.dotActive = dot; }
    if (this.oldSlide === slide) { return; }

    if (slide) {
      this.timer = true;
      slide.style.zIndex = '26';
      slide.classList.add('slider-animate');
      if (this.oldSlide) {
        this.oldSlide.classList.remove('slider-animate-rev');
        setTimeout(() => {
          this.oldSlide.classList.remove('slider-animate');
          this.oldSlide.style.top = '-1000px';
        }, 700);
      }
      setTimeout(() => {
        slide.style.zIndex = '10';
        this.oldSlide = slide;
        this.timer = false;
      }, 700);
    } else {
      if (this.oldSlide) {
        this.dotActive = null;
        this.oldSlide.classList.add('slider-animate-rev');
        setTimeout(() => {
          this.oldSlide.classList.remove('slider-animate');
          this.oldSlide.classList.remove('slider-animate-rev');
          this.oldSlide = null;
        }, 500);
      }
    }

    this.isActive = bool;
  }

}
