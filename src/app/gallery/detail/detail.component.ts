import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import 'rxjs/add/operator/switchMap';
import { GalleryService } from './../gallery.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit, OnDestroy {
  public itemObj: {};
  public id: number;
  public photos = [];
  public showedSlider = true;
  private sub: Subscription;


  constructor(
    private route: ActivatedRoute,
    public service: GalleryService
  ) { }

  public ngOnInit() {
    this.getPhotos();
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }



  private getPhotos() {
    this.sub = this.route.params
      .do((params) => this.id = params['id'])
      .flatMap(() => this.service.listSource)
      .subscribe(
      (list) => {
        if (list.length !== 0) {
          this.itemObj = list[this.id];
          this.photos = this.itemObj['photos'];
        }
      },
      (error) => console.error(error)
      );
  }

}
