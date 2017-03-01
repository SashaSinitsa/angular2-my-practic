import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class GalleryService {
    public header;
    public sharedList: any;
    public listSource: BehaviorSubject<any> = new BehaviorSubject([]);

    private url = 'assets/gallery.json';

    constructor(private http: Http) {
        this.getList();
    }

    public getList() {
        return this.http
            .get(this.url)
            // .toPromise()
            .map((res) => res.json())
            .subscribe(
            (data) => this.listSource.next(data),
            (error) => console.error(error)
            );
    }

}

