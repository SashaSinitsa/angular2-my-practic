import { Subscription } from 'rxjs/Subscription';
import { GalleryService } from './../gallery.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, OnDestroy {
  public list: any;

  private sub: Subscription;

  constructor(public service: GalleryService) { }

  public ngOnInit() {
    this.sub = this.service.listSource
      .subscribe(
      (list) => this.list = list,
      (error) => console.error(error)
      );
  };

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

}