import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public config: {};
  public images: string[];

  constructor(public service: GalleryService) {}


  public ngOnInit() { }

}

