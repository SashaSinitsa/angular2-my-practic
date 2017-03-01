import {
  Component,
  Directive,
  OnInit,
  Input,
  ElementRef,
  Renderer,
  HostBinding,
  HostListener
} from '@angular/core';

/*
 * Directive
 * XLarge is a simple directive to show how one is made
 */
@Directive({
  selector: '[get-width]' // using [ ] means selecting attributes
})

export class MWidthDirective implements OnInit {
  @Input() public el: HTMLElement;

  private width: string;
  private left: string;

  public ngOnInit(): void {
    this.onResize();
  }

  @HostBinding('style.width') get getWidth() {
    return this.width;
  }

  @HostBinding('style.left') get getLeft() {
    return this.left;
  }

  @HostListener('window:resize') private onResize() {
    let rect = this.el.getBoundingClientRect();
    this.width = rect.width + 'px';
    this.left = rect.left + 'px';
  }
}
