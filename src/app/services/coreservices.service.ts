import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from './app-setting';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import { menu } from '../routes/menu';

@Injectable({
  providedIn: 'root'
})
export class CoreservicesService {

  constructor(private http: HttpClient) { }


  getSidebarJson() {
      return Observable.create(observer => {
          this.http.get('../assets/server/sidebar-menu.json')
              .subscribe(data => {
                    console.log(data, 'run.,..');
                      observer.next(data);
                      observer.complete();
                  },
                  error => {
                      observer.next(error);
                      observer.complete();
                  });
      });
  }


}
