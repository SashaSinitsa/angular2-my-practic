import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

export class PagesComponent implements OnInit, OnDestroy {
  public activeItem;
  private sub: Subscription;

  constructor(private router: Router) { }

  public ngOnInit() {
    this.sub = this.router.events
      .subscribe(
      (params) => {
        this.activeItem = params['urlAfterRedirects'].slice(-1);
        this.ngOnDestroy();
      },
      (error) => console.error(error)
      );
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

}