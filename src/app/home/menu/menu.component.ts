import { Router, ActivatedRoute } from '@angular/router';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  Renderer,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  selector: 'sd-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})

export class MenuComponent implements OnInit, AfterViewInit {
  @ViewChild('menu') public menu: ElementRef;
  @ViewChild('activeMenu') public activeMenu: ElementRef;
  @Input() public isExtend: boolean;
  @Input() public showedActiveMenu: boolean;
  @Input() public iItem: number;

  public content: string;
  public link: string;
  public data: any[];
  public active: any;

  private nOverlayMenu: Element;
  private nActiveItem: Element;
  private nBackMenu: Element;
  private nMenu: Element;
  private widthMenu: number;
  private heightMenu: number;
  private leftMenu: number;
  private dataLength: number;
  private widthItem: number;

  constructor(private rd: Renderer, private router: Router, private cdRef: ChangeDetectorRef) { }

  public ngOnInit() {
    this.iItem = this.iItem ? this.iItem : 0;
    this.data = [
      {
        text: 'Описание услуги детейлинг', button: 'Подробнее о детейлинге', href: 'detailing'
        , imgAct: '/assets/svg/crown.act.svg', img: '/assets/svg/crown.svg'
        , name: 'Детейлинг'
      },

      {
        text: 'Описание услуги покраска', button: 'Подробнее о покраске', href: 'painting'
        , imgAct: '/assets/svg/pulverizator.act.svg', img: '/assets/svg/pulverizator.svg'
        , name: 'Покраска'
      },

      {
        text: 'Описание услуги полировка', button: 'Подробнее о полировке', href: 'polishing'
        , imgAct: '/assets/svg/grinder.act.svg', img: '/assets/svg/grinder.svg'
        , name: 'Полировка'
      },

      {
        text: 'Описание услуги и т.д.', button: 'Подробнее о детейлинге', href: 'detailing'
        , imgAct: '/assets/svg/crown.act.svg', img: '/assets/svg/crown.svg'
        , name: 'Защитное покрытие'
      },

      {
        text: 'Описание услуги и т.д.', button: 'Подробнее о покраске', href: 'painting'
        , imgAct: '/assets/svg/pulverizator.act.svg', img: '/assets/svg/pulverizator.svg'
        , name: 'Химчистка'
      },

      {
        text: 'Описание услуги и т.д.', button: 'Подробнее о полировке', href: 'polishing'
        , imgAct: '/assets/svg/grinder.act.svg', img: '/assets/svg/grinder.svg'
        , name: 'Защита интерьера'
      }
    ];
    this.dataLength = this.data.length;
  }

  public ngAfterViewInit() {
      this.nOverlayMenu = this.activeMenu.nativeElement;
      this.nActiveItem = this.nOverlayMenu.firstElementChild;
      this.nBackMenu = this.nActiveItem.firstElementChild;
      this.nMenu = this.nBackMenu.firstElementChild;
      this.resize();

    // after calculating the width calculates height
    // setTimeout(() => {
    //   this.resize();
    // }, 200);
  }

  public preventDefault() {
    event.preventDefault();
  }

  public changeContent(el: any, i: number) {
    this.iItem = i;
    this.active = el;
    this.doActive(i);

    if (!this.isExtend) {
      this.router.navigate([this.data[this.iItem].href, { id: i }]);
    }
  }

  public resize() {
    this.getSize();
    this.setSize();
  }

  public doActive(i) {
    let skip = (this.widthMenu * i / this.dataLength); // 15 is padding for shadow
    this.rd.setElementStyle(
      this.nOverlayMenu, 'marginLeft', skip + 'px'
    );
    this.rd.setElementStyle(
      this.nMenu, 'marginLeft', -skip + 'px'
    );
  }

  private getSize() {
    let rect = this.menu.nativeElement.getBoundingClientRect();
    this.widthMenu = rect.width;
    this.heightMenu = rect.height;
    this.leftMenu = rect.left;
    this.widthItem = this.widthMenu / this.dataLength;
    this.cdRef.detectChanges();
    this.showedActiveMenu ? this.doActive(this.iItem) : this.showedActiveMenu = true;
  }

  private setSize() {

    // this.rd.setElementStyle(
    //   this.nMenu, 'width', this.widthMenu + 'px'
    // );

    // this.rd.setElementStyle(
    //   this.nMenu, 'height', this.heightMenu + 'px'
    // );

    this.rd.setElementStyle(
      this.nOverlayMenu, 'left', this.leftMenu - (this.widthItem * 1.3 - this.widthItem) / 2 + 'px'
    );

    this.rd.setElementStyle(
      this.nOverlayMenu, 'width', this.widthItem * 1.3 + 'px'
    );

    // this.rd.setElementStyle(
    //   this.nActiveItem, 'width', this.widthItem + 'px'
    // );

    this.rd.setElementStyle(
      this.nActiveItem, 'marginLeft', ((this.widthItem * 1.3) - this.widthItem) / 2 + 'px'
    );

    this.rd.setElementStyle(
      this.nActiveItem, 'marginRight', ((this.widthItem * 1.3) - this.widthItem) / 2 + 'px'
    );
  }

}
